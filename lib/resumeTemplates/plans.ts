/**
 * Which plan each resume template belongs to.
 *
 * This is the single place to change template access. To move a template to a
 * different plan, edit its line below — nothing else needs touching.
 *
 *   basic    Rs 49  — Basic Plan
 *   premium  Rs 99  — Premium Plan
 *   pro      Rs 299 — Pro Plan (stored as 'enterprise' in the database)
 *
 * A user can open every template at or below their own plan, so a Pro
 * subscriber gets all three tiers and a Basic subscriber only the basic ones.
 */
import { BASIC_TEMPLATE_ID } from './basic';
import { CREATIVE_EXECUTIVE_TEMPLATE_IDS } from './creative';
import { STANDARD_PROFESSIONAL_TEMPLATE_IDS } from './professional';

export type TemplatePlan = 'basic' | 'premium' | 'pro';

/** Template id -> the lowest plan that can use it. */
export const TEMPLATE_PLANS: Record<string, TemplatePlan> = {
    // Basic Plan
    [BASIC_TEMPLATE_ID]: 'basic',

    // Premium Plan
    [STANDARD_PROFESSIONAL_TEMPLATE_IDS[0]]: 'premium',
    [STANDARD_PROFESSIONAL_TEMPLATE_IDS[1]]: 'premium',

    // Pro Plan
    [CREATIVE_EXECUTIVE_TEMPLATE_IDS[0]]: 'pro',
    [CREATIVE_EXECUTIVE_TEMPLATE_IDS[1]]: 'pro',
    [CREATIVE_EXECUTIVE_TEMPLATE_IDS[2]]: 'pro',
};

const PLAN_RANK: Record<string, number> = {
    basic: 1,
    premium: 2,
    pro: 3,
    enterprise: 3, // the database name for the Pro plan
};

/** The plan a template needs; anything unlisted is treated as basic. */
export const planForTemplate = (templateId: string): TemplatePlan =>
    TEMPLATE_PLANS[templateId] || 'basic';

/**
 * Whether a subscriber on `userPlan` can use a template on `templatePlan`.
 * No plan (signed out or unsubscribed) means basic templates only.
 */
export const canUseTemplatePlan = (
    templatePlan: TemplatePlan,
    userPlan: string | null,
): boolean => {
    const userRank = userPlan ? PLAN_RANK[userPlan.toLowerCase()] || 0 : 0;
    return userRank >= PLAN_RANK[templatePlan];
};

/** Label shown on a template card. */
export const planLabel = (templatePlan: TemplatePlan): string => {
    if (templatePlan === 'pro') return 'Pro Plan';
    if (templatePlan === 'premium') return 'Premium or Pro Plan';
    return 'Free';
};
