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
            data-oid="bu8z1n:"
        >
            {' '}
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
                data-oid="m1:15d9"
            >
                {' '}
                {/* Header */}{' '}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white p-6"
                    data-oid="to.6nex"
                >
                    {' '}
                    <div className="flex items-center justify-between" data-oid="d8ioe1l">
                        {' '}
                        <div data-oid="bo1-gtc">
                            {' '}
                            <h1 className="text-2xl font-bold" data-oid="ayrxvy_">
                                Apply for {job.title}
                            </h1>{' '}
                            <p className="text-blue-100" data-oid=".j2fe_1">
                                {job.company} • {job.location}
                            </p>{' '}
                        </div>{' '}
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            data-oid="pa8r9wu"
                        >
                            {' '}
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="htcv4ex"
                            >
                                {' '}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid="zooh6or"
                                />{' '}
                            </svg>{' '}
                        </button>{' '}
                    </div>{' '}
                </div>{' '}
                {/* Progress Steps */}{' '}
                <div className="px-6 py-4 border-b border-gray-200" data-oid="68da65:">
                    {' '}
                    <div className="flex items-center justify-between" data-oid="8yjclyt">
                        {' '}
                        {steps.map((step, index) => (
                            <div key={step.number} className="flex items-center" data-oid="0nr.g5r">
                                {' '}
                                <div
                                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${currentStep >= step.number ? 'bg-[hsl(196,80%,45%)] border-[hsl(196,80%,45%)] text-white' : 'border-gray-300 text-gray-500'}`}
                                    data-oid="8tw0oi5"
                                >
                                    {' '}
                                    {currentStep > step.number ? (
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="y.dp5ub"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                                data-oid="ka:2z0k"
                                            />{' '}
                                        </svg>
                                    ) : (
                                        step.number
                                    )}{' '}
                                </div>{' '}
                                <div className="ml-3 hidden sm:block" data-oid="4flcihz">
                                    {' '}
                                    <div
                                        className={`text-sm font-medium ${currentStep >= step.number ? 'text-[hsl(196,80%,45%)]' : 'text-gray-500'}`}
                                        data-oid="46obct."
                                    >
                                        {' '}
                                        {step.title}{' '}
                                    </div>{' '}
                                    <div className="text-xs text-gray-500" data-oid="l0b9qpn">
                                        {step.description}
                                    </div>{' '}
                                </div>{' '}
                                {index < steps.length - 1 && (
                                    <div
                                        className={`hidden sm:block w-16 h-0.5 ml-4 ${currentStep > step.number ? 'bg-[hsl(196,80%,45%)]' : 'bg-gray-300'}`}
                                        data-oid="lmitvqk"
                                    />
                                )}{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                </div>{' '}
                {/* Form Content */}{' '}
                <div className="p-6 h-[calc(90vh-300px)] overflow-y-auto" data-oid="xtzl48j">
                    {' '}
                    {currentStep === 1 && (
                        <div className="space-y-6" data-oid="vl6s83i">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="kbe.s_p"
                            >
                                Personal Information
                            </h2>{' '}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="atujn0q"
                            >
                                {' '}
                                <div data-oid="3_l7a9r">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="qb-xw-w"
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
                                        data-oid="brctefu"
                                    />{' '}
                                    {errors.fullName && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="-0qy0h7">
                                            {errors.fullName}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid=":-aqdw1">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="rx4cc-9"
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
                                        data-oid="9n5la:o"
                                    />{' '}
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="qj3_qvk">
                                            {errors.email}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="5dvhcfe">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="evdykhl"
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
                                        data-oid="aq7hbii"
                                    />{' '}
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="ku7iu8b">
                                            {errors.phone}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="g8d9h7y">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="i:xdr38"
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
                                        data-oid="spai9-k"
                                    />{' '}
                                    {errors.location && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="9gek-63">
                                            {errors.location}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {currentStep === 2 && (
                        <div className="space-y-6" data-oid=".i8kokr">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="w5x6gn6"
                            >
                                Professional Information
                            </h2>{' '}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="k8sb4f3"
                            >
                                {' '}
                                <div data-oid="xdq6iua">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="h75lp6."
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
                                        data-oid="1x:8lti"
                                    >
                                        {' '}
                                        <option value="" data-oid="aiwxy0q">
                                            Select experience level
                                        </option>{' '}
                                        <option value="0-1 years" data-oid="k648ywa">
                                            Fresher (0-1 years)
                                        </option>{' '}
                                        <option value="1-3 years" data-oid="e6dks4.">
                                            Junior (1-3 years)
                                        </option>{' '}
                                        <option value="3-5 years" data-oid=".ca4gsb">
                                            Mid-level (3-5 years)
                                        </option>{' '}
                                        <option value="5+ years" data-oid="wol-fof">
                                            Senior (5+ years)
                                        </option>{' '}
                                    </select>{' '}
                                    {errors.experience && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="yofa2p4">
                                            {errors.experience}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid=":z8pr2a">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="-ww4w4i"
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
                                        data-oid="pjf15.w"
                                    >
                                        {' '}
                                        <option value="" data-oid="n6mnsv6">
                                            Select expected salary
                                        </option>{' '}
                                        <option value="0-5" data-oid="-t73943">
                                            ₹0-5 LPA
                                        </option>{' '}
                                        <option value="5-10" data-oid="k6.js6:">
                                            ₹5-10 LPA
                                        </option>{' '}
                                        <option value="10-20" data-oid="iy.la85">
                                            ₹10-20 LPA
                                        </option>{' '}
                                        <option value="20+" data-oid="yjlc-_m">
                                            ₹20+ LPA
                                        </option>{' '}
                                    </select>{' '}
                                    {errors.expectedSalary && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="l:ifdi9">
                                            {errors.expectedSalary}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div className="md:col-span-2" data-oid="at9:4_u">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid=".hlsliv"
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
                                        data-oid="s8mrg53"
                                    >
                                        {' '}
                                        <option value="" data-oid=".qqa8ph">
                                            Select notice period
                                        </option>{' '}
                                        <option value="Immediate" data-oid="8vytm8z">
                                            Immediate
                                        </option>{' '}
                                        <option value="15 days" data-oid="yvwk11h">
                                            15 days
                                        </option>{' '}
                                        <option value="1 month" data-oid="zizsmv-">
                                            1 month
                                        </option>{' '}
                                        <option value="2 months" data-oid="njj559f">
                                            2 months
                                        </option>{' '}
                                        <option value="3 months" data-oid="rmioh67">
                                            3 months
                                        </option>{' '}
                                    </select>{' '}
                                    {errors.noticePeriod && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="bmivjsw">
                                            {errors.noticePeriod}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {currentStep === 3 && (
                        <div className="space-y-6" data-oid="4l17szd">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid=".fc0tm6"
                            >
                                Documents & Portfolio
                            </h2>{' '}
                            <div className="space-y-6" data-oid="l-3w8ah">
                                {' '}
                                <div data-oid="bcy.ol6">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="a-m5qn2"
                                    >
                                        {' '}
                                        Resume/CV *{' '}
                                    </label>{' '}
                                    <div
                                        className={`border-2 border-dashed rounded-lg p-6 text-center ${errors.resume ? 'border-red-500' : 'border-gray-300'}`}
                                        data-oid="fe37fce"
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
                                            data-oid="ge6d-ga"
                                        />{' '}
                                        <label
                                            htmlFor="resume-upload"
                                            className="cursor-pointer"
                                            data-oid="08sdqyv"
                                        >
                                            {' '}
                                            <div className="text-gray-600" data-oid="qczqpqm">
                                                {' '}
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    data-oid="wkzqumb"
                                                >
                                                    {' '}
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        data-oid="ysih0fj"
                                                    />{' '}
                                                </svg>{' '}
                                                <p className="mt-2 text-sm" data-oid="retj_wf">
                                                    {' '}
                                                    <span
                                                        className="font-medium text-[hsl(196,80%,45%)]"
                                                        data-oid="-f5fif0"
                                                    >
                                                        Click to upload
                                                    </span>{' '}
                                                    or drag and drop{' '}
                                                </p>{' '}
                                                <p
                                                    className="text-xs text-gray-500"
                                                    data-oid="b02omm4"
                                                >
                                                    PDF, DOC, DOCX up to 10MB
                                                </p>{' '}
                                            </div>{' '}
                                        </label>{' '}
                                        {formData.resume && (
                                            <p
                                                className="mt-2 text-sm text-green-600"
                                                data-oid="z9b1msy"
                                            >
                                                {' '}
                                                ✓ {formData.resume.name}{' '}
                                            </p>
                                        )}{' '}
                                    </div>{' '}
                                    {errors.resume && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="n3pn4si">
                                            {errors.resume}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="gfquhtp">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="-t6cbl_"
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
                                        data-oid="c388oso"
                                    />{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {currentStep === 4 && (
                        <div className="space-y-6" data-oid="7gf8uxr">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="7232pw."
                            >
                                Review Your Application
                            </h2>{' '}
                            <div className="bg-gray-50 rounded-lg p-6 space-y-4" data-oid="ds.0tym">
                                {' '}
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    data-oid="apc2py9"
                                >
                                    {' '}
                                    <div data-oid="h3mr_6p">
                                        {' '}
                                        <h3
                                            className="font-medium text-gray-800"
                                            data-oid="2j_.l3v"
                                        >
                                            Personal Information
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid=":1nd5z9">
                                            {formData.fullName}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="bth2b3f">
                                            {formData.email}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="x-f49.b">
                                            {formData.phone}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="v610.cs">
                                            {formData.location}
                                        </p>{' '}
                                    </div>{' '}
                                    <div data-oid=":tdu_:o">
                                        {' '}
                                        <h3
                                            className="font-medium text-gray-800"
                                            data-oid="zuh53lo"
                                        >
                                            Professional Information
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="8wn_6eo">
                                            Experience: {formData.experience}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid=":erfh6a">
                                            Expected Salary: {formData.expectedSalary}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="r3xc92i">
                                            Notice Period: {formData.noticePeriod}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                {formData.resume && (
                                    <div data-oid="62vrc5t">
                                        {' '}
                                        <h3
                                            className="font-medium text-gray-800"
                                            data-oid="jp-la9n"
                                        >
                                            Documents
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="4xn2osh">
                                            Resume: {formData.resume.name}
                                        </p>{' '}
                                    </div>
                                )}{' '}
                            </div>{' '}
                            <div
                                className="bg-blue-50 border border-blue-200 rounded-lg p-4"
                                data-oid="46wcnj:"
                            >
                                {' '}
                                <div className="flex" data-oid="xfrc-1p">
                                    {' '}
                                    <div className="flex-shrink-0" data-oid="wpiv9xd">
                                        {' '}
                                        <svg
                                            className="h-5 w-5 text-blue-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="d5fv31z"
                                        >
                                            {' '}
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                clipRule="evenodd"
                                                data-oid="ug9dwnr"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div className="ml-3" data-oid="mq4kd8v">
                                        {' '}
                                        <h3
                                            className="text-sm font-medium text-blue-800"
                                            data-oid="3wvqo-u"
                                        >
                                            {' '}
                                            Application Submission{' '}
                                        </h3>{' '}
                                        <div
                                            className="mt-2 text-sm text-blue-700"
                                            data-oid="oo_tvm6"
                                        >
                                            {' '}
                                            <p data-oid="algrpay">
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
                <div className="border-t border-gray-200 p-6 bg-gray-50" data-oid="5ftjfnh">
                    {' '}
                    <div className="flex justify-between" data-oid=".bdm3dk">
                        {' '}
                        <button
                            onClick={currentStep === 1 ? onClose : handlePrevious}
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                            data-oid="tlycxa2"
                        >
                            {' '}
                            {currentStep === 1 ? 'Cancel' : 'Previous'}{' '}
                        </button>{' '}
                        {currentStep < 4 ? (
                            <button
                                onClick={handleNext}
                                className="px-8 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                                data-oid="lk0721s"
                            >
                                {' '}
                                Next Step{' '}
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300"
                                data-oid="-s--e45"
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
