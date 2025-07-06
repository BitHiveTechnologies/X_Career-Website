"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Linkedin,
  Users,
  TrendingUp,
  Award,
  ExternalLink,
  Share2,
  BookOpen,
  Target,
  Zap,
  CheckCircle,
} from "lucide-react";

const linkedinFeatures = [
  {
    icon: "🎯",
    title: "Profile Optimization",
    description: "Get your LinkedIn profile reviewed by industry experts",
    action: "Optimize Profile",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🤝",
    title: "Networking Events",
    description: "Join exclusive LinkedIn networking events and webinars",
    action: "View Events",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "📈",
    title: "Content Strategy",
    description: "Learn how to create engaging content that gets noticed",
    action: "Learn More",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "💼",
    title: "Job Referrals",
    description: "Get referred to top companies through our LinkedIn network",
    action: "Get Referred",
    color: "from-orange-500 to-red-500",
  },
];

const linkedinStats = [
  { label: "LinkedIn Connections", value: "100K+", icon: Users },
  { label: "Profile Views", value: "50K+", icon: TrendingUp },
  { label: "Success Stories", value: "1,000+", icon: Award },
  { label: "Network Growth", value: "25%", icon: Zap },
];

const linkedinTips = [
  {
    category: "Profile Optimization",
    tips: [
      "Use a professional headshot as your profile picture",
      "Write a compelling headline that showcases your value",
      "Craft a summary that tells your professional story",
      "Add relevant skills and get endorsements",
      "Include quantifiable achievements in your experience",
    ],
  },
  {
    category: "Content Strategy",
    tips: [
      "Share industry insights and trends regularly",
      "Comment thoughtfully on others' posts",
      "Create original content about your expertise",
      "Use relevant hashtags to increase visibility",
      "Engage with your network consistently",
    ],
  },
  {
    category: "Networking",
    tips: [
      "Connect with colleagues and industry professionals",
      "Send personalized connection requests",
      "Participate in LinkedIn groups and discussions",
      "Attend virtual networking events",
      "Follow up with new connections meaningfully",
    ],
  },
];

const successStories = [
  {
    name: "Rajesh Kumar",
    role: "Software Engineer at Google",
    image: "👨‍💻",
    story:
      "Optimized my LinkedIn profile and got 5 interview calls in 2 weeks!",
    growth: "+300% profile views",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager at Microsoft",
    image: "👩‍💼",
    story:
      "LinkedIn networking helped me transition from developer to PM role.",
    growth: "+500 connections",
  },
  {
    name: "Amit Patel",
    role: "Data Scientist at Amazon",
    image: "👨‍🔬",
    story: "Got my dream job through a LinkedIn referral from our community.",
    growth: "+200% engagement",
  },
];

