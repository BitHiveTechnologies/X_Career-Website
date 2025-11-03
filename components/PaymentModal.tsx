'use client';

import { CreateOrderRequest, paymentService, VerifyPaymentRequest } from '@/lib/api/payment';
import { useAuth } from '@/lib/auth/AuthContext';
import { Clock, CreditCard, Shield, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
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
    Razorpay: any;
  }
}

export default function PaymentModal({ isOpen, onClose, plan, onSuccess, onError }: PaymentModalProps) {
  const router = useRouter();
  const { refreshUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'order' | 'payment' | 'verification'>('order');
  const [orderId, setOrderId] = useState<string | null>(null);

  // Load Razorpay script
  useEffect(() => {
    if (!isOpen) return;

    const loadRazorpay = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    loadRazorpay();
  }, [isOpen]);

  const handlePayment = async () => {
    if (!plan) return;

    // Check if user is authenticated
    const token = typeof window !== 'undefined' ? localStorage.getItem('careerx_token') : null;
    if (!token) {
      alert('Please login first to make a payment');
      return;
    }

    setIsLoading(true);
    setStep('order');

    try {
      // Create order
      const orderRequest: CreateOrderRequest = {
        plan: plan.id,
        amount: plan.price, // Send amount in rupees, backend will convert to paise
        currency: 'INR'
      };

      console.log('Creating order with request:', orderRequest);
      const orderResponse = await paymentService.createOrder(orderRequest);
      console.log('Order response:', orderResponse);
      
      if (!orderResponse.success || !orderResponse.data) {
        throw new Error(orderResponse.error?.message || 'Failed to create order');
      }

      const { order, keyId } = orderResponse.data;
      setOrderId(order.id);
      setStep('payment');

      // Configure Razorpay options
      const options = {
        key: keyId,
        amount: order.amount,
        currency: order.currency,
        name: 'X Careers',
        description: `${plan.name} Subscription`,
        order_id: order.id,
        handler: async (response: any) => {
          setStep('verification');
          await handlePaymentVerification(response, order.id);
        },
        prefill: {
          name: 'User',
          email: 'user@example.com',
          contact: '+91XXXXXXXXXX'
        },
        theme: {
          color: '#FFC94D'
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false);
            setStep('order');
          }
        }
      };

      // Open Razorpay checkout
      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error('Payment error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Payment failed';
      onError(errorMessage);
      alert(`Payment Error: ${errorMessage}`);
      setIsLoading(false);
      setStep('order');
    }
  };

  const handlePaymentVerification = async (response: any, orderId: string) => {
    try {
      const verifyRequest: VerifyPaymentRequest = {
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
        plan: plan.id,
        amount: plan.price * 100
      };

      const verifyResponse = await paymentService.verifyPayment(verifyRequest);
      
      if (verifyResponse.success) {
        // Call onSuccess callback
        onSuccess(verifyResponse.data);
        
        // Refresh user data to get updated subscription info from /me API
        await refreshUser();
        
        // Close modal
        onClose();
        
        // Show success message
        alert('🎉 Payment successful! Your subscription has been activated.');
        
        // Navigate to profile page
        router.push('/profile');
      } else {
        throw new Error(verifyResponse.error?.message || 'Payment verification failed');
      }
    } catch (error) {
      console.error('Verification error:', error);
      onError(error instanceof Error ? error.message : 'Payment verification failed');
    } finally {
      setIsLoading(false);
      setStep('order');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Complete Payment</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            disabled={isLoading}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Plan Details */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">{plan.name}</h3>
            <div className="text-2xl font-bold text-yellow-600 mb-2">
              ₹{plan.price}/month
            </div>
            <ul className="space-y-1 text-sm text-gray-600">
              {plan.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
              {plan.features.length > 3 && (
                <li className="text-xs text-gray-500">
                  +{plan.features.length - 3} more features
                </li>
              )}
            </ul>
          </div>

          {/* Payment Steps */}
          <div className="space-y-4">
            {/* Step 1: Order Creation */}
            <div className={`flex items-center p-3 rounded-lg ${
              step === 'order' ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                step === 'order' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {step === 'order' && isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Clock className="w-4 h-4" />
                )}
              </div>
              <div>
                <div className="font-medium text-gray-900">Creating Order</div>
                <div className="text-sm text-gray-600">Preparing your subscription</div>
              </div>
            </div>

            {/* Step 2: Payment */}
            <div className={`flex items-center p-3 rounded-lg ${
              step === 'payment' ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                step === 'payment' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                <CreditCard className="w-4 h-4" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Payment Gateway</div>
                <div className="text-sm text-gray-600">Secure payment with Razorpay</div>
              </div>
            </div>

            {/* Step 3: Verification */}
            <div className={`flex items-center p-3 rounded-lg ${
              step === 'verification' ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                step === 'verification' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {step === 'verification' && isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Shield className="w-4 h-4" />
                )}
              </div>
              <div>
                <div className="font-medium text-gray-900">Verification</div>
                <div className="text-sm text-gray-600">Activating your subscription</div>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-start">
              <Shield className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
              <div className="text-sm text-green-800">
                <div className="font-medium mb-1">Secure Payment</div>
                <div>Your payment is processed securely by Razorpay. We never store your payment details.</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              onClick={handlePayment}
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Processing...' : `Pay ₹${plan.price}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
