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
        data-oid="10r23d-"
    >
        <path
            d="M10 5L20 15L10 25"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="35.mcjn"
        />

        <path
            d="M30 5H40L50 25H40"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="5sq8mlp"
        />

        <text
            x="60"
            y="22"
            fontFamily="Arial"
            fontSize="18"
            fontWeight="bold"
            fill="#1E3A8A"
            data-oid="sfw_eit"
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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="4n.812t">
            {' '}
            {/* Sticky Navbar */}{' '}
            <header
                className="sticky top-0 z-50 bg-gradient-to-r from-blue-200/90 via-blue-300/90 to-blue-200/90 backdrop-blur-md shadow-sm border-b border-blue-300/70"
                data-oid="k108s76"
            >
                {' '}
                <MainNavbar data-oid="ra7pan3" /> {/* Sub-Navbar */}{' '}
                <div
                    className="bg-gradient-to-r from-[hsl(196,70%,92%)]/90 via-[hsl(210,70%,90%)]/90 to-[hsl(196,70%,92%)]/90 backdrop-blur-sm border-t border-[hsl(210,40%,90%)]"
                    data-oid="0eg11:j"
                >
                    {' '}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ga.cep7">
                        {' '}
                        <div
                            className="flex flex-wrap items-center justify-between py-2 text-sm"
                            data-oid="_rxga39"
                        >
                            {' '}
                            <div
                                className="flex flex-wrap items-center space-x-4"
                                data-oid="414l0e7"
                            >
                                {' '}
                                <a
                                    href="/notify"
                                    className="bg-gradient-to-r from-blue-200 to-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:from-blue-300 hover:to-blue-200 shadow-sm flex items-center"
                                    data-oid="8hrqngv"
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
                                        data-oid="f9u9czt"
                                    >
                                        {' '}
                                        <path
                                            d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                                            data-oid="3itaxlh"
                                        ></path>{' '}
                                        <path
                                            d="M13.73 21a2 2 0 0 1-3.46 0"
                                            data-oid="eadwdog"
                                        ></path>{' '}
                                    </svg>{' '}
                                    NOTIFY X{' '}
                                </a>{' '}
                            </div>{' '}
                            <div className="flex items-center space-x-3 sm:mt-0" data-oid="qv7qxkc">
                                {' '}
                                {/* Mobile view - compact icons */}{' '}
                                <div
                                    className="flex sm:hidden items-center space-x-2"
                                    data-oid="ywksdmv"
                                >
                                    {' '}
                                    <a
                                        href="/telegram"
                                        className="inline-flex items-center justify-center w-7 h-7 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-all duration-300"
                                        title="Join Telegram Community"
                                        data-oid="4eu9vh6"
                                    >
                                        {' '}
                                        <svg
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="905y10i"
                                        >
                                            {' '}
                                            <path
                                                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                                data-oid="0ifvzr3"
                                            ></path>{' '}
                                        </svg>{' '}
                                    </a>{' '}
                                    <a
                                        href="/whatsapp"
                                        className="inline-flex items-center justify-center w-7 h-7 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300"
                                        title="Join WhatsApp Community"
                                        data-oid="pndjm.n"
                                    >
                                        {' '}
                                        <svg
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="j5swkqf"
                                        >
                                            {' '}
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                                data-oid="jaf5ing"
                                            ></path>{' '}
                                        </svg>{' '}
                                    </a>{' '}
                                </div>{' '}
                                {/* Desktop view - original buttons */}{' '}
                                <div
                                    className="hidden sm:flex items-center space-x-3"
                                    data-oid="pyqumrs"
                                >
                                    {' '}
                                    <a
                                        href="/telegram"
                                        className="inline-flex items-center px-3 py-1 bg-teal-500 hover:bg-teal-600 text-white text-xs font-medium rounded-md transition-all duration-300"
                                        data-oid="q85pgj0"
                                    >
                                        {' '}
                                        <svg
                                            className="h-4 w-4 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="5rwkc61"
                                        >
                                            {' '}
                                            <path
                                                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                                data-oid="sa-lejj"
                                            ></path>{' '}
                                        </svg>{' '}
                                        Join Telegram Community{' '}
                                    </a>{' '}
                                    <a
                                        href="/whatsapp"
                                        className="inline-flex items-center px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-md transition-all duration-300"
                                        data-oid="y6xt0sa"
                                    >
                                        {' '}
                                        <svg
                                            className="h-4 w-4 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="jer2-90"
                                        >
                                            {' '}
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                                data-oid="fx7gnup"
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
            <main data-oid="e843h34">
                {' '}
                {/* Hero Section */}{' '}
                <section
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white relative overflow-hidden"
                    data-oid="ejavg_w"
                >
                    {' '}
                    {/* Animated background elements */}{' '}
                    <div className="absolute inset-0 overflow-hidden" data-oid="c93luq0">
                        {' '}
                        <div
                            className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob"
                            data-oid="obdw_x_"
                        ></div>{' '}
                        <div
                            className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="wxkanzi"
                        ></div>{' '}
                        <div
                            className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="65p5:tc"
                        ></div>{' '}
                        <div
                            className="absolute -bottom-20 right-1/4 w-80 h-80 bg-[hsl(220,70%,65%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-3000"
                            data-oid="4o-5s5s"
                        ></div>{' '}
                    </div>{' '}
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24"
                        data-oid="sh.5oxq"
                    >
                        {' '}
                        <div
                            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                            data-oid="lb.sq4g"
                        >
                            {' '}
                            <div
                                className="text-center lg:text-left order-2 lg:order-1"
                                data-oid="hnhvzuj"
                            >
                                {' '}
                                <div
                                    className="inline-block bg-blue-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4 sm:mb-6 uppercase text-white"
                                    data-oid="8v4tt49"
                                >
                                    {' '}
                                    India's most trusted Platform For Tech Freshers{' '}
                                </div>{' '}
                                <h1
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-md leading-tight"
                                    data-oid="md1arfq"
                                >
                                    {' '}
                                    JOIN THOUSANDS GETTING JOBS IN TOP TECH COMPANIES{' '}
                                </h1>{' '}
                                <p
                                    className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90"
                                    data-oid="d_din.u"
                                >
                                    {' '}
                                    Discover Jobs, Internships, and Resources tailored for
                                    Freshers{' '}
                                </p>{' '}
                                <div
                                    className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-10 justify-center lg:justify-start"
                                    data-oid="urpyvhe"
                                >
                                    {' '}
                                    <a
                                        href="/register"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 rounded-md font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg text-white"
                                        data-oid="ao1xhjg"
                                    >
                                        {' '}
                                        Join Community{' '}
                                        <svg
                                            className="ml-2 h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="ewl3esi"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                data-oid="dt5a74t"
                                            ></path>{' '}
                                        </svg>{' '}
                                    </a>{' '}
                                    <a
                                        href="/jobs"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-[hsl(196,80%,45%)] hover:bg-gray-50 rounded-md font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                                        data-oid="2dnpwj_"
                                    >
                                        {' '}
                                        Browse Jobs{' '}
                                    </a>{' '}
                                </div>{' '}
                            </div>{' '}
                            <div className="relative order-1 lg:order-2" data-oid="-18zzsq">
                                {' '}
                                <div
                                    className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl transform hover:scale-[1.01] transition-all duration-500 relative z-10"
                                    data-oid="-dtz_95"
                                >
                                    {' '}
                                    <div className="mb-4 sm:mb-6" data-oid="zzej7zi">
                                        {' '}
                                        <form
                                            onSubmit={handleSearch}
                                            className="flex flex-col sm:flex-row gap-3 sm:gap-0 relative z-10 transform transition-all duration-500 hover:scale-[1.02]"
                                            data-oid="xl5rsab"
                                        >
                                            {' '}
                                            <input
                                                type="text"
                                                placeholder="Search Entry Level Jobs..."
                                                className="w-full px-4 py-3 rounded-md sm:rounded-l-md sm:rounded-r-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner text-sm sm:text-base"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                data-oid="wkdm2xh"
                                            />{' '}
                                            <button
                                                type="submit"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(175,70%,41%)] hover:to-[hsl(196,80%,45%)] px-6 py-3 rounded-md sm:rounded-l-none sm:rounded-r-md font-medium transition-all duration-300 shadow-lg text-white text-sm sm:text-base"
                                                data-oid="7ovqe5w"
                                            >
                                                {' '}
                                                SEARCH{' '}
                                            </button>{' '}
                                        </form>{' '}
                                    </div>{' '}
                                    <div
                                        className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 justify-center"
                                        data-oid="gnp36ht"
                                    >
                                        {' '}
                                        <div
                                            className="bg-white/20 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/30 text-white font-medium"
                                            data-oid="jq3f.k5"
                                        >
                                            {' '}
                                            {stats?.freshers.toLocaleString()} Freshers{' '}
                                        </div>{' '}
                                        <div
                                            className="bg-white/20 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/30 text-white font-medium"
                                            data-oid="9jly1.f"
                                        >
                                            {' '}
                                            {stats?.verifiedJobs} Verified Jobs{' '}
                                        </div>{' '}
                                        <div
                                            className="bg-white/20 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/30 text-white font-medium"
                                            data-oid="l:uqwve"
                                        >
                                            {' '}
                                            Entry-Level Focused{' '}
                                        </div>{' '}
                                    </div>{' '}
                                    <div
                                        className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-[hsl(196,80%,65%)] opacity-60 rounded-full blur-xl"
                                        data-oid="goyhfbw"
                                    ></div>{' '}
                                    <div
                                        className="absolute -top-3 -left-3 w-16 h-16 sm:w-20 sm:h-20 bg-[hsl(175,70%,61%)] opacity-60 rounded-full blur-xl"
                                        data-oid="aa7o7t8"
                                    ></div>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                    </div>{' '}
                </section>{' '}
                {/* Platform Stats Section */}{' '}
                <section
                    className="py-16 bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
                    data-oid="gp9ocbk"
                >
                    {' '}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="fxphyq1">
                        {' '}
                        <h2
                            className="text-3xl font-bold text-center mb-12 text-gray-800"
                            data-oid="qyor8k_"
                        >
                            {' '}
                            Platform Metrics{' '}
                        </h2>{' '}
                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                            data-oid="r88:yaq"
                        >
                            {' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="c9sw_vk"
                            >
                                {' '}
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="ddl28m4"
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
                                        data-oid="48v75lm"
                                    >
                                        {' '}
                                        <path
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            data-oid="g_3n7if"
                                        />{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="91yn9ir"
                                >
                                    {' '}
                                    Active Members{' '}
                                </h3>{' '}
                                <p className="text-gray-600 mb-4" data-oid="vra6-dt">
                                    {' '}
                                    {stats?.activeMembers.toLocaleString()} growing community
                                    members{' '}
                                </p>{' '}
                                <a
                                    href="/community"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="m4qk4n2"
                                >
                                    {' '}
                                    Join Now{' '}
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="6wxpj0q"
                                    >
                                        {' '}
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="p4qjr.6"
                                        ></path>{' '}
                                    </svg>{' '}
                                </a>{' '}
                            </div>{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="cpss6d6"
                            >
                                {' '}
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid=":6o_pl9"
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
                                        data-oid="kkej-ky"
                                    >
                                        {' '}
                                        <path
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            data-oid="2_j5m-y"
                                        />{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="6ji9c:6"
                                >
                                    {' '}
                                    Posted Jobs{' '}
                                </h3>{' '}
                                <p className="text-gray-600 mb-4" data-oid="5u:866c">
                                    {' '}
                                    {stats?.postedJobs} Jobs posted till now{' '}
                                </p>{' '}
                                <a
                                    href="/jobs"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="k:9f-vj"
                                >
                                    {' '}
                                    See Jobs{' '}
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="hyzagw:"
                                    >
                                        {' '}
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="bpiwi_0"
                                        ></path>{' '}
                                    </svg>{' '}
                                </a>{' '}
                            </div>{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="0vv_xtl"
                            >
                                {' '}
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="tg75q9s"
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
                                        data-oid="8mx-kff"
                                    >
                                        {' '}
                                        <path
                                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                                            data-oid="1_xvpoz"
                                        ></path>{' '}
                                        <rect
                                            x="2"
                                            y="9"
                                            width="4"
                                            height="12"
                                            data-oid="vbf9vjv"
                                        ></rect>{' '}
                                        <circle
                                            cx="4"
                                            cy="4"
                                            r="2"
                                            data-oid="jef26w."
                                        ></circle>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="lxy7yef"
                                >
                                    {' '}
                                    LinkedIn{' '}
                                </h3>{' '}
                                <p className="text-gray-600 mb-4" data-oid="8u_0_qx">
                                    {' '}
                                    {stats?.linkedInFollowers} professional followers{' '}
                                </p>{' '}
                                <a
                                    href="/linkedin"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="i6y44k2"
                                >
                                    {' '}
                                    Connect{' '}
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="b8.wy-9"
                                    >
                                        {' '}
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="p33il:e"
                                        ></path>{' '}
                                    </svg>{' '}
                                </a>{' '}
                            </div>{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="ge1aap_"
                            >
                                {' '}
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="6ui6zo:"
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
                                        data-oid="rmytdp5"
                                    >
                                        {' '}
                                        <path
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            data-oid="fcx2cmh"
                                        />{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="01p:d.z"
                                >
                                    {' '}
                                    Registered Users{' '}
                                </h3>{' '}
                                <p className="text-gray-600 mb-4" data-oid="eaer_g:">
                                    {' '}
                                    {stats?.users.toLocaleString()} active accounts{' '}
                                </p>{' '}
                                <Link
                                    href="/register"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="n_ml4w8"
                                >
                                    {' '}
                                    Join Now{' '}
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="bh-s1.o"
                                    >
                                        {' '}
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="4e:-rmn"
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
                    data-oid="kchzsiv"
                >
                    {' '}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=":qw:vdv">
                        {' '}
                        <div className="text-center mb-12" data-oid="tydqu8n">
                            {' '}
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="41dd84m"
                            >
                                {' '}
                                Why Choose CareerX{' '}
                            </h2>{' '}
                            <p className="text-xl text-blue-800" data-oid="schw--q">
                                {' '}
                                Designed Exclusively For Tech Freshers{' '}
                            </p>{' '}
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto" data-oid="1ctj97q">
                                {' '}
                                Our platform focuses on the unique needs of entry-level tech
                                talent.{' '}
                            </p>{' '}
                        </div>{' '}
                        {/* Full-Width Banner */}{' '}
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white p-6 rounded-xl mb-12 shadow-lg transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group"
                            data-oid="-5-fnhf"
                        >
                            {' '}
                            {/* Animated shine effect */}{' '}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shine transition-opacity duration-300"
                                data-oid="jd6o8bp"
                            ></div>{' '}
                            {/* Frosted glass overlay */}{' '}
                            <div
                                className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"
                                data-oid="rp_fwy."
                            ></div>{' '}
                            <div
                                className="flex flex-col md:flex-row items-center justify-between relative z-10"
                                data-oid="fqkvoh2"
                            >
                                {' '}
                                <div data-oid="8ijbsr5">
                                    {' '}
                                    <h3 className="text-2xl font-bold mb-2" data-oid="3jr9eb3">
                                        {' '}
                                        NOTIFY X{' '}
                                    </h3>{' '}
                                    <p className="text-blue-100" data-oid="zr.xfp4">
                                        {' '}
                                        Get real-time alerts for freshers jobs matching your
                                        profile{' '}
                                    </p>{' '}
                                </div>{' '}
                                <a
                                    href="/notify"
                                    className="mt-4 md:mt-0 px-6 py-2 bg-white text-blue-800 rounded-md font-medium hover:bg-blue-50 transition-all duration-300"
                                    data-oid="rxjkms9"
                                >
                                    {' '}
                                    Learn More{' '}
                                </a>{' '}
                            </div>{' '}
                        </div>{' '}
                        {/* Benefits Cards */}{' '}
                        <div className="grid md:grid-cols-3 gap-8" data-oid="eo.l:m3">
                            {' '}
                            {benefits.map((benefit, index) => (
                                <div
                                    key={benefit.id}
                                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)]"
                                    data-oid="hs:cz33"
                                >
                                    {' '}
                                    <div
                                        className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                        data-oid="gb2yg9s"
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
                                                data-oid="0rla03h"
                                            >
                                                {' '}
                                                <path
                                                    d="M22 10v6M2 10l10-5 10 5-10 5z"
                                                    data-oid="wk3u1jk"
                                                ></path>{' '}
                                                <path
                                                    d="M6 12v5c3 3 9 3 12 0v-5"
                                                    data-oid="03pv41b"
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
                                                data-oid="o6jf5qi"
                                            >
                                                {' '}
                                                <path
                                                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                                    data-oid="2m464a8"
                                                ></path>{' '}
                                                <path
                                                    d="m9 12 2 2 4-4"
                                                    data-oid="p6-oda8"
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
                                                data-oid="t6exw_2"
                                            >
                                                {' '}
                                                <path
                                                    d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"
                                                    data-oid="8zz:9z2"
                                                ></path>{' '}
                                                <path
                                                    d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l2.26-2.21a2.13 2.13 0 0 1 3 0h0a2.13 2.13 0 0 1 0 3l-2.26 2.21"
                                                    data-oid="dhsm-ok"
                                                ></path>{' '}
                                            </svg>
                                        )}{' '}
                                    </div>{' '}
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid=".h-4y6g"
                                    >
                                        {' '}
                                        {benefit.title}{' '}
                                    </h3>{' '}
                                    <p className="text-gray-600" data-oid="50xke4x">
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
                    data-oid="9z4l.13"
                >
                    {' '}
                    {/* Subtle animated background elements */}{' '}
                    <div className="absolute inset-0 overflow-hidden opacity-20" data-oid="8j:1dko">
                        {' '}
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="ibnnz9a"
                        ></div>{' '}
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="wjruvfl"
                        ></div>{' '}
                    </div>{' '}
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                        data-oid="he9_dcz"
                    >
                        {' '}
                        <div className="text-center mb-12" data-oid="oaa3gbn">
                            {' '}
                            <h2
                                className="text-4xl font-bold mb-4 text-gray-800 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] inline-block text-transparent bg-clip-text"
                                data-oid="92ri--x"
                            >
                                {' '}
                                NotifyX{' '}
                            </h2>{' '}
                            <p
                                className="text-2xl font-semibold mb-2 text-gray-700"
                                data-oid="fka230r"
                            >
                                {' '}
                                Get Real-time Tech Job Alerts for just ₹49/month.{' '}
                            </p>{' '}
                            <p
                                className="text-xl text-gray-600 max-w-4xl mx-auto"
                                data-oid="4ftwvlw"
                            >
                                {' '}
                                Unlock Curated Opportunities, Insider Updates, and a driven
                                Community — All for less than a Cup of Coffee. Supercharge your
                                Career, starting Today.{' '}
                            </p>{' '}
                        </div>{' '}
                        <div className="grid md:grid-cols-3 gap-8" data-oid="q.63-5i">
                            {' '}
                            {/* Tile 1 */}{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] text-center"
                                data-oid="hxgwub-"
                            >
                                {' '}
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="_p5l688"
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
                                        data-oid="046:ob5"
                                    >
                                        {' '}
                                        <path
                                            d="M22 12h-4l-3 9L9 3l-3 9H2"
                                            data-oid="5923t7i"
                                        ></path>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="64edriy"
                                >
                                    {' '}
                                    Instant Access{' '}
                                </h3>{' '}
                                <p className="text-gray-600" data-oid="51h:zig">
                                    {' '}
                                    Get immediate access to the latest tech job opportunities as
                                    soon as they're posted.{' '}
                                </p>{' '}
                            </div>{' '}
                            {/* Tile 2 */}{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] text-center"
                                data-oid="4htjw63"
                            >
                                {' '}
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="v1t0cf2"
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
                                        data-oid="on.kpvv"
                                    >
                                        {' '}
                                        <path
                                            d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                                            data-oid="ouklqs7"
                                        ></path>{' '}
                                        <path
                                            d="M13.73 21a2 2 0 0 1-3.46 0"
                                            data-oid="f7-ooq9"
                                        ></path>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="f9bjcl7"
                                >
                                    {' '}
                                    Real-Time Alerts{' '}
                                </h3>{' '}
                                <p className="text-gray-600" data-oid="pc32:ya">
                                    {' '}
                                    Stay ahead with personalized notifications that match your
                                    skills and preferences.{' '}
                                </p>{' '}
                            </div>{' '}
                            {/* Tile 3 */}{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] text-center"
                                data-oid="xywm5w:"
                            >
                                {' '}
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="ria.y0i"
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
                                        data-oid="uu09pk7"
                                    >
                                        {' '}
                                        <path
                                            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                                            data-oid="b.egkd0"
                                        ></path>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="btgtfmu"
                                >
                                    {' '}
                                    Fast-Track Your Career{' '}
                                </h3>{' '}
                                <p className="text-gray-600" data-oid="iegmhu7">
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
                    data-oid="o0ovfoh"
                >
                    {' '}
                    {/* Animated background elements */}{' '}
                    <div className="absolute inset-0 overflow-hidden opacity-30" data-oid="98t7vv5">
                        {' '}
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="-kxdi87"
                        ></div>{' '}
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid=":vn.b5s"
                        ></div>{' '}
                    </div>{' '}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="xcjbcl0">
                        {' '}
                        <div className="text-center mb-12" data-oid="crbutpv">
                            {' '}
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="68v214:"
                            >
                                {' '}
                                Join 35,000+ Tech Freshers{' '}
                            </h2>{' '}
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid="tdxt8yz">
                                {' '}
                                Networking is crucial. Connect with peers and mentors.{' '}
                            </p>{' '}
                        </div>{' '}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-oid="fthvbpa">
                            {' '}
                            <a
                                href="/whatsapp"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-green-500"
                                data-oid=":n:olll"
                            >
                                {' '}
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full mb-4"
                                    data-oid="8-lpnz1"
                                >
                                    {' '}
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="dn_-yeb"
                                    >
                                        {' '}
                                        <path
                                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                            data-oid="b0q9z:z"
                                        ></path>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="7ur1:be"
                                >
                                    {' '}
                                    WhatsApp{' '}
                                </h3>{' '}
                                <p className="text-gray-600" data-oid="5a9nj1y">
                                    {' '}
                                    {stats?.whatsappMembers.toLocaleString()} members{' '}
                                </p>{' '}
                            </a>{' '}
                            <a
                                href="/linkedin"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-blue-600"
                                data-oid="r81i:0-"
                            >
                                {' '}
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4"
                                    data-oid="zgbt2:k"
                                >
                                    {' '}
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="ic1kj_2"
                                    >
                                        {' '}
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                            data-oid="xxevb63"
                                        ></path>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="w1li.j9"
                                >
                                    {' '}
                                    LinkedIn{' '}
                                </h3>{' '}
                                <p className="text-gray-600" data-oid="no0m-w1">
                                    {' '}
                                    {stats?.linkedinMembers.toLocaleString()} followers{' '}
                                </p>{' '}
                            </a>{' '}
                            <a
                                href="/telegram"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-blue-500"
                                data-oid="fh4e88w"
                            >
                                {' '}
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mb-4"
                                    data-oid="ska-fx0"
                                >
                                    {' '}
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="swcv:-r"
                                    >
                                        {' '}
                                        <path
                                            d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                            data-oid="p0lc_kf"
                                        ></path>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="jl.blsx"
                                >
                                    {' '}
                                    Telegram{' '}
                                </h3>{' '}
                                <p className="text-gray-600" data-oid="zy0au9f">
                                    {' '}
                                    {stats?.telegramMembers.toLocaleString()} members{' '}
                                </p>{' '}
                            </a>{' '}
                            <a
                                href="/instagram"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-purple-600"
                                data-oid="0ll0.jm"
                            >
                                {' '}
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-purple-600 to-pink-500 text-white rounded-full mb-4"
                                    data-oid="_7:jee_"
                                >
                                    {' '}
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="wzx1wbm"
                                    >
                                        {' '}
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                            data-oid="lhqwcab"
                                        ></path>{' '}
                                    </svg>{' '}
                                </div>{' '}
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="5oho.jk"
                                >
                                    {' '}
                                    Instagram{' '}
                                </h3>{' '}
                                <p className="text-gray-600" data-oid="vlkf_6r">
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
                    data-oid="sajq.ka"
                >
                    {' '}
                    {/* Subtle animated background elements */}{' '}
                    <div className="absolute inset-0 overflow-hidden opacity-20" data-oid="jxx9ag8">
                        {' '}
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="b5.:w0j"
                        ></div>{' '}
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="j4hmt1t"
                        ></div>{' '}
                    </div>{' '}
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                        data-oid="dbk.bpc"
                    >
                        {' '}
                        <div className="text-center mb-12" data-oid="ikkbu44">
                            {' '}
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="obb7:jb"
                            >
                                {' '}
                                Featured Jobs{' '}
                            </h2>{' '}
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid="wc.jlx4">
                                {' '}
                                Handpicked opportunities for freshers in top tech companies{' '}
                            </p>{' '}
                        </div>{' '}
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            data-oid="-m02srx"
                        >
                            {' '}
                            {/* Job Card 1 */}{' '}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                                data-oid="j10cg.3"
                            >
                                {' '}
                                <div className="p-6" data-oid="x77pedl">
                                    {' '}
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid="vvs_bdi"
                                    >
                                        {' '}
                                        <div
                                            className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600"
                                            data-oid="h-oeukw"
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
                                                data-oid="2xadx60"
                                            >
                                                {' '}
                                                <rect
                                                    x="2"
                                                    y="7"
                                                    width="20"
                                                    height="14"
                                                    rx="2"
                                                    ry="2"
                                                    data-oid="wy6on1e"
                                                ></rect>{' '}
                                                <path
                                                    d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                                    data-oid=".eq4adm"
                                                ></path>{' '}
                                            </svg>{' '}
                                        </div>{' '}
                                        <span
                                            className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            data-oid="5w.v5rg"
                                        >
                                            {' '}
                                            New{' '}
                                        </span>{' '}
                                    </div>{' '}
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="glrm884"
                                    >
                                        {' '}
                                        Frontend Developer{' '}
                                    </h3>{' '}
                                    <p
                                        className="text-blue-700 font-medium mb-3"
                                        data-oid="_k1bwlb"
                                    >
                                        {' '}
                                        Microsoft{' '}
                                    </p>{' '}
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="sov-e73">
                                        {' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="h8clgbz"
                                        >
                                            {' '}
                                            React{' '}
                                        </span>{' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="a342rks"
                                        >
                                            {' '}
                                            TypeScript{' '}
                                        </span>{' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="q3jc8a-"
                                        >
                                            {' '}
                                            Remote{' '}
                                        </span>{' '}
                                    </div>{' '}
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="v.--68z"
                                    >
                                        {' '}
                                        <span className="text-gray-600" data-oid="pked3sw">
                                            {' '}
                                            ₹5-8 LPA{' '}
                                        </span>{' '}
                                        <div className="flex gap-2" data-oid="31x99ig">
                                            {' '}
                                            <a
                                                href="/jobs/view-details/microsoft/frontend-developer"
                                                className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300 text-sm"
                                                data-oid="rv1yfu6"
                                            >
                                                {' '}
                                                View Details{' '}
                                                <svg
                                                    className="ml-1 h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="b4yo-wv"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        data-oid="brbwr:3"
                                                    />{' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        data-oid="i4peqxa"
                                                    />{' '}
                                                </svg>{' '}
                                            </a>{' '}
                                            <a
                                                href="/jobs/apply/microsoft/frontend-developer"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white px-3 py-1 rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 text-sm inline-flex items-center gap-1"
                                                data-oid="2vqx8b5"
                                            >
                                                {' '}
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="s_ftjst"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        data-oid="8e_hljs"
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
                                data-oid="b0:wot-"
                            >
                                {' '}
                                <div className="p-6" data-oid="61j_4aw">
                                    {' '}
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid=".e:11vf"
                                    >
                                        {' '}
                                        <div
                                            className="w-12 h-12 bg-orange-100 rounded-md flex items-center justify-center text-orange-600"
                                            data-oid="g.3fm3."
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
                                                data-oid="ta26lee"
                                            >
                                                {' '}
                                                <path
                                                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                                    data-oid="h:n_6:l"
                                                ></path>{' '}
                                            </svg>{' '}
                                        </div>{' '}
                                        <span
                                            className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            data-oid="otp073j"
                                        >
                                            {' '}
                                            Featured{' '}
                                        </span>{' '}
                                    </div>{' '}
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="t42_e02"
                                    >
                                        {' '}
                                        Backend Engineer{' '}
                                    </h3>{' '}
                                    <p
                                        className="text-blue-700 font-medium mb-3"
                                        data-oid="gkw4bsa"
                                    >
                                        {' '}
                                        Amazon{' '}
                                    </p>{' '}
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="8gp5x97">
                                        {' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="11yi74u"
                                        >
                                            {' '}
                                            Java{' '}
                                        </span>{' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="0_e_xbk"
                                        >
                                            {' '}
                                            Spring Boot{' '}
                                        </span>{' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="lyvr:i_"
                                        >
                                            {' '}
                                            Hybrid{' '}
                                        </span>{' '}
                                    </div>{' '}
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="vt6p..h"
                                    >
                                        {' '}
                                        <span className="text-gray-600" data-oid="7x-6bxe">
                                            {' '}
                                            ₹8-12 LPA{' '}
                                        </span>{' '}
                                        <div className="flex gap-2" data-oid=".jejq06">
                                            {' '}
                                            <a
                                                href="/jobs/view-details/amazon/backend-engineer"
                                                className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300 text-sm"
                                                data-oid="ke3uz:m"
                                            >
                                                {' '}
                                                View Details{' '}
                                                <svg
                                                    className="ml-1 h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="b89dhgt"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        data-oid="-e:o7f6"
                                                    />{' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        data-oid="8l9b:-x"
                                                    />{' '}
                                                </svg>{' '}
                                            </a>{' '}
                                            <a
                                                href="/jobs/apply/amazon/backend-engineer"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white px-3 py-1 rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 text-sm inline-flex items-center gap-1"
                                                data-oid="u9e.t8z"
                                            >
                                                {' '}
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="fc4-gj8"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        data-oid="jysc0.y"
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
                                data-oid="g-_fok3"
                            >
                                {' '}
                                <div className="p-6" data-oid="ton5ahs">
                                    {' '}
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid="vrdfrtm"
                                    >
                                        {' '}
                                        <div
                                            className="w-12 h-12 bg-green-100 rounded-md flex items-center justify-center text-green-600"
                                            data-oid="5g97a9e"
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
                                                data-oid="gs0:651"
                                            >
                                                {' '}
                                                <polyline
                                                    points="16 18 22 12 16 6"
                                                    data-oid="oa9wdxr"
                                                ></polyline>{' '}
                                                <polyline
                                                    points="8 6 2 12 8 18"
                                                    data-oid="sw34__b"
                                                ></polyline>{' '}
                                            </svg>{' '}
                                        </div>{' '}
                                        <span
                                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            data-oid="j:on4gn"
                                        >
                                            {' '}
                                            Hot{' '}
                                        </span>{' '}
                                    </div>{' '}
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="h.kw87i"
                                    >
                                        {' '}
                                        Full Stack Developer{' '}
                                    </h3>{' '}
                                    <p
                                        className="text-blue-700 font-medium mb-3"
                                        data-oid="znd8lgl"
                                    >
                                        {' '}
                                        Google{' '}
                                    </p>{' '}
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="xrqhpx4">
                                        {' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="qjik-5z"
                                        >
                                            {' '}
                                            React{' '}
                                        </span>{' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="bdse2v3"
                                        >
                                            {' '}
                                            Node.js{' '}
                                        </span>{' '}
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="an91rz5"
                                        >
                                            {' '}
                                            Onsite{' '}
                                        </span>{' '}
                                    </div>{' '}
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="euc5:kb"
                                    >
                                        {' '}
                                        <span className="text-gray-600" data-oid="bi:o198">
                                            {' '}
                                            ₹10-15 LPA{' '}
                                        </span>{' '}
                                        <div className="flex gap-2" data-oid="aq05go.">
                                            {' '}
                                            <a
                                                href="/jobs/view-details/google/full-stack-developer"
                                                className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300 text-sm"
                                                data-oid="vjnufqq"
                                            >
                                                {' '}
                                                View Details{' '}
                                                <svg
                                                    className="ml-1 h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="7_73nqn"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        data-oid="zod53_u"
                                                    />{' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        data-oid="blvtncq"
                                                    />{' '}
                                                </svg>{' '}
                                            </a>{' '}
                                            <a
                                                href="/jobs/apply/google/full-stack-developer"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white px-3 py-1 rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 text-sm inline-flex items-center gap-1"
                                                data-oid="pfnbsz6"
                                            >
                                                {' '}
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="0w_qfqo"
                                                >
                                                    {' '}
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        data-oid="8yg_j11"
                                                    />{' '}
                                                </svg>{' '}
                                                Apply Now{' '}
                                            </a>{' '}
                                        </div>{' '}
                                    </div>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div className="text-center mt-10" data-oid="vfz0ipi">
                            {' '}
                            <a
                                href="/jobs"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                                data-oid="eggia2g"
                            >
                                {' '}
                                View All Jobs{' '}
                                <svg
                                    className="ml-2 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-oid="e--wze2"
                                >
                                    {' '}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        data-oid="mfz7vm4"
                                    ></path>{' '}
                                </svg>{' '}
                            </a>{' '}
                        </div>{' '}
                    </div>{' '}
                </section>{' '}
                {/* Fresher Resources */}{' '}
                <section
                    className="py-16 bg-gradient-to-b from-white to-[hsl(196,60%,95%)]"
                    data-oid="l2f97o2"
                >
                    {' '}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="r53.pih">
                        {' '}
                        <div className="text-center mb-12" data-oid="p54avoa">
                            {' '}
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="pjm.3ki"
                            >
                                {' '}
                                Fresher Resources{' '}
                            </h2>{' '}
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid=".1zolo.">
                                {' '}
                                Everything You Need to Succeed{' '}
                            </p>{' '}
                        </div>{' '}
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            data-oid="s6-7ass"
                        >
                            {' '}
                            {resources.map((resource, index) => (
                                <div
                                    key={resource.id}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)]"
                                    data-oid=":2iqysh"
                                >
                                    {' '}
                                    <div className="p-6" data-oid="z94s9bp">
                                        {' '}
                                        <div
                                            className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                            data-oid="r5:.a36"
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
                                                    data-oid="z9ceios"
                                                >
                                                    {' '}
                                                    <path
                                                        d="M3 3v18h18"
                                                        data-oid="xx._uau"
                                                    ></path>{' '}
                                                    <path d="M18 17V9" data-oid="e92cmpv"></path>{' '}
                                                    <path d="M13 17V5" data-oid="xkby9cx"></path>{' '}
                                                    <path
                                                        d="M8 17v-3"
                                                        data-oid="f:n:0pb"
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
                                                    data-oid="h9-eh_."
                                                >
                                                    {' '}
                                                    <circle
                                                        cx="11"
                                                        cy="11"
                                                        r="8"
                                                        data-oid="s8fdlxf"
                                                    ></circle>{' '}
                                                    <path
                                                        d="m21 21-4.3-4.3"
                                                        data-oid="m_n0qio"
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
                                                    data-oid="t54l61x"
                                                >
                                                    {' '}
                                                    <path
                                                        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                                                        data-oid=":f3mcr9"
                                                    ></path>{' '}
                                                    <circle
                                                        cx="9"
                                                        cy="7"
                                                        r="4"
                                                        data-oid="1_8do15"
                                                    ></circle>{' '}
                                                    <path
                                                        d="M22 21v-2a4 4 0 0 0-3-3.87"
                                                        data-oid="p95t9om"
                                                    ></path>{' '}
                                                    <path
                                                        d="M16 3.13a4 4 0 0 1 0 7.75"
                                                        data-oid="8ig_sh3"
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
                                                    data-oid="uujjti-"
                                                >
                                                    {' '}
                                                    <path
                                                        d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                                                        data-oid="r:cqcx5"
                                                    ></path>{' '}
                                                    <polyline
                                                        points="14 2 14 8 20 8"
                                                        data-oid="wm00mf8"
                                                    ></polyline>{' '}
                                                    <line
                                                        x1="16"
                                                        y1="13"
                                                        x2="8"
                                                        y2="13"
                                                        data-oid="4:cm6ny"
                                                    ></line>{' '}
                                                    <line
                                                        x1="16"
                                                        y1="17"
                                                        x2="8"
                                                        y2="17"
                                                        data-oid="xnqb-g-"
                                                    ></line>{' '}
                                                    <line
                                                        x1="10"
                                                        y1="9"
                                                        x2="8"
                                                        y2="9"
                                                        data-oid="8ohraop"
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
                                                    data-oid="inw0qd9"
                                                >
                                                    {' '}
                                                    <path
                                                        d="M3 3v18h18"
                                                        data-oid="woop27."
                                                    ></path>{' '}
                                                    <path
                                                        d="m3 10 5 3 4-6 5 7"
                                                        data-oid="7_5km3v"
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
                                                    data-oid="rylpva2"
                                                >
                                                    {' '}
                                                    <path
                                                        d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                                                        data-oid=":r8a742"
                                                    ></path>{' '}
                                                    <path d="M18 14h-8" data-oid="4sgwglw"></path>{' '}
                                                    <path d="M15 18h-5" data-oid="jkvkz4e"></path>{' '}
                                                    <path
                                                        d="M10 6h8v4h-8z"
                                                        data-oid="m87j653"
                                                    ></path>{' '}
                                                </svg>
                                            )}{' '}
                                        </div>{' '}
                                        <h3
                                            className="text-xl font-bold mb-2 text-gray-800"
                                            data-oid="0h2j7j8"
                                        >
                                            {' '}
                                            {resource.title}{' '}
                                        </h3>{' '}
                                        <p className="text-gray-600 mb-4" data-oid="yq:sbb4">
                                            {' '}
                                            {resource.description}{' '}
                                        </p>{' '}
                                        <a
                                            href={`/resources/${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                            data-oid="5-l5zxj"
                                        >
                                            {' '}
                                            Learn more{' '}
                                            <svg
                                                className="ml-1 h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                data-oid="7en_afh"
                                            >
                                                {' '}
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    data-oid="74oh.4b"
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
                    data-oid=".p1pclw"
                >
                    {' '}
                    {/* Animated background elements */}{' '}
                    <div className="absolute inset-0 overflow-hidden" data-oid="jy5o2c:">
                        {' '}
                        <div
                            className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="3yx_q:z"
                        ></div>{' '}
                        <div
                            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-30 rounded-full blur-3xl animate-blob"
                            data-oid="qddjm59"
                        ></div>{' '}
                    </div>{' '}
                    {/* Frosted glass overlay */}{' '}
                    <div
                        className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"
                        data-oid="qrf.-:5"
                    ></div>{' '}
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                        data-oid="_6stwmf"
                    >
                        {' '}
                        <div className="text-center mb-12" data-oid="r0fqt7l">
                            {' '}
                            <h2 className="text-3xl font-bold mb-4" data-oid="60rc-ma">
                                {' '}
                                Hear From Our Members{' '}
                            </h2>{' '}
                            <p className="text-blue-100 max-w-2xl mx-auto" data-oid="_wblgtj">
                                {' '}
                                Success stories from freshers who found their dream tech jobs{' '}
                            </p>{' '}
                        </div>{' '}
                        {/* Auto-scrolling testimonial carousel */}{' '}
                        <div className="relative overflow-hidden py-8" data-oid="vc6lnq1">
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
                                data-oid="jgzsiyv"
                            >
                                {' '}
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="bg-white/90 backdrop-blur-md text-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-white/20 w-[280px] h-[180px] flex-shrink-0 flex flex-col"
                                        data-oid="3tjw6xi"
                                    >
                                        {' '}
                                        <div className="flex items-center mb-2" data-oid="y2:9hdu">
                                            {' '}
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-10 h-10 rounded-full mr-3 object-cover"
                                                data-oid="2ym3kcv"
                                            />{' '}
                                            <div data-oid="3rnkx_6">
                                                {' '}
                                                <h3
                                                    className="font-bold text-gray-800 text-sm"
                                                    data-oid=".13qp-y"
                                                >
                                                    {' '}
                                                    {testimonial.name}{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-blue-700 text-xs"
                                                    data-oid="ajs-vmp"
                                                >
                                                    {' '}
                                                    {testimonial.company}{' '}
                                                </p>{' '}
                                            </div>{' '}
                                        </div>{' '}
                                        <p
                                            className="text-gray-600 italic flex-grow overflow-y-auto text-sm"
                                            data-oid="c5w7_kw"
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
                                        data-oid="1k48ip1"
                                    >
                                        {' '}
                                        <div className="flex items-center mb-2" data-oid="weq38db">
                                            {' '}
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-10 h-10 rounded-full mr-3 object-cover"
                                                data-oid="9q8w9.4"
                                            />{' '}
                                            <div data-oid="jcnrc0y">
                                                {' '}
                                                <h3
                                                    className="font-bold text-gray-800 text-sm"
                                                    data-oid="hjayai."
                                                >
                                                    {' '}
                                                    {testimonial.name}{' '}
                                                </h3>{' '}
                                                <p
                                                    className="text-blue-700 text-xs"
                                                    data-oid="unp5odi"
                                                >
                                                    {' '}
                                                    {testimonial.company}{' '}
                                                </p>{' '}
                                            </div>{' '}
                                        </div>{' '}
                                        <p
                                            className="text-gray-600 italic flex-grow overflow-y-auto text-sm"
                                            data-oid="jpchfxa"
                                        >
                                            {' '}
                                            "{testimonial.quote}"{' '}
                                        </p>{' '}
                                    </div>
                                ))}{' '}
                            </div>{' '}
                            <div className="text-center mt-8" data-oid="sixcyr2"></div>{' '}
                        </div>{' '}
                    </div>{' '}
                </section>{' '}
                {/* Final CTA */}{' '}
                <section
                    className="py-16 bg-white text-[hsl(196,80%,45%)] relative overflow-hidden"
                    data-oid="nfw.13y"
                >
                    {' '}
                    {/* Animated background elements */}{' '}
                    <div className="absolute inset-0 overflow-hidden opacity-30" data-oid="urz7w3y">
                        {' '}
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid=".d3kkh."
                        ></div>{' '}
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="6.uxatp"
                        ></div>{' '}
                    </div>{' '}
                    <div
                        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                        data-oid="2o6j98v"
                    >
                        {' '}
                        <p className="text-[hsl(196,80%,65%)] mb-2" data-oid="uhp8yvs">
                            {' '}
                            Start Your Tech Journey Today{' '}
                        </p>{' '}
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
                            data-oid="v9_66:g"
                        >
                            {' '}
                            Ready to Land Your First Tech Job?{' '}
                        </h2>{' '}
                        <p className="text-xl text-gray-600 mb-8" data-oid="mg.qp1c">
                            {' '}
                            Join 35,000+ freshers who've launched their careers with us{' '}
                        </p>{' '}
                        <div
                            className="flex flex-col sm:flex-row justify-center gap-4"
                            data-oid="-a6w.ey"
                        >
                            {' '}
                            <Link
                                href="/register"
                                className="px-8 py-4 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-md font-bold text-lg hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse-shadow relative z-10"
                                data-oid="ae:pi1f"
                            >
                                {' '}
                                Create Free Account →{' '}
                            </Link>{' '}
                            <Link
                                href="/fresher-jobs"
                                className="px-8 py-4 border-2 border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-md font-bold text-lg hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg transform hover:scale-105 relative z-10"
                                data-oid="x6gk0-c"
                            >
                                {' '}
                                Browse Fresher Jobs{' '}
                            </Link>{' '}
                        </div>{' '}
                    </div>{' '}
                </section>{' '}
            </main>{' '}
            {/* Footer */}{' '}
            <footer className="bg-gray-950 text-white" data-oid="5pc_f6a">
                {' '}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="tu_sjds">
                    {' '}
                    <div className="grid md:grid-cols-4 gap-8" data-oid="omy6ysy">
                        {' '}
                        <div data-oid="v.2p:vb">
                            {' '}
                            <div className="mb-6" data-oid="tq60-df">
                                {' '}
                                <Logo data-oid="qn4z2_8" />{' '}
                            </div>{' '}
                            <p className="text-gray-400 mb-4" data-oid="kfh2i8z">
                                {' '}
                                Helping tech freshers launch their careers with curated
                                opportunities and resources.{' '}
                            </p>{' '}
                            <div className="flex space-x-4" data-oid="f1dbims">
                                {' '}
                                <a
                                    href="/linkedin"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    data-oid="h6q-4vc"
                                >
                                    {' '}
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=".97nmnw"
                                    >
                                        {' '}
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                            data-oid="hwp9qyb"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                                <a
                                    href="/twitter"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    data-oid="qds91y."
                                >
                                    {' '}
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="p:vuv24"
                                    >
                                        {' '}
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                            data-oid="u:v8ycq"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                                <a
                                    href="/instagram"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    data-oid="vh36q2k"
                                >
                                    {' '}
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="f0a9:px"
                                    >
                                        {' '}
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                            data-oid="_fz0m7c"
                                        />{' '}
                                    </svg>{' '}
                                </a>{' '}
                            </div>{' '}
                        </div>{' '}
                        <div data-oid="j16je52">
                            {' '}
                            <h3 className="text-lg font-bold mb-4" data-oid="mpdvjgb">
                                {' '}
                                Company{' '}
                            </h3>{' '}
                            <ul className="space-y-3" data-oid="b9jg2dx">
                                {' '}
                                <li data-oid="mwix5hs">
                                    {' '}
                                    <a
                                        href="/about"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="6u34jyk"
                                    >
                                        {' '}
                                        About Us{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="4u3xmtl">
                                    {' '}
                                    <a
                                        href="/advertising"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="2:8fldt"
                                    >
                                        {' '}
                                        Advertising{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="g78p95g">
                                    {' '}
                                    <a
                                        href="/contact"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="ldcrdoz"
                                    >
                                        {' '}
                                        Contact{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="3kik_t-">
                                    {' '}
                                    <a
                                        href="/careers"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="9yin.q1"
                                    >
                                        {' '}
                                        Careers{' '}
                                    </a>{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                        <div data-oid="puiaid:">
                            {' '}
                            <h3 className="text-lg font-bold mb-4" data-oid="3jtjsur">
                                {' '}
                                Resources{' '}
                            </h3>{' '}
                            <ul className="space-y-3" data-oid="zyo9yq-">
                                {' '}
                                <li data-oid="jpc6-ps">
                                    {' '}
                                    <a
                                        href="/tax-calculator"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="fivjnao"
                                    >
                                        {' '}
                                        Tax Calculator{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="m:llkpm">
                                    {' '}
                                    <a
                                        href="/resume-review"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="8v:ofw8"
                                    >
                                        {' '}
                                        Resume Review{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="6v.86ft">
                                    {' '}
                                    <a
                                        href="/jobs-tracker"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="gyidi13"
                                    >
                                        {' '}
                                        Jobs Tracker{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="5akoyqp">
                                    {' '}
                                    <a
                                        href="/blog"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="l:8dfba"
                                    >
                                        {' '}
                                        Blog{' '}
                                    </a>{' '}
                                </li>{' '}
                            </ul>{' '}
                        </div>{' '}
                        <div data-oid="a7u-:8:">
                            {' '}
                            <h3 className="text-lg font-bold mb-4" data-oid="mjk7bxx">
                                {' '}
                                Legal{' '}
                            </h3>{' '}
                            <ul className="space-y-3" data-oid="3w0m5zf">
                                {' '}
                                <li data-oid="_1ebour">
                                    {' '}
                                    <a
                                        href="/privacy-policy"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="ooa85b4"
                                    >
                                        {' '}
                                        Privacy Policy{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="-h532x0">
                                    {' '}
                                    <a
                                        href="/terms"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="96eeg9e"
                                    >
                                        {' '}
                                        Terms of Service{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="_uo:frk">
                                    {' '}
                                    <a
                                        href="/refunds"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="pjqbg-."
                                    >
                                        {' '}
                                        Refund Policy{' '}
                                    </a>{' '}
                                </li>{' '}
                                <li data-oid="w8b1kzk">
                                    {' '}
                                    <a
                                        href="/shipping-policy"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid=".:rx-l9"
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
                        data-oid="5io:8gd"
                    >
                        {' '}
                        <p className="mb-2" data-oid="2ec1rhv">
                            {' '}
                            © {new Date().getFullYear()} CareerX. All rights reserved.{' '}
                        </p>{' '}
                        <p data-oid="ag.8w20">Built with ❤️ by BitHive Technologies</p>{' '}
                    </div>{' '}
                </div>{' '}
            </footer>{' '}
        </div>
    );
}
