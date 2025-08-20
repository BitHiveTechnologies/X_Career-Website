import { useAuth } from '@/lib/auth/AuthContext';

export interface PremiumThemeColors {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    border: string;
    hover: string;
}

export const usePremiumTheme = () => {
    const { getUserSubscription } = useAuth();
    const isPremium = getUserSubscription() === 'premium';

    const premiumColors: PremiumThemeColors = {
        primary: 'bg-premium-emerald text-white',
        secondary: 'bg-premium-forest text-white',
        accent: 'bg-premium-gold text-white',
        background: 'bg-premium-emerald',
        text: 'text-white',
        border: 'border-premium-gold',
        hover: 'hover:bg-premium-emerald-light hover:border-premium-gold-light',
    };

    const getPremiumClass = (baseClass: string, premiumClass: string) => {
        return isPremium ? premiumClass : baseClass;
    };

    const getPremiumGradient = (baseGradient: string, premiumGradient: string) => {
        return isPremium ? premiumGradient : baseGradient;
    };

    return {
        isPremium,
        premiumColors,
        getPremiumClass,
        getPremiumGradient,
    };
};
