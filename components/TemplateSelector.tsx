"use client";

interface TemplateSelectorProps {
  selectedTemplate: string;
  onTemplateChange: (template: string) => void;
}

export default function TemplateSelector({
  selectedTemplate,
  onTemplateChange,
}: TemplateSelectorProps) {
  const templates = [
    {
      id: "modern",
      name: "Modern Professional",
      description: "Clean design with blue accents, perfect for tech roles",
      preview: "/template-previews/modern.png",
      features: ["ATS-Friendly", "Color Accents", "Professional Layout"],
    },
    {
      id: "minimal",
      name: "Minimal Clean",
      description: "Simple and elegant design focusing on content",
      preview: "/template-previews/minimal.png",
      features: ["Minimalist", "Typography Focus", "Clean Lines"],
    },
    {
      id: "creative",
      name: "Creative Design",
      description: "Eye-catching design for creative professionals",
      preview: "/template-previews/creative.png",
      features: ["Creative Layout", "Visual Elements", "Unique Design"],
      comingSoon: true,
    },
    {
      id: "executive",
      name: "Executive",
      description: "Sophisticated design for senior positions",
      preview: "/template-previews/executive.png",
      features: ["Executive Style", "Premium Look", "Leadership Focus"],
      comingSoon: true,
    },
  ];

  return (
    <div
      className="bg-white rounded-lg shadow-sm border p-6"
      data-oid="k-4z0zh"
    >
      <h2
        className="text-xl font-semibold text-gray-800 mb-4"
        data-oid="wes-ge0"
      >
        Choose Your Template
      </h2>
      <div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        data-oid="jdyk4eq"
      >
        {templates.map((template) => (
          <div
            key={template.id}
            className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
              selectedTemplate === template.id
                ? "border-[hsl(196,80%,45%)] bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            } ${template.comingSoon ? "opacity-60 cursor-not-allowed" : ""}`}
            onClick={() =>
              !template.comingSoon && onTemplateChange(template.id)
            }
            data-oid="etdh07e"
          >
            {template.comingSoon && (
              <div
                className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full"
                data-oid="oj7:vd-"
              >
                Coming Soon
              </div>
            )}

            {/* Template Preview */}
            <div
              className="bg-gray-100 rounded-md h-32 mb-3 flex items-center justify-center"
              data-oid="9lh85ja"
            >
              <div className="text-gray-400 text-center" data-oid="xf8msat">
                <svg
                  className="w-8 h-8 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="-wm7qn."
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    data-oid="ye89zz3"
                  />
                </svg>
                <span className="text-xs" data-oid="1zjf4b.">
                  Preview
                </span>
              </div>
            </div>

            <h3 className="font-semibold text-gray-800 mb-1" data-oid="8:rwcs-">
              {template.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3" data-oid="fgsooyr">
              {template.description}
            </p>

            {/* Features */}
            <div className="space-y-1" data-oid="oq7ofyk">
              {template.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center text-xs text-gray-500"
                  data-oid="ms8knac"
                >
                  <svg
                    className="w-3 h-3 mr-1 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    data-oid="q89mcr8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                      data-oid="lr7x9_q"
                    />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>

            {selectedTemplate === template.id && !template.comingSoon && (
              <div
                className="absolute top-2 left-2 bg-[hsl(196,80%,45%)] text-white text-xs px-2 py-1 rounded-full"
                data-oid="-c6c9jd"
              >
                Selected
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg" data-oid="xspnha9">
        <div className="flex items-start space-x-3" data-oid="jq.l-5d">
          <svg
            className="w-5 h-5 text-blue-500 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
            data-oid="g1aix:o"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
              data-oid="cjm6.y_"
            />
          </svg>
          <div data-oid="ljkuza5">
            <h4 className="font-medium text-blue-800 mb-1" data-oid="25j:r:p">
              Template Tips
            </h4>
            <ul className="text-sm text-blue-700 space-y-1" data-oid="vrahver">
              <li data-oid="t1pot4n">
                • All templates are ATS-friendly and optimized for applicant
                tracking systems
              </li>
              <li data-oid=":tjbmh.">
                • Choose based on your industry: Modern for tech, Minimal for
                any field
              </li>
              <li data-oid="13z5egi">
                • You can switch templates anytime without losing your data
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
