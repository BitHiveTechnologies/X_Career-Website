"use client";

import { ResumeData } from "@/app/resume-builder/page";

interface ResumePreviewProps {
  resumeData: ResumeData;
  template: string;
}

export default function ResumePreview({
  resumeData,
  template,
}: ResumePreviewProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const ModernTemplate = () => (
    <div
      className="max-w-4xl mx-auto bg-white p-8 shadow-lg"
      style={{ minHeight: "11in", width: "8.5in" }}
      data-oid="fkw_n7c"
    >
      {/* Header */}
      <header
        className="border-b-2 border-[hsl(196,80%,45%)] pb-6 mb-6"
        data-oid="344-xy0"
      >
        <h1
          className="text-3xl font-bold text-gray-800 mb-2"
          data-oid="h0s:0ha"
        >
          {resumeData.personalInfo.fullName || "Your Name"}
        </h1>
        <div
          className="flex flex-wrap gap-4 text-sm text-gray-600"
          data-oid="dqbcjm4"
        >
          {resumeData.personalInfo.email && (
            <span className="flex items-center" data-oid="70njche">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                data-oid="z8qu416"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  data-oid="t-jwy_j"
                />

                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  data-oid="pj936e-"
                />
              </svg>
              {resumeData.personalInfo.email}
            </span>
          )}
          {resumeData.personalInfo.phone && (
            <span className="flex items-center" data-oid="0x55h9f">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                data-oid="axtz2m4"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  data-oid="z9gd3qe"
                />
              </svg>
              {resumeData.personalInfo.phone}
            </span>
          )}
          {resumeData.personalInfo.location && (
            <span className="flex items-center" data-oid="z62f:84">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                data-oid="5bn:erz"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                  data-oid="p.--yqk"
                />
              </svg>
              {resumeData.personalInfo.location}
            </span>
          )}
          {resumeData.personalInfo.linkedin && (
            <span className="flex items-center" data-oid="v4wkm-5">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                data-oid="wg_fo-z"
              >
                <path
                  fillRule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                  clipRule="evenodd"
                  data-oid="aq-zml4"
                />
              </svg>
              LinkedIn
            </span>
          )}
          {resumeData.personalInfo.github && (
            <span className="flex items-center" data-oid=":pt_r-m">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                data-oid="f-1mixu"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                  data-oid="5yuvlw4"
                />
              </svg>
              GitHub
            </span>
          )}
        </div>
      </header>

      {/* Summary */}
      {resumeData.personalInfo.summary && (
        <section className="mb-6" data-oid="zrwe2mw">
          <h2
            className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
            data-oid="ma_gocg"
          >
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed" data-oid="gm798oj">
            {resumeData.personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {resumeData.experience.length > 0 && (
        <section className="mb-6" data-oid="chqjphu">
          <h2
            className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
            data-oid="ybn6en3"
          >
            Professional Experience
          </h2>
          <div className="space-y-4" data-oid="3uua6f-">
            {resumeData.experience.map((exp) => (
              <div key={exp.id} data-oid="2w346yx">
                <div
                  className="flex justify-between items-start mb-2"
                  data-oid="6x43ryj"
                >
                  <div data-oid="29hu-6-">
                    <h3
                      className="font-semibold text-gray-800"
                      data-oid="xn_:voh"
                    >
                      {exp.position}
                    </h3>
                    <p
                      className="text-[hsl(196,80%,45%)] font-medium"
                      data-oid="1z75nyg"
                    >
                      {exp.company}
                    </p>
                    {exp.location && (
                      <p className="text-sm text-gray-600" data-oid="vgg:y1b">
                        {exp.location}
                      </p>
                    )}
                  </div>
                  <div
                    className="text-sm text-gray-600 text-right"
                    data-oid="3l9nfs6"
                  >
                    {formatDate(exp.startDate)} -{" "}
                    {exp.current ? "Present" : formatDate(exp.endDate)}
                  </div>
                </div>
                {exp.description.length > 0 && (
                  <ul
                    className="list-disc list-inside text-gray-700 space-y-1 ml-4"
                    data-oid="gxrk37s"
                  >
                    {exp.description
                      .filter((desc) => desc.trim())
                      .map((desc, index) => (
                        <li key={index} className="text-sm" data-oid=":78vf6z">
                          {desc}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {resumeData.education.length > 0 && (
        <section className="mb-6" data-oid="w069gpm">
          <h2
            className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
            data-oid="_psaldy"
          >
            Education
          </h2>
          <div className="space-y-3" data-oid="n-dgxae">
            {resumeData.education.map((edu) => (
              <div key={edu.id} data-oid="4c24jae">
                <div
                  className="flex justify-between items-start mb-1"
                  data-oid="_folny6"
                >
                  <div data-oid="kn_rcr-">
                    <h3
                      className="font-semibold text-gray-800"
                      data-oid="i-tz6xe"
                    >
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p
                      className="text-[hsl(196,80%,45%)] font-medium"
                      data-oid="lxl.3yd"
                    >
                      {edu.institution}
                    </p>
                    {edu.location && (
                      <p className="text-sm text-gray-600" data-oid="h2ehxnx">
                        {edu.location}
                      </p>
                    )}
                    {edu.gpa && (
                      <p className="text-sm text-gray-600" data-oid="oq8i_x5">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                  <div
                    className="text-sm text-gray-600 text-right"
                    data-oid="hc6ss-u"
                  >
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </div>
                </div>
                {edu.achievements.length > 0 && edu.achievements[0] && (
                  <ul
                    className="list-disc list-inside text-gray-700 space-y-1 ml-4"
                    data-oid="0pgyrv2"
                  >
                    {edu.achievements
                      .filter((achievement) => achievement.trim())
                      .map((achievement, index) => (
                        <li key={index} className="text-sm" data-oid="cvh973s">
                          {achievement}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {resumeData.projects.length > 0 && (
        <section className="mb-6" data-oid="xfac0j2">
          <h2
            className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
            data-oid="8plb7sb"
          >
            Projects
          </h2>
          <div className="space-y-4" data-oid="6d:zp30">
            {resumeData.projects.map((project) => (
              <div key={project.id} data-oid="a1gx8ef">
                <div className="mb-2" data-oid="ai4xn5x">
                  <h3
                    className="font-semibold text-gray-800"
                    data-oid="5k7a:w."
                  >
                    {project.name}
                  </h3>
                  {project.technologies.length > 0 && (
                    <p
                      className="text-sm text-[hsl(196,80%,45%)] font-medium"
                      data-oid="v0-f08y"
                    >
                      Technologies: {project.technologies.join(", ")}
                    </p>
                  )}
                  <div
                    className="flex space-x-4 text-sm text-gray-600"
                    data-oid="mhpn--u"
                  >
                    {project.link && (
                      <span data-oid="i.6groi">Live Demo: {project.link}</span>
                    )}
                    {project.github && (
                      <span data-oid="pb9px02">GitHub: {project.github}</span>
                    )}
                  </div>
                </div>
                {project.description && (
                  <p className="text-gray-700 text-sm mb-2" data-oid="035hytw">
                    {project.description}
                  </p>
                )}
                {project.highlights.length > 0 && project.highlights[0] && (
                  <ul
                    className="list-disc list-inside text-gray-700 space-y-1 ml-4"
                    data-oid="dn1dv-7"
                  >
                    {project.highlights
                      .filter((highlight) => highlight.trim())
                      .map((highlight, index) => (
                        <li key={index} className="text-sm" data-oid="p9r90ce">
                          {highlight}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {resumeData.skills.length > 0 && (
        <section className="mb-6" data-oid="3_as3h5">
          <h2
            className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
            data-oid="q5l7ksz"
          >
            Technical Skills
          </h2>
          <div className="space-y-2" data-oid="zqzlcmk">
            {resumeData.skills.map((skillCategory, index) => (
              <div key={index} className="flex" data-oid="_slu66j">
                <span
                  className="font-medium text-gray-800 w-32 flex-shrink-0"
                  data-oid="hrmk9o."
                >
                  {skillCategory.category}:
                </span>
                <span className="text-gray-700" data-oid="::s0zzf">
                  {skillCategory.items.join(", ")}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Information */}
      <div className="grid md:grid-cols-2 gap-6" data-oid=":fnd5sl">
        {/* Certifications */}
        {resumeData.certifications.length > 0 && (
          <section data-oid="tc.66sc">
            <h2
              className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
              data-oid="dkg.rq:"
            >
              Certifications
            </h2>
            <ul className="space-y-1" data-oid="iq2yqr_">
              {resumeData.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-gray-700 text-sm"
                  data-oid="4nds8v3"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Languages */}
        {resumeData.languages.length > 0 && (
          <section data-oid="4.6xqb7">
            <h2
              className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
              data-oid="3fql2ou"
            >
              Languages
            </h2>
            <ul className="space-y-1" data-oid="mxye9nt">
              {resumeData.languages.map((lang, index) => (
                <li
                  key={index}
                  className="text-gray-700 text-sm"
                  data-oid="6u6l5tg"
                >
                  {lang}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );

  const MinimalTemplate = () => (
    <div
      className="max-w-4xl mx-auto bg-white p-8 shadow-lg"
      style={{ minHeight: "11in", width: "8.5in" }}
      data-oid="jxq0pjm"
    >
      {/* Header */}
      <header className="text-center mb-8" data-oid=".8qb6fz">
        <h1
          className="text-4xl font-light text-gray-800 mb-4"
          data-oid="k5oz4es"
        >
          {resumeData.personalInfo.fullName || "Your Name"}
        </h1>
        <div
          className="flex justify-center flex-wrap gap-6 text-sm text-gray-600"
          data-oid=":5xawg8"
        >
          {resumeData.personalInfo.email && (
            <span data-oid="vl67ayl">{resumeData.personalInfo.email}</span>
          )}
          {resumeData.personalInfo.phone && (
            <span data-oid="t6q2w.p">{resumeData.personalInfo.phone}</span>
          )}
          {resumeData.personalInfo.location && (
            <span data-oid="3wo3n0t">{resumeData.personalInfo.location}</span>
          )}
          {resumeData.personalInfo.linkedin && (
            <span data-oid="3g1vu_4">LinkedIn</span>
          )}
          {resumeData.personalInfo.github && (
            <span data-oid="8bydbpy">GitHub</span>
          )}
        </div>
      </header>

      {/* Summary */}
      {resumeData.personalInfo.summary && (
        <section className="mb-8" data-oid="m9-zb9s">
          <p
            className="text-gray-700 leading-relaxed text-center italic"
            data-oid="t127cqh"
          >
            {resumeData.personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {resumeData.experience.length > 0 && (
        <section className="mb-8" data-oid="3jcl2u5">
          <h2
            className="text-2xl font-light text-gray-800 mb-4 text-center"
            data-oid="ytj8ny2"
          >
            EXPERIENCE
          </h2>
          <div className="space-y-6" data-oid="b.k78yy">
            {resumeData.experience.map((exp) => (
              <div
                key={exp.id}
                className="border-l-2 border-gray-300 pl-4"
                data-oid="22r7bmj"
              >
                <div className="mb-2" data-oid="skf71at">
                  <h3
                    className="font-semibold text-gray-800 text-lg"
                    data-oid="hy1dvql"
                  >
                    {exp.position}
                  </h3>
                  <p className="text-gray-600 font-medium" data-oid="9mzw0ig">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500" data-oid="8jclozo">
                    {formatDate(exp.startDate)} -{" "}
                    {exp.current ? "Present" : formatDate(exp.endDate)}
                    {exp.location && ` • ${exp.location}`}
                  </p>
                </div>
                {exp.description.length > 0 && (
                  <ul className="space-y-1" data-oid="noiuppu">
                    {exp.description
                      .filter((desc) => desc.trim())
                      .map((desc, index) => (
                        <li
                          key={index}
                          className="text-gray-700 text-sm"
                          data-oid="b4yjatn"
                        >
                          • {desc}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {resumeData.education.length > 0 && (
        <section className="mb-8" data-oid="d_d_14p">
          <h2
            className="text-2xl font-light text-gray-800 mb-4 text-center"
            data-oid="ovzmj27"
          >
            EDUCATION
          </h2>
          <div className="space-y-4" data-oid="24s_3f6">
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="text-center" data-oid="9ln2ybu">
                <h3 className="font-semibold text-gray-800" data-oid="fbbnsfp">
                  {edu.degree} {edu.field && `in ${edu.field}`}
                </h3>
                <p className="text-gray-600" data-oid="wem5rdx">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500" data-oid="tkxpfn:">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  {edu.gpa && ` • GPA: ${edu.gpa}`}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {resumeData.skills.length > 0 && (
        <section className="mb-8" data-oid="f8:p6yq">
          <h2
            className="text-2xl font-light text-gray-800 mb-4 text-center"
            data-oid="16txhjh"
          >
            SKILLS
          </h2>
          <div className="text-center space-y-2" data-oid="-ctyg1p">
            {resumeData.skills.map((skillCategory, index) => (
              <div key={index} data-oid="ni_g5gf">
                <span className="font-medium text-gray-800" data-oid="rr3rn35">
                  {skillCategory.category}:
                </span>
                <span className="text-gray-700 ml-2" data-oid="7_d_de0">
                  {skillCategory.items.join(" • ")}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {resumeData.projects.length > 0 && (
        <section className="mb-8" data-oid="4mnchd9">
          <h2
            className="text-2xl font-light text-gray-800 mb-4 text-center"
            data-oid="6dmh14b"
          >
            PROJECTS
          </h2>
          <div className="space-y-4" data-oid="qx5z061">
            {resumeData.projects.map((project) => (
              <div key={project.id} className="text-center" data-oid="siwoaj4">
                <h3 className="font-semibold text-gray-800" data-oid="_6sda1w">
                  {project.name}
                </h3>
                {project.technologies.length > 0 && (
                  <p className="text-sm text-gray-600" data-oid="0sqd.9l">
                    {project.technologies.join(" • ")}
                  </p>
                )}
                {project.description && (
                  <p className="text-gray-700 text-sm mt-1" data-oid=".10986f">
                    {project.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );

  const templates = {
    modern: ModernTemplate,
    minimal: MinimalTemplate,
  };

  const TemplateComponent =
    templates[template as keyof typeof templates] || ModernTemplate;

  return <TemplateComponent data-oid="zqdefbj" />;
}
