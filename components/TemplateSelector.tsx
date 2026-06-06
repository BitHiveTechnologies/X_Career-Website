'use client';

import { useAuth } from '@/lib/auth/AuthContextBackend';
import { Check, Crown, FileText, Lock } from 'lucide-react';
import { useEffect, useState } from 'react';
import SubscriptionUpgradeModal from './SubscriptionUpgradeModal';

interface TemplateSelectorProps {
    selectedTemplate: string;
    onTemplateChange: (template: string) => void;
}

export default function TemplateSelector({
    selectedTemplate,
    onTemplateChange,
}: TemplateSelectorProps) {
    const auth = useAuth();
    const [showUpgradeModal, setShowUpgradeModal] = useState(false);
    const [lockedTemplate, setLockedTemplate] = useState<string>('');
    const [userSubscription, setUserSubscription] = useState<string | null>(null);

    useEffect(() => {
        const loadUserSubscription = async () => {
            try {
                if (auth?.getUserSubscription) {
                    const subscription = await auth.getUserSubscription();
                    setUserSubscription(subscription);
                }
            } catch (error) {
                ; void /* console.error */ ((..._args) => {})('Error loading user subscription:', error);
            }
        };
        loadUserSubscription();
    }, [auth]);

    const templates = [
        {
            id: 'vinod',
            name: 'Basic',
            description: 'Clean and simple template for freshers and students',
            features: ['ATS Friendly', 'Best for Freshers', 'Clean Layout'],
            subscriptionTier: 'basic' as const
        },
        {
            id: 'professional',
            name: 'Standard Professional',
            description: 'Recruter-friendly layout for professionals with some experience',
            features: ['ATS Friendly', 'Recruiter Favorite', 'High Readability'],
            subscriptionTier: 'premium' as const
        },
        {
            id: 'creative',
            name: 'Creative Executive',
            description: 'Stylish and modern template for executives and leadership roles',
            features: ['ATS Friendly', 'Executive Style', 'Leadership Focus'],
            subscriptionTier: 'premium' as const
        },
    ];

    const canAccessTemplate = (templateTier: 'basic' | 'premium', plan: string | null): boolean => {
        if (!plan) return templateTier === 'basic';
        const normalized = plan.toLowerCase();
        const tierLevel: Record<string, number> = { basic: 1, premium: 2, enterprise: 3 };
        const userLevel = tierLevel[normalized] || 1;
        const requiredLevel = templateTier === 'premium' ? 2 : 1;
        return userLevel >= requiredLevel;
    };

    const handleTemplateClick = (template: typeof templates[0]) => {
        const accessible = canAccessTemplate(template.subscriptionTier, userSubscription);
        if (accessible) {
            onTemplateChange(template.id);
        } else {
            setLockedTemplate(template.name);
            setShowUpgradeModal(true);
        }
    };

    const getSubscriptionRequired = (templateTier: 'basic' | 'premium') => {
        if (templateTier === 'premium') return 'Premium or Pro Plan';
        return '';
    };

    

    const getAudienceClass = (audience: string) => {
        if (audience === 'Freshers') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
        if (audience === 'Professionals') return 'bg-blue-50 text-blue-700 border-blue-200';
        return 'bg-amber-50 text-amber-700 border-amber-200';
    };

    const getPreviewAccent = (accent: string) => {
        if (accent === 'emerald') return 'from-emerald-100 via-white to-emerald-50';
        if (accent === 'amber') return 'from-amber-100 via-white to-amber-50';
        return 'from-blue-100 via-white to-blue-50';
    };

    return (
        <>
            <div data-oid="gn7_.ww">
                

                <div className="grid gap-4 lg:grid-cols-3" data-oid="v62dji9">
                    {templates.map((template) => {
                        const isAccessible = canAccessTemplate(template.subscriptionTier, userSubscription);
                        const isLocked = !isAccessible;
                        const isSelected = selectedTemplate === template.id;
                        
                        return (
                            <button
                                key={template.id}
                                type="button"
                                className={`relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-200 ${
                                    isSelected
                                        ? 'border-[hsl(196,80%,45%)]/30 bg-[linear-gradient(180deg,rgba(236,254,255,0.95)_0%,rgba(240,249,255,1)_100%)] text-slate-900 shadow-sm ring-1 ring-[hsl(196,80%,45%)]/10'
                                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                                }`}
                                onClick={() => handleTemplateClick(template)}
                                data-oid="yr0_1od"
                            >

                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className={`font-semibold ${isSelected ? 'text-slate-900' : 'text-slate-900'}`} data-oid="wkodqmo">
                                            {template.name}
                                        </h3>
                                        <p className={`mt-1 text-sm ${isSelected ? 'text-slate-700' : 'text-slate-600'}`} data-oid="m2d:dx9">
                                            {template.description}
                                        </p>
                                    </div>
                                    {isSelected ? (
                                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[hsl(196,80%,45%)] text-white shadow-sm">
                                            <Check className="h-4 w-4" />
                                        </div>
                                    ) : isLocked ? (
                                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                                            <Lock className="h-4 w-4" />
                                        </div>
                                    ) : null}
                                </div>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
                                        isSelected
                                            ? 'border-[hsl(196,80%,45%)]/20 bg-white text-[hsl(196,80%,32%)]'
                                            : isLocked
                                                ? 'border-amber-200 bg-amber-50 text-amber-700'
                                                : 'border-slate-200 bg-slate-50 text-slate-600'
                                    }`}>
                                        {isLocked ? getSubscriptionRequired(template.subscriptionTier) : 'Free'}
                                    </span>
                                </div>

                                <div className="mt-4 space-y-2" data-oid="r6mqnto">
                                    {template.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-center text-xs ${isSelected ? 'text-slate-600' : 'text-slate-500'}`}
                                            data-oid="2w-wez1"
                                        >
                                            <Check className={`mr-2 h-3.5 w-3.5 ${isSelected ? 'text-[hsl(196,80%,45%)]' : 'text-emerald-500'}`} />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </button>
                        );
                    })}
                </div>

                
            </div>

            <SubscriptionUpgradeModal
                isOpen={showUpgradeModal}
                onClose={() => setShowUpgradeModal(false)}
                currentPlan={(userSubscription === 'enterprise' ? 'premium' : userSubscription) as "free" | "premium" | "starter" || "free"}
                onUpgrade={(planId) => {
                    ; void /* console.log */ ((..._args) => {})('Upgrading to plan:', planId);
                    if (typeof window !== 'undefined') {
                        window.location.href = '/subscriptions';
                    }
                    setShowUpgradeModal(false);
                }}
            />
        </>
    );
}
