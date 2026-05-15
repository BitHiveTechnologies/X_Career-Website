'use client';

import { paymentService, SubscriptionPlan } from '@/lib/api/payment';
import { useAuth } from '@/lib/auth/AuthContextBackend';
import { Check, X, Zap, Star, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PricingPlansProps {
  onSelectPlan: (plan: SubscriptionPlan) => void;
  currentPlanId?: string | null;
}

const PLAN_META: Record<string, {
  icon: React.ReactNode;
  badge?: string;
  gradient: string;
  buttonGradient: string;
  borderColor: string;
  iconBg: string;
}> = {
  basic: {
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    gradient: 'from-blue-50 to-slate-50',
    buttonGradient: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    borderColor: 'border-blue-200',
    iconBg: 'bg-blue-100',
  },
  premium: {
    icon: <Star className="w-6 h-6 text-amber-500" />,
    badge: 'Most Popular',
    gradient: 'from-amber-50 to-orange-50',
    buttonGradient: 'from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600',
    borderColor: 'border-amber-300',
    iconBg: 'bg-amber-100',
  },
  enterprise: {
    icon: <Zap className="w-6 h-6 text-purple-500" />,
    gradient: 'from-purple-50 to-violet-50',
    buttonGradient: 'from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700',
    borderColor: 'border-purple-300',
    iconBg: 'bg-purple-100',
  },
};

/** Feature comparison rows shown below the plan cards */
const FEATURE_ROWS = [
  { label: 'Job Notifications', basic: true, premium: true, enterprise: true },
  { label: 'Priority/Support Notifications', basic: false, premium: false, enterprise: true },
  { label: 'Basic Resume Template (Vinod)', basic: true, premium: true, enterprise: true },
  { label: 'Premium Resume Templates', basic: false, premium: true, enterprise: true },
  { label: 'Priority Support', basic: false, premium: false, enterprise: true },
  { label: 'Max Job Applications/month', basic: '50', premium: '200', enterprise: '1,000' },
];

export default function PricingPlans({ onSelectPlan, currentPlanId }: PricingPlansProps) {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();

  useEffect(() => {
    const loadPlans = async () => {
      try {
        setLoading(true);
        const response = await paymentService.getSubscriptionPlans();
        if (response.success && response.data?.plans) {
          setPlans(response.data.plans);
        } else {
          throw new Error(response.error?.message || 'Failed to load plans');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load plans');
      } finally {
        setLoading(false);
      }
    };
    loadPlans();
  }, []);

  /** Returns the user-friendly display name for a plan ID. */
  const getPlanDisplayName = (plan: SubscriptionPlan): string => {
    // Backend may return 'enterprise' as the id, but display as 'Pro'
    if (plan.id === 'enterprise') return 'Pro';
    return (plan as any).displayName || plan.name.replace(' Plan', '');
  };

  const isCurrentPlan = (plan: SubscriptionPlan) =>
    currentPlanId && (currentPlanId === plan.id || (currentPlanId === 'enterprise' && plan.id === 'enterprise'));

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="text-center">
          <div className="relative w-14 h-14 mx-auto mb-5">
            <div className="absolute inset-0 border-4 border-slate-100 rounded-full" />
            <div className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin" />
          </div>
          <p className="text-slate-500 font-medium">Loading plans…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 px-4">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 rounded-full mb-4">
          <X className="w-7 h-7 text-red-500" />
        </div>
        <p className="text-slate-700 font-semibold mb-1">Could not load plans</p>
        <p className="text-slate-500 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan) => {
          const meta = PLAN_META[plan.id] || PLAN_META.basic;
          const isCurrent = isCurrentPlan(plan);
          const displayName = getPlanDisplayName(plan);

          return (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border-2 p-6 transition-all duration-300 bg-gradient-to-br ${meta.gradient} ${meta.borderColor} ${
                isCurrent ? 'ring-2 ring-offset-2 ring-blue-400' : 'hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* Popular Badge */}
              {meta.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold shadow-md">
                    ✦ {meta.badge}
                  </span>
                </div>
              )}

              {/* Current Plan Badge */}
              {isCurrent && (
                <div className="absolute -top-3.5 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-bold shadow-md">
                    Your Plan
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl ${meta.iconBg}`}>
                  {meta.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{displayName}</h3>
                  <p className="text-xs text-slate-500">30-day subscription</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-5">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-slate-800">₹{plan.price}</span>
                  <span className="text-slate-500 text-sm mb-1.5">/month</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-green-600 stroke-[3]" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => !isCurrent && onSelectPlan(plan)}
                disabled={!!isCurrent}
                className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 shadow-md active:scale-95 ${
                  isCurrent
                    ? 'bg-slate-200 text-slate-500 cursor-not-allowed shadow-none'
                    : `bg-gradient-to-r ${meta.buttonGradient} text-white shadow-lg`
                }`}
              >
                {isCurrent ? 'Current Plan' : `Get ${displayName}`}
              </button>
            </div>
          );
        })}
      </div>

      {/* Feature Comparison Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
          <h3 className="font-semibold text-slate-700 text-sm uppercase tracking-widest">
            Feature Comparison
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left px-6 py-3 text-slate-500 font-medium w-1/2">Feature</th>
                <th className="text-center px-4 py-3 text-blue-600 font-semibold">Basic</th>
                <th className="text-center px-4 py-3 text-amber-600 font-semibold">Premium</th>
                <th className="text-center px-4 py-3 text-purple-600 font-semibold">Pro</th>
              </tr>
            </thead>
            <tbody>
              {FEATURE_ROWS.map((row, idx) => (
                <tr key={idx} className={`border-b border-slate-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                  <td className="px-6 py-3.5 text-slate-700 font-medium">{row.label}</td>
                  {(['basic', 'premium', 'enterprise'] as const).map((planKey) => {
                    const val = row[planKey];
                    return (
                      <td key={planKey} className="text-center px-4 py-3.5">
                        {typeof val === 'boolean' ? (
                          val
                            ? <Check className="w-5 h-5 text-green-500 mx-auto stroke-[2.5]" />
                            : <X className="w-4 h-4 text-slate-300 mx-auto" />
                        ) : (
                          <span className="font-semibold text-slate-700">{val}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
