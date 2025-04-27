'use client';

import { useState, useEffect } from 'react';

// Dummy data for the page
const dummyData = {
    stats: {
        freshers: 35213,
        verifiedJobs: '10k+',
        activeMembers: 35213,
        monthlyReaders: '784k',
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
    ],

    resources: [
        {
            id: 1,
            title: 'DSA Corner',
            description: 'Master data structures and algorithms',
            icon: '📊',
        },
        {
            id: 2,
            title: 'Job Matches',
            description: 'Personalized job recommendations',
            icon: '🔍',
        },
        { id: 3, title: 'Community', description: 'Connect with peers and mentors', icon: '👥' },
        {
            id: 4,
            title: 'Resume Review',
            description: 'Get expert feedback on your CV',
            icon: '📝',
        },
        { id: 5, title: 'Job Tracker', description: 'Organize your job applications', icon: '📈' },
    ],

    features: [
        { id: 1, title: 'Career Launch', description: 'Entry-Level Tech Jobs', icon: '🚀' },
        { id: 2, title: 'Learning Hub', description: 'Fresher-Focused Resources', icon: '📚' },
        { id: 3, title: 'Community', description: '35,000+ Jobs', icon: '👥' },
        { id: 4, title: 'Tech Roadmaps', description: 'Guided Career Profile', icon: '🗺️' },
    ],

    benefits: [
        {
            id: 1,
            title: 'Built for Freshers',
            description: 'Resources for 0-2 years of experience',
            icon: '🎓',
        },
        {
            id: 2,
            title: 'Curated Opportunities',
            description: 'Handpicked roles from companies offering training',
            icon: '✅',
        },
        {
            id: 3,
            title: 'Supportive Network',
            description: 'Connect with peers, mentors, and hiring managers',
            icon: '🤝',
        },
    ],
};

// API call functions (to be implemented with actual backend)
const fetchStats = async () => {
    // Replace with actual API call
    return new Promise((resolve) => setTimeout(() => resolve(dummyData.stats), 500));
};

const fetchTestimonials = async () => {
    // Replace with actual API call
    return new Promise((resolve) => setTimeout(() => resolve(dummyData.testimonials), 500));
};

const fetchResources = async () => {
    // Replace with actual API call
    return new Promise((resolve) => setTimeout(() => resolve(dummyData.resources), 500));
};

const fetchFeatures = async () => {
    // Replace with actual API call
    return new Promise((resolve) => setTimeout(() => resolve(dummyData.features), 500));
};

const fetchBenefits = async () => {
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
        data-oid="m1mg7h7"
    >
        <path
            d="M10 5L20 15L10 25"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="p9.e538"
        />

        <path
            d="M30 5H40L50 25H40"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="3ewztmt"
        />

        <text
            x="60"
            y="22"
            fontFamily="Arial"
            fontSize="18"
            fontWeight="bold"
            fill="#1E3A8A"
            data-oid="v6kjc8j"
        >
            Careers
        </text>
    </svg>
);