export default function LinkedInPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const handleLinkedInRedirect = () => {
    // This will be replaced with actual LinkedIn URL later
    alert("Redirecting to LinkedIn page...");
    // window.open('https://linkedin.com/company/your-company', '_blank');
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
      data-oid="hz4q558"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10" data-oid="bz2ralp">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
          data-oid="g8.wb8h"
        ></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
          data-oid="d8glvxs"
        ></div>
        <div
          className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
          data-oid="lp92-xu"
        ></div>
      </div>

      <div className="relative z-10" data-oid="hx_l162">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4" data-oid="st_5av.">
          <div className="max-w-6xl mx-auto text-center" data-oid="4jtyf7u">
            <div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
              data-oid="q7z:2ej"
            >
              <Linkedin className="h-4 w-4" data-oid=".r30a8x" />
              Professional Networking Made Easy
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
              data-oid="pjkamcl"
            >
              Master Your
              <span
                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                data-oid="2e1knpv"
              >
                {" "}
                LinkedIn Presence
              </span>
            </h1>

            <p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              data-oid="3ogwcgr"
            >
              Build a powerful LinkedIn profile, expand your professional
              network, and unlock career opportunities with our expert guidance
              and community support.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              data-oid="kcd2re5"
            >
              <button
                onClick={handleLinkedInRedirect}
                className="px-8 py-4 bg-[#0077B5] text-white rounded-xl font-medium hover:bg-[#005885] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                data-oid="zg4ebhf"
              >
                <Linkedin className="h-5 w-5" data-oid=".2be8a:" />
                Follow Us on LinkedIn
                <ExternalLink className="h-4 w-4" data-oid="ussxy5s" />
              </button>
              <Link
                href="/resources"
                className="px-8 py-4 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-xl font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all"
                data-oid="kgq:7zs"
              >
                <BookOpen className="inline h-5 w-5 mr-2" data-oid="xfquytf" />
                LinkedIn Resources
              </Link>
            </div>

            {/* LinkedIn Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              data-oid=".45j7lo"
            >
              {linkedinStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                  data-oid="ido75gy"
                >
                  <stat.icon
                    className="h-8 w-8 text-[#0077B5] mx-auto mb-2"
                    data-oid="m:bkvwm"
                  />

                  <div
                    className="text-2xl font-bold text-gray-800"
                    data-oid="k3f4p1v"
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600" data-oid="r6w0qca">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LinkedIn Features */}
        <section className="py-16 px-4" data-oid="u47mc8m">
          <div className="max-w-6xl mx-auto" data-oid="9:f2d1a">
            <div className="text-center mb-12" data-oid="te2r3-c">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="l85t867"
              >
                LinkedIn Success Services
              </h2>
              <p className="text-xl text-gray-600" data-oid="xe12lrm">
                Everything you need to build a powerful LinkedIn presence
              </p>
            </div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              data-oid="hmns5zk"
            >
              {linkedinFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  data-oid=".d1st5i"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                    data-oid="mg-hqel"
                  >
                    {feature.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-800 mb-2 text-center"
                    data-oid="iwsg_4q"
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-gray-600 text-center mb-4"
                    data-oid=":d6w5_0"
                  >
                    {feature.description}
                  </p>
                  <button
                    className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                    data-oid="sisu9l6"
                  >
                    {feature.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LinkedIn Tips */}
        <section className="py-16 px-4" data-oid="_9dmkkz">
          <div className="max-w-6xl mx-auto" data-oid="1c41ooh">
            <div className="text-center mb-12" data-oid="isi482:">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="tc5a8ah"
              >
                LinkedIn Success Tips
              </h2>
              <p className="text-xl text-gray-600" data-oid="w2n9vq0">
                Expert advice to maximize your LinkedIn impact
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" data-oid="05945xg">
              {linkedinTips.map((section, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                  data-oid="n71x7ti"
                >
                  <h3
                    className="text-xl font-bold text-gray-800 mb-4 text-center"
                    data-oid="9m7umwt"
                  >
                    {section.category}
                  </h3>
                  <div className="space-y-3" data-oid="6o-.433">
                    {section.tips.map((tip, tipIndex) => (
                      <div
                        key={tipIndex}
                        className="flex items-start gap-3"
                        data-oid="-67.cbe"
                      >
                        <CheckCircle
                          className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                          data-oid="7k5e7-9"
                        />

                        <span
                          className="text-gray-700 text-sm"
                          data-oid="by_sqy6"
                        >
                          {tip}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4" data-oid="idzhk.h">
          <div className="max-w-6xl mx-auto" data-oid="wy6gyx.">
            <div className="text-center mb-12" data-oid="yqk9_88">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="olim4oj"
              >
                LinkedIn Success Stories
              </h2>
              <p className="text-xl text-gray-600" data-oid="w72aute">
                Real results from our community members
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" data-oid="xyb7k6h">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                  data-oid="m2jvjyt"
                >
                  <div className="text-center mb-4" data-oid="io7r9y.">
                    <div className="text-4xl mb-2" data-oid=":9x9qv6">
                      {story.image}
                    </div>
                    <h3 className="font-bold text-gray-800" data-oid="c75_-b9">
                      {story.name}
                    </h3>
                    <p className="text-sm text-[#0077B5]" data-oid="n8d9fix">
                      {story.role}
                    </p>
                  </div>
                  <p
                    className="text-gray-700 italic text-center mb-4"
                    data-oid="_v4-z2i"
                  >
                    "{story.story}"
                  </p>
                  <div className="text-center" data-oid="mhlf59d">
                    <span
                      className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                      data-oid="d_gsmx:"
                    >
                      {story.growth}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LinkedIn Content Calendar */}
        <section className="py-16 px-4" data-oid="pa2l0:z">
          <div className="max-w-4xl mx-auto" data-oid="sa3zx1q">
            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
              data-oid="4q_wgq."
            >
              <div className="text-center mb-8" data-oid="1yq.tyu">
                <h2
                  className="text-2xl font-bold text-gray-800 mb-4"
                  data-oid="jw4:q6q"
                >
                  Weekly LinkedIn Content Calendar
                </h2>
                <p className="text-gray-600" data-oid="a7lmvd3">
                  Stay consistent with our proven content strategy
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6" data-oid="htz0o9d">
                <div className="space-y-4" data-oid="g.xp7o8">
                  <div
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                    data-oid="_.n01zb"
                  >
                    <div
                      className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      data-oid="logvios"
                    >
                      M
                    </div>
                    <div data-oid="b55nrqu">
                      <div
                        className="font-medium text-gray-800"
                        data-oid="3anwv3o"
                      >
                        Monday Motivation
                      </div>
                      <div className="text-sm text-gray-600" data-oid="m1yvoeq">
                        Share career insights or achievements
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                    data-oid="-oq87xw"
                  >
                    <div
                      className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      data-oid="9s9gsqc"
                    >
                      T
                    </div>
                    <div data-oid="a4cbji5">
                      <div
                        className="font-medium text-gray-800"
                        data-oid="c0so84p"
                      >
                        Tech Tuesday
                      </div>
                      <div className="text-sm text-gray-600" data-oid="145h2go">
                        Share technical knowledge or tutorials
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                    data-oid="xqu_c_0"
                  >
                    <div
                      className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      data-oid="3ne0za7"
                    >
                      W
                    </div>
                    <div data-oid="3d84ll7">
                      <div
                        className="font-medium text-gray-800"
                        data-oid="i1vf5mf"
                      >
                        Wisdom Wednesday
                      </div>
                      <div className="text-sm text-gray-600" data-oid="zixhp.6">
                        Share lessons learned or advice
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4" data-oid="8lm4qmi">
                  <div
                    className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
                    data-oid="_yljgux"
                  >
                    <div
                      className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      data-oid="wrwljro"
                    >
                      T
                    </div>
                    <div data-oid="mx25u9g">
                      <div
                        className="font-medium text-gray-800"
                        data-oid=".aq:mz6"
                      >
                        Throwback Thursday
                      </div>
                      <div className="text-sm text-gray-600" data-oid="kcnibol">
                        Share your journey or milestones
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg"
                    data-oid="1_f0.ju"
                  >
                    <div
                      className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      data-oid="hldbkec"
                    >
                      F
                    </div>
                    <div data-oid="gw.up9s">
                      <div
                        className="font-medium text-gray-800"
                        data-oid="k2mv5fb"
                      >
                        Feature Friday
                      </div>
                      <div className="text-sm text-gray-600" data-oid="8uya2ey">
                        Highlight tools, resources, or people
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg"
                    data-oid="0ugrff4"
                  >
                    <div
                      className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      data-oid="qz.4a6z"
                    >
                      S
                    </div>
                    <div data-oid="f-nugy5">
                      <div
                        className="font-medium text-gray-800"
                        data-oid="37fts-x"
                      >
                        Saturday Spotlight
                      </div>
                      <div className="text-sm text-gray-600" data-oid="sb4mw7n">
                        Engage with community content
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4" data-oid="wk26spo">
          <div className="max-w-4xl mx-auto text-center" data-oid="hybnc.i">
            <div
              className="bg-gradient-to-r from-[#0077B5] to-[#005885] rounded-2xl p-8 text-white"
              data-oid="cd0_o3j"
            >
              <h2 className="text-3xl font-bold mb-4" data-oid="pi40ial">
                Ready to Transform Your LinkedIn?
              </h2>
              <p className="text-xl mb-6 text-blue-100" data-oid="1gqef4q">
                Join thousands of professionals who've accelerated their careers
                through LinkedIn
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-oid="tpowpiv"
              >
                <button
                  onClick={handleLinkedInRedirect}
                  className="px-6 py-3 bg-white text-[#0077B5] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                  data-oid="xkkqa6d"
                >
                  <Linkedin
                    className="inline h-5 w-5 mr-2"
                    data-oid="5mn7_90"
                  />
                  Follow Our LinkedIn
                </button>
                <Link
                  href="/resources/community"
                  className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[#0077B5] transition-all"
                  data-oid="t0pg.i_"
                >
                  <Users className="inline h-5 w-5 mr-2" data-oid="eqyplu-" />
                  Join Community
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
