'use client';
import { useState } from 'react';
import { Job } from '@/app/jobs/page';
interface JobApplicationModalProps {
    job: Job;
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (applicationData: any) => void;
}
export default function JobApplicationModal({
    job,
    isOpen,
    onClose,
    onSubmit,
}: JobApplicationModalProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        experience: '',
        currentRole: '',
        currentCompany: '',
        expectedSalary: '',
        noticePeriod: '',
        resume: null as File | null,
        coverLetter: '',
        portfolioUrl: '',
        linkedinUrl: '',
        githubUrl: '',
        whyInterested: '',
        availability: '',
        relocate: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    if (!isOpen) return null;
    const handleInputChange = (field: string, value: string | File | null) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: '' }));
        }
    };
    const validateStep = (step: number) => {
        const newErrors: Record<string, string> = {};
        if (step === 1) {
            if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
            if (!formData.email.trim()) newErrors.email = 'Email is required';
            if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
            if (!formData.location.trim()) newErrors.location = 'Location is required';
        }
        if (step === 2) {
            if (!formData.experience) newErrors.experience = 'Experience level is required';
            if (!formData.expectedSalary) newErrors.expectedSalary = 'Expected salary is required';
            if (!formData.noticePeriod) newErrors.noticePeriod = 'Notice period is required';
        }
        if (step === 3) {
            if (!formData.resume) newErrors.resume = 'Resume is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep((prev) => Math.min(prev + 1, 4));
        }
    };
    const handlePrevious = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };
    const handleSubmit = () => {
        if (validateStep(currentStep)) {
            onSubmit(formData);
            onClose();
        }
    };
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    const steps = [
        { number: 1, title: 'Personal Info', description: 'Basic information' },
        { number: 2, title: 'Professional', description: 'Work experience' },
        { number: 3, title: 'Documents', description: 'Resume & cover letter' },
        { number: 4, title: 'Review', description: 'Review & submit' },
    ];

    return (
        <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleBackdropClick}
            data-oid="hnu.fgw"
        >
            {' '}
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
                data-oid="5f00s3w"
            >
                {' '}
                {/* Header */}{' '}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white p-6"
                    data-oid="46oupg2"
                >
                    {' '}
                    <div className="flex items-center justify-between" data-oid="z_x9l55">
                        {' '}
                        <div data-oid="4gj8:00">
                            {' '}
                            <h1 className="text-2xl font-bold" data-oid="jronxf2">
                                Apply for {job.title}
                            </h1>{' '}
                            <p className="text-blue-100" data-oid="bxax2ab">
                                {job.company} • {job.location}
                            </p>{' '}
                        </div>{' '}
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            data-oid=".oy258d"
                        >
                            {' '}
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="emt1k02"
                            >
                                {' '}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid="00p-zy6"
                                />{' '}
                            </svg>{' '}
                        </button>{' '}
                    </div>{' '}
                </div>{' '}
                {/* Progress Steps */}{' '}
                <div className="px-6 py-4 border-b border-gray-200" data-oid="14fai.5">
                    {' '}
                    <div className="flex items-center justify-between" data-oid="h52fad2">
                        {' '}
                        {steps.map((step, index) => (
                            <div key={step.number} className="flex items-center" data-oid="denbedv">
                                {' '}
                                <div
                                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${currentStep >= step.number ? 'bg-[hsl(196,80%,45%)] border-[hsl(196,80%,45%)] text-white' : 'border-gray-300 text-gray-500'}`}
                                    data-oid="3jmcy4q"
                                >
                                    {' '}
                                    {currentStep > step.number ? (
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="vdjrm.:"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                                data-oid="-ivc891"
                                            />{' '}
                                        </svg>
                                    ) : (
                                        step.number
                                    )}{' '}
                                </div>{' '}
                                <div className="ml-3 hidden sm:block" data-oid="_tf9d64">
                                    {' '}
                                    <div
                                        className={`text-sm font-medium ${currentStep >= step.number ? 'text-[hsl(196,80%,45%)]' : 'text-gray-500'}`}
                                        data-oid="p_op9w_"
                                    >
                                        {' '}
                                        {step.title}{' '}
                                    </div>{' '}
                                    <div className="text-xs text-gray-500" data-oid="6oxv7jn">
                                        {step.description}
                                    </div>{' '}
                                </div>{' '}
                                {index < steps.length - 1 && (
                                    <div
                                        className={`hidden sm:block w-16 h-0.5 ml-4 ${currentStep > step.number ? 'bg-[hsl(196,80%,45%)]' : 'bg-gray-300'}`}
                                        data-oid="_52zk66"
                                    />
                                )}{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                </div>{' '}
                {/* Form Content */}{' '}
                <div className="p-6 h-[calc(90vh-300px)] overflow-y-auto" data-oid="2i5ya6_">
                    {' '}
                    {currentStep === 1 && (
                        <div className="space-y-6" data-oid="t_i1fv7">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="y1e4.x5"
                            >
                                Personal Information
                            </h2>{' '}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid=":eqd2sr"
                            >
                                {' '}
                                <div data-oid="kghq2ub">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="c:2-km6"
                                    >
                                        {' '}
                                        Full Name *{' '}
                                    </label>{' '}
                                    <input
                                        type="text"
                                        value={formData.fullName}
                                        onChange={(e) =>
                                            handleInputChange('fullName', e.target.value)
                                        }
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your full name"
                                        data-oid="9:b_oop"
                                    />{' '}
                                    {errors.fullName && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="tgjl90i">
                                            {errors.fullName}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="gubraqu">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="vt6j2sa"
                                    >
                                        {' '}
                                        Email Address *{' '}
                                    </label>{' '}
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your email address"
                                        data-oid="z.t1lkh"
                                    />{' '}
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="-brh1z-">
                                            {errors.email}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="jl6mwqr">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="88p8huj"
                                    >
                                        {' '}
                                        Phone Number *{' '}
                                    </label>{' '}
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your phone number"
                                        data-oid="kt8f0qa"
                                    />{' '}
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="yo9xku.">
                                            {errors.phone}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="h:1v7rz">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="bqwnltt"
                                    >
                                        {' '}
                                        Current Location *{' '}
                                    </label>{' '}
                                    <input
                                        type="text"
                                        value={formData.location}
                                        onChange={(e) =>
                                            handleInputChange('location', e.target.value)
                                        }
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your current location"
                                        data-oid="8i7te92"
                                    />{' '}
                                    {errors.location && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="gj6gwkb">
                                            {errors.location}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {currentStep === 2 && (
                        <div className="space-y-6" data-oid="r39b42i">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="uylrqsx"
                            >
                                Professional Information
                            </h2>{' '}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="lwo44kv"
                            >
                                {' '}
                                <div data-oid="h2_pb.e">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="ripwc22"
                                    >
                                        {' '}
                                        Experience Level *{' '}
                                    </label>{' '}
                                    <select
                                        value={formData.experience}
                                        onChange={(e) =>
                                            handleInputChange('experience', e.target.value)
                                        }
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${errors.experience ? 'border-red-500' : 'border-gray-300'}`}
                                        data-oid="97lqwgn"
                                    >
                                        {' '}
                                        <option value="" data-oid="sc._.n4">
                                            Select experience level
                                        </option>{' '}
                                        <option value="0-1 years" data-oid="r8i.axz">
                                            Fresher (0-1 years)
                                        </option>{' '}
                                        <option value="1-3 years" data-oid="n-tei5v">
                                            Junior (1-3 years)
                                        </option>{' '}
                                        <option value="3-5 years" data-oid="ri.p37e">
                                            Mid-level (3-5 years)
                                        </option>{' '}
                                        <option value="5+ years" data-oid="8zzr7vg">
                                            Senior (5+ years)
                                        </option>{' '}
                                    </select>{' '}
                                    {errors.experience && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="k_5ly6m">
                                            {errors.experience}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="o1yxiwh">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="jc1g-el"
                                    >
                                        {' '}
                                        Expected Salary (LPA) *{' '}
                                    </label>{' '}
                                    <select
                                        value={formData.expectedSalary}
                                        onChange={(e) =>
                                            handleInputChange('expectedSalary', e.target.value)
                                        }
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${errors.expectedSalary ? 'border-red-500' : 'border-gray-300'}`}
                                        data-oid="i7d71zh"
                                    >
                                        {' '}
                                        <option value="" data-oid="t1jc60b">
                                            Select expected salary
                                        </option>{' '}
                                        <option value="0-5" data-oid="ild4zmn">
                                            ₹0-5 LPA
                                        </option>{' '}
                                        <option value="5-10" data-oid="ireu-56">
                                            ₹5-10 LPA
                                        </option>{' '}
                                        <option value="10-20" data-oid="xnnpm7d">
                                            ₹10-20 LPA
                                        </option>{' '}
                                        <option value="20+" data-oid="px9alcx">
                                            ₹20+ LPA
                                        </option>{' '}
                                    </select>{' '}
                                    {errors.expectedSalary && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="ee1tupl">
                                            {errors.expectedSalary}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div className="md:col-span-2" data-oid="dibupfz">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="0p:lr7w"
                                    >
                                        {' '}
                                        Notice Period *{' '}
                                    </label>{' '}
                                    <select
                                        value={formData.noticePeriod}
                                        onChange={(e) =>
                                            handleInputChange('noticePeriod', e.target.value)
                                        }
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${errors.noticePeriod ? 'border-red-500' : 'border-gray-300'}`}
                                        data-oid="ddy6m83"
                                    >
                                        {' '}
                                        <option value="" data-oid="8dl2-9s">
                                            Select notice period
                                        </option>{' '}
                                        <option value="Immediate" data-oid="y76rqt7">
                                            Immediate
                                        </option>{' '}
                                        <option value="15 days" data-oid="kk-y2uu">
                                            15 days
                                        </option>{' '}
                                        <option value="1 month" data-oid="jw1qnor">
                                            1 month
                                        </option>{' '}
                                        <option value="2 months" data-oid="4zyu-fz">
                                            2 months
                                        </option>{' '}
                                        <option value="3 months" data-oid="6vj__zt">
                                            3 months
                                        </option>{' '}
                                    </select>{' '}
                                    {errors.noticePeriod && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="u7hx15p">
                                            {errors.noticePeriod}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {currentStep === 3 && (
                        <div className="space-y-6" data-oid="ettks_d">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="49l_8.e"
                            >
                                Documents & Portfolio
                            </h2>{' '}
                            <div className="space-y-6" data-oid="4c.2m0k">
                                {' '}
                                <div data-oid="44mddr2">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="-zdt47k"
                                    >
                                        {' '}
                                        Resume/CV *{' '}
                                    </label>{' '}
                                    <div
                                        className={`border-2 border-dashed rounded-lg p-6 text-center ${errors.resume ? 'border-red-500' : 'border-gray-300'}`}
                                        data-oid="607vanr"
                                    >
                                        {' '}
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    'resume',
                                                    e.target.files?.[0] || null,
                                                )
                                            }
                                            className="hidden"
                                            id="resume-upload"
                                            data-oid="e.m43m:"
                                        />{' '}
                                        <label
                                            htmlFor="resume-upload"
                                            className="cursor-pointer"
                                            data-oid="b8bxcmg"
                                        >
                                            {' '}
                                            <div className="text-gray-600" data-oid="zc8uz84">
                                                {' '}
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    data-oid="wkhojcm"
                                                >
                                                    {' '}
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        data-oid="c7a.ur."
                                                    />{' '}
                                                </svg>{' '}
                                                <p className="mt-2 text-sm" data-oid="vnnnc5m">
                                                    {' '}
                                                    <span
                                                        className="font-medium text-[hsl(196,80%,45%)]"
                                                        data-oid="fit1wxz"
                                                    >
                                                        Click to upload
                                                    </span>{' '}
                                                    or drag and drop{' '}
                                                </p>{' '}
                                                <p
                                                    className="text-xs text-gray-500"
                                                    data-oid="ygpatge"
                                                >
                                                    PDF, DOC, DOCX up to 10MB
                                                </p>{' '}
                                            </div>{' '}
                                        </label>{' '}
                                        {formData.resume && (
                                            <p
                                                className="mt-2 text-sm text-green-600"
                                                data-oid="jdez2m_"
                                            >
                                                {' '}
                                                ✓ {formData.resume.name}{' '}
                                            </p>
                                        )}{' '}
                                    </div>{' '}
                                    {errors.resume && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="._2:fvx">
                                            {errors.resume}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="fz8k8f_">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="zxzz-05"
                                    >
                                        {' '}
                                        Cover Letter{' '}
                                    </label>{' '}
                                    <textarea
                                        value={formData.coverLetter}
                                        onChange={(e) =>
                                            handleInputChange('coverLetter', e.target.value)
                                        }
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)]"
                                        placeholder="Write a brief cover letter explaining why you're interested in this position..."
                                        data-oid="tvb5bj5"
                                    />{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {currentStep === 4 && (
                        <div className="space-y-6" data-oid="dbp1hud">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="bm_r.s2"
                            >
                                Review Your Application
                            </h2>{' '}
                            <div className="bg-gray-50 rounded-lg p-6 space-y-4" data-oid="liyjkuw">
                                {' '}
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    data-oid="dr0u78z"
                                >
                                    {' '}
                                    <div data-oid="ri:-4zf">
                                        {' '}
                                        <h3
                                            className="font-medium text-gray-800"
                                            data-oid="73t85uz"
                                        >
                                            Personal Information
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="bbysbhv">
                                            {formData.fullName}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="dj-m2sb">
                                            {formData.email}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="pr3:q0m">
                                            {formData.phone}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="6581_nb">
                                            {formData.location}
                                        </p>{' '}
                                    </div>{' '}
                                    <div data-oid="bvif2mw">
                                        {' '}
                                        <h3
                                            className="font-medium text-gray-800"
                                            data-oid="zwbgkjf"
                                        >
                                            Professional Information
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="koay01-">
                                            Experience: {formData.experience}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="5crjf4f">
                                            Expected Salary: {formData.expectedSalary}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="yzutzbk">
                                            Notice Period: {formData.noticePeriod}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                {formData.resume && (
                                    <div data-oid="_kn5vjj">
                                        {' '}
                                        <h3
                                            className="font-medium text-gray-800"
                                            data-oid=".vwxzvi"
                                        >
                                            Documents
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="6y3ch5e">
                                            Resume: {formData.resume.name}
                                        </p>{' '}
                                    </div>
                                )}{' '}
                            </div>{' '}
                            <div
                                className="bg-blue-50 border border-blue-200 rounded-lg p-4"
                                data-oid="a8t02gi"
                            >
                                {' '}
                                <div className="flex" data-oid="rdki4ix">
                                    {' '}
                                    <div className="flex-shrink-0" data-oid="8xbu6nl">
                                        {' '}
                                        <svg
                                            className="h-5 w-5 text-blue-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="-l.1x81"
                                        >
                                            {' '}
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                clipRule="evenodd"
                                                data-oid="1re1go3"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div className="ml-3" data-oid="dwmr2_h">
                                        {' '}
                                        <h3
                                            className="text-sm font-medium text-blue-800"
                                            data-oid="m-b2rik"
                                        >
                                            {' '}
                                            Application Submission{' '}
                                        </h3>{' '}
                                        <div
                                            className="mt-2 text-sm text-blue-700"
                                            data-oid="0ub_ee1"
                                        >
                                            {' '}
                                            <p data-oid="a2n9:87">
                                                {' '}
                                                By submitting this application, you agree to our
                                                terms and conditions. You will receive a
                                                confirmation email once your application is
                                                submitted.{' '}
                                            </p>{' '}
                                        </div>{' '}
                                    </div>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                </div>{' '}
                {/* Footer */}{' '}
                <div className="border-t border-gray-200 p-6 bg-gray-50" data-oid="v03n4kt">
                    {' '}
                    <div className="flex justify-between" data-oid="1f17rog">
                        {' '}
                        <button
                            onClick={currentStep === 1 ? onClose : handlePrevious}
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                            data-oid="7g_p:-0"
                        >
                            {' '}
                            {currentStep === 1 ? 'Cancel' : 'Previous'}{' '}
                        </button>{' '}
                        {currentStep < 4 ? (
                            <button
                                onClick={handleNext}
                                className="px-8 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                                data-oid="n2i:w2q"
                            >
                                {' '}
                                Next Step{' '}
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300"
                                data-oid="p1shjke"
                            >
                                {' '}
                                Submit Application{' '}
                            </button>
                        )}{' '}
                    </div>{' '}
                </div>{' '}
            </div>{' '}
        </div>
    );
}
