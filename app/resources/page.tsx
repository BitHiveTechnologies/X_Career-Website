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
      data-oid="15btkeq"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10" data-oid="b8c95.n">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
          data-oid="iqr64-k"
        ></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
          data-oid="5y_wtge"
        ></div>
        <div
          className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
          data-oid="s0.3w7d"
        ></div>
      </div>

      <div className="relative z-10" data-oid="evfiv1s">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4" data-oid="1naeq97">
          <div className="max-w-7xl mx-auto text-center" data-oid="kx__1.c">
            <div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
              data-oid="sfok_kl"
            >
              <BookOpen className="h-4 w-4" data-oid="9cksk0_" />
              Free Resources for Tech Careers
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
              data-oid="0k441xd"
            >
              Your Career
              <span
                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                data-oid="yler1.i"
              >
                {" "}
                Resource Hub
              </span>
            </h1>

            <p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              data-oid="h1fhyxc"
            >
              Everything you need to land your dream tech job - from interview
              prep to skill development, all in one place.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12" data-oid="2ly554a">
              <div className="relative" data-oid="vcsokfx">
                <input
                  type="text"
                  placeholder="Search resources, guides, templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 text-lg rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent shadow-lg"
                  data-oid="5qs2au9"
                />

                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl hover:shadow-lg transition-all"
                  data-oid="84_yz98"
                >
                  <ArrowRight className="h-5 w-5" data-oid="w6q08a9" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              data-oid="pa63oia"
            >
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                data-oid="2sv8dsc"
              >
                <div
                  className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                  data-oid="40_1auo"
                >
                  500+
                </div>
                <div className="text-gray-600" data-oid="n8ye3e8">
                  Free Resources
                </div>
              </div>
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                data-oid="9m7p.yq"
              >
                <div
                  className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                  data-oid="sa9m963"
                >
                  1M+
                </div>
                <div className="text-gray-600" data-oid="uk3isyt">
                  Downloads
                </div>
              </div>
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                data-oid="m_5ipbz"
              >
                <div
                  className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                  data-oid="hxnvriq"
                >
                  50K+
                </div>
                <div className="text-gray-600" data-oid="y5b8bre">
                  Success Stories
                </div>
              </div>
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                data-oid="m6r6-vz"
              >
                <div
                  className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                  data-oid="j507707"
                >
                  4.9★
                </div>
                <div className="text-gray-600" data-oid="nzg7mf9">
                  Average Rating
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16 px-4" data-oid="tagfgek">
          <div className="max-w-7xl mx-auto" data-oid="brly9_r">
            <div className="text-center mb-12" data-oid="mfhg:k0">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="7p:3520"
              >
                Featured Resources
              </h2>
              <p className="text-xl text-gray-600" data-oid="w339a0f">
                Most popular and highly-rated resources this month
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" data-oid="eeslio7">
              {featuredResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  data-oid=":did-8v"
                >
                  <div className="text-4xl mb-4" data-oid="3ln_y9-">
                    {resource.image}
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-800 mb-2"
                    data-oid="ozrlq:g"
                  >
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4" data-oid="6:0btzg">
                    {resource.description}
                  </p>

                  <div
                    className="flex items-center gap-4 mb-4"
                    data-oid="022zpan"
                  >
                    <div className="flex items-center gap-1" data-oid="ln0nvli">
                      <Download
                        className="h-4 w-4 text-gray-500"
                        data-oid="vbdqg9y"
                      />

                      <span
                        className="text-sm text-gray-600"
                        data-oid="dvj853c"
                      >
                        {resource.downloads}
                      </span>
                    </div>
                    <div className="flex items-center gap-1" data-oid="uyjxbvz">
                      <Star
                        className="h-4 w-4 text-yellow-500 fill-current"
                        data-oid="ufxb_25"
                      />

                      <span
                        className="text-sm text-gray-600"
                        data-oid="l7fc.g0"
                      >
                        {resource.rating}
                      </span>
                    </div>
                    <div
                      className="text-sm font-medium text-green-600"
                      data-oid="8bjer:6"
                    >
                      {resource.price}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4" data-oid="nmofvqx">
                    {resource.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        data-oid="7gyqt:c"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                    data-oid="j-3lizd"
                  >
                    Download Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 px-4" data-oid="g1s6tav">
          <div className="max-w-7xl mx-auto" data-oid=":zx0grl">
            <div className="text-center mb-12" data-oid="4_cp9hf">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid=":q6ha6d"
              >
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600" data-oid="536wwv1">
                Find exactly what you need for your career journey
              </p>
            </div>

            {/* Category Tabs */}
            <div
              className="flex flex-wrap justify-center gap-4 mb-12"
              data-oid="5tf9hsi"
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
                  data-oid=".ajxfjs"
                >
                  <span className="mr-2" data-oid=":ghhphw">
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
                    data-oid="awa6e::"
                  >
                    <div className="text-center mb-8" data-oid="dd4ebt.">
                      <div className="text-6xl mb-4" data-oid="zl:v-4r">
                        {category.icon}
                      </div>
                      <h3
                        className="text-2xl font-bold text-gray-800 mb-2"
                        data-oid="a3514ik"
                      >
                        {category.title}
                      </h3>
                      <p className="text-gray-600" data-oid="5215j-6">
                        {category.description}
                      </p>
                    </div>

                    <div
                      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                      data-oid="y709oq_"
                    >
                      {category.resources.map((resource, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                          data-oid="xx4rl-m"
                        >
                          <div
                            className="flex items-start justify-between mb-3"
                            data-oid="03.03xu"
                          >
                            <h4
                              className="font-semibold text-gray-800 text-sm"
                              data-oid="azoysc0"
                            >
                              {resource.title}
                            </h4>
                            <span
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                              data-oid="9ewg.-y"
                            >
                              {resource.type}
                            </span>
                          </div>

                          <div
                            className="flex items-center gap-4 text-sm text-gray-600 mb-4"
                            data-oid="dekd34z"
                          >
                            {"downloads" in resource && resource.downloads && (
                              <div
                                className="flex items-center gap-1"
                                data-oid="kfqper1"
                              >
                                <Download
                                  className="h-3 w-3"
                                  data-oid="bapps3w"
                                />

                                {resource.downloads}
                              </div>
                            )}
                            {"duration" in resource && resource.duration && (
                              <div
                                className="flex items-center gap-1"
                                data-oid="1uhvb8t"
                              >
                                <Clock className="h-3 w-3" data-oid="r5v57wv" />

                                {resource.duration}
                              </div>
                            )}
                            {"readTime" in resource && resource.readTime && (
                              <div
                                className="flex items-center gap-1"
                                data-oid="s_15aw."
                              >
                                <Clock className="h-3 w-3" data-oid="aiwuxtt" />

                                {resource.readTime}
                              </div>
                            )}
                            {"users" in resource && resource.users && (
                              <div
                                className="flex items-center gap-1"
                                data-oid="bgksfq."
                              >
                                <Users className="h-3 w-3" data-oid="nugfk8r" />

                                {resource.users}
                              </div>
                            )}
                            {"views" in resource && resource.views && (
                              <div
                                className="flex items-center gap-1"
                                data-oid="3uc7wdl"
                              >
                                <Users className="h-3 w-3" data-oid="y3ns78d" />

                                {resource.views}
                              </div>
                            )}
                            {"students" in resource && resource.students && (
                              <div
                                className="flex items-center gap-1"
                                data-oid="s488a.8"
                              >
                                <Users className="h-3 w-3" data-oid="m4rjd7r" />

                                {resource.students}
                              </div>
                            )}
                            {"attendees" in resource && resource.attendees && (
                              <div
                                className="flex items-center gap-1"
                                data-oid="d.dxl:m"
                              >
                                <Users className="h-3 w-3" data-oid="8_y9-l9" />

                                {resource.attendees}
                              </div>
                            )}
                            {"pages" in resource && resource.pages && (
                              <div
                                className="flex items-center gap-1"
                                data-oid="z5:4ehw"
                              >
                                <FileText
                                  className="h-3 w-3"
                                  data-oid="_-gmj3y"
                                />
                                {resource.pages} pages
                              </div>
                            )}
                          </div>

                          <div
                            className="flex items-center justify-between"
                            data-oid="j8:stxb"
                          >
                            <div
                              className="flex items-center gap-1"
                              data-oid="16ovaie"
                            >
                              <Star
                                className="h-4 w-4 text-yellow-500 fill-current"
                                data-oid="dy6x0gl"
                              />

                              <span
                                className="text-sm font-medium"
                                data-oid="9t2qn4y"
                              >
                                {resource.rating}
                              </span>
                            </div>
                            <button
                              className="text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)] transition-colors"
                              data-oid="kbe57kk"
                            >
                              <ExternalLink
                                className="h-4 w-4"
                                data-oid="kfvda-g"
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
        <section className="py-16 px-4" data-oid="7mmfosk">
          <div className="max-w-4xl mx-auto text-center" data-oid="-2ocjpa">
            <div
              className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
              data-oid="52aunq8"
            >
              <h2 className="text-3xl font-bold mb-4" data-oid="wixjf9t">
                Join Our Learning Community
              </h2>
              <p className="text-xl mb-6 text-blue-100" data-oid="eapfixw">
                Connect with fellow developers, share resources, and grow
                together
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-oid=".x2lv:b"
              >
                <Link
                  href="/resources/community"
                  className="px-6 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                  data-oid="4fpi.cd"
                >
                  <Users className="inline h-5 w-5 mr-2" data-oid="yahcmd8" />
                  Join Community
                </Link>
                <Link
                  href="/notify"
                  className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[hsl(196,80%,45%)] transition-all"
                  data-oid="4y8q762"
                >
                  <TrendingUp
                    className="inline h-5 w-5 mr-2"
                    data-oid="nhvjis-"
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
