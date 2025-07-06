"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  Users,
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

const communityStats = [
  { label: "Active Members", value: "25,000+", icon: Users },
  { label: "Daily Messages", value: "1,500+", icon: MessageCircle },
  { label: "Success Stories", value: "500+", icon: Star },
  { label: "Job Referrals", value: "200+", icon: TrendingUp },
];

const communityFeatures = [
  {
    icon: "💼",
    title: "Job Opportunities",
    description: "Exclusive job postings and referrals from community members",
  },
  {
    icon: "🎯",
    title: "Interview Prep",
    description:
      "Mock interviews, coding challenges, and peer practice sessions",
  },
  {
    icon: "📚",
    title: "Learning Resources",
    description: "Curated study materials, courses, and learning paths",
  },
  {
    icon: "🤝",
    title: "Networking",
    description: "Connect with industry professionals and fellow job seekers",
  },
  {
    icon: "💡",
    title: "Career Guidance",
    description: "Get advice from experienced developers and career coaches",
  },
  {
    icon: "🚀",
    title: "Project Collaboration",
    description:
      "Find teammates for projects and build your portfolio together",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    image: "👩‍💻",
    text: "Found my dream job through a referral in the WhatsApp group. The community support was incredible!",
  },
  {
    name: "Rahul Kumar",
    role: "Full Stack Developer at Flipkart",
    image: "👨‍💻",
    text: "The interview prep sessions on Telegram helped me crack 5 interviews in a row!",
  },
  {
    name: "Anita Patel",
    role: "Frontend Developer at Zomato",
    image: "👩‍🎨",
    text: "Amazing community! Got my resume reviewed and landed 3 job offers within a month.",
  },
];

