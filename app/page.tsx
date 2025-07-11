'use client';
import MainNavbar from '@/components/mainNavbar';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuthAction } from '@/lib/auth/useAuthAction';

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
        { id: 4, title: 'Resume Builder', description: 'Get ATS friendly Resume', icon: 'file' },
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

// SVG Logo component
const Logo = () => (
    <svg
        className="h-8 w-auto"
        viewBox="0 0 120 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-oid="6g8ar7h"
    >
        <path
            d="M10 5L20 15L10 25"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="3vs-shf"
        />

        <path
            d="M30 5H40L50 25H40"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="2bjyc3:"
        />

        <text
            x="60"
            y="22"
            fontFamily="Arial"
            fontSize="18"
            fontWeight="bold"
            fill="#1E3A8A"
            data-oid="8own87j"
        >
            Careers
        </text>
    </svg>
);

export default function Page() {
    const [searchQuery, setSearchQuery] = useState('');
    const [stats, setStats] = useState<Stats | null>(null);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [resources, setResources] = useState<Resource[]>([]);
    const [features, setFeatures] = useState<Feature[]>([]);
    const [benefits, setBenefits] = useState<Benefit[]>([]);
    const { navigateWithAuth } = useAuthAction();

    // Add custom CSS for animations
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            @keyframes ring {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(10deg); }
                75% { transform: rotate(-10deg); }
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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="wp5:05g">
            {' '}
            {/* Sticky Navbar */}{' '}
            <header
                className="sticky top-0 z-50 bg-gradient-to-r from-blue-200/90 via-blue-300/90 to-blue-200/90 backdrop-blur-md shadow-sm border-b border-blue-300/70"
                data-oid="hxe9dok"
            >
                {' '}
                <MainNavbar data-oid="b_ytz8n" /> {/* Sub-Navbar */}{' '}
                <div
                    className="bg-gradient-to-r from-[hsl(196,70%,92%)]/90 via-[hsl(210,70%,90%)]/90 to-[hsl(196,70%,92%)]/90 backdrop-blur-sm border-t border-[hsl(210,40%,90%)]"
                    data-oid="y3nrafk"
                >
                    {' '}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="-69hhz3">
                        {' '}
                        <div
                            className="flex flex-wrap items-center justify-between py-2 text-sm"
                            data-oid="1m1796b"
                        >
                            {' '}
                            <div
                                className="flex flex-wrap items-center space-x-4"
                                data-oid="qrw10w-"
                            >
                                {' '}
                                <a
                                    href="/notify"
                                    className="bg-gradient-to-r from-blue-200 to-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:from-blue-300 hover:to-blue-200 shadow-sm flex items-center"
                                    data-oid="lt21oed"
                                >
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1 animate-[ring_1s_ease-in-out_infinite]"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        data-oid="i5kgpnn"
                                    >
                                        {' '}
                                        <path
                                            d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                                            data-oid="4r-gj6m"
                                        ></path>{' '}
                                        <path
                                            d="M13.73 21a2 2 0 0 1-3.46 0"
                                            data-oid="r868tgh"
                                        ></path>{' '}
                                    </svg>{' '}
                                    NOTIFY X{' '}
                                </a>{' '}
                            </div>{' '}
                            <div className="flex items-center space-x-3 sm:mt-0" data-oid="k6eepkc">
                                {' '}
                                {/* Mobile view - compact icons */}{' '}
                                <div
                                    className="flex sm:hidden items-center space-x-2"
                                    data-oid="h-01ttr"
                                >
                                    {' '}
                                    <a
                                        href="/telegram"
                                        className="inline-flex items-center justify-center w-7 h-7 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-all duration-300"
                                        title="Join Telegram Community"
                                        data-oid="uh0boge"
                                    >
                                        {' '}
                                        <svg
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="gc7e-rg"
                                        >
                                            {' '}
                                            <path
                                                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                                data-oid="b1.h1tf"
                                            ></path>{' '}
                                        </svg>{' '}
                                    </a>{' '}
                                    <a
                                        href="/whatsapp"
                                        className="inline-flex items-center justify-center w-7 h-7 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300"
                                        title="Join WhatsApp Community"
                                        data-oid="1:1bicz"
                                    >
                                        {' '}
                                        <svg
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="8o:up39"
                                        >
                                            {' '}
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                                data-oid="32-ipdt"
                                            ></path>{' '}
                                        </svg>{' '}
                                    </a>{' '}
                                </div>{' '}
                                {/* Desktop view - original buttons */}{' '}
                                <div
                                    className="hidden sm:flex items-center space-x-3"
                                    data-oid="9_vh4ea"
                                >
                                    {' '}
                                    <a
                                        href="/telegram"
                                        className="inline-flex items-center px-3 py-1 bg-teal-500 hover:bg-teal-600 text-white text-xs font-medium rounded-md transition-all duration-300"
                                        data-oid="jog_-.-"
                                    >
                                        {' '}
                                        <svg
                                            className="h-4 w-4 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="8s:kfmm"
                                        >
                                            {' '}
                                            <path
                                                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                                data-oid="c2_y2ni"
                                            ></path>{' '}
                                        </svg>{' '}
                                        Join Telegram Community{' '}
                                    </a>{' '}
                                    <a
                                        href="/whatsapp"
                                        className="inline-flex items-center px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-md transition-all duration-300"
                                        data-oid="473:p05"
                                    >
                                        {' '}
                                        <svg
                                            className="h-4 w-4 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="_jgxsgt"
                                        >
                                            {' '}
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                                data-oid="u7k_wf7"
                                            ></path>{' '}
                                        </svg>{' '}
                                        Join WhatsApp Community{' '}
                                    </a>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                    </div>{' '}
                </div>{' '}
            </header>{' '}
            <main data-oid="rzwfc0o">
                {' '}
                {/* Hero Section */}{' '}
                <section
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white relative overflow-hidden"
                    data-oid="aq6-hr3"
                >
                    {' '}
                    {/* Animated background elements */}{' '}
                    <div className="absolute inset-0 overflow-hidden" data-oid="6g0dxg5">
                        {' '}
                        <div
                            className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob"
                            data-oid="ambd3av"
                        ></div>{' '}
                        <div
                            className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="o9_f88e"
                        ></div>{' '}
                        <div
                            className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="81994s5"
                        ></div>{' '}
                        <div
                            className="absolute -bottom-20 right-1/4 w-80 h-80 bg-[hsl(220,70%,65%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-3000"
                            data-oid="t:rus3g"
                        ></div>{' '}
                    </div>{' '}
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24"
                        data-oid="by08u-x"
                    >
                        {' '}
                        <div
                            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                            data-oid="6aywrti"
                        >
                            {' '}
                            <div
                                className="text-center lg:text-left order-2 lg:order-1"
                                data-oid="iccre4n"
                            >
                                {' '}
                                <div
                                    className="inline-block bg-blue-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4 sm:mb-6 uppercase text-white"
                                    data-oid="sjc-dts"
                                >
                                    {' '}
                                    India's most trusted Platform For Tech Freshers{' '}
                                </div>{' '}
                                <h1
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-md leading-tight"
                                    data-oid=".vfbeuv"
                                >
                                    {' '}
                                    JOIN THOUSANDS GETTING JOBS IN TOP TECH COMPANIES{' '}
                                </h1>{' '}
                                <p
                                    className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90"
                                    data-oid="f3-eg-k"
                                >
                                    {' '}
                                    Discover Jobs, Internships, and Resources tailored for
                                    Freshers{' '}
                                </p>{' '}
                                <div
                                    className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-10 justify-center lg:justify-start"
                                    data-oid="-2p0qoa"
                                >
                                    {' '}
                                    <button
                                        onClick={() => navigateWithAuth('/community')}
                                        className="inline-flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 rounded-md font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg text-white"
                                        data-oid="67cv_h4"
                                    >
                                        {' '}
                                        Join Community{' '}
                                        <svg
                                            className="ml-2 h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="wisz:ys"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                data-oid="1o2nj.0"
                                            ></path>{' '}
                                        </svg>{' '}
                                    </button>{' '}
                                    <div className="relative group" data-oid="64ijo5v">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                console.log('Browse Jobs button clicked!'); // Debug log
                                                try {
                                                    // Multiple fallback methods
                                                    if (typeof window !== 'undefined') {
                                                        // Method 1: Direct navigation
                                                        window.location.href = '/jobs';
                                                    }
                                                } catch (error) {
                                                    console.error('Navigation error:', error);
                                                    // Method 2: Fallback
                                                    try {
                                                        window.open('/jobs', '_self');
                                                    } catch (fallbackError) {
                                                        console.error(
                                                            'Fallback navigation error:',
                                                            fallbackError,
                                                        );
                                                        // Method 3: Last resort
                                                        document.location.href = '/jobs';
                                                    }
                                                }
                                            }}
                                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-[hsl(196,80%,45%)] hover:bg-gray-50 rounded-md font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg cursor-pointer border-2 border-transparent hover:border-[hsl(196,80%,45%)]/20 active:scale-95 group-hover:shadow-xl"
                                            type="button"
                                            data-oid="u431.1a"
                                        >
                                            <svg
                                                className="mr-2 h-5 w-5 transition-transform group-hover:scale-110"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                data-oid="htp87xe"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                                                    data-oid="mtgjsco"
                                                />
                                            </svg>
                                            Browse Jobs
                                        </button>
                                        {/* Fallback link for accessibility and SEO */}
                                        <a
                                            href="/jobs"
                                            className="absolute inset-0 opacity-0 pointer-events-none"
                                            aria-label="Browse Jobs"
                                            tabIndex={-1}
                                            data-oid="vf.kvqc"
                                        >
                                            Browse Jobs
                                        </a>
                                    </div>{' '}
                                </div>{' '}
                            </div>{' '}
                            <div className="relative order-1 lg:order-2" data-oid="71i_8no">
                                {' '}
                                <div
                                    className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl transform hover:scale-[1.01] transition-all duration-500 relative z-10"
                                    data-oid="93vtz_v"
                                >
                                    {' '}
                                    <div className="mb-4 sm:mb-6" data-oid=":5_cy-d">
                                        {' '}
                                        <form
                                            onSubmit={handleSearch}
                                            className="flex flex-col sm:flex-row gap-3 sm:gap-0 relative z-10 transform transition-all duration-500 hover:scale-[1.02]"
                                            data-oid="hz9ryne"
                                        >
                                            {' '}
                                            <input
                                                type="text"
                                                placeholder="Search Entry Level Jobs..."
                                                className="w-full px-4 py-3 rounded-md sm:rounded-l-md sm:rounded-r-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner text-sm sm:text-base"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                data-oid="gz:jftg"
                                            />{' '}
                                            <button
                                                type="submit"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(175,70%,41%)] hover:to-[hsl(196,80%,45%)] px-6 py-3 rounded-md sm:rounded-l-none sm:rounded-r-md font-medium transition-all duration-300 shadow-lg text-white text-sm sm:text-base"
                                                data-oid="7g499s."
                                            >
                                                {' '}
                                                SEARCH{' '}
                                            </button>{' '}
                                        </form>{' '}
                                    </div>{' '}
                                    <div
                                        className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 justify-center"
                                        data-oid="yecscms"
                                    >
                                        {' '}
                                        <div
                                            className="bg-white/20 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/30 text-white font-medium"
                                            data-oid="c2a7c1g"
                                        >
                                            {' '}
                                            {stats?.freshers.toLocaleString()} Freshers{' '}
                                        </div>{' '}
                                        <div
                                            className="bg-white/20 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/30 text-white font-medium"
                                            data-oid="zz2-m-o"
                                        >
                                            {' '}
                                            {stats?.verifiedJobs} Verified Jobs{' '}
                                        </div>{' '}
                                        <div
                                            className="bg-white/20 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/30 text-white font-medium"
                                            data-oid="l2pnv8v"
                                        >
                                            {' '}
                                            Entry-Level Focused{' '}
                                        </div>{' '}
                                    </div>{' '}
                                    <div
                                        className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-[hsl(196,80%,65%)] opacity-60 rounded-full blur-xl"
                                        data-oid="vbayuga"
                                    ></div>{' '}
                                    <div
                                        className="absolute -top-3 -left-3 w-16 h-16 sm:w-20 sm:h-20 bg-[hsl(175,70%,61%)] opacity-60 rounded-full blur-xl"
                                        data-oid="o45g_bj"
                                    ></div>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                    </div>{' '}
                </section>{' '}
                {/* Platform Stats Section */}{' '}
                <section
                    className="py-16 bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
                    data-oid="8sqt026"
                >
                    {' '}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="fp690kv">
                        {' '}
                        <h2
                            className="text-3xl font-bold text-center mb-12 text-gray-800"
                            data-oid="oao5.vl"
                        >
                            {' '}
                            Platform Metrics{' '}
                        </h2>{' '}
                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                            data-oid="k8u29q:"
                        >
                            {' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="ip74-z-"
                            >
                                {' '}
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="zd8sq9c"
                                >
                                    {' '}
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
                                        data-oid="9zr3qhj"
                                    >
                                        {' '}
                                        <path
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            data-oid="0pf6::1"
                                        />{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="5salxl-"
                                >
                                    {' '}
                                    Active Members{' '}
                                </h3>{' '}
                                <p className="text-gray-600 mb-4" data-oid="znvin_i">
                                    {' '}
                                    {stats?.activeMembers.toLocaleString()} growing community
                                    members{' '}
                                </p>{' '}
                                <button
                                    onClick={() => navigateWithAuth('/community')}
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="o-d:mk_"
                                >
                                    {' '}
                                    Join Now{' '}
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid=":89z18k"
                                    >
                                        {' '}
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="dq19x:6"
                                        ></path>{' '}
                                    </svg>{' '}
                                </button>{' '}
                            </div>{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="249_yr1"
                            >
                                {' '}
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="7xa3mgs"
                                >
                                    {' '}
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
                                        data-oid="y8wnskf"
                                    >
                                        {' '}
                                        <path
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            data-oid="qhh4kil"
                                        />{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="b2hlhsx"
                                >
                                    {' '}
                                    Posted Jobs{' '}
                                </h3>{' '}
                                <p className="text-gray-600 mb-4" data-oid="gtlld_d">
                                    {' '}
                                    {stats?.postedJobs} Jobs posted till now{' '}
                                </p>{' '}
                                <Link
                                    href="/jobs"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="07sf0b."
                                >
                                    See Jobs
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="wtdun.h"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="e42q3m8"
                                        ></path>
                                    </svg>
                                </Link>{' '}
                            </div>{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="lcp9o85"
                            >
                                {' '}
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="-rr-xb4"
                                >
                                    {' '}
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
                                        data-oid="ubi-6.3"
                                    >
                                        {' '}
                                        <path
                                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                                            data-oid="1c80wjc"
                                        ></path>{' '}
                                        <rect
                                            x="2"
                                            y="9"
                                            width="4"
                                            height="12"
                                            data-oid="-p28glf"
                                        ></rect>{' '}
                                        <circle
                                            cx="4"
                                            cy="4"
                                            r="2"
                                            data-oid="10v55j6"
                                        ></circle>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="9bpx7b5"
                                >
                                    {' '}
                                    LinkedIn{' '}
                                </h3>{' '}
                                <p className="text-gray-600 mb-4" data-oid="208ii:8">
                                    {' '}
                                    {stats?.linkedInFollowers} professional followers{' '}
                                </p>{' '}
                                <a
                                    href="/linkedin"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="ixvj:s8"
                                >
                                    {' '}
                                    Connect{' '}
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="eulvr8_"
                                    >
                                        {' '}
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="tw1wt8b"
                                        ></path>{' '}
                                    </svg>{' '}
                                </a>{' '}
                            </div>{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="qyf.s1e"
                            >
                                {' '}
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="z3.nyu2"
                                >
                                    {' '}
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
                                        data-oid="0.hg-s."
                                    >
                                        {' '}
                                        <path
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            data-oid="j2vz0uy"
                                        />{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="ein.i4r"
                                >
                                    {' '}
                                    Registered Users{' '}
                                </h3>{' '}
                                <p className="text-gray-600 mb-4" data-oid="7u7zpq_">
                                    {' '}
                                    {stats?.users.toLocaleString()} active accounts{' '}
                                </p>{' '}
                                <Link
                                    href="/register"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="p_52cfi"
                                >
                                    {' '}
                                    Join Now{' '}
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="-8z159:"
                                    >
                                        {' '}
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid=".0mbara"
                                        ></path>{' '}
                                    </svg>{' '}
                                </Link>{' '}
                            </div>{' '}
                        </div>{' '}
                    </div>{' '}
                </section>{' '}
                {/* Why Choose CareerX */}{' '}
                <section
                    className="py-16 bg-gradient-to-b from-white to-[hsl(196,60%,95%)]"
                    data-oid="pmwti0t"
                >
                    {' '}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="-jq.rtv">
                        {' '}
                        <div className="text-center mb-12" data-oid="676qc-r">
                            {' '}
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="txiyizg"
                            >
                                {' '}
                                Why Choose CareerX{' '}
                            </h2>{' '}
                            <p className="text-xl text-blue-800" data-oid=".ih::ar">
                                {' '}
                                Designed Exclusively For Tech Freshers{' '}
                            </p>{' '}
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto" data-oid="8m.hnq5">
                                {' '}
                                Our platform focuses on the unique needs of entry-level tech
                                talent.{' '}
                            </p>{' '}
                        </div>{' '}
                        {/* Full-Width Banner */}{' '}
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white p-6 rounded-xl mb-12 shadow-lg transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group"
                            data-oid=".r3q.7k"
                        >
                            {' '}
                            {/* Animated shine effect */}{' '}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shine transition-opacity duration-300"
                                data-oid="c-764b-"
                            ></div>{' '}
                            {/* Frosted glass overlay */}{' '}
                            <div
                                className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"
                                data-oid="llzwoe2"
                            ></div>{' '}
                            <div
                                className="flex flex-col md:flex-row items-center justify-between relative z-10"
                                data-oid="t0.r8_t"
                            >
                                {' '}
                                <div data-oid="68:fn5l">
                                    {' '}
                                    <h3 className="text-2xl font-bold mb-2" data-oid="yuffthz">
                                        {' '}
                                        NOTIFY X{' '}
                                    </h3>{' '}
                                    <p className="text-blue-100" data-oid="o-woi:y">
                                        {' '}
                                        Get real-time alerts for freshers jobs matching your
                                        profile{' '}
                                    </p>{' '}
                                </div>{' '}
                                <a
                                    href="/notify"
                                    className="mt-4 md:mt-0 px-6 py-2 bg-white text-blue-800 rounded-md font-medium hover:bg-blue-50 transition-all duration-300"
                                    data-oid="x8japti"
                                >
                                    {' '}
                                    Learn More{' '}
                                </a>{' '}
                            </div>{' '}
                        </div>{' '}
                        {/* Benefits Cards */}{' '}
                        <div className="grid md:grid-cols-3 gap-8" data-oid="dz-:vqw">
                            {' '}
                            {benefits.map((benefit, index) => (
                                <div
                                    key={benefit.id}
                                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)]"
                                    data-oid="ynggek7"
                                >
                                    {' '}
                                    <div
                                        className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                        data-oid="3qc-5rw"
                                    >
                                        {' '}
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
                                                data-oid="zw6.s86"
                                            >
                                                {' '}
                                                <path
                                                    d="M22 10v6M2 10l10-5 10 5-10 5z"
                                                    data-oid="cy7lcgc"
                                                ></path>{' '}
                                                <path
                                                    d="M6 12v5c3 3 9 3 12 0v-5"
                                                    data-oid="3c2btka"
                                                ></path>{' '}
                                            </svg>
                                        )}{' '}
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
                                                data-oid="lyem:9x"
                                            >
                                                {' '}
                                                <path
                                                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                                    data-oid="wh.umbz"
                                                ></path>{' '}
                                                <path
                                                    d="m9 12 2 2 4-4"
                                                    data-oid="cqv.jr7"
                                                ></path>{' '}
                                            </svg>
                                        )}{' '}
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
                                                data-oid="vlupdlr"
                                            >
                                                {' '}
                                                <path
                                                    d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"
                                                    data-oid="ow8ib1a"
                                                ></path>{' '}
                                                <path
                                                    d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l2.26-2.21a2.13 2.13 0 0 1 3 0h0a2.13 2.13 0 0 1 0 3l-2.26 2.21"
                                                    data-oid="dl9m8-m"
                                                ></path>{' '}
                                            </svg>
                                        )}{' '}
                                    </div>{' '}
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="mbxws9q"
                                    >
                                        {' '}
                                        {benefit.title}{' '}
                                    </h3>{' '}
                                    <p className="text-gray-600" data-oid="7n3k0qc">
                                        {' '}
                                        {benefit.description}{' '}
                                    </p>{' '}
                                </div>
                            ))}{' '}
                        </div>{' '}
                    </div>{' '}
                </section>{' '}
                {/* NotifyX Section */}{' '}
                <section
                    className="py-16 bg-gradient-to-r from-[hsl(210,60%,92%)] via-[hsl(196,70%,90%)] to-[hsl(175,60%,92%)] relative overflow-hidden"
                    data-oid="9l:7dgu"
                >
                    {' '}
                    {/* Subtle animated background elements */}{' '}
                    <div className="absolute inset-0 overflow-hidden opacity-20" data-oid="stgk1e3">
                        {' '}
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="ac88:v6"
                        ></div>{' '}
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="mejns6f"
                        ></div>{' '}
                    </div>{' '}
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                        data-oid="5llkgbx"
                    >
                        {' '}
                        <div className="text-center mb-12" data-oid="_r5:z3u">
                            {' '}
                            <h2
                                className="text-4xl font-bold mb-4 text-gray-800 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] inline-block text-transparent bg-clip-text"
                                data-oid="h3b0bcg"
                            >
                                {' '}
                                NotifyX{' '}
                            </h2>{' '}
                            <p
                                className="text-2xl font-semibold mb-2 text-gray-700"
                                data-oid="58c336n"
                            >
                                {' '}
                                Get Real-time Tech Job Alerts for just ₹49/month.{' '}
                            </p>{' '}
                            <p
                                className="text-xl text-gray-600 max-w-4xl mx-auto"
                                data-oid="rj415ry"
                            >
                                {' '}
                                Unlock Curated Opportunities, Insider Updates, and a driven
                                Community — All for less than a Cup of Coffee. Supercharge your
                                Career, starting Today.{' '}
                            </p>{' '}
                        </div>{' '}
                        <div className="grid md:grid-cols-3 gap-8" data-oid="vu3xse2">
                            {' '}
                            {/* Tile 1 */}{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] text-center"
                                data-oid="n1g4cc_"
                            >
                                {' '}
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="uz5ke-v"
                                >
                                    {' '}
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
                                        data-oid="uepudcj"
                                    >
                                        {' '}
                                        <path
                                            d="M22 12h-4l-3 9L9 3l-3 9H2"
                                            data-oid="jj7zljp"
                                        ></path>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="11k6bgg"
                                >
                                    {' '}
                                    Instant Access{' '}
                                </h3>{' '}
                                <p className="text-gray-600" data-oid="w356.u0">
                                    {' '}
                                    Get immediate access to the latest tech job opportunities as
                                    soon as they're posted.{' '}
                                </p>{' '}
                            </div>{' '}
                            {/* Tile 2 */}{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] text-center"
                                data-oid="d71kv4n"
                            >
                                {' '}
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid=".33cjfg"
                                >
                                    {' '}
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
                                        data-oid="q:4scs9"
                                    >
                                        {' '}
                                        <path
                                            d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                                            data-oid="s3k0h7j"
                                        ></path>{' '}
                                        <path
                                            d="M13.73 21a2 2 0 0 1-3.46 0"
                                            data-oid="gsekdya"
                                        ></path>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="tgrbo2e"
                                >
                                    {' '}
                                    Real-Time Alerts{' '}
                                </h3>{' '}
                                <p className="text-gray-600" data-oid="9xteoi4">
                                    {' '}
                                    Stay ahead with personalized notifications that match your
                                    skills and preferences.{' '}
                                </p>{' '}
                            </div>{' '}
                            {/* Tile 3 */}{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] text-center"
                                data-oid="hv.pyle"
                            >
                                {' '}
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="s5np_6y"
                                >
                                    {' '}
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
                                        data-oid="p.xszq0"
                                    >
                                        {' '}
                                        <path
                                            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                                            data-oid="1gysweb"
                                        ></path>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="eepk092"
                                >
                                    {' '}
                                    Fast-Track Your Career{' '}
                                </h3>{' '}
                                <p className="text-gray-600" data-oid=":__owg-">
                                    {' '}
                                    Be among the first applicants and significantly increase your
                                    chances of getting hired.{' '}
                                </p>{' '}
                            </div>{' '}
                        </div>{' '}
                    </div>{' '}
                </section>{' '}
                {/* Community Integration */}{' '}
                <section
                    className="py-16 bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)] relative overflow-hidden"
                    data-oid="c__5puu"
                >
                    {' '}
                    {/* Animated background elements */}{' '}
                    <div className="absolute inset-0 overflow-hidden opacity-30" data-oid="f1n6wa4">
                        {' '}
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="lgqaygr"
                        ></div>{' '}
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="y7ht5ht"
                        ></div>{' '}
                    </div>{' '}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="8yb7347">
                        {' '}
                        <div className="text-center mb-12" data-oid="y-hmn._">
                            {' '}
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="cv1:8hq"
                            >
                                {' '}
                                Join 35,000+ Tech Freshers{' '}
                            </h2>{' '}
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid="oraf9m9">
                                {' '}
                                Networking is crucial. Connect with peers and mentors.{' '}
                            </p>{' '}
                        </div>{' '}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-oid="z0:k4di">
                            {' '}
                            <a
                                href="/whatsapp"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-green-500"
                                data-oid="vkhh4q4"
                            >
                                {' '}
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full mb-4"
                                    data-oid="wlo9n19"
                                >
                                    {' '}
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="iq6e-ic"
                                    >
                                        {' '}
                                        <path
                                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                            data-oid="n38s_i2"
                                        ></path>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="x0xx_nh"
                                >
                                    {' '}
                                    WhatsApp{' '}
                                </h3>{' '}
                                <p className="text-gray-600" data-oid=".l_n92d">
                                    {' '}
                                    {stats?.whatsappMembers.toLocaleString()} members{' '}
                                </p>{' '}
                            </a>{' '}
                            <a
                                href="/linkedin"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-blue-600"
                                data-oid="o27:.ai"
                            >
                                {' '}
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4"
                                    data-oid="maz-w-1"
                                >
                                    {' '}
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid=":7hy-_:"
                                    >
                                        {' '}
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                            data-oid="ljs0mkb"
                                        ></path>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="z.-i3u3"
                                >
                                    {' '}
                                    LinkedIn{' '}
                                </h3>{' '}
                                <p className="text-gray-600" data-oid="d:a2i82">
                                    {' '}
                                    {stats?.linkedinMembers.toLocaleString()} followers{' '}
                                </p>{' '}
                            </a>{' '}
                            <a
                                href="/telegram"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-blue-500"
                                data-oid="9g.6j9w"
                            >
                                {' '}
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mb-4"
                                    data-oid="l8nv6v7"
                                >
                                    {' '}
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="2-1-y3f"
                                    >
                                        {' '}
                                        <path
                                            d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                            data-oid="d7xuf2o"
                                        ></path>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="lftimqd"
                                >
                                    {' '}
                                    Telegram{' '}
                                </h3>{' '}
                                <p className="text-gray-600" data-oid="bz44q.e">
                                    {' '}
                                    {stats?.telegramMembers.toLocaleString()} members{' '}
                                </p>{' '}
                            </a>{' '}
                            <a
                                href="/instagram"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-purple-600"
                                data-oid="6ixlp93"
                            >
                                {' '}
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-purple-600 to-pink-500 text-white rounded-full mb-4"
                                    data-oid="259sijf"
                                >
                                    {' '}
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="b21011o"
                                    >
                                        {' '}
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                            data-oid="j384nqz"
                                        ></path>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="uu5mbp9"
                                >
                                    {' '}
                                    Instagram{' '}
                                </h3>{' '}
                                <p className="text-gray-600" data-oid="ta8vme1">
                                    {' '}
                                    Follow us{' '}
                                </p>{' '}
                            </a>{' '}
                        </div>{' '}
                    </div>{' '}
                </section>{' '}
                {/* Featured Jobs Section */}{' '}
                <section
                    className="py-16 bg-gradient-to-r from-[hsl(210,60%,92%)] via-[hsl(196,70%,90%)] to-[hsl(175,60%,92%)] relative overflow-hidden"
                    data-oid="bk74xx-"
                >
                    {' '}
                    {/* Subtle animated background elements */}{' '}
                    <div className="absolute inset-0 overflow-hidden opacity-20" data-oid="g9r1:s_">
                        {' '}
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="v_607hx"
                        ></div>{' '}
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="xf6v9ca"
                        ></div>{' '}
                    </div>{' '}
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                        data-oid="3cr1-vb"
                    >
                        {' '}
                        <div className="text-center mb-12" data-oid="mffixsn">
                            {' '}
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="jcfg.sm"
                            >
                                {' '}
                                Featured Jobs{' '}
                            </h2>{' '}
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid=":k5sth0">
                                {' '}
                                Handpicked opportunities for freshers in top tech companies{' '}
                            </p>{' '}
                        </div>{' '}
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            data-oid="axsampd"
                        >
                            {' '}
                            {/* Job Card 1 */}{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                                data-oid="i:_xmvz"
                            >
                                {' '}
                                <div className="p-6" data-oid="yktr41t">
                                    {' '}
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid="4w3nymf"
                                    >
                                        {' '}
                                        <div
                                            className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600"
                                            data-oid="bab98lq"
                                        >
                                            {' '}
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
                                                data-oid="1khagov"
                                            >
                                                {' '}
                                                <rect
                                                    x="2"
                                                    y="7"
                                                    width="20"
                                                    height="14"
                                                    rx="2"
                                                    ry="2"
                                                    data-oid="lm1ztxs"
                                                ></rect>{' '}
                                                <path
                                                    d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                                    data-oid="ut-id1g"
                                                ></path>{' '}
                                            </svg>{' '}
                                        </div>{' '}
                                        <span
                                            className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            data-oid="22m-171"
                                        >
                                            {' '}
                                            New{' '}
                                        </span>{' '}
                                    </div>{' '}
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="94-ht6g"
                                    >
                                        {' '}
                                        Frontend Developer{' '}
                                    </h3>{' '}
                                    <p
                                        className="text-blue-700 font-medium mb-3"
                                        data-oid="9_3axsx"
                                    >
                                        {' '}
                                        Microsoft{' '}
                                    </p>{' '}
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="4zm4mb-">
                                        {' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="p._1_dq"
                                        >
                                            {' '}
                                            React{' '}
                                        </span>{' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="0hy-f7s"
                                        >
                                            {' '}
                                            TypeScript{' '}
                                        </span>{' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="bqwlqzw"
                                        >
                                            {' '}
                                            Remote{' '}
                                        </span>{' '}
                                    </div>{' '}
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="y3ly5z6"
                                    >
                                        {' '}
                                        <span className="text-gray-600" data-oid="kehcyqk">
                                            {' '}
                                            ₹5-8 LPA{' '}
                                        </span>{' '}
                                        <div className="flex gap-2" data-oid="t-:hn:2">
                                            {' '}
                                            <a
                                                href="/jobs/view-details/microsoft/frontend-developer"
                                                className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300 text-sm"
                                                data-oid="wmedjr6"
                                            >
                                                {' '}
                                                View Details{' '}
                                                <svg
                                                    className="ml-1 h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="fmoiei-"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        data-oid="gczia0f"
                                                    />{' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        data-oid="kz8sbfn"
                                                    />{' '}
                                                </svg>{' '}
                                            </a>{' '}
                                            <a
                                                href="/jobs/apply/microsoft/frontend-developer"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white px-3 py-1 rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 text-sm inline-flex items-center gap-1"
                                                data-oid="s6iq8x:"
                                            >
                                                {' '}
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="4thvvn."
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        data-oid=":jnrrx:"
                                                    />{' '}
                                                </svg>{' '}
                                                Apply Now{' '}
                                            </a>{' '}
                                        </div>{' '}
                                    </div>{' '}
                                </div>{' '}
                            </div>{' '}
                            {/* Job Card 2 */}{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                                data-oid="leto4ux"
                            >
                                {' '}
                                <div className="p-6" data-oid="5o0hn_y">
                                    {' '}
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid="y-bqfb_"
                                    >
                                        {' '}
                                        <div
                                            className="w-12 h-12 bg-orange-100 rounded-md flex items-center justify-center text-orange-600"
                                            data-oid="y_n:rn:"
                                        >
                                            {' '}
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
                                                data-oid="a3maia0"
                                            >
                                                {' '}
                                                <path
                                                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                                    data-oid="lb-wj8n"
                                                ></path>{' '}
                                            </svg>{' '}
                                        </div>{' '}
                                        <span
                                            className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            data-oid="w13jb1y"
                                        >
                                            {' '}
                                            Featured{' '}
                                        </span>{' '}
                                    </div>{' '}
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="6-8d92c"
                                    >
                                        {' '}
                                        Backend Engineer{' '}
                                    </h3>{' '}
                                    <p
                                        className="text-blue-700 font-medium mb-3"
                                        data-oid="ypiu:7x"
                                    >
                                        {' '}
                                        Amazon{' '}
                                    </p>{' '}
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="zjd:6y0">
                                        {' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="5imtv8o"
                                        >
                                            {' '}
                                            Java{' '}
                                        </span>{' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid=":n2jhr5"
                                        >
                                            {' '}
                                            Spring Boot{' '}
                                        </span>{' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="r7i_.3z"
                                        >
                                            {' '}
                                            Hybrid{' '}
                                        </span>{' '}
                                    </div>{' '}
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="vvc5cn3"
                                    >
                                        {' '}
                                        <span className="text-gray-600" data-oid="tir2ylk">
                                            {' '}
                                            ₹8-12 LPA{' '}
                                        </span>{' '}
                                        <div className="flex gap-2" data-oid="wwh4z35">
                                            {' '}
                                            <a
                                                href="/jobs/view-details/amazon/backend-engineer"
                                                className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300 text-sm"
                                                data-oid="og1dl9f"
                                            >
                                                {' '}
                                                View Details{' '}
                                                <svg
                                                    className="ml-1 h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="1g1fp21"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        data-oid="an35evt"
                                                    />{' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        data-oid="k6a74.z"
                                                    />{' '}
                                                </svg>{' '}
                                            </a>{' '}
                                            <a
                                                href="/jobs/apply/amazon/backend-engineer"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white px-3 py-1 rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 text-sm inline-flex items-center gap-1"
                                                data-oid="bwiducs"
                                            >
                                                {' '}
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid=":zvdyod"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        data-oid=".-i5hgz"
                                                    />{' '}
                                                </svg>{' '}
                                                Apply Now{' '}
                                            </a>{' '}
                                        </div>{' '}
                                    </div>{' '}
                                </div>{' '}
                            </div>{' '}
                            {/* Job Card 3 */}{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                                data-oid="-sflp_k"
                            >
                                {' '}
                                <div className="p-6" data-oid="z.6ivy4">
                                    {' '}
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid="vx_l89y"
                                    >
                                        {' '}
                                        <div
                                            className="w-12 h-12 bg-green-100 rounded-md flex items-center justify-center text-green-600"
                                            data-oid="85rsb7p"
                                        >
                                            {' '}
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
                                                data-oid="adb54qs"
                                            >
                                                {' '}
                                                <polyline
                                                    points="16 18 22 12 16 6"
                                                    data-oid="6bff0ua"
                                                ></polyline>{' '}
                                                <polyline
                                                    points="8 6 2 12 8 18"
                                                    data-oid="6mi57ek"
                                                ></polyline>{' '}
                                            </svg>{' '}
                                        </div>{' '}
                                        <span
                                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            data-oid="wn028xc"
                                        >
                                            {' '}
                                            Hot{' '}
                                        </span>{' '}
                                    </div>{' '}
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="x_iayx6"
                                    >
                                        {' '}
                                        Full Stack Developer{' '}
                                    </h3>{' '}
                                    <p
                                        className="text-blue-700 font-medium mb-3"
                                        data-oid="5bjbxol"
                                    >
                                        {' '}
                                        Google{' '}
                                    </p>{' '}
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="8snk7qb">
                                        {' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="4l_qs:7"
                                        >
                                            {' '}
                                            React{' '}
                                        </span>{' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="psbymlc"
                                        >
                                            {' '}
                                            Node.js{' '}
                                        </span>{' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="y60xeca"
                                        >
                                            {' '}
                                            Onsite{' '}
                                        </span>{' '}
                                    </div>{' '}
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="vpu60z5"
                                    >
                                        {' '}
                                        <span className="text-gray-600" data-oid="9tgkfb_">
                                            {' '}
                                            ₹10-15 LPA{' '}
                                        </span>{' '}
                                        <div className="flex gap-2" data-oid="gtjc392">
                                            {' '}
                                            <a
                                                href="/jobs/view-details/google/full-stack-developer"
                                                className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300 text-sm"
                                                data-oid="gr2qejm"
                                            >
                                                {' '}
                                                View Details{' '}
                                                <svg
                                                    className="ml-1 h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="c3ijczj"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        data-oid="kfnfe_3"
                                                    />{' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        data-oid="9..d6pl"
                                                    />{' '}
                                                </svg>{' '}
                                            </a>{' '}
                                            <a
                                                href="/jobs/apply/google/full-stack-developer"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white px-3 py-1 rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 text-sm inline-flex items-center gap-1"
                                                data-oid="h0bekz9"
                                            >
                                                {' '}
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="gga7f5m"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        data-oid="ha3lb1k"
                                                    />{' '}
                                                </svg>{' '}
                                                Apply Now{' '}
                                            </a>{' '}
                                        </div>{' '}
                                    </div>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div className="text-center mt-10" data-oid="ho9reg7">
                            {' '}
                            <Link
                                href="/jobs"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                                data-oid="kbeeo1y"
                            >
                                View All Jobs
                                <svg
                                    className="ml-2 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-oid="i--obgw"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        data-oid="z86obnt"
                                    ></path>
                                </svg>
                            </Link>{' '}
                        </div>{' '}
                    </div>{' '}
                </section>{' '}
                {/* Fresher Resources */}{' '}
                <section
                    className="py-16 bg-gradient-to-b from-white to-[hsl(196,60%,95%)]"
                    data-oid="62wmq:2"
                >
                    {' '}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="lbi68dh">
                        {' '}
                        <div className="text-center mb-12" data-oid="defxn26">
                            {' '}
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="b8wp.9i"
                            >
                                {' '}
                                Fresher Resources{' '}
                            </h2>{' '}
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid="7ru_s8d">
                                {' '}
                                Everything You Need to Succeed{' '}
                            </p>{' '}
                        </div>{' '}
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            data-oid="-:3807b"
                        >
                            {' '}
                            {resources.map((resource, index) => (
                                <div
                                    key={resource.id}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)]"
                                    data-oid="s5gizw4"
                                >
                                    {' '}
                                    <div className="p-6" data-oid="-_f6a_-">
                                        {' '}
                                        <div
                                            className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                            data-oid="vqx9v9k"
                                        >
                                            {' '}
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
                                                    data-oid="0f6-swt"
                                                >
                                                    {' '}
                                                    <path
                                                        d="M3 3v18h18"
                                                        data-oid="g7as3wl"
                                                    ></path>{' '}
                                                    <path d="M18 17V9" data-oid="vfs_88u"></path>{' '}
                                                    <path d="M13 17V5" data-oid="qt51__j"></path>{' '}
                                                    <path
                                                        d="M8 17v-3"
                                                        data-oid="1yznx52"
                                                    ></path>{' '}
                                                </svg>
                                            )}{' '}
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
                                                    data-oid="5.l3n8s"
                                                >
                                                    {' '}
                                                    <circle
                                                        cx="11"
                                                        cy="11"
                                                        r="8"
                                                        data-oid="z3.rnki"
                                                    ></circle>{' '}
                                                    <path
                                                        d="m21 21-4.3-4.3"
                                                        data-oid="7lc05sl"
                                                    ></path>{' '}
                                                </svg>
                                            )}{' '}
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
                                                    data-oid="up3qewe"
                                                >
                                                    {' '}
                                                    <path
                                                        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                                                        data-oid="fnso5c2"
                                                    ></path>{' '}
                                                    <circle
                                                        cx="9"
                                                        cy="7"
                                                        r="4"
                                                        data-oid="88b5651"
                                                    ></circle>{' '}
                                                    <path
                                                        d="M22 21v-2a4 4 0 0 0-3-3.87"
                                                        data-oid="993nzl2"
                                                    ></path>{' '}
                                                    <path
                                                        d="M16 3.13a4 4 0 0 1 0 7.75"
                                                        data-oid="g9izjv8"
                                                    ></path>{' '}
                                                </svg>
                                            )}{' '}
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
                                                    data-oid="p_16lx:"
                                                >
                                                    {' '}
                                                    <path
                                                        d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                                                        data-oid="ikea856"
                                                    ></path>{' '}
                                                    <polyline
                                                        points="14 2 14 8 20 8"
                                                        data-oid="x1btt4i"
                                                    ></polyline>{' '}
                                                    <line
                                                        x1="16"
                                                        y1="13"
                                                        x2="8"
                                                        y2="13"
                                                        data-oid="u5qj9_q"
                                                    ></line>{' '}
                                                    <line
                                                        x1="16"
                                                        y1="17"
                                                        x2="8"
                                                        y2="17"
                                                        data-oid="udzithn"
                                                    ></line>{' '}
                                                    <line
                                                        x1="10"
                                                        y1="9"
                                                        x2="8"
                                                        y2="9"
                                                        data-oid="hf5..88"
                                                    ></line>{' '}
                                                </svg>
                                            )}{' '}
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
                                                    data-oid="2sm_rb5"
                                                >
                                                    {' '}
                                                    <path
                                                        d="M3 3v18h18"
                                                        data-oid="u7k74v1"
                                                    ></path>{' '}
                                                    <path
                                                        d="m3 10 5 3 4-6 5 7"
                                                        data-oid="wqd94ec"
                                                    ></path>{' '}
                                                </svg>
                                            )}{' '}
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
                                                    data-oid="xdl8-qi"
                                                >
                                                    {' '}
                                                    <path
                                                        d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                                                        data-oid="h2yqa_u"
                                                    ></path>{' '}
                                                    <path d="M18 14h-8" data-oid="230:db_"></path>{' '}
                                                    <path d="M15 18h-5" data-oid="fpxz5a-"></path>{' '}
                                                    <path
                                                        d="M10 6h8v4h-8z"
                                                        data-oid="q1kpgcm"
                                                    ></path>{' '}
                                                </svg>
                                            )}{' '}
                                        </div>{' '}
                                        <h3
                                            className="text-xl font-bold mb-2 text-gray-800"
                                            data-oid="o271s_x"
                                        >
                                            {' '}
                                            {resource.title}{' '}
                                        </h3>{' '}
                                        <p className="text-gray-600 mb-4" data-oid="ab:.cy6">
                                            {' '}
                                            {resource.description}{' '}
                                        </p>{' '}
                                        <a
                                            href={`/resources/${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                            data-oid=":hff6i1"
                                        >
                                            {' '}
                                            Learn more{' '}
                                            <svg
                                                className="ml-1 h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                data-oid="ynoynso"
                                            >
                                                {' '}
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    data-oid="zf_qkpr"
                                                ></path>{' '}
                                            </svg>{' '}
                                        </a>{' '}
                                    </div>{' '}
                                </div>
                            ))}{' '}
                        </div>{' '}
                    </div>{' '}
                </section>{' '}
                {/* Success Stories */}{' '}
                <section
                    className="py-16 bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white relative overflow-hidden"
                    data-oid="5f3wwss"
                >
                    {' '}
                    {/* Animated background elements */}{' '}
                    <div className="absolute inset-0 overflow-hidden" data-oid="0h_v_zn">
                        {' '}
                        <div
                            className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="1zxnj6t"
                        ></div>{' '}
                        <div
                            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-30 rounded-full blur-3xl animate-blob"
                            data-oid=".kgpqt6"
                        ></div>{' '}
                    </div>{' '}
                    {/* Frosted glass overlay */}{' '}
                    <div
                        className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"
                        data-oid="uzm-:3x"
                    ></div>{' '}
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                        data-oid="zbo_ngk"
                    >
                        {' '}
                        <div className="text-center mb-12" data-oid=".oy8:dm">
                            {' '}
                            <h2 className="text-3xl font-bold mb-4" data-oid="27ii4:-">
                                {' '}
                                Hear From Our Members{' '}
                            </h2>{' '}
                            <p className="text-blue-100 max-w-2xl mx-auto" data-oid="xvp4nxk">
                                {' '}
                                Success stories from freshers who found their dream tech jobs{' '}
                            </p>{' '}
                        </div>{' '}
                        {/* Auto-scrolling testimonial carousel */}{' '}
                        <div className="relative overflow-hidden py-8" data-oid="ftpj2_n">
                            {' '}
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
                                data-oid=":9bwxew"
                            >
                                {' '}
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="bg-white/90 backdrop-blur-md text-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-white/20 w-[280px] h-[180px] flex-shrink-0 flex flex-col"
                                        data-oid=":t_1.if"
                                    >
                                        {' '}
                                        <div className="flex items-center mb-2" data-oid="7-lcn4i">
                                            {' '}
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-10 h-10 rounded-full mr-3 object-cover"
                                                data-oid="b6wstbi"
                                            />{' '}
                                            <div data-oid="vwygngk">
                                                {' '}
                                                <h3
                                                    className="font-bold text-gray-800 text-sm"
                                                    data-oid=":jpuc_s"
                                                >
                                                    {' '}
                                                    {testimonial.name}{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-blue-700 text-xs"
                                                    data-oid="nz_h-b-"
                                                >
                                                    {' '}
                                                    {testimonial.company}{' '}
                                                </p>{' '}
                                            </div>{' '}
                                        </div>{' '}
                                        <p
                                            className="text-gray-600 italic flex-grow overflow-y-auto text-sm"
                                            data-oid="r.smluk"
                                        >
                                            {' '}
                                            "{testimonial.quote}"{' '}
                                        </p>{' '}
                                    </div>
                                ))}{' '}
                                {/* Duplicate first few testimonials to create seamless loop */}{' '}
                                {testimonials.slice(0, 3).map((testimonial) => (
                                    <div
                                        key={`duplicate-${testimonial.id}`}
                                        className="bg-white/90 backdrop-blur-md text-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-white/20 w-[280px] h-[180px] flex-shrink-0 flex flex-col"
                                        data-oid="4t3g9ci"
                                    >
                                        {' '}
                                        <div className="flex items-center mb-2" data-oid="pv_bim7">
                                            {' '}
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-10 h-10 rounded-full mr-3 object-cover"
                                                data-oid=":1bc8jq"
                                            />{' '}
                                            <div data-oid="ljn-kfd">
                                                {' '}
                                                <h3
                                                    className="font-bold text-gray-800 text-sm"
                                                    data-oid="73.fuo8"
                                                >
                                                    {' '}
                                                    {testimonial.name}{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-blue-700 text-xs"
                                                    data-oid="kumdrw-"
                                                >
                                                    {' '}
                                                    {testimonial.company}{' '}
                                                </p>{' '}
                                            </div>{' '}
                                        </div>{' '}
                                        <p
                                            className="text-gray-600 italic flex-grow overflow-y-auto text-sm"
                                            data-oid="6_sqzdv"
                                        >
                                            {' '}
                                            "{testimonial.quote}"{' '}
                                        </p>{' '}
                                    </div>
                                ))}{' '}
                            </div>{' '}
                            <div className="text-center mt-8" data-oid="49flnm1"></div>{' '}
                        </div>{' '}
                    </div>{' '}
                </section>{' '}
                {/* Final CTA */}{' '}
                <section
                    className="py-16 bg-white text-[hsl(196,80%,45%)] relative overflow-hidden"
                    data-oid="ij0svp4"
                >
                    {' '}
                    {/* Animated background elements */}{' '}
                    <div className="absolute inset-0 overflow-hidden opacity-30" data-oid="xfb46-q">
                        {' '}
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="4iyr82z"
                        ></div>{' '}
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="876d282"
                        ></div>{' '}
                    </div>{' '}
                    <div
                        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                        data-oid="dh8gl53"
                    >
                        {' '}
                        <p className="text-[hsl(196,80%,65%)] mb-2" data-oid="xw2ftyv">
                            {' '}
                            Start Your Tech Journey Today{' '}
                        </p>{' '}
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
                            data-oid="45ztg1i"
                        >
                            {' '}
                            Ready to Land Your First Tech Job?{' '}
                        </h2>{' '}
                        <p className="text-xl text-gray-600 mb-8" data-oid="kb0z5oc">
                            {' '}
                            Join 35,000+ freshers who've launched their careers with us{' '}
                        </p>{' '}
                        <div
                            className="flex flex-col sm:flex-row justify-center gap-4"
                            data-oid="mxk.038"
                        >
                            {' '}
                            <button
                                onClick={() => navigateWithAuth('/community')}
                                className="px-8 py-4 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-md font-bold text-lg hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse-shadow relative z-10"
                                data-oid="ph:f5ek"
                            >
                                {' '}
                                Create Free Account →{' '}
                            </button>{' '}
                            <Link
                                href="/jobs"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-md font-bold text-lg hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg transform hover:scale-105 relative z-10"
                                data-oid="1.mxb:f"
                            >
                                Browse Fresher Jobs
                            </Link>{' '}
                        </div>{' '}
                    </div>{' '}
                </section>{' '}
            </main>{' '}
            {/* Footer */}{' '}
            <footer className="bg-gray-950 text-white" data-oid="82tp7r7">
                {' '}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="h8df:uj">
                    {' '}
                    <div className="grid md:grid-cols-4 gap-8" data-oid="91gs75:">
                        {' '}
                        <div data-oid="l57_6.f">
                            {' '}
                            <div className="mb-6" data-oid="7-o49y9">
                                {' '}
                                <Logo data-oid="0ivw6dx" />{' '}
                            </div>{' '}
                            <p className="text-gray-400 mb-4" data-oid="q96j6h7">
                                {' '}
                                Helping tech freshers launch their careers with curated
                                opportunities and resources.{' '}
                            </p>{' '}
                            <div className="flex space-x-4" data-oid="a4mkqe5">
                                {' '}
                                <a
                                    href="/linkedin"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    data-oid="s50bayb"
                                >
                                    {' '}
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="ixrtog1"
                                    >
                                        {' '}
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                            data-oid=".ll1czg"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                                <a
                                    href="/twitter"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    data-oid="5rx5p5u"
                                >
                                    {' '}
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="qbvgjhi"
                                    >
                                        {' '}
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                            data-oid="tifm572"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                                <a
                                    href="/instagram"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    data-oid="bixx5ue"
                                >
                                    {' '}
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="bindseu"
                                    >
                                        {' '}
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                            data-oid="y3y..:8"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div data-oid="ogqm4hd">
                            {' '}
                            <h3 className="text-lg font-bold mb-4" data-oid=".zd2wgp">
                                {' '}
                                Company{' '}
                            </h3>{' '}
                            <ul className="space-y-3" data-oid="zdh8588">
                                {' '}
                                <li data-oid="v:.a:b8">
                                    {' '}
                                    <a
                                        href="/about"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="7rqc:nu"
                                    >
                                        {' '}
                                        About Us{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="jhb60jl">
                                    {' '}
                                    <a
                                        href="/advertising"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="715mg1m"
                                    >
                                        {' '}
                                        Advertising{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="3r:-v2f">
                                    {' '}
                                    <a
                                        href="/contact"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="3h:qp0w"
                                    >
                                        {' '}
                                        Contact{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="dyoar89">
                                    {' '}
                                    <a
                                        href="/careers"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="k5l0my5"
                                    >
                                        {' '}
                                        Careers{' '}
                                    </a>{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                        <div data-oid="49atlo3">
                            {' '}
                            <h3 className="text-lg font-bold mb-4" data-oid="fy55lqf">
                                {' '}
                                Resources{' '}
                            </h3>{' '}
                            <ul className="space-y-3" data-oid="ug1pucs">
                                {' '}
                                <li data-oid="yj3nulb">
                                    {' '}
                                    <a
                                        href="/tax-calculator"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="6wc96mb"
                                    >
                                        {' '}
                                        Tax Calculator{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="eugd72:">
                                    {' '}
                                    <a
                                        href="/resume-review"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="ic:w-at"
                                    >
                                        {' '}
                                        Resume Review{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="kabu7kf">
                                    {' '}
                                    <a
                                        href="/jobs-tracker"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="fffk7:1"
                                    >
                                        {' '}
                                        Jobs Tracker{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="wsicpzb">
                                    {' '}
                                    <a
                                        href="/blog"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="uizz_6n"
                                    >
                                        {' '}
                                        Blog{' '}
                                    </a>{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                        <div data-oid="b_jp.ej">
                            {' '}
                            <h3 className="text-lg font-bold mb-4" data-oid="o0ywgvv">
                                {' '}
                                Legal{' '}
                            </h3>{' '}
                            <ul className="space-y-3" data-oid="56dsy7d">
                                {' '}
                                <li data-oid="0nkvgy2">
                                    {' '}
                                    <a
                                        href="/privacy-policy"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="v3q8mtz"
                                    >
                                        {' '}
                                        Privacy Policy{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="mjt0aqp">
                                    {' '}
                                    <a
                                        href="/terms"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="2h:c87y"
                                    >
                                        {' '}
                                        Terms of Service{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="moimpf4">
                                    {' '}
                                    <a
                                        href="/refunds"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="8yxq:x-"
                                    >
                                        {' '}
                                        Refund Policy{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="yel703b">
                                    {' '}
                                    <a
                                        href="/shipping-policy"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid=":-go-qy"
                                    >
                                        {' '}
                                        Shipping Policy{' '}
                                    </a>{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                    </div>{' '}
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                        data-oid=":au5n3r"
                    >
                        {' '}
                        <p className="mb-2" data-oid="2_7b0p9">
                            {' '}
                            © {new Date().getFullYear()} CareerX. All rights reserved.{' '}
                        </p>{' '}
                        <p data-oid="uuado7s">Built with ❤️ by BitHive Technologies</p>{' '}
                    </div>{' '}
                </div>{' '}
            </footer>{' '}
        </div>
    );
}
