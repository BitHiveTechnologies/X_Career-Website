'use client';

import MainNavbar from '@/components/mainNavbar';
import { useAuth } from '@/lib/auth/AuthContextBackend';
import { 
    UserProfile, 
    UpdateProfileRequest, 
    ProfileCompletionStatus,
    safeValidate 
} from '@/lib/api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';

export default function ProfilePage() {
    const { 
        user, 
        isAuthenticated, 
        getUserProfile, 
        updateProfile, 
        getProfileCompletion 
    } = useAuth();
    const router = useRouter();
    
    // State management
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    
    // Profile data
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [completion, setCompletion] = useState<ProfileCompletionStatus | null>(null);
    const [formData, setFormData] = useState<UpdateProfileRequest>({});

    // Load user profile on component mount
    const loadUserProfile = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            // Load user profile data
            const profileResult = await getUserProfile();
            if (profileResult.success && profileResult.profile) {
                setProfile(profileResult.profile.profile || null);
                
                // Initialize form data with current profile
                if (profileResult.profile.profile) {
                    setFormData({
                        firstName: profileResult.profile.profile.firstName,
                        lastName: profileResult.profile.profile.lastName,
                        mobile: profileResult.profile.mobile,
                        qualification: profileResult.profile.profile.qualification,
                        stream: profileResult.profile.profile.stream,
                        yearOfPassout: profileResult.profile.profile.yearOfPassout,
                        cgpaOrPercentage: profileResult.profile.profile.cgpaOrPercentage,
                        collegeName: profileResult.profile.profile.collegeName,
                        dateOfBirth: profileResult.profile.profile.dateOfBirth,
                        address: profileResult.profile.profile.address,
                        city: profileResult.profile.profile.city,
                        state: profileResult.profile.profile.state,
                        pincode: profileResult.profile.profile.pincode,
                        skills: profileResult.profile.profile.skills,
                        resumeUrl: profileResult.profile.profile.resumeUrl,
                        linkedinUrl: profileResult.profile.profile.linkedinUrl,
                        githubUrl: profileResult.profile.profile.githubUrl,
                    });
                }
            } else {
                setError(profileResult.error || 'Failed to load profile');
            }

            // Load profile completion status
            const completionResult = await getProfileCompletion();
            if (completionResult.success && completionResult.completion) {
                setCompletion(completionResult.completion);
            }
        } catch (err) {
            console.error('Error loading profile:', err);
            setError('An unexpected error occurred while loading your profile');
        } finally {
            setLoading(false);
        }
    }, [getUserProfile, getProfileCompletion]);

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login?redirect=/profile');
            return;
        }

        loadUserProfile();
    }, [isAuthenticated, router, loadUserProfile]);

    const handleSave = async () => {
        try {
            setSaving(true);
            setError(null);
            setSuccess(null);

            // Validate form data
            if (!formData.firstName || !formData.lastName) {
                setError('First name and last name are required');
                return;
            }
            if (!formData.mobile) {
                setError('Mobile number is required');
                return;
            }
            if (!formData.qualification || !formData.stream) {
                setError('Qualification and stream are required');
                return;
            }

            // Update profile
            const result = await updateProfile(formData);
            if (result.success && result.user) {
                setProfile(result.user.profile || null);
                setIsEditing(false);
                setSuccess('Profile updated successfully!');
                
                // Clear success message after 3 seconds
                setTimeout(() => setSuccess(null), 3000);
            } else {
                setError(result.error || 'Failed to update profile');
            }
        } catch (err) {
            console.error('Error saving profile:', err);
            setError('An unexpected error occurred while saving your profile');
        } finally {
            setSaving(false);
        }
    };

    const handleCancel = () => {
        // Reset form data to current profile
        if (profile) {
            setFormData({
                firstName: profile.firstName,
                lastName: profile.lastName,
                mobile: user?.mobile || '',
                qualification: profile.qualification,
                stream: profile.stream,
                yearOfPassout: profile.yearOfPassout,
                cgpaOrPercentage: profile.cgpaOrPercentage,
                collegeName: profile.collegeName,
                dateOfBirth: profile.dateOfBirth,
                address: profile.address,
                city: profile.city,
                state: profile.state,
                pincode: profile.pincode,
                skills: profile.skills,
                resumeUrl: profile.resumeUrl,
                linkedinUrl: profile.linkedinUrl,
                githubUrl: profile.githubUrl,
            });
        }
        setIsEditing(false);
        setError(null);
        setSuccess(null);
    };

    const handleInputChange = (field: keyof UpdateProfileRequest, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSkillAdd = (skill: string) => {
        if (skill && formData.skills && !formData.skills.includes(skill)) {
            setFormData(prev => ({
                ...prev,
                skills: [...(prev.skills || '').split(',').filter(s => s.trim()), skill].join(', ')
            }));
        }
    };

    const handleSkillRemove = (skillToRemove: string) => {
        if (formData.skills) {
            const skills = formData.skills.split(',').filter(skill => skill.trim() !== skillToRemove);
            setFormData(prev => ({
            ...prev,
                skills: skills.join(', ')
        }));
        }
    };

    const getCompletionColor = (percentage: number) => {
        if (percentage >= 80) return 'text-green-600';
        if (percentage >= 60) return 'text-yellow-600';
        return 'text-red-600';
    };

    if (!isAuthenticated) {
        return null;
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]">
                <MainNavbar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]">
            <MainNavbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Error/Success Messages */}
                {error && (
                    <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                        {success}
                    </div>
                )}

                {/* Header Section */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <div className="relative">
                                <img
                                    src={(user as any)?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.firstName || 'User')}&background=2563eb&color=fff`}
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                                />
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">
                                    {user?.firstName} {user?.lastName}
                                </h1>
                                <p className="text-gray-600 text-lg">{user?.email}</p>
                                <div className="flex items-center mt-2">
                                    <span className="text-sm text-gray-500">Profile Completion:</span>
                                    <span className={`ml-2 font-semibold ${getCompletionColor(completion?.completionPercentage || 0)}`}>
                                        {completion?.completionPercentage || 0}%
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                            {isEditing ? (
                                <div className="flex space-x-3">
                                    <button
                                        onClick={handleSave}
                                        disabled={saving}
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {saving ? 'Saving...' : 'Save Changes'}
                                    </button>
                                    <button
                                        onClick={handleCancel}
                                        disabled={saving}
                                        className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Edit Profile
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Profile Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
                            
                            {profile ? (
                                <div className="space-y-6">
                                    {/* Basic Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.firstName || ''}
                                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                                disabled={!isEditing}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                            />
                    </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name
                                        </label>
                                            <input
                                                type="text"
                                                value={formData.lastName || ''}
                                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                                disabled={!isEditing}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                            <input
                                                type="email"
                                                value={user?.email || ''}
                                                disabled
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-500"
                                            />
                                    </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Mobile Number
                                        </label>
                                            <input
                                                type="tel"
                                                value={formData.mobile || ''}
                                                onChange={(e) => handleInputChange('mobile', e.target.value)}
                                                disabled={!isEditing}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                            />
                                        </div>
                                    </div>

                                    {/* Education Information */}
                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Qualification
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.qualification || ''}
                                                    onChange={(e) => handleInputChange('qualification', e.target.value)}
                                                    disabled={!isEditing}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Stream
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.stream || ''}
                                                    onChange={(e) => handleInputChange('stream', e.target.value)}
                                                    disabled={!isEditing}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Year of Passout
                                                </label>
                                                <input
                                                    type="number"
                                                    value={formData.yearOfPassout || ''}
                                                    onChange={(e) => handleInputChange('yearOfPassout', parseInt(e.target.value))}
                                                    disabled={!isEditing}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    CGPA/Percentage
                                                </label>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={formData.cgpaOrPercentage || ''}
                                                    onChange={(e) => handleInputChange('cgpaOrPercentage', parseFloat(e.target.value))}
                                                    disabled={!isEditing}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                                />
                                    </div>
                                </div>
                                        <div className="mt-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                College Name
                                        </label>
                                            <input
                                                type="text"
                                                value={formData.collegeName || ''}
                                                onChange={(e) => handleInputChange('collegeName', e.target.value)}
                                                disabled={!isEditing}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                            />
                                    </div>
                                    </div>

                                    {/* Skills */}
                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills</h3>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {formData.skills?.split(',').filter(s => s.trim()).map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                                                >
                                                    {skill.trim()}
                                                    {isEditing && (
                                                        <button
                                                            onClick={() => handleSkillRemove(skill.trim())}
                                                            className="ml-2 text-blue-600 hover:text-blue-800"
                                                        >
                                                            ×
                                                        </button>
                                                    )}
                                                </span>
                                            ))}
                        </div>
                                {isEditing && (
                                            <div className="flex">
                                        <input
                                            type="text"
                                                    placeholder="Add a skill"
                                            onKeyPress={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleSkillAdd(e.currentTarget.value);
                                                    e.currentTarget.value = '';
                                                }
                                            }}
                                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        <button
                                                    onClick={(e) => {
                                                        const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                                                        handleSkillAdd(input.value);
                                                        input.value = '';
                                                    }}
                                                    className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700"
                                        >
                                            Add
                                        </button>
                                    </div>
                                )}
                            </div>

                                    {/* Links */}
                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Links</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Resume URL
                                                </label>
                                                <input
                                                    type="url"
                                                    value={formData.resumeUrl || ''}
                                                    onChange={(e) => handleInputChange('resumeUrl', e.target.value)}
                                                    disabled={!isEditing}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    LinkedIn URL
                                                </label>
                                                <input
                                                    type="url"
                                                    value={formData.linkedinUrl || ''}
                                                    onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                                                    disabled={!isEditing}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    GitHub URL
                                                </label>
                                                <input
                                                    type="url"
                                                    value={formData.githubUrl || ''}
                                                    onChange={(e) => handleInputChange('githubUrl', e.target.value)}
                                                    disabled={!isEditing}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                                />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            ) : (
                                <div className="text-center py-8">
                                    <p className="text-gray-500">No profile data available. Please complete your profile.</p>
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                    >
                                        Complete Profile
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Profile Completion */}
                        {completion && (
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Completion</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Overall Progress</span>
                                        <span className={`font-semibold ${getCompletionColor(completion.completionPercentage)}`}>
                                            {completion.completionPercentage}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${
                                                completion.completionPercentage >= 80 ? 'bg-green-500' :
                                                completion.completionPercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                                            }`}
                                            style={{ width: `${completion.completionPercentage}%` }}
                                        ></div>
                                    </div>
                                    {completion.missingFields.length > 0 && (
                                        <div className="mt-4">
                                            <p className="text-sm text-gray-600 mb-2">Missing fields:</p>
                                            <ul className="text-sm text-gray-500 space-y-1">
                                                {completion.missingFields.map((field, index) => (
                                                    <li key={index}>• {field}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Quick Actions */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <Link
                                    href="/jobs"
                                    className="block w-full px-4 py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Browse Jobs
                                </Link>
                                <Link
                                    href="/applications"
                                    className="block w-full px-4 py-2 text-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    My Applications
                                </Link>
                                <Link
                                    href="/saved-jobs"
                                    className="block w-full px-4 py-2 text-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Saved Jobs
                                </Link>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
}