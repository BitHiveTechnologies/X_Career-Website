'use client';

import { usePremiumTheme } from '@/hooks/usePremiumTheme';
import { useAuth } from '@/lib/auth/AuthContextBackend';
import { Crown, Lock } from 'lucide-react';
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
    const { getUserSubscription } = useAuth();
    const { isPremium, premiumColors } = usePremiumTheme();
    const [showUpgradeModal, setShowUpgradeModal] = useState(false);
    const [lockedTemplate, setLockedTemplate] = useState<string>('');
    const [userSubscription, setUserSubscription] = useState<string | null>(null);

    // Load user subscription on component mount
    useEffect(() => {
        const loadUserSubscription = async () => {
            try {
                const subscription = await getUserSubscription();
                setUserSubscription(subscription);
            } catch (error) {
                console.error('Error loading user subscription:', error);
            }
        };
        loadUserSubscription();
    }, [getUserSubscription]);

    const templates = [
        {
            id: 'minimal',
            name: 'Minimal Clean',
            description: 'Simple and elegant design for freshers',
            preview: '/template-previews/minimal.png',
            features: ['Minimalist', 'Typography Focus', 'Clean Lines'],
            subscription: 'free',
            targetAudience: 'Freshers',
            candidateType: 'freshers',
        },
        {
            id: 'modern',
            name: 'Modern Professional',
            description: 'Clean design with blue accents for fresher interns',
            preview: '/template-previews/modern.png',
            features: ['ATS-Friendly', 'Color Accents', 'Professional Layout'],
            subscription: 'starter',
            targetAudience: 'Fresher Interns',
            candidateType: 'fresher-interns',
        },
        {
            id: 'creative',
            name: 'Creative Design & Executive',
            description: 'Sophisticated design for experienced candidates',
            preview: '/template-previews/creative.png',
            features: ['Creative Layout', 'Executive Style', 'Leadership Focus'],
            subscription: 'premium',
            targetAudience: 'Experienced Candidates',
            candidateType: 'experienced-professionals',
        },
    ];

    const handleTemplateClick = (template: any) => {
        if (!userSubscription) return;
        
        const isAccessible = template.subscription === 'free' || 
            (template.subscription === 'starter' && ['starter', 'premium'].includes(userSubscription)) ||
            (template.subscription === 'premium' && userSubscription === 'premium');
        
        if (isAccessible) {
            onTemplateChange(template.id);
        } else {
            setLockedTemplate(template.name);
            setShowUpgradeModal(true);
        }
    };

    const getSubscriptionRequired = (templateSubscription: string) => {
        if (templateSubscription === 'starter') return 'Starter Plan (₹49/month)';
        if (templateSubscription === 'premium') return 'Premium Plan (₹99/month)';
        return '';
    };

    return (
        <>
            <div className="bg-white rounded-lg shadow-sm border p-6" data-oid="gn7_.ww">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Choose Your Template
                    </h2>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Current Plan:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            userSubscription === 'free' ? 'bg-gray-100 text-gray-700' :
                            userSubscription === 'starter' ? 'bg-blue-100 text-blue-700' :
                            isPremium ? 'bg-premium-gold text-premium-navy border border-premium-gold/30' : 'bg-purple-100 text-purple-700'
                        }`}>
                            {!userSubscription ? 'Loading...' :
                             userSubscription === 'free' ? 'Free' :
                             userSubscription === 'starter' ? 'Starter' : 
                             isPremium ? '👑 Royal Premium' : 'Premium'}
                        </span>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4" data-oid="v62dji9">
                    {templates.map((template) => {
                        const isAccessible = template.subscription === 'free' || 
                            (userSubscription && template.subscription === 'starter' && ['starter', 'premium'].includes(userSubscription)) ||
                            (userSubscription && template.subscription === 'premium' && userSubscription === 'premium');
                        
                        const isLocked = !isAccessible;
                        
                        return (
                            <div
                                key={template.id}
                                className={`relative border-2 rounded-lg p-4 transition-all duration-200 ${
                                    selectedTemplate === template.id
                                        ? 'border-[hsl(196,80%,45%)] bg-blue-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                } ${isLocked ? 'opacity-60 cursor-pointer' : 'cursor-pointer'}`}
                                onClick={() => handleTemplateClick(template)}
                                data-oid="yr0_1od"
                            >
                                {isLocked && (
                                    <div
                                        className="absolute top-2 right-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full flex items-center space-x-1"
                                        data-oid="uo4_47m"
                                    >
                                        <Lock className="w-3 h-3" />
                                        {getSubscriptionRequired(template.subscription)}
                                    </div>
                                )}

                                {/* Template Preview */}
                                <div
                                    className="bg-gray-100 rounded-md h-32 mb-3 flex items-center justify-center"
                                    data-oid="vio-g27"
                                >
                                    <div className="text-gray-400 text-center" data-oid="p:916ig">
                                        <svg
                                            className="w-8 h-8 mx-auto mb-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="o92kmwh"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                data-oid="ky0ym7c"
                                            />
                                        </svg>
                                        <span className="text-xs" data-oid="f4cdzuh">
                                            Preview
                                        </span>
                                    </div>
                                </div>

                                <h3 className="font-semibold text-gray-800 mb-1" data-oid="wkodqmo">
                                    {template.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-2" data-oid="m2d:dx9">
                                    {template.description}
                                </p>
                                
                                {/* Target Audience Badge */}
                                <div className="mb-3">
                                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                        template.targetAudience === 'Freshers' ? 'bg-green-100 text-green-700' :
                                        template.targetAudience === 'Fresher Interns' ? 'bg-blue-100 text-blue-700' :
                                        'bg-purple-100 text-purple-700'
                                    }`}>
                                        {template.targetAudience}
                                    </span>
                                </div>

                                {/* Features */}
                                <div className="space-y-1" data-oid="r6mqnto">
                                    {template.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center text-xs text-gray-500"
                                            data-oid="2w-wez1"
                                        >
                                            <svg
                                                className="w-3 h-3 mr-1 text-green-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                data-oid=".j:dpee"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                    data-oid="5clpxpu"
                                                />
                                            </svg>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {selectedTemplate === template.id && !isLocked && (
                                    <div
                                        className="absolute top-2 left-2 bg-[hsl(196,80%,45%)] text-white text-xs px-2 py-1 rounded-full"
                                        data-oid="3bwnqof"
                                    >
                                        Selected
                                    </div>
                                )}
                                
                                {isLocked && (
                                    <div className="absolute inset-0 bg-gray-900/20 rounded-lg flex items-center justify-center">
                                        <div className="bg-white rounded-lg p-3 text-center">
                                            <Crown className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                                            <p className="text-xs text-gray-600 font-medium">Upgrade Required</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg" data-oid="d208uo6">
                    <div className="flex items-start space-x-3" data-oid="ny2u22e">
                        <svg
                            className="w-5 h-5 text-blue-500 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            data-oid="6-20fwx"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clipRule="evenodd"
                                data-oid="gev-bu7"
                            />
                        </svg>
                        <div data-oid="wqvk9n:">
                            <h4 className="font-medium text-blue-800 mb-1" data-oid="j1r.ksm">
                                Template Access by Plan
                            </h4>
                            <ul className="text-sm text-blue-700 space-y-1" data-oid="35qikfv">
                                <li data-oid="op30erm">
                                    • <strong>Free:</strong> Minimal Clean (for freshers)
                                </li>
                                <li data-oid="8h8672:">
                                    • <strong>Starter (₹49/month):</strong> Modern Professional (for fresher interns)
                                </li>
                                <li data-oid="kjl0-j3">
                                    • <strong>Premium (₹99/month):</strong> Creative Design & Executive (for experienced candidates)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <SubscriptionUpgradeModal
                isOpen={showUpgradeModal}
                onClose={() => setShowUpgradeModal(false)}
                currentPlan={userSubscription as "free" | "premium" | "starter" || "free"}
                onUpgrade={(planId) => {
                    console.log('Upgrading to plan:', planId);
                    // Implement upgrade logic here
                    setShowUpgradeModal(false);
                }}
            />
        </>
    );
}
