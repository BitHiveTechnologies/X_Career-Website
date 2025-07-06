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
            data-oid="g1c3tuu"
        >
            <MainNavbar data-oid="wv2e_67" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid=":l95:35">
                {/* Header Section */}
                <div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-8"
                    data-oid="m-uz8yv"
                >
                    <div
                        className="flex flex-col lg:flex-row items-start lg:items-center gap-8"
                        data-oid="hjr0v0:"
                    >
                        {/* Profile Image */}
                        <div className="relative" data-oid="wo..18k">
                            <img
                                src={profile.profileImage}
                                alt={profile.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-[hsl(196,80%,45%)] shadow-lg"
                                data-oid="6uwwytn"
                            />

                            <div
                                className="absolute -bottom-2 -right-2 bg-[hsl(196,80%,45%)] text-white rounded-full p-2 shadow-lg"
                                data-oid="s-u93tp"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="wuoggbk"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                        data-oid="ree7j6v"
                                    />

                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                        data-oid="7v3-ubh"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="flex-1" data-oid="-e-q5e7">
                            <div
                                className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"
                                data-oid="y7rvm0m"
                            >
                                <div data-oid="pwbff-c">
                                    <h1
                                        className="text-3xl font-bold text-gray-800 mb-2"
                                        data-oid="p7pzio5"
                                    >
                                        {profile.name}
                                    </h1>
                                    <p
                                        className="text-lg text-[hsl(196,80%,45%)] font-medium"
                                        data-oid="g5yjn:z"
                                    >
                                        {profile.experience}
                                    </p>
                                    <p
                                        className="text-gray-600 flex items-center gap-2 mt-1"
                                        data-oid="k8lmj:1"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid=":zy968k"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="4gw3_qy"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="w62-rfj"
                                            />
                                        </svg>
                                        {profile.location}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsEditing(!isEditing)}
                                    className="mt-4 sm:mt-0 px-6 py-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    data-oid="prh._5u"
                                >
                                    {isEditing ? 'Save Profile' : 'Edit Profile'}
                                </button>
                            </div>

                            {/* Profile Completion */}
                            <div className="bg-gray-50 rounded-lg p-4 mb-4" data-oid="x4khxyq">
                                <div
                                    className="flex items-center justify-between mb-2"
                                    data-oid="min:2dt"
                                >
                                    <span
                                        className="text-sm font-medium text-gray-700"
                                        data-oid="c77e_-6"
                                    >
                                        Profile Completion
                                    </span>
                                    <span
                                        className={`text-sm font-bold ${getCompletionColor(profile.completionPercentage)}`}
                                        data-oid="jpblowv"
                                    >
                                        {profile.completionPercentage}%
                                    </span>
                                </div>
                                <div
                                    className="w-full bg-gray-200 rounded-full h-2"
                                    data-oid="3m0g0x0"
                                >
                                    <div
                                        className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${profile.completionPercentage}%` }}
                                        data-oid="b.u41p8"
                                    ></div>
                                </div>
                            </div>

                            {/* Bio */}
                            <p className="text-gray-600 leading-relaxed" data-oid="ztahl8j">
                                {profile.bio}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 mb-8"
                    data-oid="z92ccy0"
                >
                    <div className="flex flex-wrap border-b border-gray-200" data-oid="8ett6fu">
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
                                data-oid="c5etebr"
                            >
                                <span data-oid="3ka_e7t">{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8"
                    data-oid="ymt.qbz"
                >
                    {activeTab === 'overview' && (
                        <div className="space-y-6" data-oid="q6kcpdw">
                            <h2
                                className="text-2xl font-bold text-gray-800 mb-6"
                                data-oid="kdhej2i"
                            >
                                Profile Overview
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="qydj7zr">
                                <div className="space-y-4" data-oid="7ikg210">
                                    <div data-oid="j8d78ij">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="v01ukba"
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
                                                data-oid="0mwplq-"
                                            />
                                        ) : (
                                            <p
                                                className="text-gray-800 font-medium"
                                                data-oid="7pdq_bi"
                                            >
                                                {profile.name}
                                            </p>
                                        )}
                                    </div>

                                    <div data-oid="8x6zv41">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="3w07zbg"
                                        >
                                            Email
                                        </label>
                                        <p className="text-gray-800" data-oid="n0y1e_s">
                                            {profile.email}
                                        </p>
                                    </div>

                                    <div data-oid="r847p1m">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="_nadgnq"
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
                                                data-oid=":5vyy29"
                                            />
                                        ) : (
                                            <p className="text-gray-800" data-oid="-84mpcn">
                                                {profile.phone}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-4" data-oid="uo6x2eo">
                                    <div data-oid="rapyg15">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="45eew-8"
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
                                                data-oid="fmdfu0f"
                                            />
                                        ) : (
                                            <p className="text-gray-800" data-oid="y80yom7">
                                                {profile.location}
                                            </p>
                                        )}
                                    </div>

                                    <div data-oid="zsl5b6v">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="1txdu-q"
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
                                                data-oid="ki.b25."
                                            >
                                                <option value="Fresher" data-oid="7kznixk">
                                                    Fresher
                                                </option>
                                                <option value="0-1 years" data-oid="59cd0en">
                                                    0-1 years
                                                </option>
                                                <option value="1-3 years" data-oid="k_pzy-q">
                                                    1-3 years
                                                </option>
                                                <option value="3-5 years" data-oid="za9l51w">
                                                    3-5 years
                                                </option>
                                                <option value="5+ years" data-oid="bhq82hy">
                                                    5+ years
                                                </option>
                                            </select>
                                        ) : (
                                            <p className="text-gray-800" data-oid="st8euw5">
                                                {profile.experience}
                                            </p>
                                        )}
                                    </div>

                                    <div data-oid="vbpv5gt">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="sbcx7d5"
                                        >
                                            Member Since
                                        </label>
                                        <p className="text-gray-800" data-oid="s1xog6t">
                                            {new Date(profile.joinedDate).toLocaleDateString(
                                                'en-US',
                                                { year: 'numeric', month: 'long', day: 'numeric' },
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div data-oid="1g282fm">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="ojmdrv-"
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
                                        data-oid="t5q9ze7"
                                    />
                                ) : (
                                    <p className="text-gray-800 leading-relaxed" data-oid="9pv7e0j">
                                        {profile.bio}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'skills' && (
                        <div className="space-y-6" data-oid="8:._nba">
                            <div className="flex items-center justify-between" data-oid="ygk37x1">
                                <h2 className="text-2xl font-bold text-gray-800" data-oid="ph6fnsu">
                                    Skills & Technologies
                                </h2>
                                {isEditing && (
                                    <div className="flex gap-2" data-oid="_htj1:.">
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
                                            data-oid="fkn3e.w"
                                        />

                                        <button
                                            className="px-4 py-2 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors"
                                            data-oid="muz8qky"
                                        >
                                            Add
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-3" data-oid="nln9kfe">
                                {profile.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="relative group bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                        data-oid="o4zz_oc"
                                    >
                                        {skill}
                                        {isEditing && (
                                            <button
                                                onClick={() => handleSkillRemove(skill)}
                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                                                data-oid="hku4o5t"
                                            >
                                                ×
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {profile.skills.length === 0 && (
                                <div className="text-center py-12 text-gray-500" data-oid=":1emtgk">
                                    <svg
                                        className="h-16 w-16 mx-auto mb-4 text-gray-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=":4yto:u"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                            data-oid="_h3ind0"
                                        />
                                    </svg>
                                    <p data-oid="1lyjpv0">
                                        No skills added yet. Add your first skill to get started!
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'experience' && (
                        <div className="space-y-6" data-oid="zoqs4q5">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="cwwd8_r">
                                Work Experience
                            </h2>

                            <div className="bg-gray-50 rounded-lg p-6" data-oid="c7ixuq7">
                                <div className="flex items-center gap-4 mb-4" data-oid="xofnrqu">
                                    <div
                                        className="w-12 h-12 bg-[hsl(196,80%,45%)] rounded-lg flex items-center justify-center text-white font-bold"
                                        data-oid="7l76xb:"
                                    >
                                        F
                                    </div>
                                    <div data-oid="6p219rh">
                                        <h3
                                            className="text-lg font-semibold text-gray-800"
                                            data-oid="5bbsgv."
                                        >
                                            Fresher
                                        </h3>
                                        <p className="text-gray-600" data-oid=":c4:awq">
                                            Ready to start my career journey
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-700" data-oid="2y0o.kg">
                                    As a recent graduate, I'm excited to apply my academic knowledge
                                    and passion for technology to real-world projects. I've
                                    completed several personal projects and internships that have
                                    prepared me for a professional role in software development.
                                </p>
                            </div>

                            <div className="text-center py-8" data-oid="m4d1l3_">
                                <Link
                                    href="/jobs"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    data-oid="by7lnxu"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="nbw876u"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                                            data-oid="3y_a2j2"
                                        />
                                    </svg>
                                    Find Your First Job
                                </Link>
                            </div>
                        </div>
                    )}

                    {activeTab === 'education' && (
                        <div className="space-y-6" data-oid="tpneyw2">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="9kso4i3">
                                Education
                            </h2>

                            <div className="bg-gray-50 rounded-lg p-6" data-oid="os2doxg">
                                <div className="flex items-start gap-4" data-oid=":k7rjh9">
                                    <div
                                        className="w-12 h-12 bg-[hsl(196,80%,45%)] rounded-lg flex items-center justify-center text-white"
                                        data-oid="g1.vnb:"
                                    >
                                        🎓
                                    </div>
                                    <div className="flex-1" data-oid="ofj6ax2">
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
                                                data-oid="ykjmp0o"
                                            />
                                        ) : (
                                            <h3
                                                className="text-lg font-semibold text-gray-800 mb-2"
                                                data-oid="aa4voxz"
                                            >
                                                {profile.education}
                                            </h3>
                                        )}
                                        <p className="text-gray-600" data-oid="3rvn124">
                                            2020 - 2024
                                        </p>
                                        <p className="text-gray-700 mt-2" data-oid="09ogu_o">
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
                        <div className="space-y-6" data-oid="r9lpt-z">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="udaa2wq">
                                Social Links
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="v7g0u2g">
                                <div data-oid="pe1ub6c">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="faomr.2"
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
                                            data-oid="kq5_4rp"
                                        />
                                    ) : (
                                        <a
                                            href={profile.portfolio}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[hsl(196,80%,45%)] hover:underline flex items-center gap-2"
                                            data-oid="1o_oks8"
                                        >
                                            {profile.portfolio}
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="rimo3j0"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    data-oid="kog:kmw"
                                                />
                                            </svg>
                                        </a>
                                    )}
                                </div>

                                <div data-oid="rqg3dss">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="cc_t.8o"
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
                                            data-oid="2lgr.gr"
                                        />
                                    ) : (
                                        <a
                                            href={profile.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[hsl(196,80%,45%)] hover:underline flex items-center gap-2"
                                            data-oid="30rk8l-"
                                        >
                                            {profile.linkedin}
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid=".n7c:wq"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    data-oid="1btg--j"
                                                />
                                            </svg>
                                        </a>
                                    )}
                                </div>

                                <div data-oid="sgcpoy1">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="fquk347"
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
                                            data-oid="b8p0qor"
                                        />
                                    ) : (
                                        <a
                                            href={profile.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[hsl(196,80%,45%)] hover:underline flex items-center gap-2"
                                            data-oid="ihiefxx"
                                        >
                                            {profile.github}
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="z5q.0d4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    data-oid="2iffjo2"
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
                            data-oid="xmp_gz8"
                        >
                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                data-oid="fu60:-y"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-6 py-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                data-oid="vxm80z2"
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
