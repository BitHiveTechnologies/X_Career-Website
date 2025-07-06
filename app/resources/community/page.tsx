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
      data-oid="s_.bx01"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10" data-oid="cjtj.ie">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
          data-oid="wg6s36l"
        ></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
          data-oid="sc9xlxs"
        ></div>
        <div
          className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
          data-oid="a390s0b"
        ></div>
      </div>

      <div className="relative z-10" data-oid="98yon8n">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4" data-oid="y.655:7">
          <div className="max-w-6xl mx-auto text-center" data-oid="692j88o">
            <div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
              data-oid="ss6e447"
            >
              <Users className="h-4 w-4" data-oid="uj6qsnv" />
              Join 25,000+ Tech Professionals
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
              data-oid="ce96ro9"
            >
              Connect. Learn.
              <span
                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                data-oid="_nknwe1"
              >
                {" "}
                Grow Together.
              </span>
            </h1>

            <p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              data-oid="vt2ipxg"
            >
              Join our vibrant community of developers, get instant help, share
              opportunities, and accelerate your career growth.
            </p>

            {/* Community Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
              data-oid="rsu0bal"
            >
              {communityStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                  data-oid=":m8dn8f"
                >
                  <stat.icon
                    className="h-8 w-8 text-[hsl(196,80%,45%)] mx-auto mb-2"
                    data-oid=".m2_5_f"
                  />

                  <div
                    className="text-2xl font-bold text-gray-800"
                    data-oid="_t1882-"
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600" data-oid="fup:nuf">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Selection */}
        <section className="py-16 px-4" data-oid="vt:ohx8">
          <div className="max-w-4xl mx-auto" data-oid="x3k4jhg">
            <div className="text-center mb-12" data-oid="4-v4-d4">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="ceca1as"
              >
                Choose Your Platform
              </h2>
              <p className="text-xl text-gray-600" data-oid=".h_pha4">
                Join our community on your preferred messaging platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8" data-oid="2p93cl.">
              {/* WhatsApp Community */}
              <div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-oid="_xnir36"
              >
                <div className="text-center mb-6" data-oid="5hki_-e">
                  <div
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    data-oid="aw8.v.-"
                  >
                    <MessageCircle
                      className="h-10 w-10 text-green-600"
                      data-oid="ez3k6cm"
                    />
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-800 mb-2"
                    data-oid="yiqqwyz"
                  >
                    WhatsApp Community
                  </h3>
                  <p className="text-gray-600" data-oid="tuk91vc">
                    Real-time discussions and instant networking
                  </p>
                </div>

                <div className="space-y-4 mb-8" data-oid="n1qi565">
                  <div className="flex items-center gap-3" data-oid="myr3-f1">
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      data-oid="faui0oe"
                    ></div>
                    <span className="text-gray-700" data-oid="ofi3i94">
                      15,000+ Active Members
                    </span>
                  </div>
                  <div className="flex items-center gap-3" data-oid="bti2bsa">
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      data-oid="8v-e4zs"
                    ></div>
                    <span className="text-gray-700" data-oid="5v-swa0">
                      Daily Job Postings
                    </span>
                  </div>
                  <div className="flex items-center gap-3" data-oid="5ihmvf6">
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      data-oid="m67sox."
                    ></div>
                    <span className="text-gray-700" data-oid="elzp8w-">
                      Quick Doubt Resolution
                    </span>
                  </div>
                  <div className="flex items-center gap-3" data-oid="53j426z">
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      data-oid="fu9u4r7"
                    ></div>
                    <span className="text-gray-700" data-oid="c1pmzw0">
                      Referral Opportunities
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleJoinCommunity("whatsapp")}
                  className="w-full px-6 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  data-oid="6oytmcv"
                >
                  <MessageCircle className="h-5 w-5" data-oid="pk1g9o:" />
                  Join WhatsApp Group
                  <ArrowRight className="h-5 w-5" data-oid="su2pcv4" />
                </button>
              </div>

              {/* Telegram Community */}
              <div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-oid="y74v4y4"
              >
                <div className="text-center mb-6" data-oid="xveg71n">
                  <div
                    className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    data-oid="kpb9lfp"
                  >
                    <Zap
                      className="h-10 w-10 text-blue-600"
                      data-oid=".sofw5p"
                    />
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-800 mb-2"
                    data-oid="i9ey_2l"
                  >
                    Telegram Channel
                  </h3>
                  <p className="text-gray-600" data-oid="hyxddos">
                    Organized discussions and resource sharing
                  </p>
                </div>

                <div className="space-y-4 mb-8" data-oid="zck5it0">
                  <div className="flex items-center gap-3" data-oid="k.nhmpq">
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      data-oid="33a02we"
                    ></div>
                    <span className="text-gray-700" data-oid="7:s4afd">
                      10,000+ Subscribers
                    </span>
                  </div>
                  <div className="flex items-center gap-3" data-oid="l_tvjz9">
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      data-oid="8-o_i.2"
                    ></div>
                    <span className="text-gray-700" data-oid="h.i8jf1">
                      Structured Learning Content
                    </span>
                  </div>
                  <div className="flex items-center gap-3" data-oid="uy.qd..">
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      data-oid="_1h_7a1"
                    ></div>
                    <span className="text-gray-700" data-oid="u2:k6g_">
                      Weekly Tech Updates
                    </span>
                  </div>
                  <div className="flex items-center gap-3" data-oid="yjunpd:">
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      data-oid="81u1ogr"
                    ></div>
                    <span className="text-gray-700" data-oid="e9wdy93">
                      Interview Experiences
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleJoinCommunity("telegram")}
                  className="w-full px-6 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  data-oid="rp.wm65"
                >
                  <Zap className="h-5 w-5" data-oid="7q17t9z" />
                  Join Telegram Channel
                  <ArrowRight className="h-5 w-5" data-oid="mau-52o" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 px-4" data-oid="zpur-0t">
          <div className="max-w-6xl mx-auto" data-oid="kdhqqxc">
            <div className="text-center mb-12" data-oid="yu3gbha">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="yn.988q"
              >
                What You'll Get
              </h2>
              <p className="text-xl text-gray-600" data-oid="40bups6">
                Exclusive benefits for community members
              </p>
            </div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              data-oid="_x:0403"
            >
              {communityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                  data-oid="oz2hm4w"
                >
                  <div className="text-4xl mb-4" data-oid="w.ukx-2">
                    {feature.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-800 mb-2"
                    data-oid="-yb-xud"
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600" data-oid="99d4i-5">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4" data-oid="jt4g8vx">
          <div className="max-w-6xl mx-auto" data-oid="n7n8_0r">
            <div className="text-center mb-12" data-oid="7ea-uo2">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid=":jaucka"
              >
                Success Stories
              </h2>
              <p className="text-xl text-gray-600" data-oid="tl74gkg">
                Real stories from our community members
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" data-oid="xc3fu10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                  data-oid="68om08l"
                >
                  <div
                    className="flex items-center gap-4 mb-4"
                    data-oid="zv:k-tu"
                  >
                    <div className="text-3xl" data-oid="i0evbas">
                      {testimonial.image}
                    </div>
                    <div data-oid="lk3w7hp">
                      <h4
                        className="font-bold text-gray-800"
                        data-oid="dj2thsb"
                      >
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600" data-oid="3.goykk">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic" data-oid="vnc5:8v">
                    "{testimonial.text}"
                  </p>
                  <div
                    className="flex items-center gap-1 mt-4"
                    data-oid="-vzyqqm"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-500 fill-current"
                        data-oid="1hdfswo"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="py-16 px-4" data-oid="c-z5c9q">
          <div className="max-w-4xl mx-auto" data-oid="9dl5z1q">
            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
              data-oid="p49xitd"
            >
              <div className="text-center mb-8" data-oid="0_-2sp4">
                <Shield
                  className="h-12 w-12 text-[hsl(196,80%,45%)] mx-auto mb-4"
                  data-oid="dxqb6l3"
                />

                <h2
                  className="text-2xl font-bold text-gray-800 mb-4"
                  data-oid="9mv_1f2"
                >
                  Community Guidelines
                </h2>
                <p className="text-gray-600" data-oid="gwk721s">
                  Help us maintain a positive and productive environment
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6" data-oid="_it3xbq">
                <div className="space-y-4" data-oid="rn..078">
                  <h3
                    className="font-semibold text-gray-800"
                    data-oid="tr1jxz0"
                  >
                    ✅ Do's
                  </h3>
                  <ul className="space-y-2 text-gray-600" data-oid="_e:qxmz">
                    <li data-oid="43n9y09">
                      • Share relevant job opportunities
                    </li>
                    <li data-oid="8-.xnhe">
                      • Help fellow members with doubts
                    </li>
                    <li data-oid="n74txw.">• Share your success stories</li>
                    <li data-oid="wmowgx0">• Be respectful and professional</li>
                    <li data-oid="qs37sgu">
                      • Use appropriate channels for discussions
                    </li>
                  </ul>
                </div>
                <div className="space-y-4" data-oid="ffebyh_">
                  <h3
                    className="font-semibold text-gray-800"
                    data-oid="npw1gby"
                  >
                    ❌ Don'ts
                  </h3>
                  <ul className="space-y-2 text-gray-600" data-oid="0ff005n">
                    <li data-oid="oyfn6o:">• No spam or promotional content</li>
                    <li data-oid="dyhmr-z">
                      • No offensive or inappropriate language
                    </li>
                    <li data-oid="mj9ojmj">
                      • No sharing of personal information
                    </li>
                    <li data-oid="iutyw5_">• No off-topic discussions</li>
                    <li data-oid="hp7tk__">• No duplicate job postings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4" data-oid="gcdb48z">
          <div className="max-w-4xl mx-auto text-center" data-oid="wu.k48t">
            <div
              className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
              data-oid="q3_8myc"
            >
              <h2 className="text-3xl font-bold mb-4" data-oid="txr:6d7">
                Ready to Join?
              </h2>
              <p className="text-xl mb-6 text-blue-100" data-oid="0n121-g">
                Don't miss out on exclusive opportunities and valuable
                connections
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-oid="4.z4cu2"
              >
                <button
                  onClick={() => handleJoinCommunity("whatsapp")}
                  className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105"
                  data-oid="s1.tjaj"
                >
                  <MessageCircle
                    className="inline h-5 w-5 mr-2"
                    data-oid="xttlcmx"
                  />
                  Join WhatsApp
                </button>
                <button
                  onClick={() => handleJoinCommunity("telegram")}
                  className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105"
                  data-oid="gybz8zi"
                >
                  <Zap className="inline h-5 w-5 mr-2" data-oid="a71_00k" />
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
