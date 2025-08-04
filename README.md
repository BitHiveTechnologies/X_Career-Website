# X Career Website

A comprehensive career platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Core Features
- **Job Search & Applications** - Browse and apply to jobs with advanced filtering
- **Resume Builder** - Professional resume builder with subscription-based templates
- **Career Resources** - Learning materials, interview tips, and career guidance
- **Community** - Connect with professionals and share experiences
- **User Authentication** - Secure login and registration system

### Resume Builder Subscription Plans
- **Free Plan (₹0)** - Minimal Clean template for freshers
- **Starter Plan (₹49/month)** - Modern Professional template for fresher interns
- **Premium Plan (₹99/month)** - Creative Design & Executive templates for experienced candidates

### Subscription Features
- **Template Access Control** - Different templates available based on subscription tier
- **Upgrade Modal** - Seamless subscription upgrade experience
- **Subscription Status Display** - Real-time plan information
- **Payment Integration** - Mock payment system (ready for real payment gateway)

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **State Management**: React Context API
- **Authentication**: Custom auth system with localStorage
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **PDF Generation**: html2pdf.js

## Project Structure

```
X_Career-Website/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── resume-builder/    # Resume builder pages
│   │   ├── page.tsx       # Main resume builder
│   │   └── subscription/  # Subscription management
│   ├── jobs/              # Job search and applications
│   ├── careers/           # Career resources
│   └── ...                # Other pages
├── components/            # Reusable components
│   ├── TemplateSelector.tsx
│   ├── SubscriptionUpgradeModal.tsx
│   ├── SubscriptionStatus.tsx
│   └── ...
├── lib/                   # Utility libraries
│   ├── auth/             # Authentication context
│   └── utils.ts          # Helper functions
└── types/                # TypeScript type definitions
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd X_Career-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Resume Builder Subscription System

### Implementation Details

The resume builder implements a tiered subscription system with the following features:

#### Subscription Tiers
1. **Free Plan (₹0)**
   - Minimal Clean template (for freshers)
   - Basic PDF download
   - Standard support

2. **Starter Plan (₹49/month)**
   - Modern Professional template (for fresher interns)
   - Unlimited PDF downloads
   - Priority support
   - Custom color schemes
   - Advanced formatting

3. **Premium Plan (₹99/month)**
   - Creative Design & Executive templates (for experienced candidates)
   - Advanced design options
   - Priority support
   - AI-powered suggestions
   - Multiple resume versions

#### Key Components

- **AuthContext**: Extended with subscription management
- **TemplateSelector**: Template access control based on subscription
- **SubscriptionUpgradeModal**: Upgrade flow with pricing tiers
- **SubscriptionStatus**: Current plan display and upgrade prompts

#### Template Access Logic

```typescript
// Template access is controlled by subscription level
const isAccessible = template.subscription === 'free' || 
    (template.subscription === 'starter' && ['starter', 'premium'].includes(userSubscription)) ||
    (template.subscription === 'premium' && userSubscription === 'premium');
```

#### Subscription Management

- **updateSubscription()**: Updates user subscription plan
- **getUserSubscription()**: Returns current subscription level
- **Mock Payment System**: Simulated payment processing

### Usage

1. **Free Users**: Can access Minimal Clean template (for freshers)
2. **Starter Users**: Can access Modern Professional template (for fresher interns)
3. **Premium Users**: Can access Creative Design & Executive templates (for experienced candidates)

### Future Enhancements

- Real payment gateway integration (Stripe, Razorpay)
- Subscription analytics and reporting
- Advanced template customization
- Resume analytics and ATS scoring
- Team collaboration features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@xcareer.com or create an issue in the repository.
