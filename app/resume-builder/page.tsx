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
      data-oid="revjqpd"
    >
      <MainNavbar data-oid="bfk2072" />

      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white py-16"
        data-oid="ixe-ddz"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-oid="7c_a2-5"
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            data-oid="lqcox2t"
          >
            Professional Resume Builder
          </h1>
          <p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            data-oid="ahr0gbz"
          >
            Create a stunning resume in minutes with our AI-powered builder.
            Choose from professional templates and land your dream job.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4 text-sm"
            data-oid="4vkojia"
          >
            <div
              className="flex items-center bg-white/20 px-4 py-2 rounded-full"
              data-oid="t8s6jv9"
            >
              <span className="mr-2" data-oid=".bzw7yj">
                ✨
              </span>
              ATS-Friendly Templates
            </div>
            <div
              className="flex items-center bg-white/20 px-4 py-2 rounded-full"
              data-oid="58b1rnk"
            >
              <span className="mr-2" data-oid="g-u_976">
                📱
              </span>
              Mobile Responsive
            </div>
            <div
              className="flex items-center bg-white/20 px-4 py-2 rounded-full"
              data-oid="1doj55o"
            >
              <span className="mr-2" data-oid=".r0nxth">
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
        data-oid="9awtm9_"
      >
        {/* Template Selection */}
        <div className="mb-8" data-oid="rwg9n_l">
          <TemplateSelector
            selectedTemplate={selectedTemplate}
            onTemplateChange={setSelectedTemplate}
            data-oid="20:ggak"
          />
        </div>

        {/* Progress Bar */}
        <div className="mb-8" data-oid="28a97h2">
          <div
            className="bg-white rounded-lg shadow-sm border p-4"
            data-oid="f7ljs0r"
          >
            <div
              className="flex items-center justify-between mb-2"
              data-oid="zeb2a4y"
            >
              <h3
                className="text-lg font-semibold text-gray-800"
                data-oid="1ftfohg"
              >
                Resume Progress
              </h3>
              <span className="text-sm text-gray-600" data-oid="dkjwzs5">
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
              data-oid="ui9kpro"
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
                data-oid="p80ac0w"
              ></div>
            </div>
          </div>
        </div>

        {/* Main Builder Interface */}
        <div className="grid lg:grid-cols-2 gap-8" data-oid="vniotyt">
          {/* Form Section */}
          <div className="space-y-6" data-oid=".1uhu5l">
            {/* Section Navigation */}
            <div
              className="bg-white rounded-lg shadow-sm border p-4"
              data-oid="fdflrgu"
            >
              <div
                className="grid grid-cols-2 md:grid-cols-3 gap-2"
                data-oid="pvdrerj"
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
                    data-oid="v3w2-qr"
                  >
                    <div
                      className="flex flex-col items-center"
                      data-oid="c3man79"
                    >
                      <span className="text-lg mb-1" data-oid="vnfe_c6">
                        {section.icon}
                      </span>
                      <span data-oid="ln9yn1c">{section.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div
              className="bg-white rounded-lg shadow-sm border"
              data-oid="08.p5np"
            >
              <ResumeForm
                resumeData={resumeData}
                activeSection={activeSection}
                onDataChange={handleDataChange}
                data-oid="iv1-faf"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4" data-oid="gu1whnb">
              <button
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="flex-1 md:flex-none px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                data-oid="5a5jt0l"
              >
                {isPreviewMode ? "Edit Resume" : "Preview Resume"}
              </button>
              <button
                onClick={handleDownloadPDF}
                className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105"
                data-oid="h8y8a5n"
              >
                Download PDF
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-24 lg:h-fit" data-oid="1iq8cd1">
            <div
              className="bg-white rounded-lg shadow-lg border p-6"
              data-oid="t:hbmrk"
            >
              <div
                className="flex items-center justify-between mb-4"
                data-oid="n4if:3y"
              >
                <h3
                  className="text-lg font-semibold text-gray-800"
                  data-oid="minhqj4"
                >
                  Live Preview
                </h3>
                <div className="flex items-center space-x-2" data-oid="iytpfea">
                  <button
                    className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100"
                    data-oid="al52jug"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid=":w7.52."
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        data-oid="y81:aq3"
                      />
                    </svg>
                  </button>
                  <button
                    className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100"
                    data-oid="-h24sir"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="79pnr14"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        data-oid="bhcg69b"
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
                data-oid="qfzcim9"
              >
                <div ref={resumeRef} data-oid="yi3cn2n">
                  <ResumePreview
                    resumeData={resumeData}
                    template={selectedTemplate}
                    data-oid="2v6l2a6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div
          className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8"
          data-oid="tdlm29s"
        >
          <h3
            className="text-2xl font-bold text-gray-800 mb-6 text-center"
            data-oid="4wr2o6h"
          >
            Resume Writing Tips
          </h3>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-oid="grt63i."
          >
            <div
              className="bg-white p-6 rounded-lg shadow-sm"
              data-oid="awi3ft8"
            >
              <div className="text-2xl mb-3" data-oid="zz8z8bt">
                🎯
              </div>
              <h4
                className="font-semibold text-gray-800 mb-2"
                data-oid="-faf5w1"
              >
                Tailor Your Resume
              </h4>
              <p className="text-gray-600 text-sm" data-oid="9n8a.nb">
                Customize your resume for each job application by highlighting
                relevant skills and experiences.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-sm"
              data-oid="d56msgz"
            >
              <div className="text-2xl mb-3" data-oid="-5:9nls">
                📊
              </div>
              <h4
                className="font-semibold text-gray-800 mb-2"
                data-oid="jzm3:tl"
              >
                Use Numbers
              </h4>
              <p className="text-gray-600 text-sm" data-oid="u3.5-_s">
                Quantify your achievements with specific numbers, percentages,
                and metrics whenever possible.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-sm"
              data-oid="311lerk"
            >
              <div className="text-2xl mb-3" data-oid="0g19j0l">
                🔍
              </div>
              <h4
                className="font-semibold text-gray-800 mb-2"
                data-oid="wkt-wud"
              >
                Keywords Matter
              </h4>
              <p className="text-gray-600 text-sm" data-oid="ovtdxnt">
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
