# X Careers - Tech Jobs Platform for Freshers

A modern, comprehensive career platform designed specifically for tech freshers and entry-level professionals. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Platform
- **Job Search & Applications** - Browse and apply to tech jobs with detailed company information
- **Internship Opportunities** - Dedicated section for internship positions
- **Resume Builder** - Professional resume creation with multiple templates
- **NotifyX System** - Email-based job alert and notification system
- **User Authentication** - Secure login/register system with JWT
- **Dashboard** - Personalized user dashboard with saved jobs and applications
- **Social Media Integration** - WhatsApp, Telegram, LinkedIn, and Instagram channels

### Premium Features
- **Advanced Resume Templates** - Modern Professional, Executive, Creative Designs
- **Priority Job Alerts** - Get notified before non-subscribers
- **Subscription Plans** - Starter (₹49/month) and Pro (₹99/month) tiers
- **Email Notifications** - Automated welcome emails and job alerts

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Radix UI** - Accessible component primitives

### Backend & APIs
- **Next.js API Routes** - Server-side API endpoints
- **JWT Authentication** - Secure user sessions
- **Email Templates** - HTML email generation
- **PDF Generation** - Resume export functionality

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing

## 📁 Project Structure

```
X_Career-Website/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── auth/                 # Authentication endpoints
│   │   └── subscribe/            # Email subscription system
│   │       ├── demo/             # Email template preview
│   │       ├── email-templates.ts # HTML email templates
│   │       └── route.ts          # Subscription API
│   ├── careers/                  # Careers page
│   ├── community/                # Community page
│   ├── dashboard/                # User dashboard
│   ├── forgot-password/          # Password recovery
│   ├── instagram/                # Instagram landing page
│   ├── internships/              # Internship listings
│   ├── jobs/                     # Job listings
│   ├── linkedin/                 # LinkedIn landing page
│   ├── login/                    # Login page
│   ├── notify/                   # NotifyX subscription page
│   ├── profile/                  # User profile
│   ├── register/                 # Registration page
│   ├── resume-builder/           # Resume creation tool
│   ├── saved-jobs/               # Saved job listings
│   ├── subscriptions/            # Subscription management
│   ├── telegram/                 # Telegram landing page
│   ├── terms-*/                  # Legal pages
│   ├── whatsapp/                 # WhatsApp landing page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── providers.tsx             # Context providers
├── components/                    # Reusable components
│   ├── ui/                       # UI components
│   ├── LayoutWrapper.tsx         # Layout wrapper
│   ├── mainNavbar.tsx            # Navigation bar
│   ├── ResumeForm.tsx            # Resume form
│   ├── ResumePreview.tsx         # Resume preview
│   ├── JobCard.tsx               # Job card component
│   ├── JobDetailsModal.tsx       # Job details modal
│   ├── QuickApplyModal.tsx       # Quick apply modal
│   ├── FiltersSidebar.tsx        # Job filters
│   └── ErrorBoundary.tsx         # Error handling
├── lib/                          # Utility libraries
│   ├── auth/                     # Authentication logic
│   │   ├── AuthContext.tsx       # Auth context
│   │   └── useAuthAction.ts      # Auth actions
│   ├── mockData.ts               # Mock data
│   └── utils.ts                  # Utility functions
├── hooks/                        # Custom React hooks
├── types/                        # TypeScript type definitions
├── public/                       # Static assets
└── tailwind.config.ts            # Tailwind configuration
```

## 🎯 Key Pages & Features

### Homepage (`/`)
- Hero section with job search
- Featured job listings
- Social media community cards
- Success stories testimonials
- Platform statistics

### NotifyX (`/notify`)
- Email subscription system
- Premium UI with dark theme
- Real-time form validation
- Automated email notifications
- Success/error feedback

### Resume Builder (`/resume-builder`)
- Multiple template options
- Real-time preview
- PDF export functionality
- Template-based access control
- Professional styling

### Job Listings (`/jobs`)
- Advanced filtering system
- Company details modal
- Quick apply functionality
- Saved jobs feature
- Responsive design

### Social Media Landing Pages
- **WhatsApp** (`/whatsapp`) - WhatsApp channel integration
- **Telegram** (`/telegram`) - Telegram channel integration
- **LinkedIn** (`/linkedin`) - LinkedIn company page
- **Instagram** (`/instagram`) - Instagram profile integration

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/validate` - Token validation

### Email Subscriptions
- `POST /api/subscribe` - Email subscription
- `GET /api/subscribe/demo?template=welcome` - Email template preview
- `GET /api/subscribe/demo?template=jobAlert` - Job alert template preview

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradients (`#1E3A8A` to `#3B82F6`)
- **Secondary**: Purple accents (`#8B5CF6`)
- **Success**: Green (`#10B981`)
- **Warning**: Orange (`#F59E0B`)
- **Error**: Red (`#EF4444`)

### Typography
- **Headings**: Bold, large scale
- **Body**: Clean, readable fonts
- **Accents**: Gradient text effects

### Components
- **Cards**: Rounded corners, shadows
- **Buttons**: Gradient backgrounds, hover effects
- **Modals**: Backdrop blur, smooth animations
- **Forms**: Validation states, loading indicators

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd X_Career-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint

# Type checking
npm run type-check

# Formatting
npm run format
```

## 📧 Email System

### NotifyX Features
- **Welcome Emails** - Personalized onboarding
- **Job Alerts** - Real-time opportunity notifications
- **HTML Templates** - Professional email design
- **Unsubscribe Links** - GDPR compliance

### Email Templates
- **Welcome Template**: Introduction to platform features
- **Job Alert Template**: Urgent job opportunities with similar positions

### Demo URLs
- Welcome Email: `/api/subscribe/demo?template=welcome`
- Job Alert: `/api/subscribe/demo?template=jobAlert`

## 🔐 Authentication

### Features
- JWT-based authentication
- Secure password hashing (bcrypt)
- Protected routes
- User session management
- Password recovery system

### User Roles
- **Guest**: Browse jobs, view details
- **Registered**: Save jobs, apply, build resume
- **Premium**: Advanced features, priority alerts

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Features
- Mobile-first approach
- Touch-friendly interfaces
- Optimized navigation
- Adaptive layouts

## 🎯 Performance

### Optimizations
- **Static Generation** - Pre-rendered pages
- **Image Optimization** - Next.js Image component
- **Code Splitting** - Automatic bundle optimization
- **Lazy Loading** - Component-level loading
- **Caching** - API response caching

### Metrics
- **First Load JS**: ~87.6 kB shared
- **Page Sizes**: 1-11 kB per page
- **Build Time**: Optimized for production

## 🔧 Configuration

### Environment Variables
```env
# Add to .env.local
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

### Tailwind Configuration
- Custom color palette
- Animation keyframes
- Responsive breakpoints
- Component variants

## 📊 Analytics & SEO

### SEO Features
- Meta tags optimization
- Open Graph support
- Twitter Cards
- Sitemap generation
- Robots.txt configuration

### Performance Monitoring
- Core Web Vitals tracking
- Error boundary implementation
- Loading state management

## 🤝 Contributing

### Development Workflow
1. Create feature branch
2. Make changes
3. Run tests and linting
4. Submit pull request

### Code Standards
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Component documentation

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For technical support or feature requests, please contact the development team.

---

**Built with ❤️ for tech freshers worldwide**
