'use client';

import MainNavbar from '@/components/mainNavbar';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Dummy data for the page
const dummyData: {
    stats: Stats;
    testimonials: Testimonial[];
    resources: Resource[];
    features: Feature[];
    benefits: Benefit[];
} = {
    stats: {
        freshers: 35213,
        verifiedJobs: '10k+',
        activeMembers: 35213,
        postedJobs: '1k',
        linkedInFollowers: '40k',
        users: 42780,
        whatsappMembers: 35213,
        linkedinMembers: 40320,
        telegramMembers: 2711,
    },
    testimonials: [
        {
            id: 1,
            name: 'Priya Sharma',
            company: 'Google',
            quote: 'CareerX gave me the confidence to land my role at Google.',
            image: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
        {
            id: 2,
            name: 'Rahul Verma',
            company: 'Amazon',
            quote: "DSA practice helped me crack Amazon's interviews.",
            image: 'https://randomuser.me/api/portraits/men/2.jpg',
        },
        {
            id: 3,
            name: 'Ananya Patel',
            company: 'Microsoft',
            quote: 'Community referrals fast-tracked my Microsoft application.',
            image: 'https://randomuser.me/api/portraits/women/3.jpg',
        },
        {
            id: 4,
            name: 'Vikram Singh',
            company: 'Adobe',
            quote: 'The resume builder helped me create an ATS-friendly CV that got noticed.',
            image: 'https://randomuser.me/api/portraits/men/4.jpg',
        },
        {
            id: 5,
            name: 'Neha Gupta',
            company: 'Flipkart',
            quote: 'From campus to Flipkart in 3 months thanks to CareerX resources!',
            image: 'https://randomuser.me/api/portraits/women/5.jpg',
        },
        {
            id: 6,
            name: 'Arjun Reddy',
            company: 'Infosys',
            quote: 'The mock interviews prepared me perfectly for the real thing.',
            image: 'https://randomuser.me/api/portraits/men/6.jpg',
        },
        {
            id: 7,
            name: 'Kavita Desai',
            company: 'TCS',
            quote: 'Found my first job through CareerX job board - so grateful!',
            image: 'https://randomuser.me/api/portraits/women/7.jpg',
        },
        {
            id: 8,
            name: 'Rohan Mehta',
            company: 'Wipro',
            quote: 'The community support made all the difference in my job search.',
            image: 'https://randomuser.me/api/portraits/men/8.jpg',
        },
        {
            id: 9,
            name: 'Divya Sharma',
            company: 'IBM',
            quote: 'CareerX helped me transition from college to a tech career seamlessly.',
            image: 'https://randomuser.me/api/portraits/women/9.jpg',
        },
    ],

    resources: [
        {
            id: 2,
            title: 'Job Matches',
            description: 'Personalized job recommendations',
            icon: 'search',
        },
        { id: 3, title: 'Community', description: 'Connect with peers and mentors', icon: 'users' },
        {
            id: 4,
            title: 'Resume Builder',
            description: 'Get ATS friendly Resume',
            icon: 'file',
        },
    ],

    features: [
        { id: 1, title: 'Career Launch', description: 'Entry-Level Tech Jobs', icon: 'rocket' },
        { id: 2, title: 'Learning Hub', description: 'Fresher-Focused Resources', icon: 'book' },
        { id: 3, title: 'Community', description: '35,000+ Jobs', icon: 'people' },
        { id: 4, title: 'Tech Roadmaps', description: 'Guided Career Profile', icon: 'map' },
    ],

    benefits: [
        {
            id: 1,
            title: 'Built for Freshers',
            description: 'Resources for 0-2 years of experience',
            icon: 'graduation',
        },
        {
            id: 2,
            title: 'Curated Opportunities',
            description: 'Handpicked roles from companies offering training',
            icon: 'check',
        },
        {
            id: 3,
            title: 'Supportive Network',
            description: 'Connect with peers, mentors, and hiring managers',
            icon: 'handshake',
        },
    ],
};

// API call functions (to be implemented with actual backend)
const fetchStats = async (): Promise<Stats> => {
    // Replace with actual API call
    return new Promise((resolve) => setTimeout(() => resolve(dummyData.stats), 500));
};

const fetchTestimonials = async (): Promise<Testimonial[]> => {
    // Replace with actual API call
    return new Promise((resolve) => setTimeout(() => resolve(dummyData.testimonials), 500));
};

const fetchResources = async (): Promise<Resource[]> => {
    // Replace with actual API call
    return new Promise((resolve) => setTimeout(() => resolve(dummyData.resources), 500));
};

const fetchFeatures = async (): Promise<Feature[]> => {
    // Replace with actual API call
    return new Promise((resolve) => setTimeout(() => resolve(dummyData.features), 500));
};

const fetchBenefits = async (): Promise<Benefit[]> => {
    // Replace with actual API call
    return new Promise((resolve) => setTimeout(() => resolve(dummyData.benefits), 500));
};

// SVG Logo component
const Logo = () => (
    <svg
        className="h-8 w-auto"
        viewBox="0 0 120 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-oid="96o4.sb"
    >
        <path
            d="M10 5L20 15L10 25"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="8:tydh:"
        />

        <path
            d="M30 5H40L50 25H40"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="h:f1qkd"
        />

        <text
            x="60"
            y="22"
            fontFamily="Arial"
            fontSize="18"
            fontWeight="bold"
            fill="#1E3A8A"
            data-oid="4x53-qm"
        >
            Careers
        </text>
    </svg>
);

// Type definitions
interface Stats {
    freshers: number;
    verifiedJobs: string;
    activeMembers: number;
    postedJobs: string;
    linkedInFollowers: string;
    users: number;
    whatsappMembers: number;
    linkedinMembers: number;
    telegramMembers: number;
}

interface Testimonial {
    id: number;
    name: string;
    company: string;
    quote: string;
    image: string;
}

interface Resource {
    id: number;
    title: string;
    description: string;
    icon: 'chart' | 'search' | 'users' | 'file' | 'chart-line' | 'article';
}

interface Benefit {
    id: number;
    title: string;
    description: string;
    icon: 'graduation' | 'check' | 'handshake';
}

interface Feature {
    id: number;
    title: string;
    description: string;
    icon: 'rocket' | 'book' | 'people' | 'map';
}

export default function Page() {
    const [searchQuery, setSearchQuery] = useState('');
    const [stats, setStats] = useState<Stats | null>(null);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [resources, setResources] = useState<Resource[]>([]);
    const [features, setFeatures] = useState<Feature[]>([]);
    const [benefits, setBenefits] = useState<Benefit[]>([]);

    // Add custom CSS for animations
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes scroll {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }
            
            @keyframes ring {
                0%, 100% {
                    transform: rotate(0deg);
                }
                25% {
                    transform: rotate(10deg);
                }
                75% {
                    transform: rotate(-10deg);
                }
            }
            
            .animate-scroll {
                animation: scroll 40s linear infinite;
            }
            
            .pause-animation {
                animation-play-state: paused;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    useEffect(() => {
        // Simulate API calls
        const loadData = async () => {
            const [statsData, testimonialsData, resourcesData, featuresData, benefitsData] =
                await Promise.all([
                    fetchStats(),
                    fetchTestimonials(),
                    fetchResources(),
                    fetchFeatures(),
                    fetchBenefits(),
                ]);

            setStats(statsData);
            setTestimonials(testimonialsData);
            setResources(resourcesData);
            setFeatures(featuresData);
            setBenefits(benefitsData);
        };

        loadData();
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement search functionality with backend
        console.log('Searching for:', searchQuery);
        // Reset search field
        setSearchQuery('');
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="1:hkxok">
            {/* Sticky Navbar */}
            <header
                className="sticky top-0 z-50 bg-gradient-to-r from-blue-200/90 via-blue-300/90 to-blue-200/90 backdrop-blur-md shadow-sm border-b border-blue-300/70"
                data-oid="_vsjdjm"
            >
                <MainNavbar data-oid="jvptsez" />
                {/* Sub-Navbar */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,70%,92%)]/90 via-[hsl(210,70%,90%)]/90 to-[hsl(196,70%,92%)]/90 backdrop-blur-sm border-t border-[hsl(210,40%,90%)]"
                    data-oid="n5mkjb0"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="d.8cy00">
                        <div
                            className="flex flex-wrap items-center justify-between py-2 text-sm"
                            data-oid="u3t6-hv"
                        >
                            <div
                                className="flex flex-wrap items-center space-x-4"
                                data-oid=".1u.rst"
                            >
                                <a
                                    href="/notify"
                                    className="bg-gradient-to-r from-blue-200 to-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:from-blue-300 hover:to-blue-200 shadow-sm flex items-center"
                                    data-oid="-.jeh57"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1 animate-[ring_1s_ease-in-out_infinite]"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        data-oid="sepmrhx"
                                    >
                                        <path
                                            d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                                            data-oid="64tad6t"
                                        ></path>
                                        <path
                                            d="M13.73 21a2 2 0 0 1-3.46 0"
                                            data-oid="wt4q12:"
                                        ></path>
                                    </svg>
                                    NOTIFY X
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 sm:mt-0" data-oid="ra84t.s">
                                {/* Mobile view - compact icons */}
                                <div
                                    className="flex sm:hidden items-center space-x-2"
                                    data-oid="wt6myp0"
                                >
                                    <a
                                        href="/telegram"
                                        className="inline-flex items-center justify-center w-7 h-7 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-all duration-300"
                                        title="Join Telegram Community"
                                        data-oid="0f9ksls"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="9g6x0l."
                                        >
                                            <path
                                                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                                data-oid="qk6bmf-"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="/whatsapp"
                                        className="inline-flex items-center justify-center w-7 h-7 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300"
                                        title="Join WhatsApp Community"
                                        data-oid="etnn72x"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="3x8dfyt"
                                        >
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                                data-oid="1zxws9u"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>

                                {/* Desktop view - original buttons */}
                                <div
                                    className="hidden sm:flex items-center space-x-3"
                                    data-oid="3wfxclc"
                                >
                                    <a
                                        href="/telegram"
                                        className="inline-flex items-center px-3 py-1 bg-teal-500 hover:bg-teal-600 text-white text-xs font-medium rounded-md transition-all duration-300"
                                        data-oid="0lvrn9k"
                                    >
                                        <svg
                                            className="h-4 w-4 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="8w.n234"
                                        >
                                            <path
                                                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                                data-oid="m_atqkr"
                                            ></path>
                                        </svg>
                                        Join Telegram Community
                                    </a>
                                    <a
                                        href="/whatsapp"
                                        className="inline-flex items-center px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-md transition-all duration-300"
                                        data-oid="5:e5cg2"
                                    >
                                        <svg
                                            className="h-4 w-4 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="ckl6:pb"
                                        >
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                                data-oid="pzqdfwe"
                                            ></path>
                                        </svg>
                                        Join WhatsApp Community
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main data-oid="1lfw2.6">
                {/* Hero Section */}
                <section
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white relative overflow-hidden"
                    data-oid="1l:ak5j"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden" data-oid="6s8wu-8">
                        <div
                            className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob"
                            data-oid="psvhlmr"
                        ></div>
                        <div
                            className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="uq5j:91"
                        ></div>
                        <div
                            className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="bfgj6zm"
                        ></div>
                        <div
                            className="absolute -bottom-20 right-1/4 w-80 h-80 bg-[hsl(220,70%,65%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-3000"
                            data-oid="aamf:d:"
                        ></div>
                    </div>
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
                        data-oid=":hg3fn_"
                    >
                        <div className="grid md:grid-cols-2 gap-8 items-center" data-oid="k2meqvn">
                            <div className="block" data-oid="diu7xyx">
                                <div
                                    className="inline-block bg-blue-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-6 uppercase text-white"
                                    data-oid="9r5rs:4"
                                >
                                    India's most trusted Platform For Tech Freshers
                                </div>

                                <h1
                                    className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md"
                                    data-oid="xm1_v:o"
                                >
                                    JOIN THOUSANDS GETTING JOBS IN TOP TECH COMPANIES
                                </h1>

                                <p
                                    className="text-xl md:text-2xl mb-8 text-white"
                                    data-oid="001537z"
                                >
                                    Discover Jobs, Internships, and Resources tailored for Freshers
                                </p>

                                <div className="flex flex-wrap gap-4 mt-10" data-oid="1zu76ca">
                                    <a
                                        href="/register"
                                        className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 rounded-md font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                                        data-oid="2_ny92l"
                                    >
                                        Join Community
                                        <svg
                                            className="ml-2 h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="t_7j.q4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                data-oid="ppi_7fv"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="block relative" data-oid="qxh960_">
                                <div
                                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl transform hover:scale-[1.01] transition-all duration-500 relative z-10"
                                    data-oid="f94os2f"
                                >
                                    <div className="mb-6" data-oid=":elur8.">
                                        <form
                                            onSubmit={handleSearch}
                                            className="flex relative z-10 transform transition-all duration-500 hover:scale-[1.02]"
                                            data-oid="4t.5rk9"
                                        >
                                            <input
                                                type="text"
                                                placeholder="Search Entry Level Jobs..."
                                                className="w-full px-4 py-3 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                data-oid="57dl97:"
                                            />

                                            <button
                                                type="submit"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(175,70%,41%)] hover:to-[hsl(196,80%,45%)] px-6 py-3 rounded-r-md font-medium transition-all duration-300 shadow-lg"
                                                data-oid="_uq-jap"
                                            >
                                                SEARCH
                                            </button>
                                        </form>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mb-6" data-oid="b.iz5gn">
                                        <div
                                            className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/30 text-white font-medium"
                                            data-oid="m2jtnrr"
                                        >
                                            {stats?.freshers.toLocaleString()} Freshers
                                        </div>
                                        <div
                                            className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/30 text-white font-medium"
                                            data-oid="pjncj4t"
                                        >
                                            {stats?.verifiedJobs} Verified Jobs
                                        </div>
                                        <div
                                            className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/30 text-white font-medium"
                                            data-oid="7z5508:"
                                        >
                                            Entry-Level Focused
                                        </div>
                                    </div>

                                    <div
                                        className="absolute -bottom-3 -right-3 w-20 h-20 bg-[hsl(196,80%,65%)] opacity-60 rounded-full blur-xl"
                                        data-oid="k6l5.sg"
                                    ></div>
                                    <div
                                        className="absolute -top-3 -left-3 w-20 h-20 bg-[hsl(175,70%,61%)] opacity-60 rounded-full blur-xl"
                                        data-oid="xwq.q7_"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Platform Stats Section */}
                <section
                    className="py-16 bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
                    data-oid="d2umzfy"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="i9l7hcy">
                        <h2
                            className="text-3xl font-bold text-center mb-12 text-gray-800"
                            data-oid="x.hq3lb"
                        >
                            Platform Metrics
                        </h2>
                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                            data-oid="lfzgohy"
                        >
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="ptbkejm"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="jm05rs-"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        data-oid="nlu8lrr"
                                    >
                                        <path
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            data-oid="kl4ww74"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="xv5hx2t"
                                >
                                    Active Members
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="nd25v60">
                                    {stats?.activeMembers.toLocaleString()} growing community
                                    members
                                </p>
                                <a
                                    href="/community"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="0godr71"
                                >
                                    Join Now
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="xisci8b"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="itpkc5b"
                                        ></path>
                                    </svg>
                                </a>
                            </div>

                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="pwemczj"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="tp91e.5"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        data-oid="ir4cofo"
                                    >
                                        <path
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            data-oid="ou62evg"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="phtdu4t"
                                >
                                    Posted Jobs
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="v-f48vq">
                                    {stats?.postedJobs} Jobs posted till now
                                </p>
                                <a
                                    href="/jobs"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="i4m._1c"
                                >
                                    See Jobs
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="mbvecg9"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="tsxmba9"
                                        ></path>
                                    </svg>
                                </a>
                            </div>

                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="8f59_op"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="6ial4a0"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        data-oid="gx.ffz."
                                    >
                                        <path
                                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                                            data-oid="rs-:pc6"
                                        ></path>
                                        <rect
                                            x="2"
                                            y="9"
                                            width="4"
                                            height="12"
                                            data-oid="k5.tj0t"
                                        ></rect>
                                        <circle cx="4" cy="4" r="2" data-oid="2.d6jzv"></circle>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="tlwg.yl"
                                >
                                    LinkedIn
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="1un_oee">
                                    {stats?.linkedInFollowers} professional followers
                                </p>
                                <a
                                    href="/linkedin"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid=":zozsug"
                                >
                                    Connect
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="bvi9cpz"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="7rsl7bh"
                                        ></path>
                                    </svg>
                                </a>
                            </div>

                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="d50h0y7"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="ivhb6zm"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        data-oid="vrq8prv"
                                    >
                                        <path
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            data-oid=":7_-s0s"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="vmheghk"
                                >
                                    Registered Users
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="67jerp1">
                                    {stats?.users.toLocaleString()} active accounts
                                </p>
                                <Link
                                    href="/register"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="23az.e-"
                                >
                                    Join Now
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="pl:clw-"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="6o98ox8"
                                        ></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose CareerX */}
                <section
                    className="py-16 bg-gradient-to-b from-white to-[hsl(196,60%,95%)]"
                    data-oid="-alm5q9"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="fo6j08o">
                        <div className="text-center mb-12" data-oid="br48s1i">
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="gahal6b"
                            >
                                Why Choose CareerX
                            </h2>
                            <p className="text-xl text-blue-800" data-oid="dy6alzr">
                                Designed Exclusively For Tech Freshers
                            </p>
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto" data-oid="y161-ab">
                                Our platform focuses on the unique needs of entry-level tech talent.
                            </p>
                        </div>

                        {/* Full-Width Banner */}
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white p-6 rounded-xl mb-12 shadow-lg transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group"
                            data-oid=".rd9nvy"
                        >
                            {/* Animated shine effect */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shine transition-opacity duration-300"
                                data-oid="ntv6ww0"
                            ></div>
                            {/* Frosted glass overlay */}
                            <div
                                className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"
                                data-oid="9bofz5j"
                            ></div>
                            <div
                                className="flex flex-col md:flex-row items-center justify-between relative z-10"
                                data-oid="7wr.2l0"
                            >
                                <div data-oid="zvjsrwf">
                                    <h3 className="text-2xl font-bold mb-2" data-oid="u37nexm">
                                        NOTIFY X
                                    </h3>
                                    <p className="text-blue-100" data-oid="qg:lwzr">
                                        Get real-time alerts for freshers jobs matching your profile
                                    </p>
                                </div>
                                <a
                                    href="/notify"
                                    className="mt-4 md:mt-0 px-6 py-2 bg-white text-blue-800 rounded-md font-medium hover:bg-blue-50 transition-all duration-300"
                                    data-oid="f4fg-p9"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* Benefits Cards */}
                        <div className="grid md:grid-cols-3 gap-8" data-oid="41jcjc2">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={benefit.id}
                                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)]"
                                    data-oid="vddlirn"
                                >
                                    <div
                                        className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                        data-oid="__p86cs"
                                    >
                                        {benefit.icon === 'graduation' && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="40"
                                                height="40"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                data-oid="756fud-"
                                            >
                                                <path
                                                    d="M22 10v6M2 10l10-5 10 5-10 5z"
                                                    data-oid="4__3nr3"
                                                ></path>
                                                <path
                                                    d="M6 12v5c3 3 9 3 12 0v-5"
                                                    data-oid="ejiyj5:"
                                                ></path>
                                            </svg>
                                        )}
                                        {benefit.icon === 'check' && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="40"
                                                height="40"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                data-oid="416cawt"
                                            >
                                                <path
                                                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                                    data-oid="b3e7pws"
                                                ></path>
                                                <path d="m9 12 2 2 4-4" data-oid="ag3.5.n"></path>
                                            </svg>
                                        )}
                                        {benefit.icon === 'handshake' && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="40"
                                                height="40"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                data-oid="30fd82g"
                                            >
                                                <path
                                                    d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"
                                                    data-oid="d.73pz3"
                                                ></path>
                                                <path
                                                    d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l2.26-2.21a2.13 2.13 0 0 1 3 0h0a2.13 2.13 0 0 1 0 3l-2.26 2.21"
                                                    data-oid=".qv7.mu"
                                                ></path>
                                            </svg>
                                        )}
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="n1e57yl"
                                    >
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600" data-oid="6-xcyab">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NotifyX Section */}
                <section
                    className="py-16 bg-gradient-to-r from-[hsl(210,60%,92%)] via-[hsl(196,70%,90%)] to-[hsl(175,60%,92%)] relative overflow-hidden"
                    data-oid="4sj.:45"
                >
                    {/* Subtle animated background elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-20" data-oid="d3l416l">
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="ba3uno5"
                        ></div>
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="sqwu3ku"
                        ></div>
                    </div>
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                        data-oid="232poye"
                    >
                        <div className="text-center mb-12" data-oid="btwc.yv">
                            <h2
                                className="text-4xl font-bold mb-4 text-gray-800 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] inline-block text-transparent bg-clip-text"
                                data-oid="-xpn1ra"
                            >
                                NotifyX
                            </h2>
                            <p
                                className="text-2xl font-semibold mb-2 text-gray-700"
                                data-oid="d.24ql8"
                            >
                                Get Real-time Tech Job Alerts for just ₹49/month.
                            </p>
                            <p
                                className="text-xl text-gray-600 max-w-4xl mx-auto"
                                data-oid="v_bwae3"
                            >
                                Unlock Curated Opportunities, Insider Updates, and a driven
                                Community — All for less than a Cup of Coffee. Supercharge your
                                Career, starting Today.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid=":9:icrv">
                            {/* Tile 1 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] text-center"
                                data-oid="6px1pqg"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="sq30j9t"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        data-oid="-a9x4m4"
                                    >
                                        <path
                                            d="M22 12h-4l-3 9L9 3l-3 9H2"
                                            data-oid="6phdcnn"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid=".f3i_s-"
                                >
                                    Instant Access
                                </h3>
                                <p className="text-gray-600" data-oid="z6mii:e">
                                    Get immediate access to the latest tech job opportunities as
                                    soon as they're posted.
                                </p>
                            </div>

                            {/* Tile 2 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] text-center"
                                data-oid="nfwjyio"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="durd27-"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        data-oid="9q1g1fz"
                                    >
                                        <path
                                            d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                                            data-oid="zdpa29:"
                                        ></path>
                                        <path
                                            d="M13.73 21a2 2 0 0 1-3.46 0"
                                            data-oid="507926-"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="8qpe8-e"
                                >
                                    Real-Time Alerts
                                </h3>
                                <p className="text-gray-600" data-oid="i8e1giq">
                                    Stay ahead with personalized notifications that match your
                                    skills and preferences.
                                </p>
                            </div>

                            {/* Tile 3 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] text-center"
                                data-oid="go466bs"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="7beqq2-"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        data-oid="y2.yvao"
                                    >
                                        <path
                                            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                                            data-oid="w0gasz-"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="e2n7cqw"
                                >
                                    Fast-Track Your Career
                                </h3>
                                <p className="text-gray-600" data-oid="mby7bdt">
                                    Be among the first applicants and significantly increase your
                                    chances of getting hired.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Integration */}
                <section
                    className="py-16 bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)] relative overflow-hidden"
                    data-oid="_32qeb:"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-30" data-oid="1y674l.">
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="9p8qzof"
                        ></div>
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="b6:nsbq"
                        ></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="celm:gt">
                        <div className="text-center mb-12" data-oid="glm87xd">
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="7qu1_ru"
                            >
                                Join 35,000+ Tech Freshers
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid=".6pwsib">
                                Networking is crucial. Connect with peers and mentors.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-oid=":vso3h9">
                            <a
                                href="/whatsapp"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-green-500"
                                data-oid="y94_npu"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full mb-4"
                                    data-oid="sss:2k2"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="rv.s:b."
                                    >
                                        <path
                                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                            data-oid="82r8gim"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="xzzaclh"
                                >
                                    WhatsApp
                                </h3>
                                <p className="text-gray-600" data-oid="z2y-inp">
                                    {stats?.whatsappMembers.toLocaleString()} members
                                </p>
                            </a>

                            <a
                                href="/linkedin"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-blue-600"
                                data-oid="fcocgfr"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4"
                                    data-oid="4v:fo:s"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="6j:4bet"
                                    >
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                            data-oid="3a-1rgf"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="hz436cc"
                                >
                                    LinkedIn
                                </h3>
                                <p className="text-gray-600" data-oid="upy1i4x">
                                    {stats?.linkedinMembers.toLocaleString()} followers
                                </p>
                            </a>

                            <a
                                href="/telegram"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-blue-500"
                                data-oid="l6dk-vz"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mb-4"
                                    data-oid="rf8fxzw"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="810p7xf"
                                    >
                                        <path
                                            d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                            data-oid="c03zu3t"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="6n:_wk1"
                                >
                                    Telegram
                                </h3>
                                <p className="text-gray-600" data-oid="ouc4ik9">
                                    {stats?.telegramMembers.toLocaleString()} members
                                </p>
                            </a>

                            <a
                                href="/instagram"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-purple-600"
                                data-oid="i.991fl"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-purple-600 to-pink-500 text-white rounded-full mb-4"
                                    data-oid="k2peus7"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="pxxgfv_"
                                    >
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                            data-oid="k858:sy"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="qx1:1zp"
                                >
                                    Instagram
                                </h3>
                                <p className="text-gray-600" data-oid="b7pjg_:">
                                    Follow us
                                </p>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Featured Jobs Section */}
                <section
                    className="py-16 bg-gradient-to-r from-[hsl(210,60%,92%)] via-[hsl(196,70%,90%)] to-[hsl(175,60%,92%)] relative overflow-hidden"
                    data-oid="yj27cal"
                >
                    {/* Subtle animated background elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-20" data-oid="bf9yqp7">
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="kfiz-xu"
                        ></div>
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="67bwldo"
                        ></div>
                    </div>

                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                        data-oid="uf-hebl"
                    >
                        <div className="text-center mb-12" data-oid="-wh15mc">
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="f0ourew"
                            >
                                Featured Jobs
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid="ee0fo_5">
                                Handpicked opportunities for freshers in top tech companies
                            </p>
                        </div>

                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            data-oid="09n24_i"
                        >
                            {/* Job Card 1 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                                data-oid="6spvb92"
                            >
                                <div className="p-6" data-oid="akvirn6">
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid=":xh3-2d"
                                    >
                                        <div
                                            className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600"
                                            data-oid="3m1j:au"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                data-oid="9ufimim"
                                            >
                                                <rect
                                                    x="2"
                                                    y="7"
                                                    width="20"
                                                    height="14"
                                                    rx="2"
                                                    ry="2"
                                                    data-oid="z:t_sf7"
                                                ></rect>
                                                <path
                                                    d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                                    data-oid=":j5i40k"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span
                                            className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            data-oid="_dqi4lg"
                                        >
                                            New
                                        </span>
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="uhy-g48"
                                    >
                                        Frontend Developer
                                    </h3>
                                    <p
                                        className="text-blue-700 font-medium mb-3"
                                        data-oid="-0n3hh."
                                    >
                                        Microsoft
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="xtob78x">
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="nyh73gb"
                                        >
                                            React
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="nsnv6ym"
                                        >
                                            TypeScript
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="jb5nzim"
                                        >
                                            Remote
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="f65dsyb"
                                    >
                                        <span className="text-gray-600" data-oid="t7ko4-.">
                                            ₹5-8 LPA
                                        </span>
                                        <div className="flex gap-2" data-oid="vj4cm3x">
                                            <a
                                                href="/jobs/view-details/microsoft/frontend-developer"
                                                className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300 text-sm"
                                                data-oid="1jcu-34"
                                            >
                                                View Details
                                                <svg
                                                    className="ml-1 h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="4xsmhzg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        data-oid=":9d0opt"
                                                    />

                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        data-oid="kfiib6-"
                                                    />
                                                </svg>
                                            </a>
                                            <a
                                                href="/jobs/apply/microsoft/frontend-developer"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white px-3 py-1 rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 text-sm inline-flex items-center gap-1"
                                                data-oid="ktc:6v:"
                                            >
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid=".:rgm0r"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        data-oid="qy7g-0_"
                                                    />
                                                </svg>
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Job Card 2 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                                data-oid="2xh1wit"
                            >
                                <div className="p-6" data-oid="5_8_dh:">
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid="k8v4s1_"
                                    >
                                        <div
                                            className="w-12 h-12 bg-orange-100 rounded-md flex items-center justify-center text-orange-600"
                                            data-oid="zhfp305"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                data-oid=".x7.gz:"
                                            >
                                                <path
                                                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                                    data-oid="31t2o1q"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span
                                            className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            data-oid="i:z1tg7"
                                        >
                                            Featured
                                        </span>
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="ksx45:y"
                                    >
                                        Backend Engineer
                                    </h3>
                                    <p
                                        className="text-blue-700 font-medium mb-3"
                                        data-oid="w1ny8oz"
                                    >
                                        Amazon
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="epbicey">
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="o1-ch3-"
                                        >
                                            Java
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="m2lvuox"
                                        >
                                            Spring Boot
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="2wkachr"
                                        >
                                            Hybrid
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="3svae9f"
                                    >
                                        <span className="text-gray-600" data-oid="d_j0.wy">
                                            ₹8-12 LPA
                                        </span>
                                        <div className="flex gap-2" data-oid="9p3-sep">
                                            <a
                                                href="/jobs/view-details/amazon/backend-engineer"
                                                className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300 text-sm"
                                                data-oid="x.7fzv7"
                                            >
                                                View Details
                                                <svg
                                                    className="ml-1 h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="v1cifwg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        data-oid="xi6z9kt"
                                                    />

                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        data-oid="71sravm"
                                                    />
                                                </svg>
                                            </a>
                                            <a
                                                href="/jobs/apply/amazon/backend-engineer"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white px-3 py-1 rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 text-sm inline-flex items-center gap-1"
                                                data-oid="arp82oh"
                                            >
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="vj_hic0"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        data-oid=".yeznov"
                                                    />
                                                </svg>
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Job Card 3 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                                data-oid="5pqq13y"
                            >
                                <div className="p-6" data-oid="sbnts3e">
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid="ohxw3dr"
                                    >
                                        <div
                                            className="w-12 h-12 bg-green-100 rounded-md flex items-center justify-center text-green-600"
                                            data-oid="l5hne2o"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                data-oid="4yt0dps"
                                            >
                                                <polyline
                                                    points="16 18 22 12 16 6"
                                                    data-oid="l8abvt9"
                                                ></polyline>
                                                <polyline
                                                    points="8 6 2 12 8 18"
                                                    data-oid="z7enwfp"
                                                ></polyline>
                                            </svg>
                                        </div>
                                        <span
                                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            data-oid="pvzx7po"
                                        >
                                            Hot
                                        </span>
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="0mkh0mm"
                                    >
                                        Full Stack Developer
                                    </h3>
                                    <p
                                        className="text-blue-700 font-medium mb-3"
                                        data-oid="t5mqpj6"
                                    >
                                        Google
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="ljdtyp0">
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="_vluu6:"
                                        >
                                            React
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="-kqg3go"
                                        >
                                            Node.js
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="wk-_j6p"
                                        >
                                            Onsite
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="mycxsqj"
                                    >
                                        <span className="text-gray-600" data-oid="_.he24f">
                                            ₹10-15 LPA
                                        </span>
                                        <div className="flex gap-2" data-oid="m:fzlpe">
                                            <a
                                                href="/jobs/view-details/google/full-stack-developer"
                                                className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300 text-sm"
                                                data-oid="c1ea7be"
                                            >
                                                View Details
                                                <svg
                                                    className="ml-1 h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="erh7c-1"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        data-oid="pav:s5."
                                                    />

                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        data-oid="47g:-.i"
                                                    />
                                                </svg>
                                            </a>
                                            <a
                                                href="/jobs/apply/google/full-stack-developer"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white px-3 py-1 rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 text-sm inline-flex items-center gap-1"
                                                data-oid="mumgil8"
                                            >
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="7lc6jf9"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        data-oid="4m78ms6"
                                                    />
                                                </svg>
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-10" data-oid="9_xdwt8">
                            <a
                                href="/jobs"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                                data-oid="ypqzfj:"
                            >
                                View All Jobs
                                <svg
                                    className="ml-2 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-oid="qmgw9tw"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        data-oid="dcij1q3"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Fresher Resources */}
                <section
                    className="py-16 bg-gradient-to-b from-white to-[hsl(196,60%,95%)]"
                    data-oid="46c9wht"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=".4agtru">
                        <div className="text-center mb-12" data-oid="fs41fv1">
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="4wvjizp"
                            >
                                Fresher Resources
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid="7q5c1my">
                                Everything You Need to Succeed
                            </p>
                        </div>

                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            data-oid="lr6ycim"
                        >
                            {resources.map((resource, index) => (
                                <div
                                    key={resource.id}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)]"
                                    data-oid="sktozfr"
                                >
                                    <div className="p-6" data-oid="ga2m:9b">
                                        <div
                                            className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                            data-oid="6ex3zen"
                                        >
                                            {resource.icon === 'chart' && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="40"
                                                    height="40"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    data-oid="-2r-ba7"
                                                >
                                                    <path d="M3 3v18h18" data-oid="cj3b69q"></path>
                                                    <path d="M18 17V9" data-oid="h:ch-68"></path>
                                                    <path d="M13 17V5" data-oid=".ja7wmd"></path>
                                                    <path d="M8 17v-3" data-oid="i-nt6sy"></path>
                                                </svg>
                                            )}
                                            {resource.icon === 'search' && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="40"
                                                    height="40"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    data-oid="yx-ydvt"
                                                >
                                                    <circle
                                                        cx="11"
                                                        cy="11"
                                                        r="8"
                                                        data-oid="syqcf92"
                                                    ></circle>
                                                    <path
                                                        d="m21 21-4.3-4.3"
                                                        data-oid="v6x4m.6"
                                                    ></path>
                                                </svg>
                                            )}
                                            {resource.icon === 'users' && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="40"
                                                    height="40"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    data-oid="ucj1t9i"
                                                >
                                                    <path
                                                        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                                                        data-oid="y:ye3iv"
                                                    ></path>
                                                    <circle
                                                        cx="9"
                                                        cy="7"
                                                        r="4"
                                                        data-oid="bu2w_es"
                                                    ></circle>
                                                    <path
                                                        d="M22 21v-2a4 4 0 0 0-3-3.87"
                                                        data-oid="igwpewl"
                                                    ></path>
                                                    <path
                                                        d="M16 3.13a4 4 0 0 1 0 7.75"
                                                        data-oid="2j2p4jg"
                                                    ></path>
                                                </svg>
                                            )}
                                            {resource.icon === 'file' && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="40"
                                                    height="40"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    data-oid="j7ef59z"
                                                >
                                                    <path
                                                        d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                                                        data-oid="4a7_081"
                                                    ></path>
                                                    <polyline
                                                        points="14 2 14 8 20 8"
                                                        data-oid="jqlwui6"
                                                    ></polyline>
                                                    <line
                                                        x1="16"
                                                        y1="13"
                                                        x2="8"
                                                        y2="13"
                                                        data-oid="xmp2uk2"
                                                    ></line>
                                                    <line
                                                        x1="16"
                                                        y1="17"
                                                        x2="8"
                                                        y2="17"
                                                        data-oid="x67dg.e"
                                                    ></line>
                                                    <line
                                                        x1="10"
                                                        y1="9"
                                                        x2="8"
                                                        y2="9"
                                                        data-oid="krolydd"
                                                    ></line>
                                                </svg>
                                            )}
                                            {resource.icon === 'chart-line' && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="40"
                                                    height="40"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    data-oid="7_:vepp"
                                                >
                                                    <path d="M3 3v18h18" data-oid="4l5qpnj"></path>
                                                    <path
                                                        d="m3 10 5 3 4-6 5 7"
                                                        data-oid="_0cb5ri"
                                                    ></path>
                                                </svg>
                                            )}
                                            {resource.icon === 'article' && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="40"
                                                    height="40"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    data-oid="pidpouz"
                                                >
                                                    <path
                                                        d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                                                        data-oid="vdxt7r7"
                                                    ></path>
                                                    <path d="M18 14h-8" data-oid="1qasx4j"></path>
                                                    <path d="M15 18h-5" data-oid="9ot:avd"></path>
                                                    <path
                                                        d="M10 6h8v4h-8z"
                                                        data-oid="vp9iuo_"
                                                    ></path>
                                                </svg>
                                            )}
                                        </div>
                                        <h3
                                            className="text-xl font-bold mb-2 text-gray-800"
                                            data-oid="dpvgz6k"
                                        >
                                            {resource.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4" data-oid="jb6:_a:">
                                            {resource.description}
                                        </p>
                                        <a
                                            href={`/resources/${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                            data-oid="ftzr2hh"
                                        >
                                            Learn more
                                            <svg
                                                className="ml-1 h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                data-oid="y0lnuzt"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    data-oid=":4n1358"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section
                    className="py-16 bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white relative overflow-hidden"
                    data-oid="cy:zp-t"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden" data-oid="l:ok32:">
                        <div
                            className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="qf.otcg"
                        ></div>
                        <div
                            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-30 rounded-full blur-3xl animate-blob"
                            data-oid="d50f1a7"
                        ></div>
                    </div>
                    {/* Frosted glass overlay */}
                    <div
                        className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"
                        data-oid="nm2xnhj"
                    ></div>
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                        data-oid="l08oew6"
                    >
                        <div className="text-center mb-12" data-oid="xptuuvl">
                            <h2 className="text-3xl font-bold mb-4" data-oid="9euauq9">
                                Hear From Our Members
                            </h2>
                            <p className="text-blue-100 max-w-2xl mx-auto" data-oid="deardio">
                                Success stories from freshers who found their dream tech jobs
                            </p>
                        </div>

                        {/* Auto-scrolling testimonial carousel */}
                        <div className="relative overflow-hidden py-8" data-oid="2l_osfr">
                            <div
                                className="flex animate-scroll gap-5 hover:pause-animation focus:pause-animation pt-4 pb-2"
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.animationPlayState = 'paused')
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.animationPlayState = 'running')
                                }
                                onClick={(e) => {
                                    const currentState = e.currentTarget.style.animationPlayState;
                                    e.currentTarget.style.animationPlayState =
                                        currentState === 'paused' ? 'running' : 'paused';
                                }}
                                style={{ width: `${testimonials.length * 300}px` }}
                                data-oid="blqyx4o"
                            >
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="bg-white/90 backdrop-blur-md text-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-white/20 w-[280px] h-[180px] flex-shrink-0 flex flex-col"
                                        data-oid="ll5-r5l"
                                    >
                                        <div className="flex items-center mb-2" data-oid="zkg9s1v">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-10 h-10 rounded-full mr-3 object-cover"
                                                data-oid="hm.bg02"
                                            />

                                            <div data-oid="32yg1v_">
                                                <h3
                                                    className="font-bold text-gray-800 text-sm"
                                                    data-oid="gopesri"
                                                >
                                                    {testimonial.name}
                                                </h3>
                                                <p
                                                    className="text-blue-700 text-xs"
                                                    data-oid=":.43b_l"
                                                >
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                        <p
                                            className="text-gray-600 italic flex-grow overflow-y-auto text-sm"
                                            data-oid="3kym5or"
                                        >
                                            "{testimonial.quote}"
                                        </p>
                                    </div>
                                ))}

                                {/* Duplicate first few testimonials to create seamless loop */}
                                {testimonials.slice(0, 3).map((testimonial) => (
                                    <div
                                        key={`duplicate-${testimonial.id}`}
                                        className="bg-white/90 backdrop-blur-md text-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-white/20 w-[280px] h-[180px] flex-shrink-0 flex flex-col"
                                        data-oid="20t7645"
                                    >
                                        <div className="flex items-center mb-2" data-oid="qma6qqe">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-10 h-10 rounded-full mr-3 object-cover"
                                                data-oid="4vt_m10"
                                            />

                                            <div data-oid="y5cs906">
                                                <h3
                                                    className="font-bold text-gray-800 text-sm"
                                                    data-oid="drtlgfa"
                                                >
                                                    {testimonial.name}
                                                </h3>
                                                <p
                                                    className="text-blue-700 text-xs"
                                                    data-oid="5yuzw.r"
                                                >
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                        <p
                                            className="text-gray-600 italic flex-grow overflow-y-auto text-sm"
                                            data-oid="42tbbnd"
                                        >
                                            "{testimonial.quote}"
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-8" data-oid="q2ux0vm"></div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section
                    className="py-16 bg-white text-[hsl(196,80%,45%)] relative overflow-hidden"
                    data-oid="lp36h9:"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-30" data-oid="t-q2l3e">
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="q76-bfr"
                        ></div>
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="hkoxkhy"
                        ></div>
                    </div>
                    <div
                        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                        data-oid="3ru40p:"
                    >
                        <p className="text-[hsl(196,80%,65%)] mb-2" data-oid="9felvld">
                            Start Your Tech Journey Today
                        </p>
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
                            data-oid="hz-80c."
                        >
                            Ready to Land Your First Tech Job?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8" data-oid="0-i:3r8">
                            Join 35,000+ freshers who've launched their careers with us
                        </p>
                        <div
                            className="flex flex-col sm:flex-row justify-center gap-4"
                            data-oid="1ns596m"
                        >
                            <Link
                                href="/register"
                                className="px-8 py-4 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-md font-bold text-lg hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse-shadow relative z-10"
                                data-oid="p1v20tn"
                            >
                                Create Free Account →
                            </Link>
                            <Link
                                href="/fresher-jobs"
                                className="px-8 py-4 border-2 border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-md font-bold text-lg hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg transform hover:scale-105 relative z-10"
                                data-oid="a-r6qm."
                            >
                                Browse Fresher Jobs
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-950 text-white" data-oid="du7s7pi">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="agf479b">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="u8e597g">
                        <div data-oid="v09l9y3">
                            <div className="mb-6" data-oid="hi-5g_o">
                                <Logo data-oid="u8ihx2o" />
                            </div>
                            <p className="text-gray-400 mb-4" data-oid="euv9u1q">
                                Helping tech freshers launch their careers with curated
                                opportunities and resources.
                            </p>
                            <div className="flex space-x-4" data-oid="wfz1o0j">
                                <a
                                    href="/linkedin"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    data-oid="oqzsy-f"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="xpt49s_"
                                    >
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                            data-oid="fx0egzw"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="/twitter"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    data-oid="5nlcbny"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="kx2hd51"
                                    >
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                            data-oid=":bv-z9_"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="/instagram"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    data-oid="hhp86tt"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="5-j59ll"
                                    >
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                            data-oid="_puadmy"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="ce78ezx">
                            <h3 className="text-lg font-bold mb-4" data-oid="lvh:i7f">
                                Company
                            </h3>
                            <ul className="space-y-3" data-oid="o8:5:mh">
                                <li data-oid="ntk6sha">
                                    <a
                                        href="/about"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="24sn8.w"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="9seq118">
                                    <a
                                        href="/advertising"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="er21on3"
                                    >
                                        Advertising
                                    </a>
                                </li>
                                <li data-oid="r40gsef">
                                    <a
                                        href="/contact"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="ji.21dn"
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li data-oid="4x.10-h">
                                    <a
                                        href="/careers"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="4zywhmt"
                                    >
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="r6a9nfo">
                            <h3 className="text-lg font-bold mb-4" data-oid="sch5cvc">
                                Resources
                            </h3>
                            <ul className="space-y-3" data-oid="2874ah:">
                                <li data-oid="rhh3zrn">
                                    <a
                                        href="/tax-calculator"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="vk_d.jl"
                                    >
                                        Tax Calculator
                                    </a>
                                </li>
                                <li data-oid="4jtsjlc">
                                    <a
                                        href="/resume-review"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="s20i81s"
                                    >
                                        Resume Review
                                    </a>
                                </li>
                                <li data-oid="mcdn2wc">
                                    <a
                                        href="/jobs-tracker"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="nlr305d"
                                    >
                                        Jobs Tracker
                                    </a>
                                </li>
                                <li data-oid="zaxy_8s">
                                    <a
                                        href="/blog"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="f64ts:o"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="cocewm2">
                            <h3 className="text-lg font-bold mb-4" data-oid="kplz2a.">
                                Legal
                            </h3>
                            <ul className="space-y-3" data-oid="ckx0hzl">
                                <li data-oid="xscwxog">
                                    <a
                                        href="/privacy-policy"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="n8.yxiv"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li data-oid="ejsyeas">
                                    <a
                                        href="/terms"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="c2rqvkg"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                                <li data-oid="4jv2e27">
                                    <a
                                        href="/refunds"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="3n:q.cq"
                                    >
                                        Refund Policy
                                    </a>
                                </li>
                                <li data-oid="dua7cnd">
                                    <a
                                        href="/shipping-policy"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="0f:53k1"
                                    >
                                        Shipping Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                        data-oid="whrvqbd"
                    >
                        <p className="mb-2" data-oid="k__5b5n">
                            © {new Date().getFullYear()} CareerX. All rights reserved.
                        </p>
                        <p data-oid=":jgsjbi">Built with ❤️ by BitHive Technologies</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
