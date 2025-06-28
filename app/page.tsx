'use client';

import MainNavbar from '@/components/mainNavbar';
import Link from 'next/link';
import Image from 'next/image';
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
        data-oid="foqwp5y"
    >
        <path
            d="M10 5L20 15L10 25"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="k081:db"
        />

        <path
            d="M30 5H40L50 25H40"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="pa0hs_e"
        />

        <text
            x="60"
            y="22"
            fontFamily="Arial"
            fontSize="18"
            fontWeight="bold"
            fill="#1E3A8A"
            data-oid="kyq_.bv"
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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="0mj9rdd">
            {/* Sticky Navbar */}
            <header
                className="sticky top-0 z-50 bg-gradient-to-r from-blue-200/90 via-blue-300/90 to-blue-200/90 backdrop-blur-md shadow-sm border-b border-blue-300/70"
                data-oid="kwea.o-"
            >
                <MainNavbar data-oid="t2liiu7" />
                {/* Sub-Navbar */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,70%,92%)]/90 via-[hsl(210,70%,90%)]/90 to-[hsl(196,70%,92%)]/90 backdrop-blur-sm border-t border-[hsl(210,40%,90%)]"
                    data-oid="q_69.oa"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="nc_yd-v">
                        <div
                            className="flex flex-wrap items-center justify-between py-2 text-sm"
                            data-oid="ar6ld:9"
                        >
                            <div
                                className="flex flex-wrap items-center space-x-4"
                                data-oid="9853t06"
                            >
                                <a
                                    href="/notify"
                                    className="bg-gradient-to-r from-blue-200 to-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:from-blue-300 hover:to-blue-200 shadow-sm flex items-center"
                                    data-oid="8v-m:lz"
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
                                        data-oid="gsgzxw:"
                                    >
                                        <path
                                            d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                                            data-oid="wu1ymdd"
                                        ></path>
                                        <path
                                            d="M13.73 21a2 2 0 0 1-3.46 0"
                                            data-oid="5mtv2sg"
                                        ></path>
                                    </svg>
                                    NOTIFY X
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 sm:mt-0" data-oid="7hp-8ic">
                                {/* Mobile view - compact icons */}
                                <div
                                    className="flex sm:hidden items-center space-x-2"
                                    data-oid="o3v:zg_"
                                >
                                    <a
                                        href="/telegram"
                                        className="inline-flex items-center justify-center w-7 h-7 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-all duration-300"
                                        title="Join Telegram Community"
                                        data-oid="_qloor5"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="mkpsmap"
                                        >
                                            <path
                                                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                                data-oid="tm4qhet"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="/whatsapp"
                                        className="inline-flex items-center justify-center w-7 h-7 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300"
                                        title="Join WhatsApp Community"
                                        data-oid="yvxdp5a"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="cj.85jq"
                                        >
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                                data-oid="kcpia_y"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>

                                {/* Desktop view - original buttons */}
                                <div
                                    className="hidden sm:flex items-center space-x-3"
                                    data-oid="fqvyvti"
                                >
                                    <a
                                        href="/telegram"
                                        className="inline-flex items-center px-3 py-1 bg-teal-500 hover:bg-teal-600 text-white text-xs font-medium rounded-md transition-all duration-300"
                                        data-oid="ewe_w72"
                                    >
                                        <svg
                                            className="h-4 w-4 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="35ha_al"
                                        >
                                            <path
                                                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                                data-oid="3zyqol0"
                                            ></path>
                                        </svg>
                                        Join Telegram Community
                                    </a>
                                    <a
                                        href="/whatsapp"
                                        className="inline-flex items-center px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-md transition-all duration-300"
                                        data-oid="mv22u9q"
                                    >
                                        <svg
                                            className="h-4 w-4 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="89i45f1"
                                        >
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                                data-oid="91etz74"
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

            <main data-oid="2orm9t6">
                {/* Hero Section */}
                <section
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white relative overflow-hidden"
                    data-oid="1qnb--b"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden" data-oid="5j435fg">
                        <div
                            className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob"
                            data-oid="nympje5"
                        ></div>
                        <div
                            className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="3zeujd4"
                        ></div>
                        <div
                            className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid=":ldiuvt"
                        ></div>
                        <div
                            className="absolute -bottom-20 right-1/4 w-80 h-80 bg-[hsl(220,70%,65%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-3000"
                            data-oid="wix9420"
                        ></div>
                    </div>
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
                        data-oid="1471uf-"
                    >
                        <div className="grid md:grid-cols-2 gap-8 items-center" data-oid="9wu03-y">
                            <div className="block" data-oid=".to-mc:">
                                <div
                                    className="inline-block bg-blue-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-6 uppercase text-white"
                                    data-oid="371eg.8"
                                >
                                    India's most trusted Platform For Tech Freshers
                                </div>

                                <h1
                                    className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md"
                                    data-oid="6ggo-5o"
                                >
                                    JOIN THOUSANDS GETTING JOBS IN TOP TECH COMPANIES
                                </h1>

                                <p
                                    className="text-xl md:text-2xl mb-8 text-white"
                                    data-oid="a3j4am:"
                                >
                                    Discover Jobs, Internships, and Resources tailored for Freshers
                                </p>

                                <div className="flex flex-wrap gap-4 mt-10" data-oid="elzh:2-">
                                    <a
                                        href="/register"
                                        className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 rounded-md font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                                        data-oid="e:d2ed."
                                    >
                                        Join Community
                                        <svg
                                            className="ml-2 h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="dx:kdy4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                data-oid="4kl95h1"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="block relative" data-oid=":.2xqm:">
                                <div
                                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl transform hover:scale-[1.01] transition-all duration-500 relative z-10"
                                    data-oid="jexm-mh"
                                >
                                    <div className="mb-6" data-oid="rw48:sf">
                                        <form
                                            onSubmit={handleSearch}
                                            className="flex relative z-10 transform transition-all duration-500 hover:scale-[1.02]"
                                            data-oid="w48hgy1"
                                        >
                                            <input
                                                type="text"
                                                placeholder="Search Entry Level Jobs..."
                                                className="w-full px-4 py-3 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                data-oid="na2uyd2"
                                            />

                                            <button
                                                type="submit"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(175,70%,41%)] hover:to-[hsl(196,80%,45%)] px-6 py-3 rounded-r-md font-medium transition-all duration-300 shadow-lg"
                                                data-oid="zn9_0oh"
                                            >
                                                SEARCH
                                            </button>
                                        </form>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mb-6" data-oid="0ymd0j1">
                                        <div
                                            className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/30 text-white font-medium"
                                            data-oid="2l6vx36"
                                        >
                                            {stats?.freshers.toLocaleString()} Freshers
                                        </div>
                                        <div
                                            className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/30 text-white font-medium"
                                            data-oid="cu-89tm"
                                        >
                                            {stats?.verifiedJobs} Verified Jobs
                                        </div>
                                        <div
                                            className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/30 text-white font-medium"
                                            data-oid="mf6wlsf"
                                        >
                                            Entry-Level Focused
                                        </div>
                                    </div>

                                    <div
                                        className="absolute -bottom-3 -right-3 w-20 h-20 bg-[hsl(196,80%,65%)] opacity-60 rounded-full blur-xl"
                                        data-oid="iglkzqm"
                                    ></div>
                                    <div
                                        className="absolute -top-3 -left-3 w-20 h-20 bg-[hsl(175,70%,61%)] opacity-60 rounded-full blur-xl"
                                        data-oid="2skgnfo"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Platform Stats Section */}
                <section
                    className="py-16 bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
                    data-oid="0idn62r"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="tx24vwz">
                        <h2
                            className="text-3xl font-bold text-center mb-12 text-gray-800"
                            data-oid="1isp1s0"
                        >
                            Platform Metrics
                        </h2>
                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                            data-oid="j5u3qdf"
                        >
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="_r5bh:4"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="k7ep0lv"
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
                                        data-oid="6xgf803"
                                    >
                                        <path
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            data-oid="crpm7js"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="ujxs4yr"
                                >
                                    Active Members
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="gfmu68.">
                                    {stats?.activeMembers.toLocaleString()} growing community
                                    members
                                </p>
                                <a
                                    href="/community"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="bdu285m"
                                >
                                    Join Now
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="zq-7c6j"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="630.8_b"
                                        ></path>
                                    </svg>
                                </a>
                            </div>

                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="zuhs5um"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="475uu.9"
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
                                        data-oid="u549rld"
                                    >
                                        <path
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            data-oid="ne0hynn"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="166zhrk"
                                >
                                    Posted Jobs
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="9q-q291">
                                    {stats?.postedJobs} Jobs posted till now
                                </p>
                                <a
                                    href="/jobs"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="eio2lqs"
                                >
                                    See Jobs
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="x:ddvxc"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="-yndfuw"
                                        ></path>
                                    </svg>
                                </a>
                            </div>

                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="f.x7foz"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="ew1718r"
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
                                        data-oid="shcmp_a"
                                    >
                                        <path
                                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                                            data-oid="gnmt7j_"
                                        ></path>
                                        <rect
                                            x="2"
                                            y="9"
                                            width="4"
                                            height="12"
                                            data-oid="cfdg-nv"
                                        ></rect>
                                        <circle cx="4" cy="4" r="2" data-oid="h1aj6k1"></circle>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="1voifwu"
                                >
                                    LinkedIn
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="o3jhy-n">
                                    {stats?.linkedInFollowers} professional followers
                                </p>
                                <a
                                    href="/linkedin"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="igfcejb"
                                >
                                    Connect
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="8oc:et5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="f00721d"
                                        ></path>
                                    </svg>
                                </a>
                            </div>

                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="q0qrugq"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="e71s7ny"
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
                                        data-oid="tx6q0j."
                                    >
                                        <path
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            data-oid="gk2_-pr"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="6kkw1fs"
                                >
                                    Registered Users
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="_hm.m8w">
                                    {stats?.users.toLocaleString()} active accounts
                                </p>
                                <Link
                                    href="/register"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="06wv6lq"
                                >
                                    Join Now
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="k6-.nr3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid=".wgjx_5"
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
                    data-oid="dinia0r"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="-p0i_pz">
                        <div className="text-center mb-12" data-oid="8-d40kj">
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="u8845v:"
                            >
                                Why Choose CareerX
                            </h2>
                            <p className="text-xl text-blue-800" data-oid="if7sab.">
                                Designed Exclusively For Tech Freshers
                            </p>
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto" data-oid="x6yf0q1">
                                Our platform focuses on the unique needs of entry-level tech talent.
                            </p>
                        </div>

                        {/* Full-Width Banner */}
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white p-6 rounded-xl mb-12 shadow-lg transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group"
                            data-oid="wo6g.w9"
                        >
                            {/* Animated shine effect */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shine transition-opacity duration-300"
                                data-oid="q3_nrce"
                            ></div>
                            {/* Frosted glass overlay */}
                            <div
                                className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"
                                data-oid="zry-_z9"
                            ></div>
                            <div
                                className="flex flex-col md:flex-row items-center justify-between relative z-10"
                                data-oid="s:n-vgw"
                            >
                                <div data-oid="l6t-e9v">
                                    <h3 className="text-2xl font-bold mb-2" data-oid="qs27njv">
                                        NOTIFY X
                                    </h3>
                                    <p className="text-blue-100" data-oid="5vu7_2e">
                                        Get real-time alerts for freshers jobs matching your profile
                                    </p>
                                </div>
                                <a
                                    href="/notify"
                                    className="mt-4 md:mt-0 px-6 py-2 bg-white text-blue-800 rounded-md font-medium hover:bg-blue-50 transition-all duration-300"
                                    data-oid="o9i2j2p"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* Benefits Cards */}
                        <div className="grid md:grid-cols-3 gap-8" data-oid="g:if5kb">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={benefit.id}
                                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)]"
                                    data-oid="pm:thh2"
                                >
                                    <div
                                        className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                        data-oid="x3f7vfo"
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
                                                data-oid="ac53cum"
                                            >
                                                <path
                                                    d="M22 10v6M2 10l10-5 10 5-10 5z"
                                                    data-oid="mjkt0j3"
                                                ></path>
                                                <path
                                                    d="M6 12v5c3 3 9 3 12 0v-5"
                                                    data-oid="l9.jh2w"
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
                                                data-oid="7tabxp."
                                            >
                                                <path
                                                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                                    data-oid="7yaqk83"
                                                ></path>
                                                <path d="m9 12 2 2 4-4" data-oid="vourq8d"></path>
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
                                                data-oid="5aanfp1"
                                            >
                                                <path
                                                    d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"
                                                    data-oid="ph.e.vx"
                                                ></path>
                                                <path
                                                    d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l2.26-2.21a2.13 2.13 0 0 1 3 0h0a2.13 2.13 0 0 1 0 3l-2.26 2.21"
                                                    data-oid="f_qg0v5"
                                                ></path>
                                            </svg>
                                        )}
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="2vpv.q:"
                                    >
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600" data-oid="h2ro4hs">
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
                    data-oid="8amwroe"
                >
                    {/* Subtle animated background elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-20" data-oid="krgux16">
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="lj7rdat"
                        ></div>
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="ylf.vhb"
                        ></div>
                    </div>
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                        data-oid="kizilfi"
                    >
                        <div className="text-center mb-12" data-oid="2.8r3dy">
                            <h2
                                className="text-4xl font-bold mb-4 text-gray-800 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] inline-block text-transparent bg-clip-text"
                                data-oid="ocb6p-6"
                            >
                                NotifyX
                            </h2>
                            <p
                                className="text-2xl font-semibold mb-2 text-gray-700"
                                data-oid="txoiv4e"
                            >
                                Get Real-time Tech Job Alerts for just ₹49/month.
                            </p>
                            <p
                                className="text-xl text-gray-600 max-w-4xl mx-auto"
                                data-oid="rw.bd_s"
                            >
                                Unlock Curated Opportunities, Insider Updates, and a driven
                                Community — All for less than a Cup of Coffee. Supercharge your
                                Career, starting Today.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="5offq90">
                            {/* Tile 1 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] text-center"
                                data-oid="19.dyic"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="4vln.p2"
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
                                        data-oid="z45oho:"
                                    >
                                        <path
                                            d="M22 12h-4l-3 9L9 3l-3 9H2"
                                            data-oid="rg5e3qs"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="y._oia3"
                                >
                                    Instant Access
                                </h3>
                                <p className="text-gray-600" data-oid="v4xlv.0">
                                    Get immediate access to the latest tech job opportunities as
                                    soon as they're posted.
                                </p>
                            </div>

                            {/* Tile 2 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] text-center"
                                data-oid="fr3ywz7"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="zm-t3q_"
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
                                        data-oid="93l.j6e"
                                    >
                                        <path
                                            d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                                            data-oid="r8u-uhp"
                                        ></path>
                                        <path
                                            d="M13.73 21a2 2 0 0 1-3.46 0"
                                            data-oid="5xgv:xb"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="zeuw28u"
                                >
                                    Real-Time Alerts
                                </h3>
                                <p className="text-gray-600" data-oid="24wn1bp">
                                    Stay ahead with personalized notifications that match your
                                    skills and preferences.
                                </p>
                            </div>

                            {/* Tile 3 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] text-center"
                                data-oid="xpi:mot"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="7pbmrf7"
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
                                        data-oid="l1gzr.."
                                    >
                                        <path
                                            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                                            data-oid="5-hdm63"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="rq0wz7r"
                                >
                                    Fast-Track Your Career
                                </h3>
                                <p className="text-gray-600" data-oid="q0gq_9o">
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
                    data-oid="2c957_r"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-30" data-oid=".to6y77">
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="hynbd1w"
                        ></div>
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="ettxkfk"
                        ></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="-c2j9zm">
                        <div className="text-center mb-12" data-oid="lwv2ud1">
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="_7jlfwb"
                            >
                                Join 35,000+ Tech Freshers
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid="gn3eij.">
                                Networking is crucial. Connect with peers and mentors.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-oid="llowoau">
                            <a
                                href="/whatsapp"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-green-500"
                                data-oid="9wi.r3o"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full mb-4"
                                    data-oid="uon-3i7"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="nbf741z"
                                    >
                                        <path
                                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                            data-oid="k41zp4m"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="frvu2pz"
                                >
                                    WhatsApp
                                </h3>
                                <p className="text-gray-600" data-oid="ueyz9vd">
                                    {stats?.whatsappMembers.toLocaleString()} members
                                </p>
                            </a>

                            <a
                                href="/linkedin"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-blue-600"
                                data-oid="5gqx9_7"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4"
                                    data-oid="sp0yrkf"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="qjtg24x"
                                    >
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                            data-oid="rq0ck2b"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="2hkn:gq"
                                >
                                    LinkedIn
                                </h3>
                                <p className="text-gray-600" data-oid="kldttw2">
                                    {stats?.linkedinMembers.toLocaleString()} followers
                                </p>
                            </a>

                            <a
                                href="/telegram"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-blue-500"
                                data-oid="uz7l91h"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mb-4"
                                    data-oid="4lbgc95"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="2uc.vvx"
                                    >
                                        <path
                                            d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                            data-oid="s5cfb9t"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="re1bpdz"
                                >
                                    Telegram
                                </h3>
                                <p className="text-gray-600" data-oid="wz3yekv">
                                    {stats?.telegramMembers.toLocaleString()} members
                                </p>
                            </a>

                            <a
                                href="/instagram"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-purple-600"
                                data-oid="qo4k7:d"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-purple-600 to-pink-500 text-white rounded-full mb-4"
                                    data-oid="o40:j83"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="e9syjpu"
                                    >
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                            data-oid="0arng2b"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="7b6l6g."
                                >
                                    Instagram
                                </h3>
                                <p className="text-gray-600" data-oid="ulz3s50">
                                    Follow us
                                </p>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Featured Jobs Section */}
                <section
                    className="py-16 bg-gradient-to-r from-[hsl(210,60%,92%)] via-[hsl(196,70%,90%)] to-[hsl(175,60%,92%)] relative overflow-hidden"
                    data-oid="slnvrr3"
                >
                    {/* Subtle animated background elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-20" data-oid="o3tflbn">
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="qv3c0j9"
                        ></div>
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="ob3kjy0"
                        ></div>
                    </div>

                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                        data-oid="9a9gk-d"
                    >
                        <div className="text-center mb-12" data-oid="q5bokvi">
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="qry6tvn"
                            >
                                Featured Jobs
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid="y.d5e-c">
                                Handpicked opportunities for freshers in top tech companies
                            </p>
                        </div>

                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            data-oid=".epv0o2"
                        >
                            {/* Job Card 1 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                                data-oid="kbr87:-"
                            >
                                <div className="p-6" data-oid="-ts0k-u">
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid="d5og7gq"
                                    >
                                        <div
                                            className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600"
                                            data-oid="i3jmxl2"
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
                                                data-oid="eh_g8w9"
                                            >
                                                <rect
                                                    x="2"
                                                    y="7"
                                                    width="20"
                                                    height="14"
                                                    rx="2"
                                                    ry="2"
                                                    data-oid="7yvhixn"
                                                ></rect>
                                                <path
                                                    d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                                    data-oid="im87i42"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span
                                            className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            data-oid="rvl_ld-"
                                        >
                                            New
                                        </span>
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="9ynag38"
                                    >
                                        Frontend Developer
                                    </h3>
                                    <p
                                        className="text-blue-700 font-medium mb-3"
                                        data-oid="mp76-y-"
                                    >
                                        Microsoft
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="3cqkgxc">
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="9e21c1h"
                                        >
                                            React
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="_bdfz.."
                                        >
                                            TypeScript
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="ochn5nm"
                                        >
                                            Remote
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="0:zqd5_"
                                    >
                                        <span className="text-gray-600" data-oid=":xur7wn">
                                            ₹5-8 LPA
                                        </span>
                                        <div className="flex gap-2" data-oid="rph7yzb">
                                            <a
                                                href="/jobs/view-details/microsoft/frontend-developer"
                                                className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300 text-sm"
                                                data-oid="xqjb89w"
                                            >
                                                View Details
                                                <svg
                                                    className="ml-1 h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="swl5lg9"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        data-oid="o_ku2fj"
                                                    />

                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        data-oid=".014o1q"
                                                    />
                                                </svg>
                                            </a>
                                            <a
                                                href="/jobs/apply/microsoft/frontend-developer"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white px-3 py-1 rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 text-sm inline-flex items-center gap-1"
                                                data-oid="n:t5ph2"
                                            >
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="dh-0saq"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        data-oid="7pacfv-"
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
                                data-oid="740sshi"
                            >
                                <div className="p-6" data-oid="rjwg8:k">
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid="99mngx0"
                                    >
                                        <div
                                            className="w-12 h-12 bg-orange-100 rounded-md flex items-center justify-center text-orange-600"
                                            data-oid="ht5awfc"
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
                                                data-oid="h9vdlfp"
                                            >
                                                <path
                                                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                                    data-oid="js_5xox"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span
                                            className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            data-oid="9_a1k9y"
                                        >
                                            Featured
                                        </span>
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="oeqyquz"
                                    >
                                        Backend Engineer
                                    </h3>
                                    <p
                                        className="text-blue-700 font-medium mb-3"
                                        data-oid="5w-v:rb"
                                    >
                                        Amazon
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="l7-26y5">
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="jmqrcwp"
                                        >
                                            Java
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="7ayhcrv"
                                        >
                                            Spring Boot
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid=".4ma9k-"
                                        >
                                            Hybrid
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="t3bqsid"
                                    >
                                        <span className="text-gray-600" data-oid="1e3rmms">
                                            ₹8-12 LPA
                                        </span>
                                        <div className="flex gap-2" data-oid="fkqa9g:">
                                            <a
                                                href="/jobs/view-details/amazon/backend-engineer"
                                                className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300 text-sm"
                                                data-oid="i0_9hbk"
                                            >
                                                View Details
                                                <svg
                                                    className="ml-1 h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="c4tc:fk"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        data-oid="ke.t4xc"
                                                    />

                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        data-oid="8bibbq2"
                                                    />
                                                </svg>
                                            </a>
                                            <a
                                                href="/jobs/apply/amazon/backend-engineer"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white px-3 py-1 rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 text-sm inline-flex items-center gap-1"
                                                data-oid="ke3vg:0"
                                            >
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="relpkcg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        data-oid="pyajchk"
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
                                data-oid="nt2rn4b"
                            >
                                <div className="p-6" data-oid="2a:.s5l">
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid="qy7i79a"
                                    >
                                        <div
                                            className="w-12 h-12 bg-green-100 rounded-md flex items-center justify-center text-green-600"
                                            data-oid="5898h:h"
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
                                                data-oid="w8ytcf0"
                                            >
                                                <polyline
                                                    points="16 18 22 12 16 6"
                                                    data-oid="23rg4m5"
                                                ></polyline>
                                                <polyline
                                                    points="8 6 2 12 8 18"
                                                    data-oid="f_fjypv"
                                                ></polyline>
                                            </svg>
                                        </div>
                                        <span
                                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            data-oid="h:61icl"
                                        >
                                            Hot
                                        </span>
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="b2m._m_"
                                    >
                                        Full Stack Developer
                                    </h3>
                                    <p
                                        className="text-blue-700 font-medium mb-3"
                                        data-oid="8csa3kx"
                                    >
                                        Google
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="4jl:4lx">
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="_gthp53"
                                        >
                                            React
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="5j0_yvw"
                                        >
                                            Node.js
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="epwj96q"
                                        >
                                            Onsite
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="diwju:q"
                                    >
                                        <span className="text-gray-600" data-oid="ldurr2j">
                                            ₹10-15 LPA
                                        </span>
                                        <div className="flex gap-2" data-oid="hr4ed8z">
                                            <a
                                                href="/jobs/view-details/google/full-stack-developer"
                                                className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300 text-sm"
                                                data-oid=":pjausu"
                                            >
                                                View Details
                                                <svg
                                                    className="ml-1 h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="krug_ug"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        data-oid="ye8_s88"
                                                    />

                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        data-oid="gx3r75_"
                                                    />
                                                </svg>
                                            </a>
                                            <a
                                                href="/jobs/apply/google/full-stack-developer"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white px-3 py-1 rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 text-sm inline-flex items-center gap-1"
                                                data-oid="y4lsmju"
                                            >
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="jdttaq8"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        data-oid="o3tfwgy"
                                                    />
                                                </svg>
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-10" data-oid="xhdsi5x">
                            <a
                                href="/jobs"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                                data-oid="at4iice"
                            >
                                View All Jobs
                                <svg
                                    className="ml-2 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-oid="3m-jp4_"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        data-oid="zh3yuaa"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Fresher Resources */}
                <section
                    className="py-16 bg-gradient-to-b from-white to-[hsl(196,60%,95%)]"
                    data-oid="ofbn2pz"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="wakgh9d">
                        <div className="text-center mb-12" data-oid=".wtk3xd">
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid=":tidf55"
                            >
                                Fresher Resources
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid="3dbs5jr">
                                Everything You Need to Succeed
                            </p>
                        </div>

                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            data-oid="8bfnfvk"
                        >
                            {resources.map((resource, index) => (
                                <div
                                    key={resource.id}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)]"
                                    data-oid="5twwkcc"
                                >
                                    <div className="p-6" data-oid="ja-kt86">
                                        <div
                                            className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                            data-oid="u5h5k-l"
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
                                                    data-oid=":w-hzxv"
                                                >
                                                    <path d="M3 3v18h18" data-oid="v1a9csf"></path>
                                                    <path d="M18 17V9" data-oid=":k_gmi6"></path>
                                                    <path d="M13 17V5" data-oid="sg30zk0"></path>
                                                    <path d="M8 17v-3" data-oid="a8h0zkj"></path>
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
                                                    data-oid="o13-2wv"
                                                >
                                                    <circle
                                                        cx="11"
                                                        cy="11"
                                                        r="8"
                                                        data-oid="905dc91"
                                                    ></circle>
                                                    <path
                                                        d="m21 21-4.3-4.3"
                                                        data-oid="npw2chu"
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
                                                    data-oid="b_2y5vj"
                                                >
                                                    <path
                                                        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                                                        data-oid="4sa9ynl"
                                                    ></path>
                                                    <circle
                                                        cx="9"
                                                        cy="7"
                                                        r="4"
                                                        data-oid="a0gzpuq"
                                                    ></circle>
                                                    <path
                                                        d="M22 21v-2a4 4 0 0 0-3-3.87"
                                                        data-oid="zdotxna"
                                                    ></path>
                                                    <path
                                                        d="M16 3.13a4 4 0 0 1 0 7.75"
                                                        data-oid="jp9z15w"
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
                                                    data-oid="8pnvkrn"
                                                >
                                                    <path
                                                        d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                                                        data-oid="p:eqp4z"
                                                    ></path>
                                                    <polyline
                                                        points="14 2 14 8 20 8"
                                                        data-oid="o39tr87"
                                                    ></polyline>
                                                    <line
                                                        x1="16"
                                                        y1="13"
                                                        x2="8"
                                                        y2="13"
                                                        data-oid="rbuzdk4"
                                                    ></line>
                                                    <line
                                                        x1="16"
                                                        y1="17"
                                                        x2="8"
                                                        y2="17"
                                                        data-oid="1a815.j"
                                                    ></line>
                                                    <line
                                                        x1="10"
                                                        y1="9"
                                                        x2="8"
                                                        y2="9"
                                                        data-oid="k1eymfe"
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
                                                    data-oid=":2n_bta"
                                                >
                                                    <path d="M3 3v18h18" data-oid="lqhy-qq"></path>
                                                    <path
                                                        d="m3 10 5 3 4-6 5 7"
                                                        data-oid="c3ywn3h"
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
                                                    data-oid="zibo-xy"
                                                >
                                                    <path
                                                        d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                                                        data-oid="piv:ivu"
                                                    ></path>
                                                    <path d="M18 14h-8" data-oid="1smct5d"></path>
                                                    <path d="M15 18h-5" data-oid="_xm9afa"></path>
                                                    <path
                                                        d="M10 6h8v4h-8z"
                                                        data-oid="1ok53ep"
                                                    ></path>
                                                </svg>
                                            )}
                                        </div>
                                        <h3
                                            className="text-xl font-bold mb-2 text-gray-800"
                                            data-oid="njfs931"
                                        >
                                            {resource.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4" data-oid="8lzznas">
                                            {resource.description}
                                        </p>
                                        <a
                                            href={`/resources/${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                            data-oid="ven.wx1"
                                        >
                                            Learn more
                                            <svg
                                                className="ml-1 h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                data-oid="ucax50e"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    data-oid="jb-ln0u"
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
                    data-oid="gr2zo9h"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden" data-oid="sz4csml">
                        <div
                            className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="3.utaa1"
                        ></div>
                        <div
                            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-30 rounded-full blur-3xl animate-blob"
                            data-oid="_7djw7-"
                        ></div>
                    </div>
                    {/* Frosted glass overlay */}
                    <div
                        className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"
                        data-oid="-k5tgcd"
                    ></div>
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                        data-oid="h6-rrc8"
                    >
                        <div className="text-center mb-12" data-oid="r3fawlw">
                            <h2 className="text-3xl font-bold mb-4" data-oid="q0fmsmk">
                                Hear From Our Members
                            </h2>
                            <p className="text-blue-100 max-w-2xl mx-auto" data-oid="10jd_pv">
                                Success stories from freshers who found their dream tech jobs
                            </p>
                        </div>

                        {/* Auto-scrolling testimonial carousel */}
                        <div className="relative overflow-hidden py-8" data-oid="1y.550b">
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
                                data-oid="ave6njo"
                            >
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="bg-white/90 backdrop-blur-md text-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-white/20 w-[280px] h-[180px] flex-shrink-0 flex flex-col"
                                        data-oid="18:e5s0"
                                    >
                                        <div className="flex items-center mb-2" data-oid="e8g_9n8">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-10 h-10 rounded-full mr-3 object-cover"
                                                data-oid="pw_jfux"
                                            />

                                            <div data-oid="-rb5cy-">
                                                <h3
                                                    className="font-bold text-gray-800 text-sm"
                                                    data-oid="6cm3qg3"
                                                >
                                                    {testimonial.name}
                                                </h3>
                                                <p
                                                    className="text-blue-700 text-xs"
                                                    data-oid="a7j.8d:"
                                                >
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                        <p
                                            className="text-gray-600 italic flex-grow overflow-y-auto text-sm"
                                            data-oid="m6uw7-q"
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
                                        data-oid="o7r0g-c"
                                    >
                                        <div className="flex items-center mb-2" data-oid="n8oslsp">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-10 h-10 rounded-full mr-3 object-cover"
                                                data-oid="am-hsq1"
                                            />

                                            <div data-oid="ibhhlqp">
                                                <h3
                                                    className="font-bold text-gray-800 text-sm"
                                                    data-oid="uis7fgv"
                                                >
                                                    {testimonial.name}
                                                </h3>
                                                <p
                                                    className="text-blue-700 text-xs"
                                                    data-oid="qpys49_"
                                                >
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                        <p
                                            className="text-gray-600 italic flex-grow overflow-y-auto text-sm"
                                            data-oid="5su0lyt"
                                        >
                                            "{testimonial.quote}"
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-8" data-oid="z2cd7z_"></div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section
                    className="py-16 bg-white text-[hsl(196,80%,45%)] relative overflow-hidden"
                    data-oid="d87wop2"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-30" data-oid="9aa9vi.">
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="8tco-xi"
                        ></div>
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="5riel19"
                        ></div>
                    </div>
                    <div
                        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                        data-oid="0c2xbg8"
                    >
                        <p className="text-[hsl(196,80%,65%)] mb-2" data-oid="jjxzo44">
                            Start Your Tech Journey Today
                        </p>
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
                            data-oid="r55x:3y"
                        >
                            Ready to Land Your First Tech Job?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8" data-oid="_k3f3dz">
                            Join 35,000+ freshers who've launched their careers with us
                        </p>
                        <div
                            className="flex flex-col sm:flex-row justify-center gap-4"
                            data-oid="r520un6"
                        >
                            <Link
                                href="/register"
                                className="px-8 py-4 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-md font-bold text-lg hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse-shadow relative z-10"
                                data-oid="4-.bz3_"
                            >
                                Create Free Account →
                            </Link>
                            <Link
                                href="/fresher-jobs"
                                className="px-8 py-4 border-2 border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-md font-bold text-lg hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg transform hover:scale-105 relative z-10"
                                data-oid="r87ggu_"
                            >
                                Browse Fresher Jobs
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-950 text-white" data-oid="yo2hva.">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="ilae6c-">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="fwtyhl3">
                        <div data-oid="76ytaep">
                            <div className="mb-6" data-oid="vns9cu5">
                                <Logo data-oid="xog1500" />
                            </div>
                            <p className="text-gray-400 mb-4" data-oid="lmaszzf">
                                Helping tech freshers launch their careers with curated
                                opportunities and resources.
                            </p>
                            <div className="flex space-x-4" data-oid="i31:cks">
                                <a
                                    href="/linkedin"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    data-oid=":df936o"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="-utjamk"
                                    >
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                            data-oid="swlpc4u"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="/twitter"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    data-oid="_ilf:-b"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="ialb_xo"
                                    >
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                            data-oid="q1a:fgi"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="/instagram"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    data-oid="maurljc"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="_py:40w"
                                    >
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                            data-oid="8:5_292"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="qc8h1s1">
                            <h3 className="text-lg font-bold mb-4" data-oid="x6zkhdb">
                                Company
                            </h3>
                            <ul className="space-y-3" data-oid="qix04u2">
                                <li data-oid="nhv3q3n">
                                    <a
                                        href="/about"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="y07x5ez"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="ciiv2fk">
                                    <a
                                        href="/advertising"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="av:bars"
                                    >
                                        Advertising
                                    </a>
                                </li>
                                <li data-oid="tvgl18:">
                                    <a
                                        href="/contact"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="1qdvaw:"
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li data-oid=":o0sjo6">
                                    <a
                                        href="/careers"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="m.ye0:s"
                                    >
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="3a4r8gi">
                            <h3 className="text-lg font-bold mb-4" data-oid="8i_-oo4">
                                Resources
                            </h3>
                            <ul className="space-y-3" data-oid="o8fs25s">
                                <li data-oid=".blq76w">
                                    <a
                                        href="/tax-calculator"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="1ixebkb"
                                    >
                                        Tax Calculator
                                    </a>
                                </li>
                                <li data-oid="3mwgckh">
                                    <a
                                        href="/resume-review"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="g5t3xz8"
                                    >
                                        Resume Review
                                    </a>
                                </li>
                                <li data-oid="dkgup3l">
                                    <a
                                        href="/jobs-tracker"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="_1h:.px"
                                    >
                                        Jobs Tracker
                                    </a>
                                </li>
                                <li data-oid="y:5hi9p">
                                    <a
                                        href="/blog"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="pavmz7n"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="-_ts82w">
                            <h3 className="text-lg font-bold mb-4" data-oid="pw9-2i4">
                                Legal
                            </h3>
                            <ul className="space-y-3" data-oid="-cfkve7">
                                <li data-oid="84u1jhe">
                                    <a
                                        href="/privacy-policy"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="17zr5aa"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li data-oid="6m775ud">
                                    <a
                                        href="/terms"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="apb2md5"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                                <li data-oid="dk7ub0i">
                                    <a
                                        href="/refunds"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="cg1:h_7"
                                    >
                                        Refund Policy
                                    </a>
                                </li>
                                <li data-oid="4bihipa">
                                    <a
                                        href="/shipping-policy"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="x7gwobp"
                                    >
                                        Shipping Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                        data-oid="wdyx_o0"
                    >
                        <p className="mb-2" data-oid="3w:mqxq">
                            © {new Date().getFullYear()} CareerX. All rights reserved.
                        </p>
                        <p data-oid="zyqf0-_">Built with ❤️ by BitHive Technologies</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
