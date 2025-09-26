'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { paymentService, SubscriptionPlan } from '@/lib/api/payment';
import { AlertCircle, Calendar, CheckCircle, CreditCard, Loader2, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SubscriptionManagerProps {
  onUpgrade?: (plan: SubscriptionPlan) => void;
}

export default function SubscriptionManager({ onUpgrade }: SubscriptionManagerProps) {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [currentSubscription, setCurrentSubscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadSubscriptionData();
  }, []);

  const loadSubscriptionData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load subscription plans
      const plansResponse = await paymentService.getSubscriptionPlans();
      if (plansResponse.success && plansResponse.data?.plans) {
        setPlans(plansResponse.data.plans);
      } else {
        throw new Error(plansResponse.error?.message || 'Failed to load subscription plans');
      }

      // Load current subscription
      const subscriptionResponse = await paymentService.getCurrentSubscription();
      if (subscriptionResponse.success) {
        setCurrentSubscription(subscriptionResponse.data?.subscription || null);
      }

    } catch (err) {
      console.error('Error loading subscription data:', err);
      setError(err instanceof Error ? err.message : 'Failed to load subscription data');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500"><CheckCircle className="h-3 w-3 mr-1" />Active</Badge>;
      case 'expired':
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Expired</Badge>;
      case 'cancelled':
        return <Badge variant="secondary"><XCircle className="h-3 w-3 mr-1" />Cancelled</Badge>;
      default:
        return <Badge variant="outline"><AlertCircle className="h-3 w-3 mr-1" />{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading subscription information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-red-200 bg-red-50">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 text-red-600 mb-4">
            <XCircle className="h-5 w-5" />
            <span className="font-medium">Error loading subscription data</span>
          </div>
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={loadSubscriptionData} variant="outline">
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Current Subscription */}
      {currentSubscription ? (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Current Subscription
              {getStatusBadge(currentSubscription.status)}
            </CardTitle>
            <CardDescription>
              Your active subscription details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-600">Plan</p>
                <p className="text-lg font-semibold">{currentSubscription.plan}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Expires</p>
                <p className="text-lg font-semibold">{formatDate(currentSubscription.expiresAt)}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-600">Features</p>
              <ul className="space-y-1">
                {currentSubscription.features?.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                View History
              </Button>
              <Button variant="outline" size="sm">
                Cancel Subscription
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-yellow-800 mb-2">
              <AlertCircle className="h-5 w-5" />
              <span className="font-medium">No Active Subscription</span>
            </div>
            <p className="text-yellow-700 mb-4">
              You don't have an active subscription. Choose a plan below to get started.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Available Plans */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Available Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <Card key={plan.id} className={`relative ${currentSubscription?.plan === plan.id ? 'ring-2 ring-blue-500' : ''}`}>
              {currentSubscription?.plan === plan.id && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500">Current Plan</Badge>
                </div>
              )}
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
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    Max Jobs: <span className="font-medium">{plan.maxJobs}</span>
                  </p>
                  <ul className="space-y-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  onClick={() => onUpgrade?.(plan)}
                  className="w-full"
                  disabled={currentSubscription?.plan === plan.id}
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  {currentSubscription?.plan === plan.id ? 'Current Plan' : 'Upgrade'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
