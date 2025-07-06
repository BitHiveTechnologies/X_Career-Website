"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Users,
  Video,
  FileText,
  Download,
  ExternalLink,
  Star,
  Clock,
  TrendingUp,
} from "lucide-react";

const resourceCategories = [
  {
    id: "interview-prep",
    title: "Interview Preparation",
    description: "Master your next tech interview",
    icon: "🎯",
    color: "from-blue-500 to-cyan-500",
    resources: [
      {
        title: "Top 100 Coding Questions",
        type: "PDF",
        downloads: "50K+",
        rating: 4.9,
      },
      {
        title: "System Design Basics",
        type: "Video",
        duration: "2h 30m",
        rating: 4.8,
      },
      {
        title: "Behavioral Interview Guide",
        type: "Article",
        readTime: "15 min",
        rating: 4.7,
      },
      {
        title: "Mock Interview Platform",
        type: "Tool",
        users: "25K+",
        rating: 4.9,
      },
    ],
  },
  {
    id: "resume-building",
    title: "Resume & Portfolio",
    description: "Build a standout professional profile",
    icon: "📄",
    color: "from-green-500 to-emerald-500",
    resources: [
      {
        title: "ATS-Friendly Resume Templates",
        type: "Template",
        downloads: "75K+",
        rating: 4.8,
      },
      {
        title: "Portfolio Website Builder",
        type: "Tool",
        users: "30K+",
        rating: 4.7,
      },
      {
        title: "Resume Review Checklist",
        type: "PDF",
        downloads: "40K+",
        rating: 4.9,
      },
      {
        title: "LinkedIn Optimization Guide",
        type: "Article",
        readTime: "20 min",
        rating: 4.6,
      },
    ],
  },
  {
    id: "skill-development",
    title: "Skill Development",
    description: "Learn in-demand tech skills",
    icon: "🚀",
    color: "from-purple-500 to-pink-500",
    resources: [
      {
        title: "Full Stack Development Roadmap",
        type: "Guide",
        views: "100K+",
        rating: 4.9,
      },
      {
        title: "Data Structures & Algorithms",
        type: "Course",
        students: "15K+",
        rating: 4.8,
      },
      {
        title: "React.js Complete Tutorial",
        type: "Video",
        duration: "8h 45m",
        rating: 4.7,
      },
      {
        title: "Git & GitHub Mastery",
        type: "Workshop",
        attendees: "20K+",
        rating: 4.8,
      },
    ],
  },
  {
    id: "career-guidance",
    title: "Career Guidance",
    description: "Navigate your tech career path",
    icon: "🎓",
    color: "from-orange-500 to-red-500",
    resources: [
      {
        title: "Tech Career Roadmap 2024",
        type: "Guide",
        downloads: "60K+",
        rating: 4.9,
      },
      {
        title: "Salary Negotiation Tactics",
        type: "Video",
        duration: "1h 20m",
        rating: 4.8,
      },
      {
        title: "Remote Work Best Practices",
        type: "Article",
        readTime: "12 min",
        rating: 4.7,
      },
      {
        title: "Career Transition Guide",
        type: "eBook",
        pages: "120",
        rating: 4.6,
      },
    ],
  },
];

