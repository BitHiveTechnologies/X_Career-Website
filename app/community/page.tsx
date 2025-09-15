'use client';

import MainNavbar from '@/components/mainNavbar';
import {
    ArrowRight,
    MessageCircle,
    Shield,
    Star,
    TrendingUp,
    Users,
    Zap
} from 'lucide-react';
import { useState } from 'react';

const Logo = () => (
    <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        </div>
        <span className="text-xl font-bold text-white">X Careers</span>
    </div>
);

const communityStats = [
    {
        icon: Users,
        value: '25K+',
        label: 'Active Members'
    },
    {
        icon: MessageCircle,
        value: '50K+',
        label: 'Messages Daily'
    },
    {
        icon: Star,
        value: '1K+',
        label: 'Success Stories'
    },
    {
        icon: TrendingUp,
        value: '95%',
        label: 'Success Rate'
    }
];

export default function ResourcesCommunityPage() {
    const [selectedPlatform, setSelectedPlatform] = useState<'whatsapp' | 'telegram' | null>(null);

    const handleJoinCommunity = (platform: 'whatsapp' | 'telegram') => {
        const links = {
            whatsapp: 'https://whatsapp.com/channel/0029Vak7B1WLo4hdCrawMw3i',
            telegram: 'https://t.me/xcareerconnect',
        };

        window.open(links[platform], '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]">
            <MainNavbar />
            
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6">
                            <Users className="h-4 w-4" />
                            Join 25,000+ Tech Professionals
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                            Connect. Learn.
                            <span className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent">
                                {' '}Grow Together.
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Join our vibrant community of developers, get instant help, share
                            opportunities, and accelerate your career growth.
                        </p>

                        {/* Community Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                            {communityStats.map((stat, index) => (
                                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]">
                                    <stat.icon className="h-8 w-8 text-[hsl(196,80%,45%)] mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Selection */}
                <section className="py-16 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                Choose Your Platform
                            </h2>
                            <p className="text-lg text-gray-600">
                                Join our community on your preferred platform and start connecting with fellow developers
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* WhatsApp Card */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all transform hover:scale-105">
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MessageCircle className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">WhatsApp Community</h3>
                                    <p className="text-gray-600">Largest community with instant notifications</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700">25,000+ active members</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700">Instant job notifications</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700">Direct mentor support</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700">Daily DSA challenges</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="w-full bg-green-500 text-white py-3 px-6 rounded-xl font-medium hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    Join WhatsApp Community
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>

                            {/* Telegram Card */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all transform hover:scale-105">
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Zap className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Telegram Channel</h3>
                                    <p className="text-gray-600">Fast-paced updates and resources</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-gray-700">2,700+ members</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-gray-700">Real-time job alerts</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-gray-700">Resource sharing</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-gray-700">Quick Q&A support</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="w-full bg-blue-500 text-white py-3 px-6 rounded-xl font-medium hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                                >
                                    <Zap className="h-5 w-5" />
                                    Join Telegram Channel
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                Why Join Our Community?
                            </h2>
                            <p className="text-lg text-gray-600">
                                Discover the benefits of being part of our growing tech community
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]">
                                <div className="w-12 h-12 bg-[hsl(196,80%,45%)] rounded-lg flex items-center justify-center mb-4">
                                    <Users className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Network Growth</h3>
                                <p className="text-gray-600">Connect with developers from top companies and expand your professional network</p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]">
                                <div className="w-12 h-12 bg-[hsl(175,70%,41%)] rounded-lg flex items-center justify-center mb-4">
                                    <Shield className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Verified Opportunities</h3>
                                <p className="text-gray-600">Get access to verified job postings and internship opportunities from trusted sources</p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]">
                                <div className="w-12 h-12 bg-[hsl(210,70%,65%)] rounded-lg flex items-center justify-center mb-4">
                                    <Star className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Guidance</h3>
                                <p className="text-gray-600">Learn from experienced developers and get mentorship from industry professionals</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Guidelines Section */}
                <section className="py-16 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]">
                            <div className="text-center mb-8">
                                <Shield className="h-12 w-12 text-[hsl(196,80%,45%)] mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Community Guidelines</h2>
                                <p className="text-gray-600">Help us maintain a positive and productive environment</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-gray-800">✅ Do's</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Share relevant job opportunities</li>
                                        <li>• Help fellow members with doubts</li>
                                        <li>• Share your success stories</li>
                                        <li>• Be respectful and professional</li>
                                        <li>• Use appropriate channels for discussions</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-gray-800">❌ Don'ts</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• No spam or promotional content</li>
                                        <li>• No offensive or inappropriate language</li>
                                        <li>• No sharing of personal information</li>
                                        <li>• No off-topic discussions</li>
                                        <li>• No duplicate job postings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white">
                            <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Don't miss out on exclusive opportunities and valuable connections
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105"
                                >
                                    <MessageCircle className="inline h-5 w-5 mr-2" />
                                    Join WhatsApp
                                </button>
                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" />
                                    Join Telegram
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-gray-950 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="mb-6">
                                <Logo />
                            </div>
                            <p className="text-gray-400 mb-4">
                                Helping tech freshers launch their careers with curated
                                opportunities and resources.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/company/x-careers/"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/x_careers_official?igsh=Z3M3cTJyNndtdDdq"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://whatsapp.com/channel/0029Vak7B1WLo4hdCrawMw3i"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                    </svg>
                                </a>
                                <a
                                    href="https://t.me/xcareerconnect"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/about" className="text-gray-400 hover:text-white transition-all duration-300">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/careers" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="/blog" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/resources" className="text-gray-400 hover:text-white transition-all duration-300">
                                        All Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="/resume-builder" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Resume Builder
                                    </a>
                                </li>
                                <li>
                                    <a href="/notify" className="text-gray-400 hover:text-white transition-all duration-300">
                                        NotifyX
                                    </a>
                                </li>
                                <li>
                                                            <a href="/notify" className="text-gray-400 hover:text-white transition-all duration-300">
                            Subscriptions
                        </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Legal</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="/refund-policy" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Refund Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/shipping-policy" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Shipping Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Terms and Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p className="mb-2">© {new Date().getFullYear()} X Careers. All rights reserved.</p>
                        <p>Built with ❤️ for tech freshers</p>
                    </div>
                </div>
            </footer>
        </div>
    );
} 