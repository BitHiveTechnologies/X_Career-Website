"use client";
import { useState } from "react";
import { Job } from "@/app/jobs/page";
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
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    currentRole: "",
    currentCompany: "",
    expectedSalary: "",
    noticePeriod: "",
    resume: null as File | null,
    coverLetter: "",
    portfolioUrl: "",
    linkedinUrl: "",
    githubUrl: "",
    whyInterested: "",
    availability: "",
    relocate: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  if (!isOpen) return null;
  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };
  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};
    if (step === 1) {
      if (!formData.fullName.trim())
        newErrors.fullName = "Full name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      if (!formData.location.trim())
        newErrors.location = "Location is required";
    }
    if (step === 2) {
      if (!formData.experience)
        newErrors.experience = "Experience level is required";
      if (!formData.expectedSalary)
        newErrors.expectedSalary = "Expected salary is required";
      if (!formData.noticePeriod)
        newErrors.noticePeriod = "Notice period is required";
    }
    if (step === 3) {
      if (!formData.resume) newErrors.resume = "Resume is required";
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
    { number: 1, title: "Personal Info", description: "Basic information" },
    { number: 2, title: "Professional", description: "Work experience" },
    { number: 3, title: "Documents", description: "Resume & cover letter" },
    { number: 4, title: "Review", description: "Review & submit" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      data-oid="p1iq3bb"
    >
      {" "}
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
        data-oid="gzc4lgq"
      >
        {" "}
        {/* Header */}{" "}
        <div
          className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white p-6"
          data-oid="bt77k1c"
        >
          {" "}
          <div className="flex items-center justify-between" data-oid="qmq-48s">
            {" "}
            <div data-oid="0sldfzy">
              {" "}
              <h1 className="text-2xl font-bold" data-oid="942.vk3">
                Apply for {job.title}
              </h1>{" "}
              <p className="text-blue-100" data-oid="oxgovt0">
                {job.company} • {job.location}
              </p>{" "}
            </div>{" "}
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              data-oid="4woqdcy"
            >
              {" "}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="7uhlp5c"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                  data-oid="h_bgkw."
                />{" "}
              </svg>{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        {/* Progress Steps */}{" "}
        <div className="px-6 py-4 border-b border-gray-200" data-oid="w5w774-">
          {" "}
          <div className="flex items-center justify-between" data-oid="4vpr9in">
            {" "}
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex items-center"
                data-oid="m:6sta8"
              >
                {" "}
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${currentStep >= step.number ? "bg-[hsl(196,80%,45%)] border-[hsl(196,80%,45%)] text-white" : "border-gray-300 text-gray-500"}`}
                  data-oid="6wr37t7"
                >
                  {" "}
                  {currentStep > step.number ? (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="mmoc-e9"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        data-oid="_mk77z1"
                      />{" "}
                    </svg>
                  ) : (
                    step.number
                  )}{" "}
                </div>{" "}
                <div className="ml-3 hidden sm:block" data-oid="g5ci:ew">
                  {" "}
                  <div
                    className={`text-sm font-medium ${currentStep >= step.number ? "text-[hsl(196,80%,45%)]" : "text-gray-500"}`}
                    data-oid="dvsktcz"
                  >
                    {" "}
                    {step.title}{" "}
                  </div>{" "}
                  <div className="text-xs text-gray-500" data-oid="q7exrwq">
                    {step.description}
                  </div>{" "}
                </div>{" "}
                {index < steps.length - 1 && (
                  <div
                    className={`hidden sm:block w-16 h-0.5 ml-4 ${currentStep > step.number ? "bg-[hsl(196,80%,45%)]" : "bg-gray-300"}`}
                    data-oid="oxoxltl"
                  />
                )}{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        {/* Form Content */}{" "}
        <div
          className="p-6 h-[calc(90vh-300px)] overflow-y-auto"
          data-oid="g_7p__w"
        >
          {" "}
          {currentStep === 1 && (
            <div className="space-y-6" data-oid="d17dbt3">
              {" "}
              <h2
                className="text-xl font-semibold text-gray-800 mb-4"
                data-oid="do18r90"
              >
                Personal Information
              </h2>{" "}
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-oid="pc.8p51"
              >
                {" "}
                <div data-oid="c198gkx">
                  {" "}
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    data-oid="4g5kt1b"
                  >
                    {" "}
                    Full Name *{" "}
                  </label>{" "}
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Enter your full name"
                    data-oid="mz8v:ta"
                  />{" "}
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1" data-oid="djqtp02">
                      {errors.fullName}
                    </p>
                  )}{" "}
                </div>{" "}
                <div data-oid="nq24fga">
                  {" "}
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    data-oid="bs40-us"
                  >
                    {" "}
                    Email Address *{" "}
                  </label>{" "}
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${errors.email ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Enter your email address"
                    data-oid="5642k-q"
                  />{" "}
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1" data-oid=":zwzpsi">
                      {errors.email}
                    </p>
                  )}{" "}
                </div>{" "}
                <div data-oid="gdjudj1">
                  {" "}
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    data-oid="u5ccnl8"
                  >
                    {" "}
                    Phone Number *{" "}
                  </label>{" "}
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Enter your phone number"
                    data-oid="q_dnk_t"
                  />{" "}
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1" data-oid="phhavz4">
                      {errors.phone}
                    </p>
                  )}{" "}
                </div>{" "}
                <div data-oid="..n1vw.">
                  {" "}
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    data-oid="y_91dod"
                  >
                    {" "}
                    Current Location *{" "}
                  </label>{" "}
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${errors.location ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Enter your current location"
                    data-oid="wk.r-n-"
                  />{" "}
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1" data-oid="sy6mk8n">
                      {errors.location}
                    </p>
                  )}{" "}
                </div>{" "}
              </div>{" "}
            </div>
          )}{" "}
          {currentStep === 2 && (
            <div className="space-y-6" data-oid="niaorkt">
              {" "}
              <h2
                className="text-xl font-semibold text-gray-800 mb-4"
                data-oid="31.d7qw"
              >
                Professional Information
              </h2>{" "}
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-oid="-4:5k8p"
              >
                {" "}
                <div data-oid="kx6zp07">
                  {" "}
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    data-oid="ynpj:fq"
                  >
                    {" "}
                    Experience Level *{" "}
                  </label>{" "}
                  <select
                    value={formData.experience}
                    onChange={(e) =>
                      handleInputChange("experience", e.target.value)
                    }
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${errors.experience ? "border-red-500" : "border-gray-300"}`}
                    data-oid=".vo017q"
                  >
                    {" "}
                    <option value="" data-oid="r7sv7lj">
                      Select experience level
                    </option>{" "}
                    <option value="0-1 years" data-oid="8ruw0l6">
                      Fresher (0-1 years)
                    </option>{" "}
                    <option value="1-3 years" data-oid="mlcp0e:">
                      Junior (1-3 years)
                    </option>{" "}
                    <option value="3-5 years" data-oid="g3kryey">
                      Mid-level (3-5 years)
                    </option>{" "}
                    <option value="5+ years" data-oid="7clijua">
                      Senior (5+ years)
                    </option>{" "}
                  </select>{" "}
                  {errors.experience && (
                    <p className="text-red-500 text-sm mt-1" data-oid="dc5fhsr">
                      {errors.experience}
                    </p>
                  )}{" "}
                </div>{" "}
                <div data-oid="v3e7m1x">
                  {" "}
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    data-oid="zw3ld:s"
                  >
                    {" "}
                    Expected Salary (LPA) *{" "}
                  </label>{" "}
                  <select
                    value={formData.expectedSalary}
                    onChange={(e) =>
                      handleInputChange("expectedSalary", e.target.value)
                    }
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${errors.expectedSalary ? "border-red-500" : "border-gray-300"}`}
                    data-oid="789un0f"
                  >
                    {" "}
                    <option value="" data-oid="61m:6cs">
                      Select expected salary
                    </option>{" "}
                    <option value="0-5" data-oid="0e9yz0h">
                      ₹0-5 LPA
                    </option>{" "}
                    <option value="5-10" data-oid="f:7ihqp">
                      ₹5-10 LPA
                    </option>{" "}
                    <option value="10-20" data-oid="4uzai03">
                      ₹10-20 LPA
                    </option>{" "}
                    <option value="20+" data-oid="ru1vh_y">
                      ₹20+ LPA
                    </option>{" "}
                  </select>{" "}
                  {errors.expectedSalary && (
                    <p className="text-red-500 text-sm mt-1" data-oid="sg8olwa">
                      {errors.expectedSalary}
                    </p>
                  )}{" "}
                </div>{" "}
                <div className="md:col-span-2" data-oid="gl900jz">
                  {" "}
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    data-oid="71pfu.e"
                  >
                    {" "}
                    Notice Period *{" "}
                  </label>{" "}
                  <select
                    value={formData.noticePeriod}
                    onChange={(e) =>
                      handleInputChange("noticePeriod", e.target.value)
                    }
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${errors.noticePeriod ? "border-red-500" : "border-gray-300"}`}
                    data-oid="_cmx_8_"
                  >
                    {" "}
                    <option value="" data-oid="ih0w_-v">
                      Select notice period
                    </option>{" "}
                    <option value="Immediate" data-oid="ddfjrlj">
                      Immediate
                    </option>{" "}
                    <option value="15 days" data-oid="sngr.nc">
                      15 days
                    </option>{" "}
                    <option value="1 month" data-oid="w7-_kou">
                      1 month
                    </option>{" "}
                    <option value="2 months" data-oid="yudth.n">
                      2 months
                    </option>{" "}
                    <option value="3 months" data-oid="bn0x1h3">
                      3 months
                    </option>{" "}
                  </select>{" "}
                  {errors.noticePeriod && (
                    <p className="text-red-500 text-sm mt-1" data-oid="g5:yna9">
                      {errors.noticePeriod}
                    </p>
                  )}{" "}
                </div>{" "}
              </div>{" "}
            </div>
          )}{" "}
          {currentStep === 3 && (
            <div className="space-y-6" data-oid=":8a5q5m">
              {" "}
              <h2
                className="text-xl font-semibold text-gray-800 mb-4"
                data-oid="2ql6a3:"
              >
                Documents & Portfolio
              </h2>{" "}
              <div className="space-y-6" data-oid="rybs0gw">
                {" "}
                <div data-oid="lz2e:fs">
                  {" "}
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    data-oid="ujovqav"
                  >
                    {" "}
                    Resume/CV *{" "}
                  </label>{" "}
                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center ${errors.resume ? "border-red-500" : "border-gray-300"}`}
                    data-oid="0gd6id."
                  >
                    {" "}
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        handleInputChange("resume", e.target.files?.[0] || null)
                      }
                      className="hidden"
                      id="resume-upload"
                      data-oid="mmxfefi"
                    />{" "}
                    <label
                      htmlFor="resume-upload"
                      className="cursor-pointer"
                      data-oid="4eo2q0-"
                    >
                      {" "}
                      <div className="text-gray-600" data-oid="11qio5e">
                        {" "}
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          data-oid="crdxn9f"
                        >
                          {" "}
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            data-oid="8t5rdeq"
                          />{" "}
                        </svg>{" "}
                        <p className="mt-2 text-sm" data-oid="eisd176">
                          {" "}
                          <span
                            className="font-medium text-[hsl(196,80%,45%)]"
                            data-oid="it70ypc"
                          >
                            Click to upload
                          </span>{" "}
                          or drag and drop{" "}
                        </p>{" "}
                        <p className="text-xs text-gray-500" data-oid="cl8wb.p">
                          PDF, DOC, DOCX up to 10MB
                        </p>{" "}
                      </div>{" "}
                    </label>{" "}
                    {formData.resume && (
                      <p
                        className="mt-2 text-sm text-green-600"
                        data-oid="auz2oqr"
                      >
                        {" "}
                        ✓ {formData.resume.name}{" "}
                      </p>
                    )}{" "}
                  </div>{" "}
                  {errors.resume && (
                    <p className="text-red-500 text-sm mt-1" data-oid="n.dj__o">
                      {errors.resume}
                    </p>
                  )}{" "}
                </div>{" "}
                <div data-oid="g17klfd">
                  {" "}
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    data-oid="askrk3h"
                  >
                    {" "}
                    Cover Letter{" "}
                  </label>{" "}
                  <textarea
                    value={formData.coverLetter}
                    onChange={(e) =>
                      handleInputChange("coverLetter", e.target.value)
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)]"
                    placeholder="Write a brief cover letter explaining why you're interested in this position..."
                    data-oid="vx:owda"
                  />{" "}
                </div>{" "}
              </div>{" "}
            </div>
          )}{" "}
          {currentStep === 4 && (
            <div className="space-y-6" data-oid="59i5:-2">
              {" "}
              <h2
                className="text-xl font-semibold text-gray-800 mb-4"
                data-oid="nkuihxx"
              >
                Review Your Application
              </h2>{" "}
              <div
                className="bg-gray-50 rounded-lg p-6 space-y-4"
                data-oid="3hma7d-"
              >
                {" "}
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  data-oid="0x8l4b0"
                >
                  {" "}
                  <div data-oid="tt.6lw1">
                    {" "}
                    <h3
                      className="font-medium text-gray-800"
                      data-oid="i9d8u9f"
                    >
                      Personal Information
                    </h3>{" "}
                    <p className="text-sm text-gray-600" data-oid="1fe-:w1">
                      {formData.fullName}
                    </p>{" "}
                    <p className="text-sm text-gray-600" data-oid="e1_-e2j">
                      {formData.email}
                    </p>{" "}
                    <p className="text-sm text-gray-600" data-oid=".dj56je">
                      {formData.phone}
                    </p>{" "}
                    <p className="text-sm text-gray-600" data-oid="bm_r-j2">
                      {formData.location}
                    </p>{" "}
                  </div>{" "}
                  <div data-oid="s3wgurg">
                    {" "}
                    <h3
                      className="font-medium text-gray-800"
                      data-oid="v1tnb_u"
                    >
                      Professional Information
                    </h3>{" "}
                    <p className="text-sm text-gray-600" data-oid="jtxqqw6">
                      Experience: {formData.experience}
                    </p>{" "}
                    <p className="text-sm text-gray-600" data-oid="4v1v0ia">
                      Expected Salary: {formData.expectedSalary}
                    </p>{" "}
                    <p className="text-sm text-gray-600" data-oid="am84xiu">
                      Notice Period: {formData.noticePeriod}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                {formData.resume && (
                  <div data-oid="7nr3:l6">
                    {" "}
                    <h3
                      className="font-medium text-gray-800"
                      data-oid="q36k_nl"
                    >
                      Documents
                    </h3>{" "}
                    <p className="text-sm text-gray-600" data-oid="a:vc0pk">
                      Resume: {formData.resume.name}
                    </p>{" "}
                  </div>
                )}{" "}
              </div>{" "}
              <div
                className="bg-blue-50 border border-blue-200 rounded-lg p-4"
                data-oid="18qz85p"
              >
                {" "}
                <div className="flex" data-oid="k-4yco7">
                  {" "}
                  <div className="flex-shrink-0" data-oid="7w:j3eb">
                    {" "}
                    <svg
                      className="h-5 w-5 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      data-oid="gat5:hf"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                        data-oid="ntih203"
                      />{" "}
                    </svg>{" "}
                  </div>{" "}
                  <div className="ml-3" data-oid="1u.o:1y">
                    {" "}
                    <h3
                      className="text-sm font-medium text-blue-800"
                      data-oid=":hj0d-0"
                    >
                      {" "}
                      Application Submission{" "}
                    </h3>{" "}
                    <div
                      className="mt-2 text-sm text-blue-700"
                      data-oid="n3rmli."
                    >
                      {" "}
                      <p data-oid="tjs0gad">
                        {" "}
                        By submitting this application, you agree to our terms
                        and conditions. You will receive a confirmation email
                        once your application is submitted.{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          )}{" "}
        </div>{" "}
        {/* Footer */}{" "}
        <div
          className="border-t border-gray-200 p-6 bg-gray-50"
          data-oid="dwrnlef"
        >
          {" "}
          <div className="flex justify-between" data-oid="93o6qry">
            {" "}
            <button
              onClick={currentStep === 1 ? onClose : handlePrevious}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              data-oid="8l.:07:"
            >
              {" "}
              {currentStep === 1 ? "Cancel" : "Previous"}{" "}
            </button>{" "}
            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                className="px-8 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                data-oid="45_d.ni"
              >
                {" "}
                Next Step{" "}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300"
                data-oid="0k0ipd8"
              >
                {" "}
                Submit Application{" "}
              </button>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
