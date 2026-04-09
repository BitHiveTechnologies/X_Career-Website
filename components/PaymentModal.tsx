'use client';

import { paymentService } from '@/lib/api/payment';
import { useAuth } from '@/lib/auth/AuthContext';
import { AlertCircle, CheckCircle2, Clock, CreditCard, Loader2, Shield, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    id: string;
    name: string;
    price: number;
    features: string[];
  };
  onSuccess: (subscription: any) => void;
  onError: (error: string) => void;
}

declare global {
  interface Window {
    Cashfree?: (options: { mode: 'sandbox' | 'production' }) => {
      checkout: (options: {
        paymentSessionId: string;
        redirectTarget?: '_modal' | '_blank' | '_self';
      }) => Promise<any>;
    };
  }
}

const loadCashfreeScript = async () => {
  if (typeof window === 'undefined') return false;
  if (window.Cashfree) return true;

  return new Promise<boolean>((resolve) => {
    const existing = document.querySelector('script[data-cashfree-sdk="true"]');
    if (existing) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
    script.async = true;
    script.dataset.cashfreeSdk = 'true';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function PaymentModal({ isOpen, onClose, plan, onSuccess, onError }: PaymentModalProps) {
  const { refreshUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'order' | 'payment' | 'verification'>('order');
  const [orderId, setOrderId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState('Preparing your subscription');

  useEffect(() => {
    if (isOpen === false) return;
    void loadCashfreeScript();
  }, [isOpen]);

  const pollForFinalStatus = async (referenceOrderId: string) => {
    for (let attempt = 0; attempt < 5; attempt += 1) {
      const response = await paymentService.getPaymentStatus(referenceOrderId);
      if (response.success && response.data?.subscription) {
        const subscription = response.data.subscription;
        if (subscription.status === 'completed' || subscription.isActive === true) {
          return { done: true, response };
        }
        if (subscription.status === 'failed' || subscription.status === 'cancelled' || subscription.status === 'refunded') {
          return { done: true, response };
        }
      }

      await sleep(2000);
    }

    return { done: false, response: null as any };
  };

  const finalizePayment = async (referenceOrderId: string) => {
    setStep('verification');
    setStatusMessage('Verifying payment status');

    const verifyResponse = await paymentService.verifyPayment({
      orderId: referenceOrderId
    });

    if (verifyResponse.success && verifyResponse.data?.subscription) {
      const subscription = verifyResponse.data.subscription;
      if (subscription.status === 'completed' || subscription.isActive === true) {
        onSuccess(subscription);
        await refreshUser();
        onClose();
        return;
      }
    }

    const pollResult = await pollForFinalStatus(referenceOrderId);
    if (pollResult.done && pollResult.response?.success && pollResult.response.data?.subscription) {
      const subscription = pollResult.response.data.subscription;
      if (subscription.status === 'completed' || subscription.isActive === true) {
        onSuccess(subscription);
        await refreshUser();
        onClose();
        return;
      }
      throw new Error(subscription.status === 'failed' ? 'Payment failed' : 'Payment could not be confirmed yet');
    }

    const fallbackSubscription = verifyResponse.data?.subscription;
    if (fallbackSubscription) {
      onSuccess(fallbackSubscription);
      await refreshUser();
      onClose();
      return;
    }

    throw new Error('Payment confirmation timed out. Please refresh your profile in a moment.');
  };

  const handlePayment = async () => {
    if (plan == null) return;

    const token = typeof window !== 'undefined' ? localStorage.getItem('careerx_token') : null;
    if (token == null) {
      onError('Please login first to make a payment');
      return;
    }

    setIsLoading(true);
    setStep('order');
    setStatusMessage('Creating payment order');

    try {
      const scriptLoaded = await loadCashfreeScript();
      if (scriptLoaded === false || window.Cashfree == null) {
        throw new Error('Unable to load Cashfree checkout');
      }

      const orderResponse = await paymentService.createOrder({
        plan: plan.id,
        amount: plan.price,
        currency: 'INR'
      });

      if (orderResponse.success === false || orderResponse.data?.order == null) {
        throw new Error(orderResponse.error?.message || 'Failed to create order');
      }

      const { order, cashfree } = orderResponse.data;
      setOrderId(order.id);
      setStep('payment');
      setStatusMessage('Opening secure Cashfree checkout');

      const cashfreeCheckout = window.Cashfree({
        mode: cashfree?.mode || paymentService.getCashfreeMode()
      });

      const result = await cashfreeCheckout.checkout({
        paymentSessionId: order.paymentSessionId,
        redirectTarget: '_modal'
      });

      if (result && result.error) {
        throw new Error(result.error.message || 'Checkout was closed');
      }

      await finalizePayment(order.id);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Payment failed';
      onError(message);
      setStatusMessage(message);
      setIsLoading(false);
      setStep('order');
    }
  };

  const handleClose = () => {
    if (isLoading) return;
    onClose();
  };

  if (isOpen === false) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900">Complete Payment</h2>
          <button
            onClick={handleClose}
            className="rounded-full p-2 transition-colors hover:bg-gray-100"
            disabled={isLoading}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 p-4">
            <h3 className="mb-2 font-semibold text-gray-900">{plan.name}</h3>
            <div className="mb-2 text-2xl font-bold text-yellow-600">₹{plan.price}/month</div>
            <ul className="space-y-1 text-sm text-gray-600">
              {plan.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-yellow-500" />
                  {feature}
                </li>
              ))}
              {plan.features.length > 3 && (
                <li className="text-xs text-gray-500">+{plan.features.length - 3} more features</li>
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <div className={`flex items-center rounded-lg p-3 ${step === 'order' ? 'border border-yellow-200 bg-yellow-50' : 'bg-gray-50'}`}>
              <div className={`mr-3 flex h-8 w-8 items-center justify-center rounded-full ${step === 'order' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                {step === 'order' && isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Clock className="h-4 w-4" />}
              </div>
              <div>
                <div className="font-medium text-gray-900">Creating Order</div>
                <div className="text-sm text-gray-600">{statusMessage}</div>
              </div>
            </div>

            <div className={`flex items-center rounded-lg p-3 ${step === 'payment' ? 'border border-yellow-200 bg-yellow-50' : 'bg-gray-50'}`}>
              <div className={`mr-3 flex h-8 w-8 items-center justify-center rounded-full ${step === 'payment' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                {step === 'payment' && isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <CreditCard className="h-4 w-4" />}
              </div>
              <div>
                <div className="font-medium text-gray-900">Cashfree Checkout</div>
                <div className="text-sm text-gray-600">Secure hosted payment page</div>
              </div>
            </div>

            <div className={`flex items-center rounded-lg p-3 ${step === 'verification' ? 'border border-yellow-200 bg-yellow-50' : 'bg-gray-50'}`}>
              <div className={`mr-3 flex h-8 w-8 items-center justify-center rounded-full ${step === 'verification' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                {step === 'verification' && isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Shield className="h-4 w-4" />}
              </div>
              <div>
                <div className="font-medium text-gray-900">Verification</div>
                <div className="text-sm text-gray-600">Confirming payment and subscription</div>
              </div>
            </div>
          </div>

          {orderId && (
            <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-3 text-xs text-blue-800">
              Order reference: {orderId}
            </div>
          )}

          <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4">
            <div className="flex items-start">
              <CheckCircle2 className="mr-3 mt-0.5 h-5 w-5 text-green-600" />
              <div className="text-sm text-green-800">
                <div className="font-medium">Secure payment</div>
                <div>Cashfree processes the transaction and we only store payment references.</div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={handlePayment}
              disabled={isLoading}
              className="flex-1 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-3 font-medium text-white transition-all hover:from-yellow-600 hover:to-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {step === 'verification' ? 'Verifying' : 'Processing'}
                </span>
              ) : (
                'Pay Now'
              )}
            </button>
            <button
              onClick={handleClose}
              disabled={isLoading}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
            <AlertCircle className="h-4 w-4" />
            If the webhook arrives a few seconds late, the modal will poll the backend until the status is confirmed.
          </div>
        </div>
      </div>
    </div>
  );
}
