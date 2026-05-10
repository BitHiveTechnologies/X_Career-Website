# Frontend Update Log — May 2026

## Overview
This document summarizes the UI/UX enhancements and bug fixes implemented to support the new subscription model and profile management features.

## Key Changes

### 1. Dynamic Subscription UI
- **What used to happen**: The pricing page buttons always said "Start Premium" or "Get Started," regardless of the user's current status.
- **What happens now**: 
    - Buttons are dynamically labeled: **"Current Plan"** (disabled), **"Upgrade Now"**, or **"Switch Plan"**.
    - The "Current Plan" is styled distinctly (grayed out) to prevent duplicate purchases.
- **Files**: `app/notify/page.tsx`

### 2. Enhanced Subscription Status
- **What used to happen**: The "Upgrade" button disappeared once a user became a subscriber.
- **What happens now**: An **"Upgrade Plan"** button remains visible in the `SubscriptionStatus` component as long as the user hasn't reached the highest tier (Enterprise).
- **Files**: `components/SubscriptionStatus.tsx`

### 3. Password Change Bug Fix
- **What used to happen**: The profile security tab failed with a **404 error** because it was hitting a redundant `/api/v1` path.
- **What happens now**: Refactored the `changePassword` logic into the centralized `AuthContext` and `AuthService`, ensuring correct API pathing and consistency across the app.
- **Files**: `lib/auth/AuthContext.tsx`, `app/profile/page.tsx`, `lib/api/auth.ts`

### 4. TypeScript & Linting Fixes
- **What used to happen**: Multiple lint errors in `AuthService` due to interface mismatches with backend responses.
- **What happens now**: Resolved all property-access errors (`_id`, `subscriptionPlan`, etc.) by correctly mapping backend responses to the `User` interface.
- **Files**: `lib/api/auth.ts`

## Files Modified
- `app/notify/page.tsx`
- `components/SubscriptionStatus.tsx`
- `lib/auth/AuthContext.tsx`
- `app/profile/page.tsx`
- `lib/api/auth.ts`
- `components/PaymentModal.tsx`
