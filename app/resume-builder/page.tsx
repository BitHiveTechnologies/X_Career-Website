"use client";

import MainNavbar from "@/components/mainNavbar";
import { useState, useRef } from "react";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import TemplateSelector from "@/components/TemplateSelector";

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  certifications: string[];
  languages: string[];
}

const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    portfolio: "",
    summary: "",
  },
  experience: [],
  education: [],
  projects: [],
  skills: [],
  certifications: [],
  languages: [],
};

export default function ResumeBuilderPage() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [activeSection, setActiveSection] = useState("personal");
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDataChange = (section: keyof ResumeData, data: any) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const handleDownloadPDF = async () => {
    if (typeof window !== "undefined") {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = resumeRef.current;

      if (element) {
        const opt = {
          margin: 0.5,
          filename: `${resumeData.personalInfo.fullName || "resume"}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };

        html2pdf().set(opt).from(element).save();
      }
    }
  };

  const sections = [
    { id: "personal", label: "Personal Info", icon: "👤" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "additional", label: "Additional", icon: "📋" },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      data-oid="1cmjb2l"
    >
      <MainNavbar data-oid="8ifzx91" />

      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white py-16"
        data-oid="vtkalms"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-oid="lo390gj"
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            data-oid="w:p7:tk"
          >
            Professional Resume Builder
          </h1>
          <p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            data-oid="srpcnxq"
          >
            Create a stunning resume in minutes with our AI-powered builder.
            Choose from professional templates and land your dream job.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4 text-sm"
            data-oid="_wcaukn"
          >
            <div
              className="flex items-center bg-white/20 px-4 py-2 rounded-full"
              data-oid="p7tv0jk"
            >
              <span className="mr-2" data-oid="t-6jvr_">
                ✨
              </span>
              ATS-Friendly Templates
            </div>
            <div
              className="flex items-center bg-white/20 px-4 py-2 rounded-full"
              data-oid="2e7dua4"
            >
              <span className="mr-2" data-oid="4k0soel">
                📱
              </span>
              Mobile Responsive
            </div>
            <div
              className="flex items-center bg-white/20 px-4 py-2 rounded-full"
              data-oid="n8mp:jg"
            >
              <span className="mr-2" data-oid="0wxmf.q">
                ⚡
              </span>
              Instant PDF Download
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        data-oid="yypwmjp"
      >
        {/* Template Selection */}
        <div className="mb-8" data-oid="i1bhab6">
          <TemplateSelector
            selectedTemplate={selectedTemplate}
            onTemplateChange={setSelectedTemplate}
            data-oid="hfdniw1"
          />
        </div>

        {/* Progress Bar */}
        <div className="mb-8" data-oid="b30df.r">
          <div
            className="bg-white rounded-lg shadow-sm border p-4"
            data-oid="168:855"
          >
            <div
              className="flex items-center justify-between mb-2"
              data-oid="bjftgg1"
            >
              <h3
                className="text-lg font-semibold text-gray-800"
                data-oid="__l-y21"
              >
                Resume Progress
              </h3>
              <span className="text-sm text-gray-600" data-oid="yz4o-my">
                {Math.round(
                  (Object.values(resumeData).filter((section) =>
                    Array.isArray(section)
                      ? section.length > 0
                      : typeof section === "object"
                        ? Object.values(section).some((val) => val !== "")
                        : false,
                  ).length /
                    6) *
                    100,
                )}
                % Complete
              </span>
            </div>
            <div
              className="w-full bg-gray-200 rounded-full h-2"
              data-oid="ks:7bf0"
            >
              <div
                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.round(
                    (Object.values(resumeData).filter((section) =>
                      Array.isArray(section)
                        ? section.length > 0
                        : typeof section === "object"
                          ? Object.values(section).some((val) => val !== "")
                          : false,
                    ).length /
                      6) *
                      100,
                  )}%`,
                }}
                data-oid="bdlodgc"
              ></div>
            </div>
          </div>
        </div>

        {/* Main Builder Interface */}
        <div className="grid lg:grid-cols-2 gap-8" data-oid="sce-_t2">
          {/* Form Section */}
          <div className="space-y-6" data-oid="2jd15jx">
            {/* Section Navigation */}
            <div
              className="bg-white rounded-lg shadow-sm border p-4"
              data-oid="7m61ad-"
            >
              <div
                className="grid grid-cols-2 md:grid-cols-3 gap-2"
                data-oid="jxjuitd"
              >
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-[hsl(196,80%,45%)] text-white shadow-md"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                    data-oid="h_hhx9p"
                  >
                    <div
                      className="flex flex-col items-center"
                      data-oid="pc93q30"
                    >
                      <span className="text-lg mb-1" data-oid="tqf4og1">
                        {section.icon}
                      </span>
                      <span data-oid="qt6luyu">{section.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div
              className="bg-white rounded-lg shadow-sm border"
              data-oid="0_bqpa1"
            >
              <ResumeForm
                resumeData={resumeData}
                activeSection={activeSection}
                onDataChange={handleDataChange}
                data-oid="-f0o4xe"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4" data-oid="dqygmwm">
              <button
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="flex-1 md:flex-none px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                data-oid="dp-safj"
              >
                {isPreviewMode ? "Edit Resume" : "Preview Resume"}
              </button>
              <button
                onClick={handleDownloadPDF}
                className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105"
                data-oid="-c--ubr"
              >
                Download PDF
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-24 lg:h-fit" data-oid="cwics50">
            <div
              className="bg-white rounded-lg shadow-lg border p-6"
              data-oid="7e3qyqo"
            >
              <div
                className="flex items-center justify-between mb-4"
                data-oid="1n67:gk"
              >
                <h3
                  className="text-lg font-semibold text-gray-800"
                  data-oid="o-vc3v7"
                >
                  Live Preview
                </h3>
                <div className="flex items-center space-x-2" data-oid="73yyf6b">
                  <button
                    className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100"
                    data-oid="u2l4l79"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="_isg3be"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        data-oid="v6vsrlg"
                      />
                    </svg>
                  </button>
                  <button
                    className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100"
                    data-oid="p5f-ag2"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="0d5r6j:"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        data-oid="dn5xy68"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="border rounded-lg overflow-hidden bg-white"
                style={{
                  transform: "scale(0.8)",
                  transformOrigin: "top left",
                  width: "125%",
                  height: "125%",
                }}
                data-oid="hcxcv8r"
              >
                <div ref={resumeRef} data-oid="oh.mxr8">
                  <ResumePreview
                    resumeData={resumeData}
                    template={selectedTemplate}
                    data-oid="fm0oj46"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div
          className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8"
          data-oid="j3mwpu6"
        >
          <h3
            className="text-2xl font-bold text-gray-800 mb-6 text-center"
            data-oid="mgzwc-h"
          >
            Resume Writing Tips
          </h3>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-oid="hrx3iif"
          >
            <div
              className="bg-white p-6 rounded-lg shadow-sm"
              data-oid="axrutw-"
            >
              <div className="text-2xl mb-3" data-oid="3t734im">
                🎯
              </div>
              <h4
                className="font-semibold text-gray-800 mb-2"
                data-oid="-cxud6r"
              >
                Tailor Your Resume
              </h4>
              <p className="text-gray-600 text-sm" data-oid="x8np094">
                Customize your resume for each job application by highlighting
                relevant skills and experiences.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-sm"
              data-oid="tbfrqc5"
            >
              <div className="text-2xl mb-3" data-oid="18ngly3">
                📊
              </div>
              <h4
                className="font-semibold text-gray-800 mb-2"
                data-oid="-_:93aj"
              >
                Use Numbers
              </h4>
              <p className="text-gray-600 text-sm" data-oid="7-tohmy">
                Quantify your achievements with specific numbers, percentages,
                and metrics whenever possible.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-sm"
              data-oid="edo6rzb"
            >
              <div className="text-2xl mb-3" data-oid="gse.6j9">
                🔍
              </div>
              <h4
                className="font-semibold text-gray-800 mb-2"
                data-oid="krj41on"
              >
                Keywords Matter
              </h4>
              <p className="text-gray-600 text-sm" data-oid="833-lwf">
                Include relevant keywords from the job description to pass
                through ATS systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
