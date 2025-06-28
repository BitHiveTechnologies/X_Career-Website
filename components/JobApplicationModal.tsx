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
            data-oid="dvlbn_l"
        >
            {' '}
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
                data-oid="253n2mv"
            >
                {' '}
                {/* Header */}{' '}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white p-6"
                    data-oid="3k3ot1f"
                >
                    {' '}
                    <div className="flex items-center justify-between" data-oid="-6.s5yl">
                        {' '}
                        <div data-oid="ss:tk_h">
                            {' '}
                            <h1 className="text-2xl font-bold" data-oid="akw1aya">
                                Apply for {job.title}
                            </h1>{' '}
                            <p className="text-blue-100" data-oid=":1iepoz">
                                {job.company} • {job.location}
                            </p>{' '}
                        </div>{' '}
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            data-oid="cp7bykd"
                        >
                            {' '}
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="aw.ljxa"
                            >
                                {' '}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid="aic5w:y"
                                />{' '}
                            </svg>{' '}
                        </button>{' '}
                    </div>{' '}
                </div>{' '}
                {/* Progress Steps */}{' '}
                <div className="px-6 py-4 border-b border-gray-200" data-oid="9_02hgs">
                    {' '}
                    <div className="flex items-center justify-between" data-oid="pv6n_sl">
                        {' '}
                        {steps.map((step, index) => (
                            <div key={step.number} className="flex items-center" data-oid="4v:6uh2">
                                {' '}
                                <div
                                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${currentStep >= step.number ? 'bg-[hsl(196,80%,45%)] border-[hsl(196,80%,45%)] text-white' : 'border-gray-300 text-gray-500'}`}
                                    data-oid="lson8m8"
                                >
                                    {' '}
                                    {currentStep > step.number ? (
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="6nzqdxr"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                                data-oid="wxaprj-"
                                            />{' '}
                                        </svg>
                                    ) : (
                                        step.number
                                    )}{' '}
                                </div>{' '}
                                <div className="ml-3 hidden sm:block" data-oid="y_84xhw">
                                    {' '}
                                    <div
                                        className={`text-sm font-medium ${currentStep >= step.number ? 'text-[hsl(196,80%,45%)]' : 'text-gray-500'}`}
                                        data-oid="muehqnj"
                                    >
                                        {' '}
                                        {step.title}{' '}
                                    </div>{' '}
                                    <div className="text-xs text-gray-500" data-oid="3c.5.no">
                                        {step.description}
                                    </div>{' '}
                                </div>{' '}
                                {index < steps.length - 1 && (
                                    <div
                                        className={`hidden sm:block w-16 h-0.5 ml-4 ${currentStep > step.number ? 'bg-[hsl(196,80%,45%)]' : 'bg-gray-300'}`}
                                        data-oid="ick5iou"
                                    />
                                )}{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                </div>{' '}
                {/* Form Content */}{' '}
                <div className="p-6 h-[calc(90vh-300px)] overflow-y-auto" data-oid="efs5u40">
                    {' '}
                    {currentStep === 1 && (
                        <div className="space-y-6" data-oid="upeyg96">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="ybeowlw"
                            >
                                Personal Information
                            </h2>{' '}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="m:haxzf"
                            >
                                {' '}
                                <div data-oid="e_e:woe">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="am8t.vv"
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
                                        data-oid="q9f-wk7"
                                    />{' '}
                                    {errors.fullName && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="y.8dtv2">
                                            {errors.fullName}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid=".h0milv">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="4r.afpf"
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
                                        data-oid="_:lhb-p"
                                    />{' '}
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="hfrke3i">
                                            {errors.email}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="5cz_nl1">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="-s0a-kf"
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
                                        data-oid="95umv4t"
                                    />{' '}
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="46y9:um">
                                            {errors.phone}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="7moqyzh">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="jr8ufph"
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
                                        data-oid="nx.wzdb"
                                    />{' '}
                                    {errors.location && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="lrqhkki">
                                            {errors.location}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {currentStep === 2 && (
                        <div className="space-y-6" data-oid="mjyqr2_">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="z6yr-zn"
                            >
                                Professional Information
                            </h2>{' '}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="dkmd2ja"
                            >
                                {' '}
                                <div data-oid="_l:1fk-">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="6n12:8u"
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
                                        data-oid="_n14r63"
                                    >
                                        {' '}
                                        <option value="" data-oid="jgrwnpb">
                                            Select experience level
                                        </option>{' '}
                                        <option value="0-1 years" data-oid="ra0o_0i">
                                            Fresher (0-1 years)
                                        </option>{' '}
                                        <option value="1-3 years" data-oid="dxvpc3.">
                                            Junior (1-3 years)
                                        </option>{' '}
                                        <option value="3-5 years" data-oid="k0awnq5">
                                            Mid-level (3-5 years)
                                        </option>{' '}
                                        <option value="5+ years" data-oid="a_6ec90">
                                            Senior (5+ years)
                                        </option>{' '}
                                    </select>{' '}
                                    {errors.experience && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="96tnv55">
                                            {errors.experience}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="9pey-y1">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="r04ufn8"
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
                                        data-oid="pmr8y38"
                                    >
                                        {' '}
                                        <option value="" data-oid="_z.:c24">
                                            Select expected salary
                                        </option>{' '}
                                        <option value="0-5" data-oid="ycqujx_">
                                            ₹0-5 LPA
                                        </option>{' '}
                                        <option value="5-10" data-oid="wzpzch5">
                                            ₹5-10 LPA
                                        </option>{' '}
                                        <option value="10-20" data-oid="kp43o1u">
                                            ₹10-20 LPA
                                        </option>{' '}
                                        <option value="20+" data-oid="ziwzt7z">
                                            ₹20+ LPA
                                        </option>{' '}
                                    </select>{' '}
                                    {errors.expectedSalary && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="27_qk4h">
                                            {errors.expectedSalary}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div className="md:col-span-2" data-oid="taugc4u">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="f-00ibp"
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
                                        data-oid="g71sf1x"
                                    >
                                        {' '}
                                        <option value="" data-oid="qvrb908">
                                            Select notice period
                                        </option>{' '}
                                        <option value="Immediate" data-oid="oigq.9y">
                                            Immediate
                                        </option>{' '}
                                        <option value="15 days" data-oid="x87qwwz">
                                            15 days
                                        </option>{' '}
                                        <option value="1 month" data-oid="o5:vrd9">
                                            1 month
                                        </option>{' '}
                                        <option value="2 months" data-oid="bt:2exd">
                                            2 months
                                        </option>{' '}
                                        <option value="3 months" data-oid="8arseb:">
                                            3 months
                                        </option>{' '}
                                    </select>{' '}
                                    {errors.noticePeriod && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="ai9aks6">
                                            {errors.noticePeriod}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {currentStep === 3 && (
                        <div className="space-y-6" data-oid="kl1vhj.">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="2-298s1"
                            >
                                Documents & Portfolio
                            </h2>{' '}
                            <div className="space-y-6" data-oid="layt:ov">
                                {' '}
                                <div data-oid="zkkj89z">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="2gc14pq"
                                    >
                                        {' '}
                                        Resume/CV *{' '}
                                    </label>{' '}
                                    <div
                                        className={`border-2 border-dashed rounded-lg p-6 text-center ${errors.resume ? 'border-red-500' : 'border-gray-300'}`}
                                        data-oid=":ile:u-"
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
                                            data-oid="71pcm.3"
                                        />{' '}
                                        <label
                                            htmlFor="resume-upload"
                                            className="cursor-pointer"
                                            data-oid="-g-lajx"
                                        >
                                            {' '}
                                            <div className="text-gray-600" data-oid="hb:dv9w">
                                                {' '}
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    data-oid="q10cf0h"
                                                >
                                                    {' '}
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        data-oid="dey7m_s"
                                                    />{' '}
                                                </svg>{' '}
                                                <p className="mt-2 text-sm" data-oid="rwr267c">
                                                    {' '}
                                                    <span
                                                        className="font-medium text-[hsl(196,80%,45%)]"
                                                        data-oid="6lxqk-n"
                                                    >
                                                        Click to upload
                                                    </span>{' '}
                                                    or drag and drop{' '}
                                                </p>{' '}
                                                <p
                                                    className="text-xs text-gray-500"
                                                    data-oid="1hno58c"
                                                >
                                                    PDF, DOC, DOCX up to 10MB
                                                </p>{' '}
                                            </div>{' '}
                                        </label>{' '}
                                        {formData.resume && (
                                            <p
                                                className="mt-2 text-sm text-green-600"
                                                data-oid="hbtzgro"
                                            >
                                                {' '}
                                                ✓ {formData.resume.name}{' '}
                                            </p>
                                        )}{' '}
                                    </div>{' '}
                                    {errors.resume && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="27tonw-">
                                            {errors.resume}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="b63gk5k">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="p6qzsb6"
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
                                        data-oid="z.urz3."
                                    />{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {currentStep === 4 && (
                        <div className="space-y-6" data-oid="ilrwalz">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="1j2._hj"
                            >
                                Review Your Application
                            </h2>{' '}
                            <div className="bg-gray-50 rounded-lg p-6 space-y-4" data-oid="c:am8o.">
                                {' '}
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    data-oid="es8-g2."
                                >
                                    {' '}
                                    <div data-oid="xv_r78f">
                                        {' '}
                                        <h3
                                            className="font-medium text-gray-800"
                                            data-oid="td0ywqc"
                                        >
                                            Personal Information
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="y_edc5b">
                                            {formData.fullName}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="741yyh9">
                                            {formData.email}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="-057die">
                                            {formData.phone}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="i_sr1b5">
                                            {formData.location}
                                        </p>{' '}
                                    </div>{' '}
                                    <div data-oid="50bgx41">
                                        {' '}
                                        <h3
                                            className="font-medium text-gray-800"
                                            data-oid="d9m:px-"
                                        >
                                            Professional Information
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="9_ti.21">
                                            Experience: {formData.experience}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="r_bbpw4">
                                            Expected Salary: {formData.expectedSalary}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="ntlt65s">
                                            Notice Period: {formData.noticePeriod}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                {formData.resume && (
                                    <div data-oid=".r-k0az">
                                        {' '}
                                        <h3
                                            className="font-medium text-gray-800"
                                            data-oid="f-bios:"
                                        >
                                            Documents
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="q4wd2de">
                                            Resume: {formData.resume.name}
                                        </p>{' '}
                                    </div>
                                )}{' '}
                            </div>{' '}
                            <div
                                className="bg-blue-50 border border-blue-200 rounded-lg p-4"
                                data-oid="2ao53_c"
                            >
                                {' '}
                                <div className="flex" data-oid="yrog:mm">
                                    {' '}
                                    <div className="flex-shrink-0" data-oid="7gahaxd">
                                        {' '}
                                        <svg
                                            className="h-5 w-5 text-blue-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="km:4hop"
                                        >
                                            {' '}
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                clipRule="evenodd"
                                                data-oid="xwssx2x"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div className="ml-3" data-oid=".crhrr1">
                                        {' '}
                                        <h3
                                            className="text-sm font-medium text-blue-800"
                                            data-oid="-jl0p7r"
                                        >
                                            {' '}
                                            Application Submission{' '}
                                        </h3>{' '}
                                        <div
                                            className="mt-2 text-sm text-blue-700"
                                            data-oid="8651kbw"
                                        >
                                            {' '}
                                            <p data-oid="ftpr0k8">
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
                <div className="border-t border-gray-200 p-6 bg-gray-50" data-oid="mupmzp0">
                    {' '}
                    <div className="flex justify-between" data-oid="bww-gta">
                        {' '}
                        <button
                            onClick={currentStep === 1 ? onClose : handlePrevious}
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                            data-oid="tnfm-7h"
                        >
                            {' '}
                            {currentStep === 1 ? 'Cancel' : 'Previous'}{' '}
                        </button>{' '}
                        {currentStep < 4 ? (
                            <button
                                onClick={handleNext}
                                className="px-8 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                                data-oid="24qrvhh"
                            >
                                {' '}
                                Next Step{' '}
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300"
                                data-oid="o6n9es7"
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