const featuredResources = [
  {
    title: "Complete Interview Preparation Kit",
    description: "Everything you need to ace your next tech interview",
    image: "🎯",
    downloads: "100K+",
    rating: 4.9,
    price: "Free",
    tags: ["Interview", "Coding", "System Design"],
  },
  {
    title: "Tech Salary Report 2024",
    description: "Latest salary trends and compensation data",
    image: "💰",
    downloads: "75K+",
    rating: 4.8,
    price: "Free",
    tags: ["Salary", "Trends", "Data"],
  },
  {
    title: "Remote Work Toolkit",
    description: "Essential tools and tips for remote developers",
    image: "🏠",
    downloads: "50K+",
    rating: 4.7,
    price: "Free",
    tags: ["Remote", "Productivity", "Tools"],
  },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("interview-prep");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
      data-oid="nkgef81"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10" data-oid="kmfi_lf">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
          data-oid="g5jebzf"
        ></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
          data-oid="9fh4j7g"
        ></div>
        <div
          className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
          data-oid="cfw1tui"
        ></div>
      </div>

      <div className="relative z-10" data-oid="x7.jm.m">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4" data-oid=".qwyc.l">
          <div className="max-w-7xl mx-auto text-center" data-oid="rp6m_cv">
            <div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
              data-oid="e_7wn-9"
            >
              <BookOpen className="h-4 w-4" data-oid="e662qrq" />
              Free Resources for Tech Careers
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
              data-oid="lvdy54x"
            >
              Your Career
              <span
                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                data-oid=":jz9wkl"
              >
                {" "}
                Resource Hub
              </span>
            </h1>

            <p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              data-oid="ybsj0.x"
            >
              Everything you need to land your dream tech job - from interview
              prep to skill development, all in one place.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12" data-oid="zy06t9a">
              <div className="relative" data-oid="3zt9.ag">
                <input
                  type="text"
                  placeholder="Search resources, guides, templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 text-lg rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent shadow-lg"
                  data-oid="46qrp63"
                />

                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl hover:shadow-lg transition-all"
                  data-oid="2j-sjy5"
                >
                  <ArrowRight className="h-5 w-5" data-oid="3_p68wf" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              data-oid="m6bhyt."
            >
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                data-oid="pqo0u4e"
              >
                <div
                  className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                  data-oid="9werjeu"
                >
                  500+
                </div>
                <div className="text-gray-600" data-oid="f_lq_:_">
                  Free Resources
                </div>
              </div>
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                data-oid="8h-krlp"
              >
                <div
                  className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                  data-oid="aji8vbg"
                >
                  1M+
                </div>
                <div className="text-gray-600" data-oid="1m1mk76">
                  Downloads
                </div>
              </div>
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                data-oid="yssbqem"
              >
                <div
                  className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                  data-oid="-4b3i87"
                >
                  50K+
                </div>
                <div className="text-gray-600" data-oid="m-yq7bf">
                  Success Stories
                </div>
              </div>
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                data-oid=":e8uxfu"
              >
                <div
                  className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                  data-oid="bz2aqsr"
                >
                  4.9★
                </div>
                <div className="text-gray-600" data-oid="u8ev.xd">
                  Average Rating
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16 px-4" data-oid="c-g5cxc">
          <div className="max-w-7xl mx-auto" data-oid="t9svpwn">
            <div className="text-center mb-12" data-oid="uvp2qys">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="ajmbzel"
              >
                Featured Resources
              </h2>
              <p className="text-xl text-gray-600" data-oid="oqa9h76">
                Most popular and highly-rated resources this month
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" data-oid="d3mei_q">
              {featuredResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  data-oid="9yx0o1y"
                >
                  <div className="text-4xl mb-4" data-oid="hdkyhu4">
                    {resource.image}
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-800 mb-2"
                    data-oid="9d:9b46"
                  >
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4" data-oid=".sosib6">
                    {resource.description}
                  </p>

                  <div
                    className="flex items-center gap-4 mb-4"
                    data-oid="v9g48o7"
                  >
                    <div className="flex items-center gap-1" data-oid="l2w_unb">
                      <Download
                        className="h-4 w-4 text-gray-500"
                        data-oid=".k-y:mv"
                      />

                      <span
                        className="text-sm text-gray-600"
                        data-oid="-p0u.ri"
                      >
                        {resource.downloads}
                      </span>
                    </div>
                    <div className="flex items-center gap-1" data-oid="4t7a6sk">
                      <Star
                        className="h-4 w-4 text-yellow-500 fill-current"
                        data-oid="wy997j6"
                      />

                      <span
                        className="text-sm text-gray-600"
                        data-oid="4ho.end"
                      >
                        {resource.rating}
                      </span>
                    </div>
                    <div
                      className="text-sm font-medium text-green-600"
                      data-oid="0794iif"
                    >
                      {resource.price}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4" data-oid="sstsjh.">
                    {resource.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        data-oid="3x98skx"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                    data-oid="wbecw3o"
                  >
                    Download Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 px-4" data-oid="czxi1ow">
          <div className="max-w-7xl mx-auto" data-oid="vv1qas-">
            <div className="text-center mb-12" data-oid="d4dsqlq">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="x4k2mcl"
              >
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600" data-oid="lcf9:it">
                Find exactly what you need for your career journey
              </p>
            </div>

            {/* Category Tabs */}
            <div
              className="flex flex-wrap justify-center gap-4 mb-12"
              data-oid="jigj6lm"
            >
              {resourceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white shadow-lg"
                      : "bg-white/80 backdrop-blur-sm text-gray-700 border border-[hsl(210,30%,95%)] hover:border-[hsl(196,80%,45%)]"
                  }`}
                  data-oid="cema8qo"
                >
                  <span className="mr-2" data-oid=".v8u-9d">
                    {category.icon}
                  </span>
                  {category.title}
                </button>
              ))}
            </div>

            {/* Active Category Content */}
            {resourceCategories.map(
              (category) =>
                activeCategory === category.id && (
                  <div
                    key={category.id}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                    data-oid="crdl3so"
                  >
                    <div className="text-center mb-8" data-oid="kh:j_1u">
                      <div className="text-6xl mb-4" data-oid=".2buj:e">
                        {category.icon}
                      </div>
                      <h3
                        className="text-2xl font-bold text-gray-800 mb-2"
                        data-oid=":74qiqy"
                      >
                        {category.title}
                      </h3>
                      <p className="text-gray-600" data-oid=".pj5g1d">
                        {category.description}
                      </p>
                    </div>

                    <div
                      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                      data-oid="n4:p85d"
                    >
                      {category.resources.map((resource, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                          data-oid="8-0qjug"
                        >
                          <div
                            className="flex items-start justify-between mb-3"
                            data-oid="9hrs3y:"
                          >
                            <h4
                              className="font-semibold text-gray-800 text-sm"
                              data-oid="2rn2.z-"
                            >
                              {resource.title}
                            </h4>
                            <span
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                              data-oid="zb503at"
                            >
                              {resource.type}
                            </span>
                          </div>

                          <div
                            className="flex items-center gap-4 text-sm text-gray-600 mb-4"
                            data-oid="wyinbo-"
                          >
                            {"downloads" in resource && resource.downloads && (
                              <div
                                className="flex items-center gap-1"
                                data-oid="6_s505m"
                              >
                                <Download
                                  className="h-3 w-3"
                                  data-oid="x3rbtue"
                                />

                                {resource.downloads}
                              </div>
                            )}
                            {"duration" in resource && resource.duration && (
                              <div
                                className="flex items-center gap-1"
                                data-oid="s5f32qv"
                              >
                                <Clock className="h-3 w-3" data-oid="fqw02bu" />

                                {resource.duration}
                              </div>
                            )}
                            {"readTime" in resource && resource.readTime && (
                              <div
                                className="flex items-center gap-1"
                                data-oid="czoz3s-"
                              >
                                <Clock className="h-3 w-3" data-oid="enrlfwg" />

                                {resource.readTime}
                              </div>
                            )}
                            {"users" in resource && resource.users && (
                              <div
                                className="flex items-center gap-1"
                                data-oid=":g-8mz."
                              >
                                <Users className="h-3 w-3" data-oid="-nii-78" />

                                {resource.users}
                              </div>
                            )}
                            {"views" in resource && resource.views && (
                              <div
                                className="flex items-center gap-1"
                                data-oid="dtpksm4"
                              >
                                <Users className="h-3 w-3" data-oid="5aqnd79" />

                                {resource.views}
                              </div>
                            )}
                            {"students" in resource && resource.students && (
                              <div
                                className="flex items-center gap-1"
                                data-oid="usq5v72"
                              >
                                <Users className="h-3 w-3" data-oid="qjlsrim" />

                                {resource.students}
                              </div>
                            )}
                            {"attendees" in resource && resource.attendees && (
                              <div
                                className="flex items-center gap-1"
                                data-oid="4k67w3_"
                              >
                                <Users className="h-3 w-3" data-oid="t9qcx:o" />

                                {resource.attendees}
                              </div>
                            )}
                            {"pages" in resource && resource.pages && (
                              <div
                                className="flex items-center gap-1"
                                data-oid="0k05p0j"
                              >
                                <FileText
                                  className="h-3 w-3"
                                  data-oid="2.r7yyk"
                                />
                                {resource.pages} pages
                              </div>
                            )}
                          </div>

                          <div
                            className="flex items-center justify-between"
                            data-oid="cvrb83z"
                          >
                            <div
                              className="flex items-center gap-1"
                              data-oid="rtqyxm4"
                            >
                              <Star
                                className="h-4 w-4 text-yellow-500 fill-current"
                                data-oid="lw7q:39"
                              />

                              <span
                                className="text-sm font-medium"
                                data-oid="pagkcv0"
                              >
                                {resource.rating}
                              </span>
                            </div>
                            <button
                              className="text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)] transition-colors"
                              data-oid="-crwyu:"
                            >
                              <ExternalLink
                                className="h-4 w-4"
                                data-oid=":cpkqjj"
                              />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
            )}
          </div>
        </section>

        {/* Community CTA */}
        <section className="py-16 px-4" data-oid="ry--.:d">
          <div className="max-w-4xl mx-auto text-center" data-oid="woky_9y">
            <div
              className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
              data-oid="40_vzc:"
            >
              <h2 className="text-3xl font-bold mb-4" data-oid="ypo:4o1">
                Join Our Learning Community
              </h2>
              <p className="text-xl mb-6 text-blue-100" data-oid="f11doy6">
                Connect with fellow developers, share resources, and grow
                together
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-oid=":a.ze57"
              >
                <Link
                  href="/resources/community"
                  className="px-6 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                  data-oid="ohkh-cb"
                >
                  <Users className="inline h-5 w-5 mr-2" data-oid="-2o.4rl" />
                  Join Community
                </Link>
                <Link
                  href="/notify"
                  className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[hsl(196,80%,45%)] transition-all"
                  data-oid="xe_cmuy"
                >
                  <TrendingUp
                    className="inline h-5 w-5 mr-2"
                    data-oid="zbw_3fa"
                  />
                  Get Notified
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
