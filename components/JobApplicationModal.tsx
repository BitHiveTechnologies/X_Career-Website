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
            data-oid="c61.8k6"
        >
            {' '}
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
                data-oid="22dohd."
            >
                {' '}
                {/* Header */}{' '}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white p-6"
                    data-oid="t4127p1"
                >
                    {' '}
                    <div className="flex items-center justify-between" data-oid="jz3c4w.">
                        {' '}
                        <div data-oid="8:dbmad">
                            {' '}
                            <h1 className="text-2xl font-bold" data-oid="_sors2z">
                                Apply for {job.title}
                            </h1>{' '}
                            <p className="text-blue-100" data-oid="3-x0u97">
                                {job.company} • {job.location}
                            </p>{' '}
                        </div>{' '}
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            data-oid="vv6rg2r"
                        >
                            {' '}
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="u71t08u"
                            >
                                {' '}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid="fz3q_:6"
                                />{' '}
                            </svg>{' '}
                        </button>{' '}
                    </div>{' '}
                </div>{' '}
                {/* Progress Steps */}{' '}
                <div className="px-6 py-4 border-b border-gray-200" data-oid="wv.r.o.">
                    {' '}
                    <div className="flex items-center justify-between" data-oid="4jr_e8w">
                        {' '}
                        {steps.map((step, index) => (
                            <div key={step.number} className="flex items-center" data-oid="ymcjtll">
                                {' '}
                                <div
                                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${currentStep >= step.number ? 'bg-[hsl(196,80%,45%)] border-[hsl(196,80%,45%)] text-white' : 'border-gray-300 text-gray-500'}`}
                                    data-oid="fwel4xe"
                                >
                                    {' '}
                                    {currentStep > step.number ? (
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="uz940ht"
                                        >
                                            {' '}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                                data-oid="29o1xtp"
                                            />{' '}
                                        </svg>
                                    ) : (
                                        step.number
                                    )}{' '}
                                </div>{' '}
                                <div className="ml-3 hidden sm:block" data-oid="te5ft:c">
                                    {' '}
                                    <div
                                        className={`text-sm font-medium ${currentStep >= step.number ? 'text-[hsl(196,80%,45%)]' : 'text-gray-500'}`}
                                        data-oid="3-u2i0z"
                                    >
                                        {' '}
                                        {step.title}{' '}
                                    </div>{' '}
                                    <div className="text-xs text-gray-500" data-oid="lrtagrp">
                                        {step.description}
                                    </div>{' '}
                                </div>{' '}
                                {index < steps.length - 1 && (
                                    <div
                                        className={`hidden sm:block w-16 h-0.5 ml-4 ${currentStep > step.number ? 'bg-[hsl(196,80%,45%)]' : 'bg-gray-300'}`}
                                        data-oid="1gsrju_"
                                    />
                                )}{' '}
                            </div>
                        ))}{' '}
                    </div>{' '}
                </div>{' '}
                {/* Form Content */}{' '}
                <div className="p-6 h-[calc(90vh-300px)] overflow-y-auto" data-oid="6yr94hb">
                    {' '}
                    {currentStep === 1 && (
                        <div className="space-y-6" data-oid="_zqblhw">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="3x.d4ej"
                            >
                                Personal Information
                            </h2>{' '}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="b3oia:s"
                            >
                                {' '}
                                <div data-oid="y5w7lh3">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="h_op7ll"
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
                                        data-oid="gux2z.5"
                                    />{' '}
                                    {errors.fullName && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="jc95d00">
                                            {errors.fullName}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="7hta07:">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="7rhupbj"
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
                                        data-oid="73dr12q"
                                    />{' '}
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="poi1nqc">
                                            {errors.email}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="uhdm8na">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="34f36vr"
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
                                        data-oid="dv576u."
                                    />{' '}
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="e7-gk2g">
                                            {errors.phone}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="u:hn52x">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid=".zxic.4"
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
                                        data-oid="9l2qcy3"
                                    />{' '}
                                    {errors.location && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="7bfuhfy">
                                            {errors.location}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {currentStep === 2 && (
                        <div className="space-y-6" data-oid="msol9:n">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="eyxrxe8"
                            >
                                Professional Information
                            </h2>{' '}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="hckrs2_"
                            >
                                {' '}
                                <div data-oid="9iae4be">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="acdfzjm"
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
                                        data-oid="hsnkbs1"
                                    >
                                        {' '}
                                        <option value="" data-oid="xk4qo9k">
                                            Select experience level
                                        </option>{' '}
                                        <option value="0-1 years" data-oid="gjw7.uc">
                                            Fresher (0-1 years)
                                        </option>{' '}
                                        <option value="1-3 years" data-oid=".ihm3cg">
                                            Junior (1-3 years)
                                        </option>{' '}
                                        <option value="3-5 years" data-oid="q354kuo">
                                            Mid-level (3-5 years)
                                        </option>{' '}
                                        <option value="5+ years" data-oid="5vgxc:m">
                                            Senior (5+ years)
                                        </option>{' '}
                                    </select>{' '}
                                    {errors.experience && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="f1v.j47">
                                            {errors.experience}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="cy.9_8-">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="kt-5svy"
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
                                        data-oid=":f9u:30"
                                    >
                                        {' '}
                                        <option value="" data-oid="tr81v0.">
                                            Select expected salary
                                        </option>{' '}
                                        <option value="0-5" data-oid="l4wz2u3">
                                            ₹0-5 LPA
                                        </option>{' '}
                                        <option value="5-10" data-oid="o2fsjsm">
                                            ₹5-10 LPA
                                        </option>{' '}
                                        <option value="10-20" data-oid=":1r-.8s">
                                            ₹10-20 LPA
                                        </option>{' '}
                                        <option value="20+" data-oid="7__ay:v">
                                            ₹20+ LPA
                                        </option>{' '}
                                    </select>{' '}
                                    {errors.expectedSalary && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="g0g2r83">
                                            {errors.expectedSalary}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div className="md:col-span-2" data-oid="zk731-t">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="zrx3vbw"
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
                                        data-oid="dyv7l79"
                                    >
                                        {' '}
                                        <option value="" data-oid="b3nc4i5">
                                            Select notice period
                                        </option>{' '}
                                        <option value="Immediate" data-oid="gwe:8up">
                                            Immediate
                                        </option>{' '}
                                        <option value="15 days" data-oid="ir59wms">
                                            15 days
                                        </option>{' '}
                                        <option value="1 month" data-oid="fn1zrvq">
                                            1 month
                                        </option>{' '}
                                        <option value="2 months" data-oid="fuj_mnz">
                                            2 months
                                        </option>{' '}
                                        <option value="3 months" data-oid="sgapvb4">
                                            3 months
                                        </option>{' '}
                                    </select>{' '}
                                    {errors.noticePeriod && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="qo0t11o">
                                            {errors.noticePeriod}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {currentStep === 3 && (
                        <div className="space-y-6" data-oid="5kppb20">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="3zsdzvy"
                            >
                                Documents & Portfolio
                            </h2>{' '}
                            <div className="space-y-6" data-oid=":7tfkhl">
                                {' '}
                                <div data-oid=".4b3-xg">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="1dhlq.z"
                                    >
                                        {' '}
                                        Resume/CV *{' '}
                                    </label>{' '}
                                    <div
                                        className={`border-2 border-dashed rounded-lg p-6 text-center ${errors.resume ? 'border-red-500' : 'border-gray-300'}`}
                                        data-oid="fv78nts"
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
                                            data-oid="phaul1_"
                                        />{' '}
                                        <label
                                            htmlFor="resume-upload"
                                            className="cursor-pointer"
                                            data-oid="cln3ne4"
                                        >
                                            {' '}
                                            <div className="text-gray-600" data-oid="20rr5x9">
                                                {' '}
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    data-oid="wwd3y-e"
                                                >
                                                    {' '}
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        data-oid="xqfdqbr"
                                                    />{' '}
                                                </svg>{' '}
                                                <p className="mt-2 text-sm" data-oid="rku4q:3">
                                                    {' '}
                                                    <span
                                                        className="font-medium text-[hsl(196,80%,45%)]"
                                                        data-oid="dng6d:i"
                                                    >
                                                        Click to upload
                                                    </span>{' '}
                                                    or drag and drop{' '}
                                                </p>{' '}
                                                <p
                                                    className="text-xs text-gray-500"
                                                    data-oid="cjmxmv9"
                                                >
                                                    PDF, DOC, DOCX up to 10MB
                                                </p>{' '}
                                            </div>{' '}
                                        </label>{' '}
                                        {formData.resume && (
                                            <p
                                                className="mt-2 text-sm text-green-600"
                                                data-oid="63u4t9o"
                                            >
                                                {' '}
                                                ✓ {formData.resume.name}{' '}
                                            </p>
                                        )}{' '}
                                    </div>{' '}
                                    {errors.resume && (
                                        <p className="text-red-500 text-sm mt-1" data-oid="ybtzm0_">
                                            {errors.resume}
                                        </p>
                                    )}{' '}
                                </div>{' '}
                                <div data-oid="6g5kk5z">
                                    {' '}
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="apfx1mg"
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
                                        data-oid="64x1k87"
                                    />{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {currentStep === 4 && (
                        <div className="space-y-6" data-oid="r8qb7jl">
                            {' '}
                            <h2
                                className="text-xl font-semibold text-gray-800 mb-4"
                                data-oid="rtrk.tc"
                            >
                                Review Your Application
                            </h2>{' '}
                            <div className="bg-gray-50 rounded-lg p-6 space-y-4" data-oid="0pmle6e">
                                {' '}
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    data-oid=".1bpsav"
                                >
                                    {' '}
                                    <div data-oid="7mvile7">
                                        {' '}
                                        <h3
                                            className="font-medium text-gray-800"
                                            data-oid="cr9x6tt"
                                        >
                                            Personal Information
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="ogsucjx">
                                            {formData.fullName}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid=":2-05ez">
                                            {formData.email}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="vtih8oe">
                                            {formData.phone}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid=":9r7qxr">
                                            {formData.location}
                                        </p>{' '}
                                    </div>{' '}
                                    <div data-oid="fqz2_fi">
                                        {' '}
                                        <h3
                                            className="font-medium text-gray-800"
                                            data-oid="-r3oy:0"
                                        >
                                            Professional Information
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="38:x.-3">
                                            Experience: {formData.experience}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="bwlsb03">
                                            Expected Salary: {formData.expectedSalary}
                                        </p>{' '}
                                        <p className="text-sm text-gray-600" data-oid="35cvs6p">
                                            Notice Period: {formData.noticePeriod}
                                        </p>{' '}
                                    </div>{' '}
                                </div>{' '}
                                {formData.resume && (
                                    <div data-oid="odxd:29">
                                        {' '}
                                        <h3
                                            className="font-medium text-gray-800"
                                            data-oid="76kq9h-"
                                        >
                                            Documents
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="27fz3bt">
                                            Resume: {formData.resume.name}
                                        </p>{' '}
                                    </div>
                                )}{' '}
                            </div>{' '}
                            <div
                                className="bg-blue-50 border border-blue-200 rounded-lg p-4"
                                data-oid="hnljc3p"
                            >
                                {' '}
                                <div className="flex" data-oid=":ats:ol">
                                    {' '}
                                    <div className="flex-shrink-0" data-oid="l_j4i_i">
                                        {' '}
                                        <svg
                                            className="h-5 w-5 text-blue-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="g5a:07z"
                                        >
                                            {' '}
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                clipRule="evenodd"
                                                data-oid="c:f7elw"
                                            />{' '}
                                        </svg>{' '}
                                    </div>{' '}
                                    <div className="ml-3" data-oid="gwgienx">
                                        {' '}
                                        <h3
                                            className="text-sm font-medium text-blue-800"
                                            data-oid="ksj:hzi"
                                        >
                                            {' '}
                                            Application Submission{' '}
                                        </h3>{' '}
                                        <div
                                            className="mt-2 text-sm text-blue-700"
                                            data-oid="46l.2yn"
                                        >
                                            {' '}
                                            <p data-oid="qctdd2v">
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
                <div className="border-t border-gray-200 p-6 bg-gray-50" data-oid="xpaur:r">
                    {' '}
                    <div className="flex justify-between" data-oid="v.72-bk">
                        {' '}
                        <button
                            onClick={currentStep === 1 ? onClose : handlePrevious}
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                            data-oid="m-5y00o"
                        >
                            {' '}
                            {currentStep === 1 ? 'Cancel' : 'Previous'}{' '}
                        </button>{' '}
                        {currentStep < 4 ? (
                            <button
                                onClick={handleNext}
                                className="px-8 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                                data-oid="n9:zfrc"
                            >
                                {' '}
                                Next Step{' '}
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300"
                                data-oid="5:2-8oc"
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