export default function ResourcesCommunityPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<
    "whatsapp" | "telegram" | null
  >(null);

  const handleJoinCommunity = (platform: "whatsapp" | "telegram") => {
    // These will be replaced with actual links later
    const links = {
      whatsapp: "https://chat.whatsapp.com/your-group-link",
      telegram: "https://t.me/your-channel-link",
    };

    // For now, just show an alert
    alert(
      `Redirecting to ${platform.charAt(0).toUpperCase() + platform.slice(1)} community...`,
    );
    // window.open(links[platform], '_blank');
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
      data-oid="1lfxw4a"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10" data-oid="y-:u10d">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
          data-oid="62y-0f3"
        ></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
          data-oid="7kjtyum"
        ></div>
        <div
          className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
          data-oid="pjjjcsl"
        ></div>
      </div>

      <div className="relative z-10" data-oid="h4r8.a_">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4" data-oid="_e:3th5">
          <div className="max-w-6xl mx-auto text-center" data-oid="giyjc2h">
            <div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
              data-oid="4dh-kh6"
            >
              <Users className="h-4 w-4" data-oid="br6od__" />
              Join 25,000+ Tech Professionals
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
              data-oid="c34dmqy"
            >
              Connect. Learn.
              <span
                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                data-oid="d3qgnfy"
              >
                {" "}
                Grow Together.
              </span>
            </h1>

            <p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              data-oid="akrunuo"
            >
              Join our vibrant community of developers, get instant help, share
              opportunities, and accelerate your career growth.
            </p>

            {/* Community Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
              data-oid="kizu5gc"
            >
              {communityStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                  data-oid="hx.bf_l"
                >
                  <stat.icon
                    className="h-8 w-8 text-[hsl(196,80%,45%)] mx-auto mb-2"
                    data-oid="8706mjd"
                  />

                  <div
                    className="text-2xl font-bold text-gray-800"
                    data-oid="fu::bkq"
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600" data-oid="j7717ez">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Selection */}
        <section className="py-16 px-4" data-oid="od_uk6s">
          <div className="max-w-4xl mx-auto" data-oid="r97ir_b">
            <div className="text-center mb-12" data-oid="qr.o1ly">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="eqtl.zu"
              >
                Choose Your Platform
              </h2>
              <p className="text-xl text-gray-600" data-oid="c-3whhy">
                Join our community on your preferred messaging platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8" data-oid="15-7bn9">
              {/* WhatsApp Community */}
              <div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-oid="c2_yud."
              >
                <div className="text-center mb-6" data-oid="0mt-uns">
                  <div
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    data-oid=".qo:iu8"
                  >
                    <MessageCircle
                      className="h-10 w-10 text-green-600"
                      data-oid="3ygi4f5"
                    />
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-800 mb-2"
                    data-oid="f2vi19o"
                  >
                    WhatsApp Community
                  </h3>
                  <p className="text-gray-600" data-oid="_p7f5oh">
                    Real-time discussions and instant networking
                  </p>
                </div>

                <div className="space-y-4 mb-8" data-oid="l7l67b5">
                  <div className="flex items-center gap-3" data-oid="-9atfb:">
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      data-oid="vr23ej6"
                    ></div>
                    <span className="text-gray-700" data-oid="4sty9k-">
                      15,000+ Active Members
                    </span>
                  </div>
                  <div className="flex items-center gap-3" data-oid="o6dwrij">
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      data-oid="nvih00k"
                    ></div>
                    <span className="text-gray-700" data-oid="f28.7mg">
                      Daily Job Postings
                    </span>
                  </div>
                  <div className="flex items-center gap-3" data-oid="iy-o8u1">
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      data-oid="ra:q_gk"
                    ></div>
                    <span className="text-gray-700" data-oid="la6ka4p">
                      Quick Doubt Resolution
                    </span>
                  </div>
                  <div className="flex items-center gap-3" data-oid="pqaouvt">
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      data-oid="4xyy2cp"
                    ></div>
                    <span className="text-gray-700" data-oid="uj1rvw_">
                      Referral Opportunities
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleJoinCommunity("whatsapp")}
                  className="w-full px-6 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  data-oid="0uxs1qr"
                >
                  <MessageCircle className="h-5 w-5" data-oid="9bj:bk9" />
                  Join WhatsApp Group
                  <ArrowRight className="h-5 w-5" data-oid="tk.x2bb" />
                </button>
              </div>

              {/* Telegram Community */}
              <div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-oid="wtn49:1"
              >
                <div className="text-center mb-6" data-oid="q_.6o-q">
                  <div
                    className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    data-oid="-2rm6eb"
                  >
                    <Zap
                      className="h-10 w-10 text-blue-600"
                      data-oid="2xpdhx7"
                    />
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-800 mb-2"
                    data-oid="q3pywyy"
                  >
                    Telegram Channel
                  </h3>
                  <p className="text-gray-600" data-oid="jz.095c">
                    Organized discussions and resource sharing
                  </p>
                </div>

                <div className="space-y-4 mb-8" data-oid="g09u79q">
                  <div className="flex items-center gap-3" data-oid="w1za:t6">
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      data-oid="ky0d8vn"
                    ></div>
                    <span className="text-gray-700" data-oid="pu0d7yu">
                      10,000+ Subscribers
                    </span>
                  </div>
                  <div className="flex items-center gap-3" data-oid="zvvevgv">
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      data-oid="7mbh5_v"
                    ></div>
                    <span className="text-gray-700" data-oid="dan_3.6">
                      Structured Learning Content
                    </span>
                  </div>
                  <div className="flex items-center gap-3" data-oid="rhi.fh2">
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      data-oid="3q73aea"
                    ></div>
                    <span className="text-gray-700" data-oid="250s22w">
                      Weekly Tech Updates
                    </span>
                  </div>
                  <div className="flex items-center gap-3" data-oid="bdm8ki4">
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      data-oid="075we6_"
                    ></div>
                    <span className="text-gray-700" data-oid="yilb9o.">
                      Interview Experiences
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleJoinCommunity("telegram")}
                  className="w-full px-6 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  data-oid="rgjmk48"
                >
                  <Zap className="h-5 w-5" data-oid="aznlms0" />
                  Join Telegram Channel
                  <ArrowRight className="h-5 w-5" data-oid="1iujejm" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 px-4" data-oid="uifuu4d">
          <div className="max-w-6xl mx-auto" data-oid="-39s-i6">
            <div className="text-center mb-12" data-oid="34sle.a">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="ney-_w1"
              >
                What You'll Get
              </h2>
              <p className="text-xl text-gray-600" data-oid="dl.zcxl">
                Exclusive benefits for community members
              </p>
            </div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              data-oid="zpw59n."
            >
              {communityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                  data-oid="p42l2aq"
                >
                  <div className="text-4xl mb-4" data-oid="uj69rjh">
                    {feature.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-800 mb-2"
                    data-oid="ohvs974"
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600" data-oid="7z9ap-s">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4" data-oid="7tp94hh">
          <div className="max-w-6xl mx-auto" data-oid="8qcv:1x">
            <div className="text-center mb-12" data-oid="ivjv4ft">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="6_.pjt0"
              >
                Success Stories
              </h2>
              <p className="text-xl text-gray-600" data-oid="-j5r2b7">
                Real stories from our community members
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" data-oid="ary4279">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                  data-oid="j:w.ap5"
                >
                  <div
                    className="flex items-center gap-4 mb-4"
                    data-oid="q8m:inv"
                  >
                    <div className="text-3xl" data-oid="snvtjsk">
                      {testimonial.image}
                    </div>
                    <div data-oid="yu-vp2m">
                      <h4
                        className="font-bold text-gray-800"
                        data-oid="sl3bikk"
                      >
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600" data-oid="lm9kx04">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic" data-oid="r3uln_t">
                    "{testimonial.text}"
                  </p>
                  <div
                    className="flex items-center gap-1 mt-4"
                    data-oid="v40es90"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-500 fill-current"
                        data-oid="-6cm6qy"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="py-16 px-4" data-oid="ot2lfwb">
          <div className="max-w-4xl mx-auto" data-oid="ni8w1s6">
            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
              data-oid="e2e9m_q"
            >
              <div className="text-center mb-8" data-oid="co43m91">
                <Shield
                  className="h-12 w-12 text-[hsl(196,80%,45%)] mx-auto mb-4"
                  data-oid="6jep--z"
                />

                <h2
                  className="text-2xl font-bold text-gray-800 mb-4"
                  data-oid="ozf2j_o"
                >
                  Community Guidelines
                </h2>
                <p className="text-gray-600" data-oid="bqclaqd">
                  Help us maintain a positive and productive environment
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6" data-oid="pr5hj4v">
                <div className="space-y-4" data-oid="361suux">
                  <h3
                    className="font-semibold text-gray-800"
                    data-oid="gky:vim"
                  >
                    ✅ Do's
                  </h3>
                  <ul className="space-y-2 text-gray-600" data-oid="rhlw14-">
                    <li data-oid="phi-tdg">
                      • Share relevant job opportunities
                    </li>
                    <li data-oid="raszam-">
                      • Help fellow members with doubts
                    </li>
                    <li data-oid="ymg:4.c">• Share your success stories</li>
                    <li data-oid="1gh:pp.">• Be respectful and professional</li>
                    <li data-oid="3kxjadl">
                      • Use appropriate channels for discussions
                    </li>
                  </ul>
                </div>
                <div className="space-y-4" data-oid="wa.xlmv">
                  <h3
                    className="font-semibold text-gray-800"
                    data-oid="oay43jz"
                  >
                    ❌ Don'ts
                  </h3>
                  <ul className="space-y-2 text-gray-600" data-oid="m-.o3-s">
                    <li data-oid="0xyx:2g">• No spam or promotional content</li>
                    <li data-oid="v70-gy0">
                      • No offensive or inappropriate language
                    </li>
                    <li data-oid=":rbqcp1">
                      • No sharing of personal information
                    </li>
                    <li data-oid=":ws9c_t">• No off-topic discussions</li>
                    <li data-oid="cxborn9">• No duplicate job postings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4" data-oid="gf9pm93">
          <div className="max-w-4xl mx-auto text-center" data-oid="xbyj7ln">
            <div
              className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
              data-oid="tnjm-lh"
            >
              <h2 className="text-3xl font-bold mb-4" data-oid="t:hgmim">
                Ready to Join?
              </h2>
              <p className="text-xl mb-6 text-blue-100" data-oid="87:4lxe">
                Don't miss out on exclusive opportunities and valuable
                connections
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-oid="mxmy-xi"
              >
                <button
                  onClick={() => handleJoinCommunity("whatsapp")}
                  className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105"
                  data-oid="gbl2x1q"
                >
                  <MessageCircle
                    className="inline h-5 w-5 mr-2"
                    data-oid="eke-9os"
                  />
                  Join WhatsApp
                </button>
                <button
                  onClick={() => handleJoinCommunity("telegram")}
                  className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105"
                  data-oid="24gd:mt"
                >
                  <Zap className="inline h-5 w-5 mr-2" data-oid="9joyzna" />
                  Join Telegram
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
