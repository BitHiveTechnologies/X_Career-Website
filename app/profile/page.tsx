'use client';

import MainNavbar from '@/components/mainNavbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import {
    ProfileCompletionStatus,
    UpdateProfileRequest,
    UserProfile
} from '@/lib/api';
import { getUserProfile } from '@/lib/api/auth';
import { useAuth } from '@/lib/auth/AuthContext';
import {
    AlertCircle,
    CheckCircle,
    Edit3,
    FileText,
    Github,
    GraduationCap,
    Linkedin,
    Link as LinkIcon,
    Loader2,
    Mail,
    MapPin,
    Plus,
    Save,
    User,
    X
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

// Qualification and Stream options from API documentation
const QUALIFICATION_OPTIONS = [
    "10th", "12th", "Diploma", "B.E", "B.Tech", "B.Sc", "B.Com", "BBA", "BCA",
    "M.E", "M.Tech", "M.Sc", "M.Com", "MBA", "MCA", "PhD", "Others"
];

const STREAM_OPTIONS = [
    "CSE", "IT", "ECE", "EEE", "ME", "CE", "Chemical", "Biotech", "Civil",
    "Mechanical", "Electrical", "Computer Science", "Information Technology",
    "Electronics", "Others"
];

export default function ProfilePage() {
    const { 
        user, 
        isAuthenticated, 
        updateProfile, 
        getProfileCompletion 
    } = useAuth();
    const router = useRouter();
    
    // State management
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState('personal');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    
    // Profile data
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [completion, setCompletion] = useState<ProfileCompletionStatus | null>(null);
    const [formData, setFormData] = useState<UpdateProfileRequest>({});
    const [newSkill, setNewSkill] = useState('');

    // Debug function to check token status
    const checkTokenStatus = useCallback(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('careerx_token');
            const userData = localStorage.getItem('careerx_user');
            console.log('Token status:', {
                hasToken: !!token,
                tokenPreview: token ? token.substring(0, 20) + '...' : 'No token',
                hasUserData: !!userData,
                userData: userData ? JSON.parse(userData) : null
            });
        }
    }, []);

    // Load user profile on component mount
    const loadUserProfile = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            // Check if user is authenticated and has a token
            if (!user) {
                setError('User not authenticated');
                return;
            }

            // Load user profile data
            const profileResult = await getUserProfile();
            if (profileResult) {
                setProfile(profileResult);
                
                // Initialize form data with current profile
                setFormData({
                    firstName: profileResult.firstName,
                    lastName: profileResult.lastName,
                    mobile: user?.mobile || '',
                    qualification: profileResult.qualification,
                    stream: profileResult.stream,
                    yearOfPassout: profileResult.yearOfPassout,
                    cgpaOrPercentage: profileResult.cgpaOrPercentage,
                    collegeName: profileResult.collegeName,
                    dateOfBirth: profileResult.dateOfBirth,
                    address: profileResult.address,
                    city: profileResult.city,
                    state: profileResult.state,
                    pincode: profileResult.pincode,
                    skills: profileResult.skills,
                    resumeUrl: profileResult.resumeUrl,
                    linkedinUrl: profileResult.linkedinUrl,
                    githubUrl: profileResult.githubUrl,
                });
            } else {
                // If no profile data, initialize with user data
                setFormData({
                    firstName: user?.firstName || '',
                    lastName: user?.lastName || '',
                    mobile: user?.mobile || '',
                    qualification: '',
                    stream: '',
                    yearOfPassout: 0,
                    cgpaOrPercentage: 0,
                    collegeName: '',
                    dateOfBirth: '',
                    address: '',
                    city: '',
                    state: '',
                    pincode: '',
                    skills: '',
                    resumeUrl: '',
                    linkedinUrl: '',
                    githubUrl: '',
                });
                setError('Profile data not found. Please complete your profile.');
            }

            // Load profile completion status
            const completionResult = await getProfileCompletion();
            if (completionResult) {
                setCompletion(completionResult);
            } else {
                // Set default completion status if API fails
                setCompletion({
                    isComplete: false,
                    completionPercentage: 0,
                    missingFields: ['firstName', 'lastName', 'mobile', 'qualification', 'stream', 'yearOfPassout', 'cgpaOrPercentage', 'collegeName']
                });
            }
        } catch (err) {
            console.error('Error loading profile:', err);
            setError('An unexpected error occurred while loading your profile. Please try refreshing the page.');
        } finally {
            setLoading(false);
        }
    }, [getUserProfile, getProfileCompletion, user]);

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login?redirect=/profile');
            return;
        }

        // Debug token status
        checkTokenStatus();
        
        loadUserProfile();
    }, [isAuthenticated, router, loadUserProfile, checkTokenStatus]);

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
            if (result.success) {
                // Reload profile data after successful update
                await loadUserProfile();
                setIsEditing(false);
                setSuccess('Profile updated successfully!');
                // Reload profile data to get updated information
                await loadUserProfile();
                
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

    const handleSkillAdd = () => {
        if (newSkill.trim() && formData.skills && !formData.skills.includes(newSkill.trim())) {
            const currentSkills = formData.skills.split(',').filter(s => s.trim());
            setFormData(prev => ({
                ...prev,
                skills: [...currentSkills, newSkill.trim()].join(', ')
            }));
            setNewSkill('');
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

    const getCompletionBgColor = (percentage: number) => {
        if (percentage >= 80) return 'bg-green-500';
        if (percentage >= 60) return 'bg-yellow-500';
        return 'bg-red-500';
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
                    <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        {error}
                    </div>
                )}
                {success && (
                    <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        {success}
                    </div>
                )}

                {/* Header Section */}
                <Card className="mb-8 bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
                    <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <div className="relative">
                                <img
                                    src={(user as any)?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.firstName || 'User')}&background=2563eb&color=fff`}
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                                />
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">
                                    {user?.firstName} {user?.lastName}
                                </h1>
                                    <p className="text-gray-600 text-lg flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        {user?.email}
                                    </p>
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
                                        <Button
                                        onClick={handleSave}
                                        disabled={saving}
                                            className="bg-blue-600 hover:bg-blue-700"
                                        >
                                            {saving ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                    Saving...
                                                </>
                                            ) : (
                                                <>
                                                    <Save className="w-4 h-4 mr-2" />
                                                    Save Changes
                                                </>
                                            )}
                                        </Button>
                                        <Button
                                        onClick={handleCancel}
                                        disabled={saving}
                                            variant="outline"
                                    >
                                            <X className="w-4 h-4 mr-2" />
                                        Cancel
                                        </Button>
                                </div>
                            ) : (
                                    <Button
                                    onClick={() => setIsEditing(true)}
                                        className="bg-blue-600 hover:bg-blue-700"
                                >
                                        <Edit3 className="w-4 h-4 mr-2" />
                                    Edit Profile
                                    </Button>
                            )}
                        </div>
                    </div>
                    </CardContent>
                </Card>

                {/* Profile Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="grid w-full grid-cols-4 mb-6">
                                <TabsTrigger value="personal">Personal</TabsTrigger>
                                <TabsTrigger value="education">Education</TabsTrigger>
                                <TabsTrigger value="contact">Contact</TabsTrigger>
                                <TabsTrigger value="links">Links</TabsTrigger>
                            </TabsList>

                            {/* Personal Information Tab */}
                            <TabsContent value="personal">
                                <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <User className="w-5 h-5" />
                                            Personal Information
                                        </CardTitle>
                                        <CardDescription>
                                            Your basic personal details and preferences
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First Name *</Label>
                                                <Input
                                                    id="firstName"
                                                value={formData.firstName || ''}
                                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                                disabled={!isEditing}
                                                    placeholder="Enter your first name"
                                            />
                    </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Last Name *</Label>
                                                <Input
                                                    id="lastName"
                                                value={formData.lastName || ''}
                                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                                disabled={!isEditing}
                                                    placeholder="Enter your last name"
                                            />
                                        </div>
                                    </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address</Label>
                                            <Input
                                                id="email"
                                                value={user?.email || ''}
                                                disabled
                                                className="bg-gray-100"
                                                placeholder="your.email@example.com"
                                            />
                                    </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="mobile">Mobile Number *</Label>
                                            <Input
                                                id="mobile"
                                                value={formData.mobile || ''}
                                                onChange={(e) => handleInputChange('mobile', e.target.value)}
                                                disabled={!isEditing}
                                                placeholder="9876543210"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="dateOfBirth">Date of Birth</Label>
                                            <Input
                                                id="dateOfBirth"
                                                type="date"
                                                value={formData.dateOfBirth ? formData.dateOfBirth.split('T')[0] : ''}
                                                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                                                disabled={!isEditing}
                                            />
                                    </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Education Information Tab */}
                            <TabsContent value="education">
                                <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <GraduationCap className="w-5 h-5" />
                                            Education Details
                                        </CardTitle>
                                        <CardDescription>
                                            Your academic background and qualifications
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="qualification">Qualification *</Label>
                                                <Select
                                                    value={formData.qualification || ''}
                                                    onValueChange={(value) => handleInputChange('qualification', value)}
                                                    disabled={!isEditing}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select qualification" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {QUALIFICATION_OPTIONS.map((qual) => (
                                                            <SelectItem key={qual} value={qual}>
                                                                {qual}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="stream">Stream *</Label>
                                                <Select
                                                    value={formData.stream || ''}
                                                    onValueChange={(value) => handleInputChange('stream', value)}
                                                    disabled={!isEditing}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select stream" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {STREAM_OPTIONS.map((stream) => (
                                                            <SelectItem key={stream} value={stream}>
                                                                {stream}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="yearOfPassout">Year of Passout *</Label>
                                                <Input
                                                    id="yearOfPassout"
                                                    type="number"
                                                    min="2000"
                                                    max="2030"
                                                    value={formData.yearOfPassout || ''}
                                                    onChange={(e) => handleInputChange('yearOfPassout', parseInt(e.target.value))}
                                                    disabled={!isEditing}
                                                    placeholder="2023"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="cgpaOrPercentage">CGPA/Percentage *</Label>
                                                <Input
                                                    id="cgpaOrPercentage"
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    max="100"
                                                    value={formData.cgpaOrPercentage || ''}
                                                    onChange={(e) => handleInputChange('cgpaOrPercentage', parseFloat(e.target.value))}
                                                    disabled={!isEditing}
                                                    placeholder="8.5"
                                                />
                                    </div>
                                </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="collegeName">College Name *</Label>
                                            <Input
                                                id="collegeName"
                                                value={formData.collegeName || ''}
                                                onChange={(e) => handleInputChange('collegeName', e.target.value)}
                                                disabled={!isEditing}
                                                placeholder="Enter your college name"
                                            />
                                    </div>

                                        {/* Skills Section */}
                                        <div className="space-y-4">
                                            <Label>Skills</Label>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {formData.skills?.split(',').filter(s => s.trim()).map((skill, index) => (
                                                    <Badge
                                                    key={index}
                                                        variant="secondary"
                                                        className="px-3 py-1"
                                                >
                                                    {skill.trim()}
                                                    {isEditing && (
                                                        <button
                                                            onClick={() => handleSkillRemove(skill.trim())}
                                                                className="ml-2 text-gray-500 hover:text-red-500"
                                                        >
                                                                <X className="w-3 h-3" />
                                                        </button>
                                                    )}
                                                    </Badge>
                                            ))}
                        </div>
                                {isEditing && (
                                                <div className="flex gap-2">
                                                    <Input
                                                        value={newSkill}
                                                        onChange={(e) => setNewSkill(e.target.value)}
                                                    placeholder="Add a skill"
                                            onKeyPress={(e) => {
                                                if (e.key === 'Enter') {
                                                                e.preventDefault();
                                                                handleSkillAdd();
                                                            }
                                                        }}
                                                    />
                                                    <Button
                                                        onClick={handleSkillAdd}
                                                        size="sm"
                                                        variant="outline"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </Button>
                                    </div>
                                )}
                            </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Contact Information Tab */}
                            <TabsContent value="contact">
                                <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <MapPin className="w-5 h-5" />
                                            Contact Information
                                        </CardTitle>
                                        <CardDescription>
                                            Your address and location details
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="address">Address</Label>
                                            <Textarea
                                                id="address"
                                                value={formData.address || ''}
                                                onChange={(e) => handleInputChange('address', e.target.value)}
                                                disabled={!isEditing}
                                                placeholder="Enter your full address"
                                                rows={3}
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="city">City</Label>
                                                <Input
                                                    id="city"
                                                    value={formData.city || ''}
                                                    onChange={(e) => handleInputChange('city', e.target.value)}
                                                    disabled={!isEditing}
                                                    placeholder="Enter city"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="state">State</Label>
                                                <Input
                                                    id="state"
                                                    value={formData.state || ''}
                                                    onChange={(e) => handleInputChange('state', e.target.value)}
                                                    disabled={!isEditing}
                                                    placeholder="Enter state"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="pincode">Pincode</Label>
                                                <Input
                                                    id="pincode"
                                                    value={formData.pincode || ''}
                                                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                                                    disabled={!isEditing}
                                                    placeholder="123456"
                                                    maxLength={6}
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Links Tab */}
                            <TabsContent value="links">
                                <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <LinkIcon className="w-5 h-5" />
                                            Professional Links
                                        </CardTitle>
                                        <CardDescription>
                                            Your professional profiles and resume
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="resumeUrl" className="flex items-center gap-2">
                                                <FileText className="w-4 h-4" />
                                                Resume URL
                                            </Label>
                                            <Input
                                                id="resumeUrl"
                                                type="url"
                                                value={formData.resumeUrl || ''}
                                                onChange={(e) => handleInputChange('resumeUrl', e.target.value)}
                                                disabled={!isEditing}
                                                placeholder="https://example.com/resume.pdf"
                                            />
                                    </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="linkedinUrl" className="flex items-center gap-2">
                                                <Linkedin className="w-4 h-4" />
                                                LinkedIn Profile
                                            </Label>
                                            <Input
                                                id="linkedinUrl"
                                                type="url"
                                                value={formData.linkedinUrl || ''}
                                                onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                                                disabled={!isEditing}
                                                placeholder="https://linkedin.com/in/yourprofile"
                                            />
                            </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="githubUrl" className="flex items-center gap-2">
                                                <Github className="w-4 h-4" />
                                                GitHub Profile
                                            </Label>
                                            <Input
                                                id="githubUrl"
                                                type="url"
                                                value={formData.githubUrl || ''}
                                                onChange={(e) => handleInputChange('githubUrl', e.target.value)}
                                                disabled={!isEditing}
                                                placeholder="https://github.com/yourusername"
                                            />
                                </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Profile Completion */}
                        {completion && (
                            <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
                                <CardHeader>
                                    <CardTitle className="text-lg">Profile Completion</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Overall Progress</span>
                                        <span className={`font-semibold ${getCompletionColor(completion.completionPercentage)}`}>
                                            {completion.completionPercentage}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div
                                            className={`h-3 rounded-full transition-all duration-300 ${getCompletionBgColor(completion.completionPercentage)}`}
                                            style={{ width: `${completion.completionPercentage}%` }}
                                        ></div>
                                    </div>
                                    {completion.missingFields.length > 0 && (
                                        <div className="mt-4">
                                            <p className="text-sm text-gray-600 mb-2">Missing fields:</p>
                                            <ul className="text-sm text-gray-500 space-y-1">
                                                {completion.missingFields.map((field, index) => (
                                                    <li key={index} className="flex items-center gap-2">
                                                        <AlertCircle className="w-3 h-3" />
                                                        {field}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        )}

                        {/* Quick Actions */}
                        <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg">Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Link href="/jobs" className="block">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                    Browse Jobs
                                    </Button>
                                </Link>
                                <Link href="/applications" className="block">
                                    <Button variant="outline" className="w-full">
                                    My Applications
                                    </Button>
                                </Link>
                                <Link href="/saved-jobs" className="block">
                                    <Button variant="outline" className="w-full">
                                    Saved Jobs
                                    </Button>
                                </Link>
                                <Link href="/resume-builder" className="block">
                                    <Button variant="outline" className="w-full">
                                        Resume Builder
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Profile Stats */}
                        <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg">Profile Stats</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Profile Views</span>
                                    <span className="font-semibold">0</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Applications</span>
                                    <span className="font-semibold">0</span>
                            </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Saved Jobs</span>
                                    <span className="font-semibold">0</span>
                        </div>
                            </CardContent>
                        </Card>
                        </div>
                </div>
            </div>
        </div>
    );
}