export default function Page() {
    const [stats, setStats] = useState(null);
    const [testimonials, setTestimonials] = useState([]);
    const [resources, setResources] = useState([]);
    const [features, setFeatures] = useState([]);
    const [benefits, setBenefits] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');

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

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality with backend
        console.log('Searching for:', searchQuery);
        // Reset search field
        setSearchQuery('');
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="t-025m4">
            {/* Sticky Navbar */}
            <header
                className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm"
                data-oid="p8::s.s"
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="z8ygt1_">
                    <div className="flex justify-between items-center h-16" data-oid="6r-cxyq">
                        {/* Logo */}
                        <div className="flex-shrink-0" data-oid="e5z3eho">
                            <a href="/" className="flex items-center" data-oid="6_3vky.">
                                <Logo data-oid="3s3:pz4" />
                            </a>
                        </div>

                        {/* Navigation Links - Hidden on mobile */}
                        <div className="hidden md:flex items-center space-x-4" data-oid="evc:3ne">
                            <a
                                href="/jobs"
                                className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium"
                                data-oid="-_2kj.s"
                            >
                                Jobs
                            </a>
                            <a
                                href="/fresher-jobs"
                                className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-all duration-300"
                                data-oid="5ko6les"
                            >
                                Fresher Jobs
                            </a>
                            <a
                                href="/internships"
                                className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-all duration-300"
                                data-oid="rxopcq_"
                            >
                                Internships
                            </a>
                            <a
                                href="/roadmaps"
                                className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-all duration-300"
                                data-oid="nlm7973"
                            >
                                Roadmaps
                            </a>
                            <a
                                href="/articles"
                                className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-all duration-300"
                                data-oid="-a.e7g:"
                            >
                                Articles
                            </a>

                            {/* Dropdown for More */}
                            <div className="relative group" data-oid="4:u6y49">
                                <button
                                    className="text-gray-700 group-hover:text-blue-800 px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center"
                                    data-oid="jta_jqc"
                                >
                                    More
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="kyphfxv"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                            data-oid="25des13"
                                        ></path>
                                    </svg>
                                </button>
                                <div
                                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left"
                                    data-oid="o4jwbt5"
                                >
                                    <div className="py-1" data-oid="jv-7j:i">
                                        <a
                                            href="/about"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            data-oid="ba9a24c"
                                        >
                                            About Us
                                        </a>
                                        <a
                                            href="/contact"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            data-oid="ridcf-m"
                                        >
                                            Contact
                                        </a>
                                        <a
                                            href="/faq"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            data-oid="nq9:nyp"
                                        >
                                            FAQ
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-3" data-oid="y0m3-bz">
                            <a
                                href="/login"
                                className="hidden md:inline-flex items-center px-4 py-2 border border-[hsl(196,80%,45%)] text-sm font-medium rounded-md text-[hsl(196,80%,45%)] hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300"
                                data-oid="rmrbh-0"
                            >
                                Login
                            </a>
                            <a
                                href="/register"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                                data-oid=".294xrt"
                            >
                                Register
                            </a>

                            {/* Mobile menu button */}
                            <button
                                type="button"
                                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-blue-50"
                                data-oid="cegr54y"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="ncfptsp"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="sza2h2v"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Sub-Navbar */}
                <div
                    className="bg-[hsl(196,60%,95%)]/70 backdrop-blur-sm border-t border-[hsl(210,30%,95%)]"
                    data-oid="z2loydc"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=".e.zx1r">
                        <div
                            className="flex flex-wrap items-center justify-between py-2 text-sm"
                            data-oid="q-fjfyn"
                        >
                            <div
                                className="flex flex-wrap items-center space-x-4"
                                data-oid="dqstrdp"
                            >
                                <a
                                    href="/jobs-tracker"
                                    className="text-gray-600 hover:text-blue-800 py-1 transition-all duration-300"
                                    data-oid="num-1lx"
                                >
                                    Jobs Tracker
                                </a>
                                <a
                                    href="/resume-review"
                                    className="text-gray-600 hover:text-blue-800 py-1 transition-all duration-300"
                                    data-oid="0jjbtj:"
                                >
                                    Resume Review
                                </a>
                                <a
                                    href="/notify"
                                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:bg-blue-200"
                                    data-oid="z2ejiq6"
                                >
                                    NOTIFY X
                                </a>
                            </div>
                            <div
                                className="flex items-center space-x-3 mt-2 sm:mt-0"
                                data-oid="pakn7kq"
                            >
                                <a
                                    href="/telegram"
                                    className="inline-flex items-center px-3 py-1 bg-teal-500 hover:bg-teal-600 text-white text-xs font-medium rounded-md transition-all duration-300"
                                    data-oid="n.m5u7u"
                                >
                                    <svg
                                        className="h-4 w-4 mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="xzps:_c"
                                    >
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.1 14.9l-3.2-3.2c-.2-.2-.2-.5 0-.7l.7-.7c.2-.2.5-.2.7 0l2.1 2.1 5.6-5.6c.2-.2.5-.2.7 0l.7.7c.2.2.2.5 0 .7l-6.6 6.6c-.2.2-.5.2-.7.1z"
                                            data-oid="weyukb2"
                                        ></path>
                                    </svg>
                                    Join Telegram Community
                                </a>
                                <a
                                    href="/whatsapp"
                                    className="inline-flex items-center px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-md transition-all duration-300"
                                    data-oid="9gdtkqt"
                                >
                                    <svg
                                        className="h-4 w-4 mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="uziz8ft"
                                    >
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.1 14.9l-3.2-3.2c-.2-.2-.2-.5 0-.7l.7-.7c.2-.2.5-.2.7 0l2.1 2.1 5.6-5.6c.2-.2.5-.2.7 0l.7.7c.2.2.2.5 0 .7l-6.6 6.6c-.2.2-.5.2-.7.1z"
                                            data-oid="w_4m3u3"
                                        ></path>
                                    </svg>
                                    Join WhatsApp Community
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main data-oid="0etu_t5">
                {/* Hero Section */}
                <section
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white relative overflow-hidden"
                    data-oid="s-x8nxf"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden" data-oid="8_v6pv5">
                        <div
                            className="absolute -top-40 -left-40 w-80 h-80 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob"
                            data-oid="2y0yuv0"
                        ></div>
                        <div
                            className="absolute top-40 right-10 w-80 h-80 bg-[hsl(210,70%,65%)] opacity-30 rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="_2s.v5z"
                        ></div>
                        <div
                            className="absolute bottom-10 left-20 w-80 h-80 bg-[hsl(175,70%,61%)] opacity-30 rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="la61w8d"
                        ></div>
                    </div>
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
                        data-oid="f7g7tpl"
                    >
                        <div className="grid md:grid-cols-2 gap-8 items-center" data-oid="ubboxa7">
                            <div className="block" data-oid="j8ow0q8">
                                <div
                                    className="inline-block bg-blue-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-6 uppercase"
                                    data-oid="7dae4sp"
                                >
                                    India's #1 Platform For Tech Freshers
                                </div>

                                <h1
                                    className="text-4xl md:text-6xl font-bold mb-4"
                                    data-oid="yuqd:x3"
                                >
                                    FROM CAMPUS TO CAREER
                                </h1>

                                <p
                                    className="text-xl md:text-2xl mb-8 text-blue-100"
                                    data-oid="t4t2i:s"
                                >
                                    Your gateway to entry-level tech roles
                                </p>

                                <div className="mb-8" data-oid="hsvd_:e">
                                    <form
                                        onSubmit={handleSearch}
                                        className="flex relative z-10 transform transition-all duration-500 hover:scale-[1.02]"
                                        data-oid="t.goajp"
                                    >
                                        <input
                                            type="text"
                                            placeholder="Search Entry Level Jobs..."
                                            className="w-full px-4 py-3 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            data-oid="zy1e.s0"
                                        />

                                        <button
                                            type="submit"
                                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(175,70%,41%)] hover:to-[hsl(196,80%,45%)] px-6 py-3 rounded-r-md font-medium transition-all duration-300"
                                            data-oid="w1drx9z"
                                        >
                                            SEARCH
                                        </button>
                                    </form>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-8" data-oid="kgfa0bb">
                                    <div
                                        className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/30"
                                        data-oid="usqs397"
                                    >
                                        {stats?.freshers.toLocaleString()} Freshers
                                    </div>
                                    <div
                                        className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/30"
                                        data-oid="jh-u.hg"
                                    >
                                        {stats?.verifiedJobs} Verified Jobs
                                    </div>
                                    <div
                                        className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/30"
                                        data-oid="1btc_yl"
                                    >
                                        Entry-Level Focused
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4" data-oid="un71x3o">
                                    <a
                                        href="/fresher-jobs"
                                        className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 rounded-md font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                                        data-oid="hfmzbi1"
                                    >
                                        Browse Fresher Jobs
                                        <svg
                                            className="ml-2 h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="gwgpwxq"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                data-oid="kydu5_1"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="/community"
                                        className="inline-flex items-center px-6 py-3 bg-[hsl(175,70%,41%)] hover:bg-[hsl(175,70%,36%)] rounded-md font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                                        data-oid="2_.hkj5"
                                    >
                                        Join Community
                                        <svg
                                            className="ml-2 h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="9.4t3:1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                data-oid="wuha4-8"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="block" data-oid="r14d9n8">
                                <div
                                    className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-xl animate-float border border-white/30"
                                    data-oid="94v5trk"
                                >
                                    <h3
                                        className="text-xl font-semibold mb-4 text-center"
                                        data-oid="sk81e1e"
                                    >
                                        Platform Stats
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4" data-oid="sd:5qns">
                                        <div
                                            className="bg-white/30 backdrop-blur-md p-4 rounded-lg text-center border border-white/30 hover:bg-white/40 transition-all duration-300"
                                            data-oid="abmmf-w"
                                        >
                                            <div className="text-3xl font-bold" data-oid="4nmhwkr">
                                                {stats?.activeMembers.toLocaleString()}
                                            </div>
                                            <div
                                                className="text-sm text-blue-100"
                                                data-oid="ko-xso1"
                                            >
                                                Active Members
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center"
                                            data-oid="lcewumh"
                                        >
                                            <div className="text-3xl font-bold" data-oid="46.sg.z">
                                                {stats?.monthlyReaders}
                                            </div>
                                            <div
                                                className="text-sm text-blue-100"
                                                data-oid="p.37ahb"
                                            >
                                                Monthly Readers
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center"
                                            data-oid="6d1kht8"
                                        >
                                            <div className="text-3xl font-bold" data-oid="dp7m.tj">
                                                {stats?.linkedInFollowers}
                                            </div>
                                            <div
                                                className="text-sm text-blue-100"
                                                data-oid="1:09pi-"
                                            >
                                                LinkedIn
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center"
                                            data-oid="mhvqu73"
                                        >
                                            <div className="text-3xl font-bold" data-oid="qiuxi7y">
                                                {stats?.users.toLocaleString()}
                                            </div>
                                            <div
                                                className="text-sm text-blue-100"
                                                data-oid="2ombl9a"
                                            >
                                                Users
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features Grid */}
                <section
                    className="py-16 bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
                    data-oid="tg3gedw"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="a9-d0ho">
                        <h2
                            className="text-3xl font-bold text-center mb-12 text-gray-800"
                            data-oid="412g-bp"
                        >
                            Key Features
                        </h2>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                            data-oid="2dphkmj"
                        >
                            {features.map((feature, index) => (
                                <div
                                    key={feature.id}
                                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-t-4 border-[hsl(196,80%,45%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(175,70%,41%)]"
                                    data-oid="r-epk88"
                                >
                                    <div className="text-4xl mb-4" data-oid="nz:xzbu">
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="354-rn."
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4" data-oid="95__d1e">
                                        {feature.description}
                                    </p>
                                    <a
                                        href={`/${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                        data-oid="f0s4kyf"
                                    >
                                        Explore
                                        <svg
                                            className="ml-1 h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="s3axnhd"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                data-oid="krdgaj7"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose CareerX */}
                <section
                    className="py-16 bg-gradient-to-b from-white to-[hsl(196,60%,95%)]"
                    data-oid="8k8qwcf"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="jplgjhp">
                        <div className="text-center mb-12" data-oid="xbv_b.e">
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="mi8kozl"
                            >
                                Why Choose CareerX
                            </h2>
                            <p className="text-xl text-blue-800" data-oid="k2s8q9i">
                                Designed Exclusively For Tech Freshers
                            </p>
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto" data-oid="moq.mki">
                                Our platform focuses on the unique needs of entry-level tech talent.
                            </p>
                        </div>

                        {/* Full-Width Banner */}
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white p-6 rounded-xl mb-12 shadow-lg transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group"
                            data-oid="s:526ly"
                        >
                            {/* Animated shine effect */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shine transition-opacity duration-300"
                                data-oid="l.pv392"
                            ></div>
                            {/* Frosted glass overlay */}
                            <div
                                className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"
                                data-oid="655_h6."
                            ></div>
                            <div
                                className="flex flex-col md:flex-row items-center justify-between relative z-10"
                                data-oid="::x6kfw"
                            >
                                <div data-oid="dzz9twa">
                                    <h3 className="text-2xl font-bold mb-2" data-oid="52r14ui">
                                        NOTIFY X
                                    </h3>
                                    <p className="text-blue-100" data-oid="21ywv52">
                                        Get real-time alerts for freshers jobs matching your profile
                                    </p>
                                </div>
                                <a
                                    href="/notify"
                                    className="mt-4 md:mt-0 px-6 py-2 bg-white text-blue-800 rounded-md font-medium hover:bg-blue-50 transition-all duration-300"
                                    data-oid="22-qt82"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* Benefits Cards */}
                        <div className="grid md:grid-cols-3 gap-8" data-oid="zp6rt6-">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={benefit.id}
                                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)]"
                                    data-oid="79i7jkd"
                                >
                                    <div className="text-4xl mb-4" data-oid="6ym819x">
                                        {benefit.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-2 text-gray-800"
                                        data-oid="ki1:cig"
                                    >
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600" data-oid="ex.4yik">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Integration */}
                <section
                    className="py-16 bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)] relative overflow-hidden"
                    data-oid="13ch.i3"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-30" data-oid="cih7pis">
                        <div
                            className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="fa:ls82"
                        ></div>
                        <div
                            className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"
                            data-oid=".3cgzv1"
                        ></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="v-ukh7h">
                        <div className="text-center mb-12" data-oid="pcg6my5">
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="h4ra6ed"
                            >
                                Join 35,000+ Tech Freshers
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid="pbil7k1">
                                Networking is crucial. Connect with peers and mentors.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-oid="m.52w:f">
                            <a
                                href="/whatsapp"
                                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-[hsl(210,30%,95%)]"
                                data-oid="tlh6cvn"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full mb-4"
                                    data-oid="pcsv--z"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="jwx8jys"
                                    >
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.1 14.9l-3.2-3.2c-.2-.2-.2-.5 0-.7l.7-.7c.2-.2.5-.2.7 0l2.1 2.1 5.6-5.6c.2-.2.5-.2.7 0l.7.7c.2.2.2.5 0 .7l-6.6 6.6c-.2.2-.5.2-.7.1z"
                                            data-oid="uxga2s8"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="sg_t-s4"
                                >
                                    WhatsApp
                                </h3>
                                <p className="text-gray-600" data-oid="cxwf4b_">
                                    {stats?.whatsappMembers.toLocaleString()} members
                                </p>
                            </a>

                            <a
                                href="/linkedin"
                                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                                data-oid="jd2x8z8"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4"
                                    data-oid="ki0prhx"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="l3h3v5m"
                                    >
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.1 14.9l-3.2-3.2c-.2-.2-.2-.5 0-.7l.7-.7c.2-.2.5-.2.7 0l2.1 2.1 5.6-5.6c.2-.2.5-.2.7 0l.7.7c.2.2.2.5 0 .7l-6.6 6.6c-.2.2-.5.2-.7.1z"
                                            data-oid="ve5ouvj"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid=":nwkloa"
                                >
                                    LinkedIn
                                </h3>
                                <p className="text-gray-600" data-oid="._-bf3_">
                                    {stats?.linkedinMembers.toLocaleString()} followers
                                </p>
                            </a>

                            <a
                                href="/telegram"
                                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                                data-oid="nmy2oo8"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mb-4"
                                    data-oid="sn-zwz0"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="-0up49a"
                                    >
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.1 14.9l-3.2-3.2c-.2-.2-.2-.5 0-.7l.7-.7c.2-.2.5-.2.7 0l2.1 2.1 5.6-5.6c.2-.2.5-.2.7 0l.7.7c.2.2.2.5 0 .7l-6.6 6.6c-.2.2-.5.2-.7.1z"
                                            data-oid="rciziy0"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="d6w5i1:"
                                >
                                    Telegram
                                </h3>
                                <p className="text-gray-600" data-oid="2qkv6tn">
                                    {stats?.telegramMembers.toLocaleString()} members
                                </p>
                            </a>

                            <a
                                href="/instagram"
                                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                                data-oid="0vn.z8u"
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-purple-600 to-pink-500 text-white rounded-full mb-4"
                                    data-oid="-z1o429"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="hfeut3s"
                                    >
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.1 14.9l-3.2-3.2c-.2-.2-.2-.5 0-.7l.7-.7c.2-.2.5-.2.7 0l2.1 2.1 5.6-5.6c.2-.2.5-.2.7 0l.7.7c.2.2.2.5 0 .7l-6.6 6.6c-.2.2-.5.2-.7.1z"
                                            data-oid="m8w5u5q"
                                        ></path>
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-1 text-gray-800"
                                    data-oid="48oid.t"
                                >
                                    Instagram
                                </h3>
                                <p className="text-gray-600" data-oid="unaexyz">
                                    Follow us
                                </p>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Fresher Resources */}
                <section
                    className="py-16 bg-gradient-to-b from-white to-[hsl(196,60%,95%)]"
                    data-oid="vakypfx"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="tp8_k3v">
                        <div className="text-center mb-12" data-oid="uh3nn:e">
                            <h2
                                className="text-3xl font-bold mb-4 text-gray-800"
                                data-oid="2rmo.cr"
                            >
                                Fresher Resources
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto" data-oid="rpqpdzb">
                                Everything You Need to Succeed
                            </p>
                        </div>

                        <div className="relative" data-oid="uo38gc7">
                            <div
                                className="flex overflow-x-auto pb-6 -mx-4 px-4 space-x-6 scrollbar-hide"
                                data-oid="5n__hed"
                            >
                                {resources.map((resource, index) => (
                                    <div
                                        key={resource.id}
                                        className="flex-none w-80 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                                        data-oid="xsxak:q"
                                    >
                                        <div className="p-6" data-oid="f:b2rd-">
                                            <div className="text-4xl mb-4" data-oid="..8aiwp">
                                                {resource.icon}
                                            </div>
                                            <h3
                                                className="text-xl font-bold mb-2 text-gray-800"
                                                data-oid="c:4mu6h"
                                            >
                                                {resource.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4" data-oid="_hhi2.-">
                                                {resource.description}
                                            </p>
                                            <a
                                                href={`/resources/${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="text-blue-800 font-medium inline-flex items-center hover:text-blue-900 transition-all duration-300"
                                                data-oid=":gpd5hk"
                                            >
                                                Learn more
                                                <svg
                                                    className="ml-1 h-4 w-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    data-oid="suwennk"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                        data-oid="2_mhwbq"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Scroll indicators */}
                            <div
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 hidden md:block"
                                data-oid="ir609c6"
                            >
                                <button
                                    className="p-2 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100 transition-all duration-300"
                                    data-oid="g0hukj0"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="ybtr_gl"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 19l-7-7 7-7"
                                            data-oid="y4jpvzh"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 hidden md:block"
                                data-oid="rxh2uq2"
                            >
                                <button
                                    className="p-2 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100 transition-all duration-300"
                                    data-oid="po2vk60"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="ve-6lhx"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                            data-oid="91992e1"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section
                    className="py-16 bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white relative overflow-hidden"
                    data-oid="8dqd98c"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden" data-oid="7pd0hgh">
                        <div
                            className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob animation-delay-2000"
                            data-oid="13fo8g1"
                        ></div>
                        <div
                            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-30 rounded-full blur-3xl animate-blob"
                            data-oid="89243g8"
                        ></div>
                    </div>
                    {/* Frosted glass overlay */}
                    <div
                        className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"
                        data-oid="0w5:hzx"
                    ></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="7e2z3wp">
                        <div className="text-center mb-12" data-oid="l4:akv4">
                            <h2 className="text-3xl font-bold mb-4" data-oid="jf3hcyv">
                                Hear From Our Members
                            </h2>
                            <p className="text-blue-100 max-w-2xl mx-auto" data-oid="cwdeww1">
                                Success stories from freshers who found their dream tech jobs
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="y4tftqb">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className="bg-white/90 backdrop-blur-md text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-white/30"
                                    data-oid="mozk8rk"
                                >
                                    <div className="flex items-center mb-4" data-oid=".arb65q">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full mr-4 object-cover"
                                            data-oid="uykc:fa"
                                        />

                                        <div data-oid="l1jb58w">
                                            <h3
                                                className="font-bold text-gray-800"
                                                data-oid="jafjs5f"
                                            >
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-blue-700" data-oid="xxk2iqm">
                                                {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic" data-oid="2k7wect">
                                        "{testimonial.quote}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section
                    className="py-16 bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white relative overflow-hidden"
                    data-oid="7d.c30q"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden" data-oid="0o-ttl7">
                        <div
                            className="absolute -top-20 -right-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob"
                            data-oid="dg3x9_3"
                        ></div>
                        <div
                            className="absolute bottom-20 left-10 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-30 rounded-full blur-3xl animate-blob animation-delay-4000"
                            data-oid="m:4wacd"
                        ></div>
                    </div>
                    {/* Frosted glass overlay */}
                    <div
                        className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"
                        data-oid="rf0mk:4"
                    ></div>
                    <div
                        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                        data-oid="509st6h"
                    >
                        <p className="text-blue-200 mb-2" data-oid="jf3ctzo">
                            Start Your Tech Journey Today
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" data-oid="fd:d_1b">
                            Ready to Land Your First Tech Job?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8" data-oid="a2mp8:u">
                            Join 35,000+ freshers who've launched their careers with us
                        </p>
                        <div
                            className="flex flex-col sm:flex-row justify-center gap-4"
                            data-oid="ky:ehj8"
                        >
                            <a
                                href="/register"
                                className="px-8 py-4 bg-white text-[hsl(196,80%,45%)] rounded-md font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse-shadow relative z-10"
                                data-oid="zil-22."
                            >
                                Create Free Account →
                            </a>
                            <a
                                href="/fresher-jobs"
                                className="px-8 py-4 border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white rounded-md font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg transform hover:scale-105 relative z-10"
                                data-oid="sr4rhd2"
                            >
                                Browse Fresher Jobs
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white" data-oid="3thd4hw">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="z5enqj:">
                    <div className="grid md:grid-cols-3 gap-8" data-oid="mv5:ho_">
                        <div data-oid="084ju9w">
                            <h3 className="text-lg font-bold mb-4" data-oid="80z5fro">
                                Company
                            </h3>
                            <ul className="space-y-2" data-oid="d.0nl_a">
                                <li data-oid="35doyf6">
                                    <a
                                        href="/about"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="dwqvhjj"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="m_eavcl">
                                    <a
                                        href="/advertising"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="b75aik0"
                                    >
                                        Advertising
                                    </a>
                                </li>
                                <li data-oid="4gfye7z">
                                    <a
                                        href="/contact"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="dvhx3c2"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="4.c3k_4">
                            <h3 className="text-lg font-bold mb-4" data-oid="075ucxe">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid="odfuvx.">
                                <li data-oid="vx2gvkq">
                                    <a
                                        href="/tax-calculator"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="q6y95ym"
                                    >
                                        Tax Calculator
                                    </a>
                                </li>
                                <li data-oid="pawp.w8">
                                    <a
                                        href="/resume-review"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="atvaok9"
                                    >
                                        Resume Review
                                    </a>
                                </li>
                                <li data-oid="p9uanln">
                                    <a
                                        href="/jobs-tracker"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="cle5gya"
                                    >
                                        Jobs Tracker
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="1e2kryh">
                            <h3 className="text-lg font-bold mb-4" data-oid="qrbikvt">
                                Legal
                            </h3>
                            <ul className="space-y-2" data-oid="pqhdej_">
                                <li data-oid="mqajp73">
                                    <a
                                        href="/privacy-policy"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="wzpjoms"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li data-oid="ci1ul6n">
                                    <a
                                        href="/terms"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="9:4hp:q"
                                    >
                                        Terms
                                    </a>
                                </li>
                                <li data-oid="vx2ye55">
                                    <a
                                        href="/refunds"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="4:.:-.1"
                                    >
                                        Refunds
                                    </a>
                                </li>
                                <li data-oid="p338pwm">
                                    <a
                                        href="/shipping-policy"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        data-oid="b.47vpy"
                                    >
                                        Shipping Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                        data-oid="rrqi6eb"
                    >
                        Developed with Love by Biti-live Technologies
                    </div>
                </div>
            </footer>
        </div>
    );
}
