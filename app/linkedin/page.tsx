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
      data-oid="agbvcdk"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10" data-oid="w7sgo3z">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
          data-oid="17f_8ub"
        ></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
          data-oid="pj2gfiw"
        ></div>
        <div
          className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
          data-oid="2rb-g6t"
        ></div>
      </div>

      <div className="relative z-10" data-oid="ngkbdwu">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4" data-oid="njikitd">
          <div className="max-w-6xl mx-auto text-center" data-oid="2bd7:fp">
            <div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
              data-oid="n23yfvo"
            >
              <Linkedin className="h-4 w-4" data-oid="syheuk." />
              Professional Networking Made Easy
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
              data-oid="s10061d"
            >
              Master Your
              <span
                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                data-oid="6a10ejs"
              >
                {" "}
                LinkedIn Presence
              </span>
            </h1>

            <p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              data-oid="nx0c078"
            >
              Build a powerful LinkedIn profile, expand your professional
              network, and unlock career opportunities with our expert guidance
              and community support.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              data-oid="4k5w58d"
            >
              <button
                onClick={handleLinkedInRedirect}
                className="px-8 py-4 bg-[#0077B5] text-white rounded-xl font-medium hover:bg-[#005885] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                data-oid="f-td1ax"
              >
                <Linkedin className="h-5 w-5" data-oid="wgbi3s6" />
                Follow Us on LinkedIn
                <ExternalLink className="h-4 w-4" data-oid="zgly5p2" />
              </button>
              <Link
                href="/resources"
                className="px-8 py-4 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-xl font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all"
                data-oid="8:k2sxm"
              >
                <BookOpen className="inline h-5 w-5 mr-2" data-oid="7m7f.ko" />
                LinkedIn Resources
              </Link>
            </div>

            {/* LinkedIn Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              data-oid=":j7p_ap"
            >
              {linkedinStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                  data-oid="k0rq_lj"
                >
                  <stat.icon
                    className="h-8 w-8 text-[#0077B5] mx-auto mb-2"
                    data-oid="zf8olms"
                  />

                  <div
                    className="text-2xl font-bold text-gray-800"
                    data-oid="yzdl_74"
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600" data-oid="qn8t.af">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LinkedIn Features */}
        <section className="py-16 px-4" data-oid="if3xmav">
          <div className="max-w-6xl mx-auto" data-oid="-0fqpf9">
            <div className="text-center mb-12" data-oid="mt:67-:">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="igszqba"
              >
                LinkedIn Success Services
              </h2>
              <p className="text-xl text-gray-600" data-oid="i41egno">
                Everything you need to build a powerful LinkedIn presence
              </p>
            </div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              data-oid="e_z67:a"
            >
              {linkedinFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  data-oid="ak5x8md"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                    data-oid="n9lk241"
                  >
                    {feature.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-800 mb-2 text-center"
                    data-oid="ga.jk6w"
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-gray-600 text-center mb-4"
                    data-oid="t14jc0_"
                  >
                    {feature.description}
                  </p>
                  <button
                    className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                    data-oid="kq21azy"
                  >
                    {feature.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LinkedIn Tips */}
        <section className="py-16 px-4" data-oid="2_lxnmn">
          <div className="max-w-6xl mx-auto" data-oid="hc6nhw-">
            <div className="text-center mb-12" data-oid="_v:0cvp">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="z1ep-7p"
              >
                LinkedIn Success Tips
              </h2>
              <p className="text-xl text-gray-600" data-oid="_s9h76a">
                Expert advice to maximize your LinkedIn impact
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" data-oid="pj91qa5">
              {linkedinTips.map((section, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                  data-oid="fu6va7g"
                >
                  <h3
                    className="text-xl font-bold text-gray-800 mb-4 text-center"
                    data-oid="mny2jfa"
                  >
                    {section.category}
                  </h3>
                  <div className="space-y-3" data-oid="8l:9ere">
                    {section.tips.map((tip, tipIndex) => (
                      <div
                        key={tipIndex}
                        className="flex items-start gap-3"
                        data-oid="t665ocy"
                      >
                        <CheckCircle
                          className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                          data-oid="97uskg4"
                        />

                        <span
                          className="text-gray-700 text-sm"
                          data-oid="ms_b6c_"
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
        <section className="py-16 px-4" data-oid="vchuww5">
          <div className="max-w-6xl mx-auto" data-oid="wkdz7qd">
            <div className="text-center mb-12" data-oid="b0584yc">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="i23y.mz"
              >
                LinkedIn Success Stories
              </h2>
              <p className="text-xl text-gray-600" data-oid="c2cg0wx">
                Real results from our community members
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" data-oid="o63qt1_">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                  data-oid="q-_751r"
                >
                  <div className="text-center mb-4" data-oid="4j-a5ip">
                    <div className="text-4xl mb-2" data-oid="hl-49xp">
                      {story.image}
                    </div>
                    <h3 className="font-bold text-gray-800" data-oid="c8ximp:">
                      {story.name}
                    </h3>
                    <p className="text-sm text-[#0077B5]" data-oid="s19fy.a">
                      {story.role}
                    </p>
                  </div>
                  <p
                    className="text-gray-700 italic text-center mb-4"
                    data-oid="_:h8p_1"
                  >
                    "{story.story}"
                  </p>
                  <div className="text-center" data-oid="gmi_0te">
                    <span
                      className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                      data-oid="wes11-2"
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
        <section className="py-16 px-4" data-oid="5wu0q.y">
          <div className="max-w-4xl mx-auto" data-oid="-mmvzgo">
            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
              data-oid="zl9syrq"
            >
              <div className="text-center mb-8" data-oid="ako.jrj">
                <h2
                  className="text-2xl font-bold text-gray-800 mb-4"
                  data-oid="xlyu2pd"
                >
                  Weekly LinkedIn Content Calendar
                </h2>
                <p className="text-gray-600" data-oid="t1m:hii">
                  Stay consistent with our proven content strategy
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6" data-oid="jnlmt_x">
                <div className="space-y-4" data-oid="ru:2npd">
                  <div
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                    data-oid="t9zii:t"
                  >
                    <div
                      className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      data-oid="npff70l"
                    >
                      M
                    </div>
                    <div data-oid=".4::c0-">
                      <div
                        className="font-medium text-gray-800"
                        data-oid="y2wo1r9"
                      >
                        Monday Motivation
                      </div>
                      <div className="text-sm text-gray-600" data-oid="9_aqvw.">
                        Share career insights or achievements
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                    data-oid=".oeaap3"
                  >
                    <div
                      className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      data-oid="bji3ufn"
                    >
                      T
                    </div>
                    <div data-oid="eeg4l5e">
                      <div
                        className="font-medium text-gray-800"
                        data-oid="orgbmoq"
                      >
                        Tech Tuesday
                      </div>
                      <div className="text-sm text-gray-600" data-oid="zdje3:v">
                        Share technical knowledge or tutorials
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                    data-oid="0:0hhgl"
                  >
                    <div
                      className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      data-oid="obxw-_y"
                    >
                      W
                    </div>
                    <div data-oid="yo74cwo">
                      <div
                        className="font-medium text-gray-800"
                        data-oid="rz:wjm8"
                      >
                        Wisdom Wednesday
                      </div>
                      <div className="text-sm text-gray-600" data-oid="w6f.7:.">
                        Share lessons learned or advice
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4" data-oid="ew-cei0">
                  <div
                    className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
                    data-oid="mgiy4fj"
                  >
                    <div
                      className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      data-oid="0.2wpiq"
                    >
                      T
                    </div>
                    <div data-oid="26ciov:">
                      <div
                        className="font-medium text-gray-800"
                        data-oid="mn3_gz0"
                      >
                        Throwback Thursday
                      </div>
                      <div className="text-sm text-gray-600" data-oid="hn0nq81">
                        Share your journey or milestones
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg"
                    data-oid="gfnvlxn"
                  >
                    <div
                      className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      data-oid="hqm5:a8"
                    >
                      F
                    </div>
                    <div data-oid="__yek-y">
                      <div
                        className="font-medium text-gray-800"
                        data-oid="qm4dj0t"
                      >
                        Feature Friday
                      </div>
                      <div className="text-sm text-gray-600" data-oid="zc7v2j6">
                        Highlight tools, resources, or people
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg"
                    data-oid="liu4fy1"
                  >
                    <div
                      className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      data-oid="_2bpxx8"
                    >
                      S
                    </div>
                    <div data-oid="uzvfacb">
                      <div
                        className="font-medium text-gray-800"
                        data-oid="i:qr._g"
                      >
                        Saturday Spotlight
                      </div>
                      <div className="text-sm text-gray-600" data-oid="joxp3_i">
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
        <section className="py-16 px-4" data-oid="u6-dakb">
          <div className="max-w-4xl mx-auto text-center" data-oid=":la6w.2">
            <div
              className="bg-gradient-to-r from-[#0077B5] to-[#005885] rounded-2xl p-8 text-white"
              data-oid="azhpb3y"
            >
              <h2 className="text-3xl font-bold mb-4" data-oid="2bgmawm">
                Ready to Transform Your LinkedIn?
              </h2>
              <p className="text-xl mb-6 text-blue-100" data-oid="uov7.k6">
                Join thousands of professionals who've accelerated their careers
                through LinkedIn
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-oid="g9ksfrl"
              >
                <button
                  onClick={handleLinkedInRedirect}
                  className="px-6 py-3 bg-white text-[#0077B5] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                  data-oid="ig1o9b3"
                >
                  <Linkedin
                    className="inline h-5 w-5 mr-2"
                    data-oid="rklorac"
                  />
                  Follow Our LinkedIn
                </button>
                <Link
                  href="/resources/community"
                  className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[#0077B5] transition-all"
                  data-oid="u_jochr"
                >
                  <Users className="inline h-5 w-5 mr-2" data-oid="6sfk0zs" />
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
