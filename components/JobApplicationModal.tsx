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
            data-oid="z7zpjsj"
        >
            {' '}
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
                data-oid="zjwjlla"
            >
                {' '}
                {/* Header */}{' '}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white p-6"
                    data-oid="0v1oabv"
                >
                    {' '}
                    <div className="flex items-center justify-between" data-oid="9owb:rn">
                        {' '}
                        <div data-oid="egzrlpe">
                            {' '}
                            <h1 className="text-2xl font-bold" data-oid="3fieikp">
                                Apply for {job.title}
                            </h1>{' '}
                            <p className="text-blue-100" data-oid="20s8oym">
                                {job.company} • {job.location}
                            </p>{' '}
                        </div>{' '}
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            data-oid="l-o4zcu"
                        >
                            {' '}
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="zdodzum"
                            >
                                {' '}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid="rx.5gf4"
                                />{' '}
                            </svg>{' '}
                        </button>{' '}
                    </div>{' '}
                </div>{' '}
                {/* Progress Steps */}{' '}
                <div className="px-6 py-4 border-b border-gray-200" data-oid="p_bj.f8">
                    {' '}
                    <div className="flex items-center justify-between" data-oid="w1ex:.8">
                        {' '}
                        {steps.map((step, index) => (
                            <div key={step.number} className="flex items-center" data-oid="-1vza0a">
                                {' '}
                                <div
                                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${currentStep >= step.number ? 'bg-[hsl(196,80%,45%)] border-[hsl(196,80%,45%)] text-white' : 'border-gray-300 text-gray-500'}`}
                                    data-oid="u5dkpiw"
                                >
                                    {' '}
                                    {currentStep > step.number ? (
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="ckhui7b"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                                data-oid="wv1kstw"
                                            />{' '}
                                        </svg>
                                    ) : (
                                        step.number
                                    )}{' '}
                                </div>{' '}
                                <div className="ml-3 hidden sm:block" data-oid="o5y2htl">
                                    {' '}
                                    <div
                                        className={`text-sm font-medium ${currentStep >= step.number ? 'text-[hsl(196,80%,45%)]' : 'text-gray-500'}`}
                                        data-oid="0gx_ewk"
                                    >
                                        {' '}
                                        {step.title}{' '}
                                    </div>{' '}
                                    <div className="text-xs text-gray-500" data-oid="-:b:1dx">
                                        {step.description}
                                    </div>{' '}
                                </div>{' '}
                                {index < steps.length - 1 && (
                                    <div
                                        className={`hidden sm:block w-16 h-0.5 ml-4 ${currentStep > step.number ? 'bg-[hsl(196,80%,45%)]' : 'bg-gray-300'}`}
                                        data-oid="-y617:v"
                                    />
                                )}{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                </div>{' '}
                {/* Form Content */}{' '}
                <div className="p-6 h-[calc(90vh-300px)] overflow-y-auto" data-oid="01b4ksk">
                    {' '}
                    {currentStep === 1 && (
                        <div className="space-y-6" data-oid=".zlw7vh">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="rie58k."
                            >
                                Personal Information
                            </h2>{' '}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="v8tuubp"
                            >
                                {' '}
                                <div data-oid="n_c6amk">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="8:yvo-a"
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
                                        data-oid="xvnm1v6"
                                    />{' '}
                                    {errors.fullName && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="w6jnrl4">
                                            {errors.fullName}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="-08wjl3">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="cih-h6z"
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
                                        data-oid="acwwi7w"
                                    />{' '}
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="-y:e4bt">
                                            {errors.email}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="e5fkofq">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="5d0mf18"
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
                                        data-oid="r98fh2c"
                                    />{' '}
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="97-n5wi">
                                            {errors.phone}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="qr2nh9c">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="v5:x6i2"
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
                                        data-oid="apbiut3"
                                    />{' '}
                                    {errors.location && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="desiwvd">
                                            {errors.location}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {currentStep === 2 && (
                        <div className="space-y-6" data-oid="ns5catv">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="c56av_v"
                            >
                                Professional Information
                            </h2>{' '}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="0jxac0m"
                            >
                                {' '}
                                <div data-oid=":52esdc">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="en-w-us"
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
                                        data-oid="l4hd9ym"
                                    >
                                        {' '}
                                        <option value="" data-oid="sbw7o1n">
                                            Select experience level
                                        </option>{' '}
                                        <option value="0-1 years" data-oid="_v1adku">
                                            Fresher (0-1 years)
                                        </option>{' '}
                                        <option value="1-3 years" data-oid=".5xv791">
                                            Junior (1-3 years)
                                        </option>{' '}
                                        <option value="3-5 years" data-oid="1p26yfn">
                                            Mid-level (3-5 years)
                                        </option>{' '}
                                        <option value="5+ years" data-oid="gyb242:">
                                            Senior (5+ years)
                                        </option>{' '}
                                    </select>{' '}
                                    {errors.experience && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="wmi:6jg">
                                            {errors.experience}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="j8ffp8x">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="bs0syhe"
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
                                        data-oid=".ak0987"
                                    >
                                        {' '}
                                        <option value="" data-oid="wxuikfn">
                                            Select expected salary
                                        </option>{' '}
                                        <option value="0-5" data-oid="3acqa4:">
                                            ₹0-5 LPA
                                        </option>{' '}
                                        <option value="5-10" data-oid="vl.l726">
                                            ₹5-10 LPA
                                        </option>{' '}
                                        <option value="10-20" data-oid=".os075i">
                                            ₹10-20 LPA
                                        </option>{' '}
                                        <option value="20+" data-oid="uof.:_f">
                                            ₹20+ LPA
                                        </option>{' '}
                                    </select>{' '}
                                    {errors.expectedSalary && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="c8splj0">
                                            {errors.expectedSalary}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div className="md:col-span-2" data-oid="90m00g3">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="--kym7w"
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
                                        data-oid="za_is2v"
                                    >
                                        {' '}
                                        <option value="" data-oid="l3636_g">
                                            Select notice period
                                        </option>{' '}
                                        <option value="Immediate" data-oid="k6cux2:">
                                            Immediate
                                        </option>{' '}
                                        <option value="15 days" data-oid="561o5n9">
                                            15 days
                                        </option>{' '}
                                        <option value="1 month" data-oid="-s76g-9">
                                            1 month
                                        </option>{' '}
                                        <option value="2 months" data-oid="dyouowf">
                                            2 months
                                        </option>{' '}
                                        <option value="3 months" data-oid="wgricho">
                                            3 months
                                        </option>{' '}
                                    </select>{' '}
                                    {errors.noticePeriod && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="ech.hss">
                                            {errors.noticePeriod}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {currentStep === 3 && (
                        <div className="space-y-6" data-oid="-bhsv.z">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="wolvcah"
                            >
                                Documents & Portfolio
                            </h2>{' '}
                            <div className="space-y-6" data-oid="nx5oc_7">
                                {' '}
                                <div data-oid="8k424g:">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="j5f1iva"
                                    >
                                        {' '}
                                        Resume/CV *{' '}
                                    </label>{' '}
                                    <div
                                        className={`border-2 border-dashed rounded-lg p-6 text-center ${errors.resume ? 'border-red-500' : 'border-gray-300'}`}
                                        data-oid="oud4--w"
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
                                            data-oid="6zvc76m"
                                        />{' '}
                                        <label
                                            htmlFor="resume-upload"
                                            className="cursor-pointer"
                                            data-oid="gj0ckg-"
                                        >
                                            {' '}
                                            <div className="text-gray-600" data-oid="kp1:h2n">
                                                {' '}
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    data-oid="q1kfh1:"
                                                >
                                                    {' '}
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        data-oid="rs8l3rh"
                                                    />{' '}
                                                </svg>{' '}
                                                <p className="mt-2 text-sm" data-oid="7xpra:a">
                                                    {' '}
                                                    <span
                                                        className="font-medium text-[hsl(196,80%,45%)]"
                                                        data-oid="_m-s-ed"
                                                    >
                                                        Click to upload
                                                    </span>{' '}
                                                    or drag and drop{' '}
                                                </p>{' '}
                                                <p
                                                    className="text-xs text-gray-500"
                                                    data-oid="nb4sk7y"
                                                >
                                                    PDF, DOC, DOCX up to 10MB
                                                </p>{' '}
                                            </div>{' '}
                                        </label>{' '}
                                        {formData.resume && (
                                            <p
                                                className="mt-2 text-sm text-green-600"
                                                data-oid="6d0af5k"
                                            >
                                                {' '}
                                                ✓ {formData.resume.name}{' '}
                                            </p>
                                        )}{' '}
                                    </div>{' '}
                                    {errors.resume && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="u6v8n1g">
                                            {errors.resume}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="vj-xs1z">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="wusn4f0"
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
                                        data-oid="qvtyon_"
                                    />{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {currentStep === 4 && (
                        <div className="space-y-6" data-oid="cpokk2z">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="ttrml33"
                            >
                                Review Your Application
                            </h2>{' '}
                            <div className="bg-gray-50 rounded-lg p-6 space-y-4" data-oid="dbzri8a">
                                {' '}
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    data-oid="7anflvo"
                                >
                                    {' '}
                                    <div data-oid=".yjd65a">
                                        {' '}
                                        <h3
                                            className="font-medium text-gray-800"
                                            data-oid="ytqbgnl"
                                        >
                                            Personal Information
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="gx84dlv">
                                            {formData.fullName}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="3m38bzd">
                                            {formData.email}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="wuv59f_">
                                            {formData.phone}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="4v1ncs.">
                                            {formData.location}
                                        </p>{' '}
                                    </div>{' '}
                                    <div data-oid=".ve9_ed">
                                        {' '}
                                        <h3
                                            className="font-medium text-gray-800"
                                            data-oid="qc6fs0v"
                                        >
                                            Professional Information
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="dl0bl5c">
                                            Experience: {formData.experience}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="edr0wk8">
                                            Expected Salary: {formData.expectedSalary}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="bxu-p5l">
                                            Notice Period: {formData.noticePeriod}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                {formData.resume && (
                                    <div data-oid="g3tny.1">
                                        {' '}
                                        <h3
                                            className="font-medium text-gray-800"
                                            data-oid="kidd6il"
                                        >
                                            Documents
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="5dmf:oj">
                                            Resume: {formData.resume.name}
                                        </p>{' '}
                                    </div>
                                )}{' '}
                            </div>{' '}
                            <div
                                className="bg-blue-50 border border-blue-200 rounded-lg p-4"
                                data-oid="ejuwsly"
                            >
                                {' '}
                                <div className="flex" data-oid="htvvmt-">
                                    {' '}
                                    <div className="flex-shrink-0" data-oid="-:s0c27">
                                        {' '}
                                        <svg
                                            className="h-5 w-5 text-blue-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="whu47h2"
                                        >
                                            {' '}
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                clipRule="evenodd"
                                                data-oid="pjri36:"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div className="ml-3" data-oid="uo8d57n">
                                        {' '}
                                        <h3
                                            className="text-sm font-medium text-blue-800"
                                            data-oid="arb.j8u"
                                        >
                                            {' '}
                                            Application Submission{' '}
                                        </h3>{' '}
                                        <div
                                            className="mt-2 text-sm text-blue-700"
                                            data-oid="sfzr.6i"
                                        >
                                            {' '}
                                            <p data-oid="-n-30hl">
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
                <div className="border-t border-gray-200 p-6 bg-gray-50" data-oid="xarc_a6">
                    {' '}
                    <div className="flex justify-between" data-oid="6lqid1-">
                        {' '}
                        <button
                            onClick={currentStep === 1 ? onClose : handlePrevious}
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                            data-oid="6syrnsf"
                        >
                            {' '}
                            {currentStep === 1 ? 'Cancel' : 'Previous'}{' '}
                        </button>{' '}
                        {currentStep < 4 ? (
                            <button
                                onClick={handleNext}
                                className="px-8 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                                data-oid="5r.n9a4"
                            >
                                {' '}
                                Next Step{' '}
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300"
                                data-oid="tlso-nq"
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
