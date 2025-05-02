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
        data-oid="rz6qp2z"
    >
        <path
            d="M10 5L20 15L10 25"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="59-.unh"
        />

        <path
            d="M30 5H40L50 25H40"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="c3-zt3s"
        />

        <text
            x="60"
            y="22"
            fontFamily="Arial"
            fontSize="18"
            fontWeight="bold"
            fill="#1E3A8A"
            data-oid="hvkbi:s"
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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="ex7_li4">
            {/* Sticky Navbar */}
            <header
                className="sticky top-0 z-50 bg-gradient-to-r from-blue-200/90 via-blue-300/90 to-blue-200/90 backdrop-blur-md shadow-sm border-b border-blue-300/70"
                data-oid="3cgnks0"
            >
                <MainNavbar data-oid="rxbpqi4" />
                {/* Sub-Navbar */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,70%,92%)]/90 via-[hsl(210,70%,90%)]/90 to-[hsl(196,70%,92%)]/90 backdrop-blur-sm border-t border-[hsl(210,40%,90%)]"
                    data-oid="7_-wyu6"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="gr2lw4h">
                        <div
                            className="flex flex-wrap items-center justify-between py-2 text-sm"
                            data-oid="c1rs5x8"
                        >
                            <div
                                className="flex flex-wrap items-center space-x-4"
                                data-oid="b4zaa9y"
                            >
                                <a
                                    href="/notify"
                                    className="bg-gradient-to-r from-blue-200 to-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:from-blue-300 hover:to-blue-200 shadow-sm flex items-center"
                                    data-oid="fdqrk4f"
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
                                        data-oid="v1isu4o"
                                    >
                                        <path
                                            d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                                            data-oid="7vlzk_m"
                                        ></path>
                                        <path
                                            d="M13.73 21a2 2 0 0 1-3.46 0"
                                            data-oid=".ofpexa"
                                        ></path>
                                    </svg>
                                    NOTIFY X
                                </a>
                            </div>
                            <div
                                className="flex items-center space-x-3 mt-2 sm:mt-0"
                                data-oid="tq.vs1d"
                            >
                                {/* Mobile view - compact icons */}
                                <div
                                    className="flex sm:hidden items-center space-x-2"
                                    data-oid="pv6qm:p"
                                >
                                    <span
                                        className="text-xs font-medium text-gray-600"
                                        data-oid="11sze37"
                                    >
                                        Join:
                                    </span>
                                    <a
                                        href="/telegram"
                                        className="inline-flex items-center justify-center w-7 h-7 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-all duration-300"
                                        title="Join Telegram Community"
                                        data-oid="::kzzpf"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="hizck6k"
                                        >
                                            <path
                                                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                                data-oid="r8o.rd4"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="/whatsapp"
                                        className="inline-flex items-center justify-center w-7 h-7 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300"
                                        title="Join WhatsApp Community"
                                        data-oid="poe912i"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="41pg8ol"
                                        >
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                                data-oid="xzw0bqw"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>

                                {/* Desktop view - original buttons */}
                                <div
                                    className="hidden sm:flex items-center space-x-3"
                                    data-oid="gy2e2t-"
                                >
                                    <a
                                        href="/telegram"
                                        className="inline-flex items-center px-3 py-1 bg-teal-500 hover:bg-teal-600 text-white text-xs font-medium rounded-md transition-all duration-300"
                                        data-oid="ufxxan3"
                                    >
                                        <svg
                                            className="h-4 w-4 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="p:ihg8i"
                                        >
                                            <path
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.1 14.9l-3.2-3.2c-.2-.2-.2-.5 0-.7l.7-.7c.2-.2.5-.2.7 0l2.1 2.1 5.6-5.6c.2-.2.5-.2.7 0l.7.7c.2.2.2.5 0 .7l-6.6 6.6c-.2.2-.5.2-.7.1z"
                                                data-oid="vlc22re"
                                            ></path>
                                        </svg>
                                        Join Telegram Community
                                    </a>
                                    <a
                                        href="/whatsapp"
                                        className="inline-flex items-center px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-md transition-all duration-300"
                                        data-oid="ubl2i49"
                                    >
                                        <svg
                                            className="h-4 w-4 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="7ohq35_"
                                        >
                                            <path
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.1 14.9l-3.2-3.2c-.2-.2-.2-.5 0-.7l.7-.7c.2-.2.5-.2.7 0l2.1 2.1 5.6-5.6c.2-.2.5-.2.7 0l.7.7c.2.2.2.5 0 .7l-6.6 6.6c-.2.2-.5.2-.7.1z"
                                                data-oid="f_rzdk8"
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

            <main data-oid="_4ttoae">
                {/* Hero Section */}
                <section
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white relative overflow-hidden"
                    data-oid="z4r6_l6"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden" data-oid="n687ije">
                        <div
                            className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-40 rounded-full blur-3xl animate-blob"
                            data-oid="-:v2o4d"
                        ></div>
                        <div
                            className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="21zy_oq"
                        ></div>
                        <div
                            className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="pz.u893"
                        ></div>
                        <div
                            className="absolute -bottom-20 right-1/4 w-80 h-80 bg-[hsl(220,70%,65%)] opacity-30 rounded-full blur-3xl animate-blob animation-delay-3000"
                            data-oid="u1:hmn7"
                        ></div>
                    </div>
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
                        data-oid="3yhahxt"
                    >
                        <div className="grid md:grid-cols-2 gap-8 items-center" data-oid="1.4tfll">
                            <div className="block" data-oid="9bbzjom">
                                <div
                                    className="inline-block bg-blue-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-6 uppercase"
                                    data-oid="o2e:ayt"
                                >
                                    India's #1 Platform For Tech Freshers
                                </div>

                                <h1
                                    className="text-4xl md:text-6xl font-bold mb-4"
                                    data-oid="t:8j1:l"
                                >
                                    JOIN THOUSANDS GETTING JOBS IN TOP TECH COMPANIES
                                </h1>

                                <p
                                    className="text-xl md:text-2xl mb-8 text-blue-100"
                                    data-oid="_ma0f86"
                                >
                                    Discover jobs, internships, and resources tailored for freshers
                                </p>

                                <div className="flex flex-wrap gap-4 mt-10" data-oid="g3q6ehb">
                                    <a
                                        href="/fresher-jobs"
                                        className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 rounded-md font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                                        data-oid="03ztryz"
                                    >
                                        Browse Fresher Jobs
                                        <svg
                                            className="ml-2 h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="0wsbn7y"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                data-oid="1maz5zb"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="/community"
                                        className="inline-flex items-center px-6 py-3 bg-[hsl(175,70%,41%)] hover:bg-[hsl(175,70%,36%)] rounded-md font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                                        data-oid="iqr:2qi"
                                    >
                                        Join Community
                                        <svg
                                            className="ml-2 h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="vsxtcu4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                data-oid="vvsu2po"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="block relative" data-oid="vx8_m.3">
                                <div
                                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl transform hover:scale-[1.01] transition-all duration-500 relative z-10"
                                    data-oid="l9p4_t5"
                                >
                                    <div className="mb-6" data-oid="czm9iam">
                                        <form
                                            onSubmit={handleSearch}
                                            className="flex relative z-10 transform transition-all duration-500 hover:scale-[1.02]"
                                            data-oid="ukw8zjk"
                                        >
                                            <input
                                                type="text"
                                                placeholder="Search Entry Level Jobs..."
                                                className="w-full px-4 py-3 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                data-oid="sc7bubl"
                                            />

                                            <button
                                                type="submit"
                                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(175,70%,41%)] hover:to-[hsl(196,80%,45%)] px-6 py-3 rounded-r-md font-medium transition-all duration-300 shadow-lg"
                                                data-oid="7_8vpor"
                                            >
                                                SEARCH
                                            </button>
                                        </form>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mb-6" data-oid="gu.ct48">
                                        <div
                                            className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/30"
                                            data-oid="vd77568"
                                        >
                                            {stats?.freshers.toLocaleString()} Freshers
                                        </div>
                                        <div
                                            className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/30"
                                            data-oid="vmg46il"
                                        >
                                            {stats?.verifiedJobs} Verified Jobs
                                        </div>
                                        <div
                                            className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/30"
                                            data-oid="tq0icyh"
                                        >
                                            Entry-Level Focused
                                        </div>
                                    </div>

                                    <div
                                        className="absolute -bottom-3 -right-3 w-20 h-20 bg-[hsl(196,80%,65%)] opacity-60 rounded-full blur-xl"
                                        data-oid=".qqfor0"
                                    ></div>
                                    <div
                                        className="absolute -top-3 -left-3 w-20 h-20 bg-[hsl(175,70%,61%)] opacity-60 rounded-full blur-xl"
                                        data-oid="qcsr-mc"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Platform Stats Section */}
                <section
                    className="py-16 bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
                    data-oid="e117bql"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="3.9ujeh">
                        <h2
                            className="text-3xl font-bold text-center mb-12 text-gray-800"
                            data-oid="-sdq1yi"
                        >
                            Platform Metrics
                        </h2>
                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                            data-oid="_l_y:nt"
                        >
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="pp1gklq"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="h5o.erh"
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
                                        data-oid="2ta-j9f"
                                    >
                                        <path
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            data-oid="jbzucup"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="jnz-7za"
                                >
                                    Active Members
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="jnwagbj">
                                    {stats?.activeMembers.toLocaleString()} growing community
                                    members
                                </p>
                                <a
                                    href="/community"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="r_uws10"
                                >
                                    Join Now
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="ct7ocuy"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="4bx.9sf"
                                        ></path>
                                    </svg>
                                </a>
                            </div>

                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="nmptt-l"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="8c6gh1b"
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
                                        data-oid="24_-lug"
                                    >
                                        <path
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            data-oid="32ni-6."
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="b3:0yj9"
                                >
                                    Posted Jobs
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="q-w7kkc">
                                    {stats?.postedJobs} Jobs posted till now
                                </p>
                                <a
                                    href="/jobs"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="pga-baf"
                                >
                                    See Jobs
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="vilnq4d"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="9a.6s:t"
                                        ></path>
                                    </svg>
                                </a>
                            </div>

                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="fowxcw-"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="1mgu055"
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
                                        data-oid=":3w_tgt"
                                    >
                                        <path
                                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                                            data-oid="gp93u94"
                                        ></path>
                                        <rect
                                            x="2"
                                            y="9"
                                            width="4"
                                            height="12"
                                            data-oid="mqgv4ys"
                                        ></rect>
                                        <circle cx="4" cy="4" r="2" data-oid="57nql_1"></circle>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="hju4bx1"
                                >
                                    LinkedIn
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="gg9ppvj">
                                    {stats?.linkedInFollowers} professional followers
                                </p>
                                <a
                                    href="/linkedin"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="tla11hu"
                                >
                                    Connect
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="i73:6xp"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="eb783nb"
                                        ></path>
                                    </svg>
                                </a>
                            </div>

                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                data-oid="ol5:kp7"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="5:xzacx"
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
                                        data-oid="h4nyqjw"
                                    >
                                        <path
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            data-oid="18t0n.v"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="a2m4w5:"
                                >
                                    Registered Users
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="_wiczba">
                                    {stats?.users.toLocaleString()} active accounts
                                </p>
                                <Link
                                    href="/register"
                                    className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                    data-oid="1mb1252"
                                >
                                    Join Now
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="z:chx64"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            data-oid="o2gcp7s"
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
                    data-oid=".8mb12z"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="jf_fp2l">
                        <div className="text-center mb-12" data-oid="hz-axas">
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="r.owtgv"
                            >
                                Why Choose CareerX
                            </h2>
                            <p className="text-xl text-blue-800" data-oid="c_iwnot">
                                Designed Exclusively For Tech Freshers
                            </p>
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto" data-oid="uontf-3">
                                Our platform focuses on the unique needs of entry-level tech talent.
                            </p>
                        </div>

                        {/* Full-Width Banner */}
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white p-6 rounded-xl mb-12 shadow-lg transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group"
                            data-oid="h32q.k:"
                        >
                            {/* Animated shine effect */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shine transition-opacity duration-300"
                                data-oid="qs5jvvz"
                            ></div>
                            {/* Frosted glass overlay */}
                            <div
                                className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"
                                data-oid="-v3368n"
                            ></div>
                            <div
                                className="flex flex-col md:flex-row items-center justify-between relative z-10"
                                data-oid="6-vapt4"
                            >
                                <div data-oid="e4jhc9t">
                                    <h3 className="text-2xl font-bold mb-2" data-oid="d-5evqr">
                                        NOTIFY X
                                    </h3>
                                    <p className="text-blue-100" data-oid="a3quipg">
                                        Get real-time alerts for freshers jobs matching your profile
                                    </p>
                                </div>
                                <a
                                    href="/notify"
                                    className="mt-4 md:mt-0 px-6 py-2 bg-white text-blue-800 rounded-md font-medium hover:bg-blue-50 transition-all duration-300"
                                    data-oid="v7rs._d"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* Benefits Cards */}
                        <div className="grid md:grid-cols-3 gap-8" data-oid="dq1v1xw">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={benefit.id}
                                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)]"
                                    data-oid="rcghfuz"
                                >
                                    <div
                                        className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                        data-oid="26qywx1"
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
                                                data-oid="yv:jsrx"
                                            >
                                                <path
                                                    d="M22 10v6M2 10l10-5 10 5-10 5z"
                                                    data-oid="rc4lox0"
                                                ></path>
                                                <path
                                                    d="M6 12v5c3 3 9 3 12 0v-5"
                                                    data-oid="7_a.3lv"
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
                                                data-oid="9d6._y5"
                                            >
                                                <path
                                                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                                    data-oid="7d._5iv"
                                                ></path>
                                                <path d="m9 12 2 2 4-4" data-oid="gp14stu"></path>
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
                                                data-oid="6rl77gu"
                                            >
                                                <path
                                                    d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"
                                                    data-oid="2:vz9sw"
                                                ></path>
                                                <path
                                                    d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l2.26-2.21a2.13 2.13 0 0 1 3 0h0a2.13 2.13 0 0 1 0 3l-2.26 2.21"
                                                    data-oid="-biwdjs"
                                                ></path>
                                            </svg>
                                        )}
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="2xmnz6x"
                                    >
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600" data-oid="jk8r.sk">
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
                    data-oid="00pgumu"
                >
                    {/* Subtle animated background elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-20" data-oid="paoj8mk">
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="hifqa.5"
                        ></div>
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="4e73azl"
                        ></div>
                    </div>
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                        data-oid="p-p:99o"
                    >
                        <div className="text-center mb-12" data-oid="o8bu7y.">
                            <h2
                                className="text-4xl font-bold mb-4 text-gray-800 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] inline-block text-transparent bg-clip-text"
                                data-oid="6mqdt_f"
                            >
                                NotifyX
                            </h2>
                            <p
                                className="text-2xl font-semibold mb-2 text-gray-700"
                                data-oid="n.ygkd7"
                            >
                                Get Real-time Tech Job Alerts for just ₹49/month.
                            </p>
                            <p
                                className="text-xl text-gray-600 max-w-4xl mx-auto"
                                data-oid="th.g-23"
                            >
                                Unlock Curated Opportunities, Insider Updates, and a driven
                                Community — All for less than a Cup of Coffee. Supercharge your
                                Career, starting Today.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="l4fr1hl">
                            {/* Tile 1 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] text-center"
                                data-oid=".c9.mrk"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="booxnjz"
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
                                        data-oid="u54.yty"
                                    >
                                        <path
                                            d="M22 12h-4l-3 9L9 3l-3 9H2"
                                            data-oid="9j.0yk7"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="1akvfj2"
                                >
                                    Instant Access
                                </h3>
                                <p className="text-gray-600" data-oid="mguqj6x">
                                    Get immediate access to the latest tech job opportunities as
                                    soon as they're posted.
                                </p>
                            </div>

                            {/* Tile 2 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] text-center"
                                data-oid="0:9:htv"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid=".dv.dk5"
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
                                        data-oid="pm9_siw"
                                    >
                                        <path
                                            d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                                            data-oid="01eehrj"
                                        ></path>
                                        <path
                                            d="M13.73 21a2 2 0 0 1-3.46 0"
                                            data-oid="f68s-7l"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="7t6rn31"
                                >
                                    Real-Time Alerts
                                </h3>
                                <p className="text-gray-600" data-oid="lvaey20">
                                    Stay ahead with personalized notifications that match your
                                    skills and preferences.
                                </p>
                            </div>

                            {/* Tile 3 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] text-center"
                                data-oid="axd-og3"
                            >
                                <div
                                    className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                    data-oid="xpiku._"
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
                                        data-oid="7y_67es"
                                    >
                                        <path
                                            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                                            data-oid="-3l0e-3"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="v494cob"
                                >
                                    Fast-Track Your Career
                                </h3>
                                <p className="text-gray-600" data-oid="x6rrre:">
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
                    data-oid="19n::ms"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-30" data-oid="grdb96k">
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="zo:hneu"
                        ></div>
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="necb:gc"
                        ></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="sxu.p7k">
                        <div className="text-center mb-12" data-oid="vly-4-r">
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="p5g4ue5"
                            >
                                Join 35,000+ Tech Freshers
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid="mr025mm">
                                Networking is crucial. Connect with peers and mentors.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-oid="b:x_3js">
                            <a
                                href="/whatsapp"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-green-500"
                                data-oid="yi-3415"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full mb-4"
                                    data-oid="3z6xlx:"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="z9ui:1g"
                                    >
                                        <path
                                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                            data-oid="e5.8t5v"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="sdikzz-"
                                >
                                    WhatsApp
                                </h3>
                                <p className="text-gray-600" data-oid=".lz7huc">
                                    {stats?.whatsappMembers.toLocaleString()} members
                                </p>
                            </a>

                            <a
                                href="/linkedin"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-blue-600"
                                data-oid="hagaska"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4"
                                    data-oid="clf69i5"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="o4av88g"
                                    >
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                            data-oid="9oli_ra"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="bzb2e_q"
                                >
                                    LinkedIn
                                </h3>
                                <p className="text-gray-600" data-oid="eon19pl">
                                    {stats?.linkedinMembers.toLocaleString()} followers
                                </p>
                            </a>

                            <a
                                href="/telegram"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-blue-500"
                                data-oid="l7f6xb6"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mb-4"
                                    data-oid="0he5rv5"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="03k3i_p"
                                    >
                                        <path
                                            d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                            data-oid=":yj3ib1"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="6ddk25:"
                                >
                                    Telegram
                                </h3>
                                <p className="text-gray-600" data-oid=":x85p9x">
                                    {stats?.telegramMembers.toLocaleString()} members
                                </p>
                            </a>

                            <a
                                href="/instagram"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)] border-t-4 border-t-purple-600"
                                data-oid="931qtn:"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-purple-600 to-pink-500 text-white rounded-full mb-4"
                                    data-oid="ti-.27:"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="qx-6x30"
                                    >
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                            data-oid="gzgi8rk"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="saqkw8z"
                                >
                                    Instagram
                                </h3>
                                <p className="text-gray-600" data-oid="_wk9r.n">
                                    Follow us
                                </p>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Featured Jobs Section */}
                <section
                    className="py-16 bg-gradient-to-r from-[hsl(210,60%,92%)] via-[hsl(196,70%,90%)] to-[hsl(175,60%,92%)] relative overflow-hidden"
                    data-oid="_ysu4ak"
                >
                    {/* Subtle animated background elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-20" data-oid="7uhqc0.">
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="ps8_gh-"
                        ></div>
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="dymdlh3"
                        ></div>
                    </div>

                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                        data-oid="i-_0q8a"
                    >
                        <div className="text-center mb-12" data-oid="k3po.38">
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="xm59ofo"
                            >
                                Featured Jobs
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid="6brll9h">
                                Handpicked opportunities for freshers in top tech companies
                            </p>
                        </div>

                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            data-oid="iw8b:5-"
                        >
                            {/* Job Card 1 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                                data-oid="fish9fg"
                            >
                                <div className="p-6" data-oid="x8ct.bg">
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid="mz97jre"
                                    >
                                        <div
                                            className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600"
                                            data-oid="k2480gm"
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
                                                data-oid="_e4dqab"
                                            >
                                                <rect
                                                    x="2"
                                                    y="7"
                                                    width="20"
                                                    height="14"
                                                    rx="2"
                                                    ry="2"
                                                    data-oid="f3tzsp:"
                                                ></rect>
                                                <path
                                                    d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                                    data-oid="zocuh0i"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span
                                            className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            data-oid="gearg5-"
                                        >
                                            New
                                        </span>
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="g:y_2dp"
                                    >
                                        Frontend Developer
                                    </h3>
                                    <p
                                        className="text-blue-700 font-medium mb-3"
                                        data-oid="n28mm31"
                                    >
                                        Microsoft
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="h81bl_v">
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="jjysb:r"
                                        >
                                            React
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="4gm23eh"
                                        >
                                            TypeScript
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="9blj7v6"
                                        >
                                            Remote
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="k_g71zo"
                                    >
                                        <span className="text-gray-600" data-oid="poa_:n9">
                                            ₹5-8 LPA
                                        </span>
                                        <a
                                            href="/jobs/frontend-developer"
                                            className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                            data-oid="0ljhwtc"
                                        >
                                            Apply Now
                                            <svg
                                                className="ml-1 h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                data-oid="xhlp7pf"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    data-oid="atlf0t4"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Job Card 2 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                                data-oid="375mp.q"
                            >
                                <div className="p-6" data-oid="x6vshg8">
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid="ap84:qi"
                                    >
                                        <div
                                            className="w-12 h-12 bg-orange-100 rounded-md flex items-center justify-center text-orange-600"
                                            data-oid="kdcfv9k"
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
                                                data-oid="zmg5vk_"
                                            >
                                                <path
                                                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                                    data-oid="-4qz.z5"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span
                                            className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            data-oid="ume78jk"
                                        >
                                            Featured
                                        </span>
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="3bhhjar"
                                    >
                                        Backend Engineer
                                    </h3>
                                    <p
                                        className="text-blue-700 font-medium mb-3"
                                        data-oid="clt3-v4"
                                    >
                                        Amazon
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="pcdpkpw">
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="5no5oqc"
                                        >
                                            Java
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="o2en5or"
                                        >
                                            Spring Boot
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="hab0w.s"
                                        >
                                            Hybrid
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="jnql76:"
                                    >
                                        <span className="text-gray-600" data-oid="oo_z4i_">
                                            ₹8-12 LPA
                                        </span>
                                        <a
                                            href="/jobs/backend-engineer"
                                            className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                            data-oid="-35qkmu"
                                        >
                                            Apply Now
                                            <svg
                                                className="ml-1 h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                data-oid="cviajsp"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    data-oid="rzjc58_"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Job Card 3 */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                                data-oid="rc7ar0s"
                            >
                                <div className="p-6" data-oid="ph5wedx">
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid="w:3z6cb"
                                    >
                                        <div
                                            className="w-12 h-12 bg-green-100 rounded-md flex items-center justify-center text-green-600"
                                            data-oid="bv8xwnu"
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
                                                data-oid="skiey92"
                                            >
                                                <polyline
                                                    points="16 18 22 12 16 6"
                                                    data-oid="q_tylj2"
                                                ></polyline>
                                                <polyline
                                                    points="8 6 2 12 8 18"
                                                    data-oid="oc7jbbe"
                                                ></polyline>
                                            </svg>
                                        </div>
                                        <span
                                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            data-oid="8sqja0_"
                                        >
                                            Hot
                                        </span>
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="eh83en:"
                                    >
                                        Full Stack Developer
                                    </h3>
                                    <p
                                        className="text-blue-700 font-medium mb-3"
                                        data-oid="mchn05w"
                                    >
                                        Google
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="wi:d5ng">
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="_at0g2a"
                                        >
                                            React
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="e8z2p:3"
                                        >
                                            Node.js
                                        </span>
                                        <span
                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                            data-oid="6p:kuqg"
                                        >
                                            Onsite
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="3.fko24"
                                    >
                                        <span className="text-gray-600" data-oid="jvehdo:">
                                            ₹10-15 LPA
                                        </span>
                                        <a
                                            href="/jobs/full-stack-developer"
                                            className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                            data-oid="_4h41uh"
                                        >
                                            Apply Now
                                            <svg
                                                className="ml-1 h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                data-oid="kym-w:q"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    data-oid="709n30w"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-10" data-oid="6:5zjl4">
                            <a
                                href="/jobs"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                                data-oid="xs2348b"
                            >
                                View All Jobs
                                <svg
                                    className="ml-2 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-oid="3dupo12"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        data-oid="eq5uzwe"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Fresher Resources */}
                <section
                    className="py-16 bg-gradient-to-b from-white to-[hsl(196,60%,95%)]"
                    data-oid="c24oevs"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="1rp:csk">
                        <div className="text-center mb-12" data-oid="cywj:kq">
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="k.w-wh5"
                            >
                                Fresher Resources
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid="mt0idds">
                                Everything You Need to Succeed
                            </p>
                        </div>

                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            data-oid="v-ey3h:"
                        >
                            {resources.map((resource, index) => (
                                <div
                                    key={resource.id}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)]"
                                    data-oid="ullnws6"
                                >
                                    <div className="p-6" data-oid="4u:n.5.">
                                        <div
                                            className="text-4xl mb-4 text-[hsl(196,80%,45%)]"
                                            data-oid="xrhxixr"
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
                                                    data-oid="17sx.5q"
                                                >
                                                    <path d="M3 3v18h18" data-oid=".vwqhg2"></path>
                                                    <path d="M18 17V9" data-oid="ysf.264"></path>
                                                    <path d="M13 17V5" data-oid="mm3rv8t"></path>
                                                    <path d="M8 17v-3" data-oid="smhgzsc"></path>
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
                                                    data-oid="20tm1sr"
                                                >
                                                    <circle
                                                        cx="11"
                                                        cy="11"
                                                        r="8"
                                                        data-oid="h_s8l22"
                                                    ></circle>
                                                    <path
                                                        d="m21 21-4.3-4.3"
                                                        data-oid="slk2v8e"
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
                                                    data-oid="u7_jwd9"
                                                >
                                                    <path
                                                        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                                                        data-oid="aqulu4v"
                                                    ></path>
                                                    <circle
                                                        cx="9"
                                                        cy="7"
                                                        r="4"
                                                        data-oid="e8bfxd8"
                                                    ></circle>
                                                    <path
                                                        d="M22 21v-2a4 4 0 0 0-3-3.87"
                                                        data-oid="-6a.s4a"
                                                    ></path>
                                                    <path
                                                        d="M16 3.13a4 4 0 0 1 0 7.75"
                                                        data-oid="n-7xhua"
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
                                                    data-oid="e6_:xjk"
                                                >
                                                    <path
                                                        d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                                                        data-oid="q:_984v"
                                                    ></path>
                                                    <polyline
                                                        points="14 2 14 8 20 8"
                                                        data-oid="ixs.2a."
                                                    ></polyline>
                                                    <line
                                                        x1="16"
                                                        y1="13"
                                                        x2="8"
                                                        y2="13"
                                                        data-oid="9kemylh"
                                                    ></line>
                                                    <line
                                                        x1="16"
                                                        y1="17"
                                                        x2="8"
                                                        y2="17"
                                                        data-oid="e6u0jrk"
                                                    ></line>
                                                    <line
                                                        x1="10"
                                                        y1="9"
                                                        x2="8"
                                                        y2="9"
                                                        data-oid="k3vh4kv"
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
                                                    data-oid="::kq5:i"
                                                >
                                                    <path d="M3 3v18h18" data-oid="_re.ixa"></path>
                                                    <path
                                                        d="m3 10 5 3 4-6 5 7"
                                                        data-oid="tqlbvvm"
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
                                                    data-oid="bvy6q_5"
                                                >
                                                    <path
                                                        d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                                                        data-oid="0ofjcwd"
                                                    ></path>
                                                    <path d="M18 14h-8" data-oid="6ca0wzp"></path>
                                                    <path d="M15 18h-5" data-oid="m2cvgrl"></path>
                                                    <path
                                                        d="M10 6h8v4h-8z"
                                                        data-oid="lll8.pb"
                                                    ></path>
                                                </svg>
                                            )}
                                        </div>
                                        <h3
                                            className="text-xl font-bold mb-2 text-gray-800"
                                            data-oid="q304.5i"
                                        >
                                            {resource.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4" data-oid="ydp9c2.">
                                            {resource.description}
                                        </p>
                                        <a
                                            href={`/resources/${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                            data-oid="6sja9uw"
                                        >
                                            Learn more
                                            <svg
                                                className="ml-1 h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                data-oid="dyrndzl"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    data-oid="m..3pyz"
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
                    data-oid="f0zbu8_"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden" data-oid="60zithw">
                        <div
                            className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="k8sji0t"
                        ></div>
                        <div
                            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-30 rounded-full blur-3xl animate-blob"
                            data-oid="r9:3ev3"
                        ></div>
                    </div>
                    {/* Frosted glass overlay */}
                    <div
                        className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"
                        data-oid="ujvlcqy"
                    ></div>
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                        data-oid="iu-69jg"
                    >
                        <div className="text-center mb-12" data-oid="i8s7_dn">
                            <h2 className="text-3xl font-bold mb-4" data-oid="..3bcy9">
                                Hear From Our Members
                            </h2>
                            <p className="text-blue-100 max-w-2xl mx-auto" data-oid="d-tfm0m">
                                Success stories from freshers who found their dream tech jobs
                            </p>
                        </div>

                        {/* Auto-scrolling testimonial carousel */}
                        <div className="relative overflow-hidden py-8" data-oid="c6cjbq_">
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
                                style={{ width: `${testimonials.length * 380}px` }}
                                data-oid="-_srvo3"
                            >
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="bg-white/90 backdrop-blur-md text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-white/20 w-[350px] h-[200px] flex-shrink-0 flex flex-col"
                                        data-oid="r6v-z2g"
                                    >
                                        <div className="flex items-center mb-3" data-oid="q44h.x8">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full mr-4 object-cover"
                                                data-oid="o-yl0ew"
                                            />

                                            <div data-oid="dc7:zgh">
                                                <h3
                                                    className="font-bold text-gray-800"
                                                    data-oid="j56n77_"
                                                >
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-blue-700" data-oid="51uklu7">
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                        <p
                                            className="text-gray-600 italic flex-grow overflow-y-auto"
                                            data-oid="e1t19ex"
                                        >
                                            "{testimonial.quote}"
                                        </p>
                                    </div>
                                ))}

                                {/* Duplicate first few testimonials to create seamless loop */}
                                {testimonials.slice(0, 3).map((testimonial) => (
                                    <div
                                        key={`duplicate-${testimonial.id}`}
                                        className="bg-white/90 backdrop-blur-md text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-white/20 w-[350px] h-[200px] flex-shrink-0 flex flex-col"
                                        data-oid=":hs95w4"
                                    >
                                        <div className="flex items-center mb-3" data-oid="0b10l.t">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full mr-4 object-cover"
                                                data-oid="ejrxwgx"
                                            />

                                            <div data-oid="l:4fo.8">
                                                <h3
                                                    className="font-bold text-gray-800"
                                                    data-oid="a2dnidi"
                                                >
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-blue-700" data-oid="vlfr6vn">
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                        <p
                                            className="text-gray-600 italic flex-grow overflow-y-auto"
                                            data-oid="biv3_wo"
                                        >
                                            "{testimonial.quote}"
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-8" data-oid=":j_gu9y"></div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section
                    className="py-16 bg-white text-[hsl(196,80%,45%)] relative overflow-hidden"
                    data-oid="ohkl2vl"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-30" data-oid="2m:9pzh">
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="eimk7z9"
                        ></div>
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid="237e1c1"
                        ></div>
                    </div>
                    <div
                        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                        data-oid="p6mmj8v"
                    >
                        <p className="text-[hsl(196,80%,65%)] mb-2" data-oid="4w1_czi">
                            Start Your Tech Journey Today
                        </p>
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
                            data-oid="qhac4_a"
                        >
                            Ready to Land Your First Tech Job?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8" data-oid="369dd56">
                            Join 35,000+ freshers who've launched their careers with us
                        </p>
                        <div
                            className="flex flex-col sm:flex-row justify-center gap-4"
                            data-oid=".9rx4mt"
                        >
                            <Link
                                href="/register"
                                className="px-8 py-4 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-md font-bold text-lg hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse-shadow relative z-10"
                                data-oid=".6y8_5e"
                            >
                                Create Free Account →
                            </Link>
                            <Link
                                href="/fresher-jobs"
                                className="px-8 py-4 border-2 border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-md font-bold text-lg hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg transform hover:scale-105 relative z-10"
                                data-oid="uvlhe:1"
                            >
                                Browse Fresher Jobs
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-950 text-white" data-oid="48zb1c9">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="gwms-p3">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="61cpc.z">
                        <div data-oid="7gr6.4h">
                            <div className="mb-6" data-oid="da6p3ie">
                                <Logo data-oid="vomra66" />
                            </div>
                            <p className="text-gray-400 mb-4" data-oid="iefqmty">
                                Helping tech freshers launch their careers with curated
                                opportunities and resources.
                            </p>
                            <div className="flex space-x-4" data-oid="6m8wlrd">
                                <a
                                    href="/linkedin"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    data-oid="hi4641m"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="f2yozwq"
                                    >
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                            data-oid="q_gb.0z"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="/twitter"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    data-oid="bo47d57"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="uw2-yjq"
                                    >
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                            data-oid="8pnuo7a"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="/instagram"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    data-oid="-agxvwm"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="zb3:.m1"
                                    >
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                            data-oid="z03ync."
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid=":qc_8e_">
                            <h3 className="text-lg font-bold mb-4" data-oid="pyemlds">
                                Company
                            </h3>
                            <ul className="space-y-3" data-oid="v1jixp7">
                                <li data-oid="z-50.-6">
                                    <a
                                        href="/about"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid=".c_uva:"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="ur.nodh">
                                    <a
                                        href="/advertising"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="-2_j4yb"
                                    >
                                        Advertising
                                    </a>
                                </li>
                                <li data-oid="3nksey-">
                                    <a
                                        href="/contact"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="hko73l."
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li data-oid="jk8cqo7">
                                    <a
                                        href="/careers"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="02zgvzh"
                                    >
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="ji5escx">
                            <h3 className="text-lg font-bold mb-4" data-oid="806a4p_">
                                Resources
                            </h3>
                            <ul className="space-y-3" data-oid="0rtmsbs">
                                <li data-oid="2v-pcd-">
                                    <a
                                        href="/tax-calculator"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="7sbea23"
                                    >
                                        Tax Calculator
                                    </a>
                                </li>
                                <li data-oid="n98z.io">
                                    <a
                                        href="/resume-review"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="mo1hqx4"
                                    >
                                        Resume Review
                                    </a>
                                </li>
                                <li data-oid=":eeo7_6">
                                    <a
                                        href="/jobs-tracker"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="akf10y4"
                                    >
                                        Jobs Tracker
                                    </a>
                                </li>
                                <li data-oid="-sfgwxl">
                                    <a
                                        href="/blog"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="8xfrc2k"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="wqd1y-8">
                            <h3 className="text-lg font-bold mb-4" data-oid="vjxxn.a">
                                Legal
                            </h3>
                            <ul className="space-y-3" data-oid="7ntbyy0">
                                <li data-oid="a8f0u--">
                                    <a
                                        href="/privacy-policy"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="ok8:xy3"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li data-oid="nrdvdhi">
                                    <a
                                        href="/terms"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="vxk:cmj"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                                <li data-oid="77tyxjk">
                                    <a
                                        href="/refunds"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="senm5uk"
                                    >
                                        Refund Policy
                                    </a>
                                </li>
                                <li data-oid="egtrkv.">
                                    <a
                                        href="/shipping-policy"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="klk2k0g"
                                    >
                                        Shipping Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                        data-oid="4jk:6_t"
                    >
                        <p className="mb-2" data-oid=".8ay:55">
                            © {new Date().getFullYear()} CareerX. All rights reserved.
                        </p>
                        <p data-oid="2k60v8e">Built with ❤️ by BitHive Technologies</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
