"use client";

import { useState } from "react";
import {
  ResumeData,
  PersonalInfo,
  Experience,
  Education,
  Project,
  Skill,
} from "@/app/resume-builder/page";

interface ResumeFormProps {
  resumeData: ResumeData;
  activeSection: string;
  onDataChange: (section: keyof ResumeData, data: any) => void;
}

export default function ResumeForm({
  resumeData,
  activeSection,
  onDataChange,
}: ResumeFormProps) {
  const [newSkillCategory, setNewSkillCategory] = useState("");

  const handlePersonalInfoChange = (
    field: keyof PersonalInfo,
    value: string,
  ) => {
    onDataChange("personalInfo", {
      ...resumeData.personalInfo,
      [field]: value,
    });
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: [""],
    };
    onDataChange("experience", [...resumeData.experience, newExperience]);
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: any,
  ) => {
    const updated = resumeData.experience.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp,
    );
    onDataChange("experience", updated);
  };

  const removeExperience = (id: string) => {
    onDataChange(
      "experience",
      resumeData.experience.filter((exp) => exp.id !== id),
    );
  };

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      field: "",
      location: "",
      startDate: "",
      endDate: "",
      gpa: "",
      achievements: [""],
    };
    onDataChange("education", [...resumeData.education, newEducation]);
  };

  const updateEducation = (id: string, field: keyof Education, value: any) => {
    const updated = resumeData.education.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu,
    );
    onDataChange("education", updated);
  };

  const removeEducation = (id: string) => {
    onDataChange(
      "education",
      resumeData.education.filter((edu) => edu.id !== id),
    );
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: "",
      description: "",
      technologies: [],
      link: "",
      github: "",
      highlights: [""],
    };
    onDataChange("projects", [...resumeData.projects, newProject]);
  };

  const updateProject = (id: string, field: keyof Project, value: any) => {
    const updated = resumeData.projects.map((proj) =>
      proj.id === id ? { ...proj, [field]: value } : proj,
    );
    onDataChange("projects", updated);
  };

  const removeProject = (id: string) => {
    onDataChange(
      "projects",
      resumeData.projects.filter((proj) => proj.id !== id),
    );
  };

  const addSkillCategory = () => {
    if (newSkillCategory.trim()) {
      const newSkill: Skill = {
        category: newSkillCategory.trim(),
        items: [],
      };
      onDataChange("skills", [...resumeData.skills, newSkill]);
      setNewSkillCategory("");
    }
  };

  const updateSkillCategory = (
    index: number,
    field: keyof Skill,
    value: any,
  ) => {
    const updated = resumeData.skills.map((skill, i) =>
      i === index ? { ...skill, [field]: value } : skill,
    );
    onDataChange("skills", updated);
  };

  const removeSkillCategory = (index: number) => {
    onDataChange(
      "skills",
      resumeData.skills.filter((_, i) => i !== index),
    );
  };

  const renderPersonalInfo = () => (
    <div className="p-6 space-y-6" data-oid="kk_by0j">
      <h3
        className="text-xl font-semibold text-gray-800 mb-4"
        data-oid="5vq-gdw"
      >
        Personal Information
      </h3>

      <div className="grid md:grid-cols-2 gap-4" data-oid="unj6y:b">
        <div data-oid="63hthnz">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            data-oid="y9:sbsc"
          >
            Full Name *
          </label>
          <input
            type="text"
            value={resumeData.personalInfo.fullName}
            onChange={(e) =>
              handlePersonalInfoChange("fullName", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
            placeholder="John Doe"
            data-oid="1.yeq6o"
          />
        </div>

        <div data-oid="sxbm31v">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            data-oid="6jx9ei7"
          >
            Email *
          </label>
          <input
            type="email"
            value={resumeData.personalInfo.email}
            onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
            placeholder="john@example.com"
            data-oid="gl3-ft8"
          />
        </div>

        <div data-oid="tz7j2yc">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            data-oid="3uup-ux"
          >
            Phone *
          </label>
          <input
            type="tel"
            value={resumeData.personalInfo.phone}
            onChange={(e) => handlePersonalInfoChange("phone", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
            placeholder="+1 (555) 123-4567"
            data-oid="j_5zta9"
          />
        </div>

        <div data-oid="rbd.98u">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            data-oid="5wzla2d"
          >
            Location
          </label>
          <input
            type="text"
            value={resumeData.personalInfo.location}
            onChange={(e) =>
              handlePersonalInfoChange("location", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
            placeholder="City, State"
            data-oid="n:_w4jb"
          />
        </div>

        <div data-oid="b6mmy1:">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            data-oid="bhoh-et"
          >
            LinkedIn
          </label>
          <input
            type="url"
            value={resumeData.personalInfo.linkedin}
            onChange={(e) =>
              handlePersonalInfoChange("linkedin", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
            placeholder="https://linkedin.com/in/johndoe"
            data-oid="-njcghi"
          />
        </div>

        <div data-oid="tx8zofg">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            data-oid="d4vbj.z"
          >
            GitHub
          </label>
          <input
            type="url"
            value={resumeData.personalInfo.github}
            onChange={(e) => handlePersonalInfoChange("github", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
            placeholder="https://github.com/johndoe"
            data-oid="gtmyg9j"
          />
        </div>
      </div>

      <div data-oid="ytqb54r">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          data-oid="uadc4r5"
        >
          Portfolio Website
        </label>
        <input
          type="url"
          value={resumeData.personalInfo.portfolio}
          onChange={(e) =>
            handlePersonalInfoChange("portfolio", e.target.value)
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
          placeholder="https://johndoe.com"
          data-oid="t3-zufx"
        />
      </div>

      <div data-oid="ofln_gu">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          data-oid="y1lrve9"
        >
          Professional Summary
        </label>
        <textarea
          value={resumeData.personalInfo.summary}
          onChange={(e) => handlePersonalInfoChange("summary", e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
          placeholder="Write a brief summary of your professional background and career objectives..."
          data-oid="74x3lr3"
        />
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="p-6 space-y-6" data-oid="r5z2ae2">
      <div className="flex items-center justify-between" data-oid="twpfy:r">
        <h3 className="text-xl font-semibold text-gray-800" data-oid="s__lxon">
          Work Experience
        </h3>
        <button
          onClick={addExperience}
          className="px-4 py-2 bg-[hsl(196,80%,45%)] text-white rounded-md hover:bg-[hsl(196,80%,40%)] transition-colors duration-200"
          data-oid="u1ckb--"
        >
          Add Experience
        </button>
      </div>

      {resumeData.experience.map((exp, index) => (
        <div
          key={exp.id}
          className="border border-gray-200 rounded-lg p-4 space-y-4"
          data-oid="c_ukpup"
        >
          <div className="flex items-center justify-between" data-oid="9hf123k">
            <h4 className="font-medium text-gray-800" data-oid="2y0w4km">
              Experience {index + 1}
            </h4>
            <button
              onClick={() => removeExperience(exp.id)}
              className="text-red-500 hover:text-red-700"
              data-oid="316mj0h"
            >
              Remove
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4" data-oid="rm21d--">
            <div data-oid="9iye450">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="-r2u9fb"
              >
                Company *
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) =>
                  updateExperience(exp.id, "company", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                placeholder="Company Name"
                data-oid="2qouozy"
              />
            </div>

            <div data-oid="2jdfamv">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="4vswd3_"
              >
                Position *
              </label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) =>
                  updateExperience(exp.id, "position", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                placeholder="Job Title"
                data-oid="l6l3d69"
              />
            </div>

            <div data-oid="k.ht7v8">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="__s8:wp"
              >
                Location
              </label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) =>
                  updateExperience(exp.id, "location", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                placeholder="City, State"
                data-oid="yn62upv"
              />
            </div>

            <div className="flex items-center space-x-2" data-oid="r2dtiox">
              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) =>
                  updateExperience(exp.id, "current", e.target.checked)
                }
                className="rounded text-[hsl(196,80%,45%)] focus:ring-[hsl(196,80%,45%)]"
                data-oid="16n89br"
              />

              <label className="text-sm text-gray-700" data-oid="_tkcbo-">
                Currently working here
              </label>
            </div>

            <div data-oid="dch.cao">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="bthyrqx"
              >
                Start Date
              </label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) =>
                  updateExperience(exp.id, "startDate", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                data-oid="_l6ja2c"
              />
            </div>

            {!exp.current && (
              <div data-oid="s.kwp04">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  data-oid="w1a8sou"
                >
                  End Date
                </label>
                <input
                  type="month"
                  value={exp.endDate}
                  onChange={(e) =>
                    updateExperience(exp.id, "endDate", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                  data-oid="39y-0vc"
                />
              </div>
            )}
          </div>

          <div data-oid="5i8sd_g">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              data-oid="b6ov80z"
            >
              Job Description
            </label>
            <textarea
              value={exp.description.join("\n")}
              onChange={(e) =>
                updateExperience(
                  exp.id,
                  "description",
                  e.target.value.split("\n"),
                )
              }
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
              placeholder="• Describe your responsibilities and achievements&#10;• Use bullet points for better readability&#10;• Include quantifiable results when possible"
              data-oid="3j_e6gq"
            />
          </div>
        </div>
      ))}

      {resumeData.experience.length === 0 && (
        <div className="text-center py-8 text-gray-500" data-oid="7l-.kcn">
          <p data-oid="pnw64s4">No work experience added yet.</p>
          <p className="text-sm" data-oid="a_x9qyo">
            Click "Add Experience" to get started.
          </p>
        </div>
      )}
    </div>
  );

  const renderEducation = () => (
    <div className="p-6 space-y-6" data-oid="gbg0l:n">
      <div className="flex items-center justify-between" data-oid="9bhf8.d">
        <h3 className="text-xl font-semibold text-gray-800" data-oid=".ktx.21">
          Education
        </h3>
        <button
          onClick={addEducation}
          className="px-4 py-2 bg-[hsl(196,80%,45%)] text-white rounded-md hover:bg-[hsl(196,80%,40%)] transition-colors duration-200"
          data-oid="3aswv:w"
        >
          Add Education
        </button>
      </div>

      {resumeData.education.map((edu, index) => (
        <div
          key={edu.id}
          className="border border-gray-200 rounded-lg p-4 space-y-4"
          data-oid="31_cunf"
        >
          <div className="flex items-center justify-between" data-oid="9nk2q2q">
            <h4 className="font-medium text-gray-800" data-oid="q85_yrd">
              Education {index + 1}
            </h4>
            <button
              onClick={() => removeEducation(edu.id)}
              className="text-red-500 hover:text-red-700"
              data-oid="rr50nb6"
            >
              Remove
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4" data-oid="b7-b3hz">
            <div data-oid="94866::">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="o0vlq5m"
              >
                Institution *
              </label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) =>
                  updateEducation(edu.id, "institution", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                placeholder="University Name"
                data-oid="2y2cnyw"
              />
            </div>

            <div data-oid="7w90x86">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="11-1xdt"
              >
                Degree *
              </label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) =>
                  updateEducation(edu.id, "degree", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                placeholder="Bachelor's, Master's, etc."
                data-oid="kww4qgn"
              />
            </div>

            <div data-oid="8-.04lh">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="p-ir-r:"
              >
                Field of Study
              </label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) =>
                  updateEducation(edu.id, "field", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                placeholder="Computer Science, Engineering, etc."
                data-oid=":7ziqq:"
              />
            </div>

            <div data-oid="kge_zcd">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="uk63r30"
              >
                GPA (Optional)
              </label>
              <input
                type="text"
                value={edu.gpa || ""}
                onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                placeholder="3.8/4.0"
                data-oid="dkipm9e"
              />
            </div>

            <div data-oid="dtnoe5h">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="opsq.b2"
              >
                Start Date
              </label>
              <input
                type="month"
                value={edu.startDate}
                onChange={(e) =>
                  updateEducation(edu.id, "startDate", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                data-oid="0nz0gbl"
              />
            </div>

            <div data-oid="bflhov:">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="uclow5i"
              >
                End Date
              </label>
              <input
                type="month"
                value={edu.endDate}
                onChange={(e) =>
                  updateEducation(edu.id, "endDate", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                data-oid="gcyzr:0"
              />
            </div>
          </div>

          <div data-oid="l_jw9aj">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              data-oid="ae7m2hh"
            >
              Achievements & Activities
            </label>
            <textarea
              value={edu.achievements.join("\n")}
              onChange={(e) =>
                updateEducation(
                  edu.id,
                  "achievements",
                  e.target.value.split("\n"),
                )
              }
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
              placeholder="• Dean's List&#10;• Relevant coursework&#10;• Academic achievements"
              data-oid="mim:sxd"
            />
          </div>
        </div>
      ))}

      {resumeData.education.length === 0 && (
        <div className="text-center py-8 text-gray-500" data-oid="iyyiadn">
          <p data-oid="rfdnc04">No education added yet.</p>
          <p className="text-sm" data-oid="v61x3o4">
            Click "Add Education" to get started.
          </p>
        </div>
      )}
    </div>
  );

  const renderProjects = () => (
    <div className="p-6 space-y-6" data-oid="p5_o81a">
      <div className="flex items-center justify-between" data-oid="q.w1rum">
        <h3 className="text-xl font-semibold text-gray-800" data-oid="lf0.loj">
          Projects
        </h3>
        <button
          onClick={addProject}
          className="px-4 py-2 bg-[hsl(196,80%,45%)] text-white rounded-md hover:bg-[hsl(196,80%,40%)] transition-colors duration-200"
          data-oid="iyjtpgw"
        >
          Add Project
        </button>
      </div>

      {resumeData.projects.map((project, index) => (
        <div
          key={project.id}
          className="border border-gray-200 rounded-lg p-4 space-y-4"
          data-oid="3ifriog"
        >
          <div className="flex items-center justify-between" data-oid="i.t0.ul">
            <h4 className="font-medium text-gray-800" data-oid="uowf8lx">
              Project {index + 1}
            </h4>
            <button
              onClick={() => removeProject(project.id)}
              className="text-red-500 hover:text-red-700"
              data-oid="z-uu_54"
            >
              Remove
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4" data-oid="oul5dr_">
            <div data-oid="r3:j.1f">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="av8ksti"
              >
                Project Name *
              </label>
              <input
                type="text"
                value={project.name}
                onChange={(e) =>
                  updateProject(project.id, "name", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                placeholder="Project Name"
                data-oid="3u:25.n"
              />
            </div>

            <div data-oid="wadsxxh">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="equybtf"
              >
                Technologies Used
              </label>
              <input
                type="text"
                value={project.technologies.join(", ")}
                onChange={(e) =>
                  updateProject(
                    project.id,
                    "technologies",
                    e.target.value.split(", ").filter((t) => t.trim()),
                  )
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                placeholder="React, Node.js, MongoDB"
                data-oid="sq:v86r"
              />
            </div>

            <div data-oid="ra8v6ha">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="_9rewmn"
              >
                Live Demo Link
              </label>
              <input
                type="url"
                value={project.link || ""}
                onChange={(e) =>
                  updateProject(project.id, "link", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                placeholder="https://project-demo.com"
                data-oid="u-zu9kz"
              />
            </div>

            <div data-oid="e3x5xr0">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="3-ir4ni"
              >
                GitHub Repository
              </label>
              <input
                type="url"
                value={project.github || ""}
                onChange={(e) =>
                  updateProject(project.id, "github", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                placeholder="https://github.com/username/project"
                data-oid="qslo9x7"
              />
            </div>
          </div>

          <div data-oid="7nd3iip">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              data-oid="-95gzh5"
            >
              Project Description
            </label>
            <textarea
              value={project.description}
              onChange={(e) =>
                updateProject(project.id, "description", e.target.value)
              }
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
              placeholder="Brief description of the project and its purpose..."
              data-oid="q::ntgh"
            />
          </div>

          <div data-oid="8ce51b.">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              data-oid="hggia_3"
            >
              Key Highlights
            </label>
            <textarea
              value={project.highlights.join("\n")}
              onChange={(e) =>
                updateProject(
                  project.id,
                  "highlights",
                  e.target.value.split("\n"),
                )
              }
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
              placeholder="• Key features implemented&#10;• Technical challenges solved&#10;• Impact or results achieved"
              data-oid="923da-g"
            />
          </div>
        </div>
      ))}

      {resumeData.projects.length === 0 && (
        <div className="text-center py-8 text-gray-500" data-oid="gz:z-2x">
          <p data-oid="vfcfhml">No projects added yet.</p>
          <p className="text-sm" data-oid="ad7z0s.">
            Click "Add Project" to get started.
          </p>
        </div>
      )}
    </div>
  );

  const renderSkills = () => (
    <div className="p-6 space-y-6" data-oid="gh990g-">
      <div className="flex items-center justify-between" data-oid="mlfmp-1">
        <h3 className="text-xl font-semibold text-gray-800" data-oid="i7b5ipg">
          Skills
        </h3>
        <div className="flex items-center space-x-2" data-oid="unczja_">
          <input
            type="text"
            value={newSkillCategory}
            onChange={(e) => setNewSkillCategory(e.target.value)}
            placeholder="Category name"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
            data-oid="kpvfd53"
          />

          <button
            onClick={addSkillCategory}
            className="px-4 py-2 bg-[hsl(196,80%,45%)] text-white rounded-md hover:bg-[hsl(196,80%,40%)] transition-colors duration-200"
            data-oid="o24dose"
          >
            Add Category
          </button>
        </div>
      </div>

      {resumeData.skills.map((skill, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-4 space-y-4"
          data-oid="vmf.ttf"
        >
          <div className="flex items-center justify-between" data-oid="0raiom5">
            <input
              type="text"
              value={skill.category}
              onChange={(e) =>
                updateSkillCategory(index, "category", e.target.value)
              }
              className="font-medium text-gray-800 bg-transparent border-none focus:outline-none focus:ring-0 text-lg"
              placeholder="Skill Category"
              data-oid="emdg9mc"
            />

            <button
              onClick={() => removeSkillCategory(index)}
              className="text-red-500 hover:text-red-700"
              data-oid="42k9z-r"
            >
              Remove
            </button>
          </div>

          <div data-oid="cbd77bj">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              data-oid="ts-ysh4"
            >
              Skills (comma-separated)
            </label>
            <input
              type="text"
              value={skill.items.join(", ")}
              onChange={(e) =>
                updateSkillCategory(
                  index,
                  "items",
                  e.target.value.split(", ").filter((item) => item.trim()),
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
              placeholder="JavaScript, React, Node.js"
              data-oid="p2qxa95"
            />
          </div>
        </div>
      ))}

      {resumeData.skills.length === 0 && (
        <div className="text-center py-8 text-gray-500" data-oid="r2:t0_r">
          <p data-oid="m4-vxli">No skill categories added yet.</p>
          <p className="text-sm" data-oid="e.lngd9">
            Add a category to get started.
          </p>
        </div>
      )}
    </div>
  );

  const renderAdditional = () => (
    <div className="p-6 space-y-6" data-oid="it.n-ha">
      <h3
        className="text-xl font-semibold text-gray-800 mb-4"
        data-oid="ngel0k:"
      >
        Additional Information
      </h3>

      <div data-oid="kk3rxek">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          data-oid="b2zqo.s"
        >
          Certifications
        </label>
        <textarea
          value={resumeData.certifications.join("\n")}
          onChange={(e) =>
            onDataChange(
              "certifications",
              e.target.value.split("\n").filter((cert) => cert.trim()),
            )
          }
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
          placeholder="AWS Certified Solutions Architect&#10;Google Cloud Professional&#10;Microsoft Azure Fundamentals"
          data-oid="k6mpl6z"
        />

        <p className="text-xs text-gray-500 mt-1" data-oid="o9iu86h">
          Enter each certification on a new line
        </p>
      </div>

      <div data-oid="aw.oyzc">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          data-oid="aywi8gw"
        >
          Languages
        </label>
        <textarea
          value={resumeData.languages.join("\n")}
          onChange={(e) =>
            onDataChange(
              "languages",
              e.target.value.split("\n").filter((lang) => lang.trim()),
            )
          }
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
          placeholder="English (Native)&#10;Spanish (Conversational)&#10;French (Basic)"
          data-oid="ek4b_.c"
        />

        <p className="text-xs text-gray-500 mt-1" data-oid="iwotyiu">
          Enter each language on a new line
        </p>
      </div>
    </div>
  );

  const sections = {
    personal: renderPersonalInfo,
    experience: renderExperience,
    education: renderEducation,
    projects: renderProjects,
    skills: renderSkills,
    additional: renderAdditional,
  };

  return (
    <div className="bg-white" data-oid="4ozhv:g">
      {sections[activeSection as keyof typeof sections]?.() ||
        renderPersonalInfo()}
    </div>
  );
}
