'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth/AuthContext';
import { useRouter } from 'next/navigation';
import MainNavbar from '@/components/mainNavbar';
import Link from 'next/link';

interface UserProfile {
    name: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    skills: string[];
    experience: string;
    education: string;
    portfolio: string;
    linkedin: string;
    github: string;
    profileImage: string;
    joinedDate: string;
    completionPercentage: number;
}

export default function ProfilePage() {
    const { user, isAuthenticated } = useAuth();
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [profile, setProfile] = useState<UserProfile>({
        name: user?.name || 'John Doe',
        email: user?.email || 'john.doe@example.com',
        phone: '+91 9876543210',
        location: 'Bangalore, India',
        bio: 'Passionate frontend developer with a love for creating beautiful and functional user interfaces. Always eager to learn new technologies and contribute to innovative projects.',
        skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'Node.js', 'Python', 'Git', 'Figma'],
        experience: 'Fresher',
        education: 'B.Tech in Computer Science Engineering',
        portfolio: 'https://johndoe.dev',
        linkedin: 'https://linkedin.com/in/johndoe',
        github: 'https://github.com/johndoe',
        profileImage:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        joinedDate: '2024-01-15',
        completionPercentage: 85,
    });

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login?redirect=/profile');
        }
    }, [isAuthenticated, router]);

    const handleSave = () => {
        setIsEditing(false);
        // Here you would typically save to backend
        console.log('Profile saved:', profile);
    };

    const handleSkillAdd = (skill: string) => {
        if (skill && !profile.skills.includes(skill)) {
            setProfile((prev) => ({
                ...prev,
                skills: [...prev.skills, skill],
            }));
        }
    };

    const handleSkillRemove = (skillToRemove: string) => {
        setProfile((prev) => ({
            ...prev,
            skills: prev.skills.filter((skill) => skill !== skillToRemove),
        }));
    };

    const getCompletionColor = (percentage: number) => {
        if (percentage >= 80) return 'text-green-600';
        if (percentage >= 60) return 'text-yellow-600';
        return 'text-red-600';
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
            data-oid="r9fxqk0"
        >
            <MainNavbar data-oid="yvs9f2q" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="g1mt6cl">
                {/* Header Section */}
                <div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-8"
                    data-oid=".af9d36"
                >
                    <div
                        className="flex flex-col lg:flex-row items-start lg:items-center gap-8"
                        data-oid="ufl63sl"
                    >
                        {/* Profile Image */}
                        <div className="relative" data-oid="9cbzplm">
                            <img
                                src={profile.profileImage}
                                alt={profile.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-[hsl(196,80%,45%)] shadow-lg"
                                data-oid="ymaj4.g"
                            />

                            <div
                                className="absolute -bottom-2 -right-2 bg-[hsl(196,80%,45%)] text-white rounded-full p-2 shadow-lg"
                                data-oid="kyfik21"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="d.vjs.6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                        data-oid="h9i8wym"
                                    />

                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                        data-oid="4677_mk"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="flex-1" data-oid="97tbziy">
                            <div
                                className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"
                                data-oid="__qjr9t"
                            >
                                <div data-oid="gg7vjqp">
                                    <h1
                                        className="text-3xl font-bold text-gray-800 mb-2"
                                        data-oid="uf_.axv"
                                    >
                                        {profile.name}
                                    </h1>
                                    <p
                                        className="text-lg text-[hsl(196,80%,45%)] font-medium"
                                        data-oid="4l-lb.3"
                                    >
                                        {profile.experience}
                                    </p>
                                    <p
                                        className="text-gray-600 flex items-center gap-2 mt-1"
                                        data-oid="diwx9cj"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="ykml_u6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="08ybl5m"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="3:rj87t"
                                            />
                                        </svg>
                                        {profile.location}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsEditing(!isEditing)}
                                    className="mt-4 sm:mt-0 px-6 py-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    data-oid="v3bpisl"
                                >
                                    {isEditing ? 'Save Profile' : 'Edit Profile'}
                                </button>
                            </div>

                            {/* Profile Completion */}
                            <div className="bg-gray-50 rounded-lg p-4 mb-4" data-oid="5oel7s7">
                                <div
                                    className="flex items-center justify-between mb-2"
                                    data-oid="a9xa2--"
                                >
                                    <span
                                        className="text-sm font-medium text-gray-700"
                                        data-oid="jnxtjq3"
                                    >
                                        Profile Completion
                                    </span>
                                    <span
                                        className={`text-sm font-bold ${getCompletionColor(profile.completionPercentage)}`}
                                        data-oid="gya3eje"
                                    >
                                        {profile.completionPercentage}%
                                    </span>
                                </div>
                                <div
                                    className="w-full bg-gray-200 rounded-full h-2"
                                    data-oid="x50v3nc"
                                >
                                    <div
                                        className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${profile.completionPercentage}%` }}
                                        data-oid="hps892l"
                                    ></div>
                                </div>
                            </div>

                            {/* Bio */}
                            <p className="text-gray-600 leading-relaxed" data-oid="fyz1o75">
                                {profile.bio}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 mb-8"
                    data-oid="0:qxp9l"
                >
                    <div className="flex flex-wrap border-b border-gray-200" data-oid="dj67uyt">
                        {[
                            { id: 'overview', label: 'Overview', icon: '👤' },
                            { id: 'skills', label: 'Skills', icon: '🛠️' },
                            { id: 'experience', label: 'Experience', icon: '💼' },
                            { id: 'education', label: 'Education', icon: '🎓' },
                            { id: 'social', label: 'Social Links', icon: '🔗' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-4 font-medium transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? 'text-[hsl(196,80%,45%)] border-b-2 border-[hsl(196,80%,45%)] bg-blue-50'
                                        : 'text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-gray-50'
                                }`}
                                data-oid="cr5ztxx"
                            >
                                <span data-oid="i_mhjq6">{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8"
                    data-oid="k2bvo55"
                >
                    {activeTab === 'overview' && (
                        <div className="space-y-6" data-oid="ur7p5:a">
                            <h2
                                className="text-2xl font-bold text-gray-800 mb-6"
                                data-oid="yi-48w_"
                            >
                                Profile Overview
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="mobq-a3">
                                <div className="space-y-4" data-oid="yehdhfk">
                                    <div data-oid="bos-xoh">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="d8sesbt"
                                        >
                                            Full Name
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={profile.name}
                                                onChange={(e) =>
                                                    setProfile((prev) => ({
                                                        ...prev,
                                                        name: e.target.value,
                                                    }))
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                                data-oid="rzv1-fe"
                                            />
                                        ) : (
                                            <p
                                                className="text-gray-800 font-medium"
                                                data-oid="xz4:mim"
                                            >
                                                {profile.name}
                                            </p>
                                        )}
                                    </div>

                                    <div data-oid="5y17jk2">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="y3uesw0"
                                        >
                                            Email
                                        </label>
                                        <p className="text-gray-800" data-oid="8qw3-la">
                                            {profile.email}
                                        </p>
                                    </div>

                                    <div data-oid="_z0xt17">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="qs:1k5c"
                                        >
                                            Phone
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="tel"
                                                value={profile.phone}
                                                onChange={(e) =>
                                                    setProfile((prev) => ({
                                                        ...prev,
                                                        phone: e.target.value,
                                                    }))
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                                data-oid="a359o:c"
                                            />
                                        ) : (
                                            <p className="text-gray-800" data-oid="_mz51gi">
                                                {profile.phone}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-4" data-oid="-w1dtwc">
                                    <div data-oid="mdzgpam">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="wquamxk"
                                        >
                                            Location
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={profile.location}
                                                onChange={(e) =>
                                                    setProfile((prev) => ({
                                                        ...prev,
                                                        location: e.target.value,
                                                    }))
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                                data-oid="skaa6du"
                                            />
                                        ) : (
                                            <p className="text-gray-800" data-oid="sguxr6f">
                                                {profile.location}
                                            </p>
                                        )}
                                    </div>

                                    <div data-oid="1ncny1v">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="-.nszjl"
                                        >
                                            Experience Level
                                        </label>
                                        {isEditing ? (
                                            <select
                                                value={profile.experience}
                                                onChange={(e) =>
                                                    setProfile((prev) => ({
                                                        ...prev,
                                                        experience: e.target.value,
                                                    }))
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                                data-oid="qjk_ih."
                                            >
                                                <option value="Fresher" data-oid="di3n8xr">
                                                    Fresher
                                                </option>
                                                <option value="0-1 years" data-oid="aj8_s30">
                                                    0-1 years
                                                </option>
                                                <option value="1-3 years" data-oid="_f42x88">
                                                    1-3 years
                                                </option>
                                                <option value="3-5 years" data-oid="_b5zmz1">
                                                    3-5 years
                                                </option>
                                                <option value="5+ years" data-oid="coc-sa-">
                                                    5+ years
                                                </option>
                                            </select>
                                        ) : (
                                            <p className="text-gray-800" data-oid="vr9beac">
                                                {profile.experience}
                                            </p>
                                        )}
                                    </div>

                                    <div data-oid="mkugeuf">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="n-n_:z2"
                                        >
                                            Member Since
                                        </label>
                                        <p className="text-gray-800" data-oid="j6rx379">
                                            {new Date(profile.joinedDate).toLocaleDateString(
                                                'en-US',
                                                { year: 'numeric', month: 'long', day: 'numeric' },
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div data-oid="6l8pg.1">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="-84s8gr"
                                >
                                    Bio
                                </label>
                                {isEditing ? (
                                    <textarea
                                        value={profile.bio}
                                        onChange={(e) =>
                                            setProfile((prev) => ({ ...prev, bio: e.target.value }))
                                        }
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                        placeholder="Tell us about yourself..."
                                        data-oid="bokk83k"
                                    />
                                ) : (
                                    <p className="text-gray-800 leading-relaxed" data-oid="yq86oum">
                                        {profile.bio}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'skills' && (
                        <div className="space-y-6" data-oid="wx6fhqe">
                            <div className="flex items-center justify-between" data-oid="lcmlyfb">
                                <h2 className="text-2xl font-bold text-gray-800" data-oid="vj1ouwc">
                                    Skills & Technologies
                                </h2>
                                {isEditing && (
                                    <div className="flex gap-2" data-oid="q_-:rbk">
                                        <input
                                            type="text"
                                            placeholder="Add a skill..."
                                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                            onKeyPress={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleSkillAdd(e.currentTarget.value);
                                                    e.currentTarget.value = '';
                                                }
                                            }}
                                            data-oid="rnt8oph"
                                        />

                                        <button
                                            className="px-4 py-2 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors"
                                            data-oid="p9_v5-:"
                                        >
                                            Add
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-3" data-oid="_a4n9z4">
                                {profile.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="relative group bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                        data-oid="os-m0xk"
                                    >
                                        {skill}
                                        {isEditing && (
                                            <button
                                                onClick={() => handleSkillRemove(skill)}
                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                                                data-oid=":paptdv"
                                            >
                                                ×
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {profile.skills.length === 0 && (
                                <div className="text-center py-12 text-gray-500" data-oid="r2r5tuq">
                                    <svg
                                        className="h-16 w-16 mx-auto mb-4 text-gray-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=":a8bsao"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                            data-oid="cwpyjlh"
                                        />
                                    </svg>
                                    <p data-oid="ghd-63x">
                                        No skills added yet. Add your first skill to get started!
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'experience' && (
                        <div className="space-y-6" data-oid="b55.5ok">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="s736pw9">
                                Work Experience
                            </h2>

                            <div className="bg-gray-50 rounded-lg p-6" data-oid="0bh-_f7">
                                <div className="flex items-center gap-4 mb-4" data-oid="6vnk385">
                                    <div
                                        className="w-12 h-12 bg-[hsl(196,80%,45%)] rounded-lg flex items-center justify-center text-white font-bold"
                                        data-oid="y8v-wp6"
                                    >
                                        F
                                    </div>
                                    <div data-oid="k5bu-r1">
                                        <h3
                                            className="text-lg font-semibold text-gray-800"
                                            data-oid="v.qtuf6"
                                        >
                                            Fresher
                                        </h3>
                                        <p className="text-gray-600" data-oid="o9:b0or">
                                            Ready to start my career journey
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-700" data-oid="7dc0dsh">
                                    As a recent graduate, I'm excited to apply my academic knowledge
                                    and passion for technology to real-world projects. I've
                                    completed several personal projects and internships that have
                                    prepared me for a professional role in software development.
                                </p>
                            </div>

                            <div className="text-center py-8" data-oid="7wl7haq">
                                <Link
                                    href="/jobs"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    data-oid="c0epl64"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="2-ox2b8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                                            data-oid="mq1l3xt"
                                        />
                                    </svg>
                                    Find Your First Job
                                </Link>
                            </div>
                        </div>
                    )}

                    {activeTab === 'education' && (
                        <div className="space-y-6" data-oid="9msbbml">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="z8df9tv">
                                Education
                            </h2>

                            <div className="bg-gray-50 rounded-lg p-6" data-oid="7n431-j">
                                <div className="flex items-start gap-4" data-oid="80t_kq7">
                                    <div
                                        className="w-12 h-12 bg-[hsl(196,80%,45%)] rounded-lg flex items-center justify-center text-white"
                                        data-oid=":uv82qb"
                                    >
                                        🎓
                                    </div>
                                    <div className="flex-1" data-oid="d02-s2s">
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={profile.education}
                                                onChange={(e) =>
                                                    setProfile((prev) => ({
                                                        ...prev,
                                                        education: e.target.value,
                                                    }))
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent mb-2"
                                                placeholder="Your education details..."
                                                data-oid="yx8d84b"
                                            />
                                        ) : (
                                            <h3
                                                className="text-lg font-semibold text-gray-800 mb-2"
                                                data-oid="6ynt0dp"
                                            >
                                                {profile.education}
                                            </h3>
                                        )}
                                        <p className="text-gray-600" data-oid="hlbqzt8">
                                            2020 - 2024
                                        </p>
                                        <p className="text-gray-700 mt-2" data-oid="97d:hn_">
                                            Focused on computer science fundamentals, software
                                            engineering principles, and modern web technologies.
                                            Completed projects in various programming languages and
                                            frameworks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'social' && (
                        <div className="space-y-6" data-oid="6q6.fam">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid=".h9f.72">
                                Social Links
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6" data-oid=":_vi.kr">
                                <div data-oid="f8s-ks8">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="rnftc_n"
                                    >
                                        Portfolio Website
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="url"
                                            value={profile.portfolio}
                                            onChange={(e) =>
                                                setProfile((prev) => ({
                                                    ...prev,
                                                    portfolio: e.target.value,
                                                }))
                                            }
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                            placeholder="https://yourportfolio.com"
                                            data-oid="obp3t-g"
                                        />
                                    ) : (
                                        <a
                                            href={profile.portfolio}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[hsl(196,80%,45%)] hover:underline flex items-center gap-2"
                                            data-oid="1994g8t"
                                        >
                                            {profile.portfolio}
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="qifg2nn"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    data-oid="r::nigz"
                                                />
                                            </svg>
                                        </a>
                                    )}
                                </div>

                                <div data-oid="7f5t4xm">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="p7vls-b"
                                    >
                                        LinkedIn Profile
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="url"
                                            value={profile.linkedin}
                                            onChange={(e) =>
                                                setProfile((prev) => ({
                                                    ...prev,
                                                    linkedin: e.target.value,
                                                }))
                                            }
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                            placeholder="https://linkedin.com/in/yourprofile"
                                            data-oid="qs81k-2"
                                        />
                                    ) : (
                                        <a
                                            href={profile.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[hsl(196,80%,45%)] hover:underline flex items-center gap-2"
                                            data-oid="9:ipjmz"
                                        >
                                            {profile.linkedin}
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="fm41x8u"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    data-oid="nyrl25d"
                                                />
                                            </svg>
                                        </a>
                                    )}
                                </div>

                                <div data-oid="5ktknt7">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="33r.shj"
                                    >
                                        GitHub Profile
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="url"
                                            value={profile.github}
                                            onChange={(e) =>
                                                setProfile((prev) => ({
                                                    ...prev,
                                                    github: e.target.value,
                                                }))
                                            }
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                            placeholder="https://github.com/yourusername"
                                            data-oid="sb0_j7o"
                                        />
                                    ) : (
                                        <a
                                            href={profile.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[hsl(196,80%,45%)] hover:underline flex items-center gap-2"
                                            data-oid="m8faubw"
                                        >
                                            {profile.github}
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="mtp2q:e"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    data-oid="1sih6b1"
                                                />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {isEditing && (
                        <div
                            className="flex justify-end gap-4 pt-6 border-t border-gray-200"
                            data-oid="y_mz1ii"
                        >
                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                data-oid="bzzrwd-"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-6 py-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                data-oid="gh95-y8"
                            >
                                Save Changes
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
