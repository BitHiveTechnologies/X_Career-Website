'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { paymentService } from '@/lib/api/payment';
import { SubscriptionPlan, subscriptionService } from '@/lib/api/subscriptionService';
import { CheckCircle, CreditCard, Loader2, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function TestPaymentPage() {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [currentSubscription, setCurrentSubscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<{
    plans: boolean;
    subscription: boolean;
    order: boolean;
  }>({
    plans: false,
    subscription: false,
    order: false
  });

  useEffect(() => {
    testPaymentIntegration();
  }, []);

  const testPaymentIntegration = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Test 1: Get subscription plans
      console.log('Testing subscription plans...');
      const plansResponse = await subscriptionService.getPlans();
      if (plansResponse.success && plansResponse.data?.plans) {
        setPlans(plansResponse.data.plans);
        setTestResults(prev => ({ ...prev, plans: true }));
        console.log('✅ Plans loaded successfully:', plansResponse.data.plans);
      } else {
        throw new Error('Failed to load subscription plans');
      }

      // Test 2: Get current subscription
      console.log('Testing current subscription...');
      const subscriptionResponse = await subscriptionService.getCurrentSubscription();
      if (subscriptionResponse.success) {
        setCurrentSubscription(subscriptionResponse.data?.subscription || null);
        setTestResults(prev => ({ ...prev, subscription: true }));
        console.log('✅ Current subscription loaded:', subscriptionResponse.data?.subscription);
      } else {
        console.log('ℹ️ No active subscription found (this is normal for new users)');
        setTestResults(prev => ({ ...prev, subscription: true }));
      }

      // Test 3: Test payment order creation (with basic plan)
      console.log('Testing payment order creation...');
      const basicPlan = plansResponse.data?.plans.find(plan => plan.id === 'basic');
      if (basicPlan) {
        const orderResponse = await paymentService.createOrder({
          plan: basicPlan.id,
          amount: basicPlan.price * 100, // Convert to paise
          currency: 'INR'
        });
        
        if (orderResponse.success) {
          setTestResults(prev => ({ ...prev, order: true }));
          console.log('✅ Payment order created successfully:', orderResponse.data);
        } else {
          throw new Error(`Order creation failed: ${orderResponse.error?.message}`);
        }
      }

    } catch (err) {
      console.error('❌ Payment integration test failed:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleTestPayment = async (plan: SubscriptionPlan) => {
    try {
      setLoading(true);
      const orderResponse = await paymentService.createOrder({
        plan: plan.id,
        amount: plan.price * 100,
        currency: 'INR'
      });

      if (orderResponse.success) {
        console.log('Payment order created:', orderResponse.data);
        alert(`Order created successfully! Order ID: ${orderResponse.data?.order.id}`);
      } else {
        throw new Error(orderResponse.error?.message || 'Failed to create order');
      }
    } catch (err) {
      console.error('Payment test failed:', err);
      alert(`Payment test failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
            <h2 className="text-xl font-semibold">Testing Payment Integration...</h2>
            <p className="text-gray-600">Please wait while we test the backend connection</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Payment Integration Test</h1>
        <p className="text-gray-600">Testing Razorpay integration with backend API</p>
      </div>

      {/* Test Results */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Test Results
          </CardTitle>
          <CardDescription>Backend API integration status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Subscription Plans</span>
            {testResults.plans ? (
              <Badge variant="default" className="bg-green-500">
                <CheckCircle className="h-3 w-3 mr-1" />
                Passed
              </Badge>
            ) : (
              <Badge variant="destructive">
                <XCircle className="h-3 w-3 mr-1" />
                Failed
              </Badge>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span>Current Subscription</span>
            {testResults.subscription ? (
              <Badge variant="default" className="bg-green-500">
                <CheckCircle className="h-3 w-3 mr-1" />
                Passed
              </Badge>
            ) : (
              <Badge variant="destructive">
                <XCircle className="h-3 w-3 mr-1" />
                Failed
              </Badge>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span>Payment Order Creation</span>
            {testResults.order ? (
              <Badge variant="default" className="bg-green-500">
                <CheckCircle className="h-3 w-3 mr-1" />
                Passed
              </Badge>
            ) : (
              <Badge variant="destructive">
                <XCircle className="h-3 w-3 mr-1" />
                Failed
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Error Display */}
      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-red-600">
              <XCircle className="h-5 w-5" />
              <span className="font-medium">Error:</span>
            </div>
            <p className="text-red-600 mt-2">{error}</p>
            <Button 
              onClick={testPaymentIntegration} 
              variant="outline" 
              className="mt-4"
            >
              Retry Test
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Current Subscription */}
      {currentSubscription && (
        <Card>
          <CardHeader>
            <CardTitle>Current Subscription</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><strong>Plan:</strong> {currentSubscription.plan}</p>
              <p><strong>Status:</strong> {currentSubscription.status}</p>
              <p><strong>Expires:</strong> {new Date(currentSubscription.endDate).toLocaleDateString()}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Subscription Plans */}
      {plans.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Available Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <Card key={plan.id} className="relative">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {plan.name}
                    <Badge variant={plan.priority === 'high' ? 'default' : 'secondary'}>
                      {plan.priority}
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    ₹{plan.price} for {plan.duration} days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      Max Jobs: {plan.maxJobs}
                    </p>
                    <ul className="text-sm space-y-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={() => handleTestPayment(plan)}
                      className="w-full mt-4"
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      ) : (
                        <CreditCard className="h-4 w-4 mr-2" />
                      )}
                      Test Payment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Backend URL Info */}
      <Card>
        <CardHeader>
          <CardTitle>Backend Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p><strong>Backend URL:</strong> https://unstaffed-semipictorially-sunshine.ngrok-free.dev</p>
            <p><strong>Razorpay Key ID:</strong> rzp_test_RMAwhTLgqSmTyQ</p>
            <p><strong>Status:</strong> {testResults.plans && testResults.subscription && testResults.order ? 'Ready' : 'Not Ready'}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
