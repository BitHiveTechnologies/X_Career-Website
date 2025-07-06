"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Mail,
  MessageCircle,
  Crown,
  Gift,
  TrendingUp,
} from "lucide-react";

const notificationTypes = [
  {
    icon: "💼",
    title: "Job Alerts",
    description:
      "Get notified about new job opportunities matching your skills",
    frequency: "Real-time",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🎯",
    title: "Interview Tips",
    description: "Weekly interview preparation tips and success strategies",
    frequency: "Weekly",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "📚",
    title: "Learning Resources",
    description: "New courses, tutorials, and skill development content",
    frequency: "Bi-weekly",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "🚀",
    title: "Career Updates",
    description: "Industry trends, salary reports, and career guidance",
    frequency: "Monthly",
    color: "from-orange-500 to-red-500",
  },
];

const premiumFeatures = [
  {
    icon: Crown,
    title: "Priority Job Alerts",
    description: "Get notified 24 hours before jobs go public",
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Real-time alerts via WhatsApp and SMS",
  },
  {
    icon: Star,
    title: "Personalized Recommendations",
    description: "AI-powered job matching based on your profile",
  },
  {
    icon: Gift,
    title: "Exclusive Content",
    description: "Access to premium resources and insider tips",
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    features: [
      "Basic job alerts",
      "Weekly newsletter",
      "Community access",
      "Basic resources",
    ],

    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "NotifyX Premium",
    price: "₹99",
    period: "month",
    features: [
      "Priority job alerts",
      "Instant notifications",
      "Personalized matching",
      "Exclusive content",
      "Resume review",
      "Interview prep calls",
    ],

    buttonText: "Start Free Trial",
    popular: true,
  },
  {
    name: "NotifyX Pro",
    price: "₹199",
    period: "month",
    features: [
      "Everything in Premium",
      "1-on-1 career coaching",
      "LinkedIn optimization",
      "Salary negotiation help",
      "Direct recruiter connect",
      "Custom job search strategy",
    ],

    buttonText: "Contact Sales",
    popular: false,
  },
];

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Software Engineer at Flipkart",
    image: "👨‍💻",
    text: "NotifyX helped me land my dream job! Got the alert 2 hours before it was posted publicly.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Product Manager at Zomato",
    image: "👩‍💼",
    text: "The personalized job matching is incredible. Every alert is relevant to my skills and interests.",
    rating: 5,
  },
  {
    name: "Arjun Kumar",
    role: "Data Scientist at Swiggy",
    image: "👨‍🔬",
    text: "Premium notifications gave me a competitive edge. Worth every penny!",
    rating: 5,
  },
];

export default function NotifyPage() {
  const [selectedPlan, setSelectedPlan] = useState("premium");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferences, setPreferences] = useState({
    jobAlerts: true,
    interviewTips: true,
    learningResources: false,
    careerUpdates: true,
  });

  const handleSubscribe = (plan: string) => {
    // This will be replaced with actual subscription logic
    alert(`Subscribing to ${plan} plan...`);
  };

  const handlePreferenceChange = (key: string) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
      data-oid="k2ktem:"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10" data-oid="awhkvn.">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
          data-oid="fhrvb5d"
        ></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
          data-oid="ad7rb0n"
        ></div>
        <div
          className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
          data-oid="rv10rxq"
        ></div>
      </div>

      <div className="relative z-10" data-oid="wicnn9r">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4" data-oid="qv4-43j">
          <div className="max-w-6xl mx-auto text-center" data-oid="2c:xxeb">
            <div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
              data-oid="bm5n.0j"
            >
              <Bell className="h-4 w-4" data-oid="dw00_80" />
              Never Miss an Opportunity
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
              data-oid="q3v7-fq"
            >
              Stay Ahead with
              <span
                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                data-oid="425fnme"
              >
                {" "}
                NotifyX
              </span>
            </h1>

            <p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              data-oid=":oszxye"
            >
              Get instant notifications about job opportunities, interview tips,
              and career resources. Be the first to know, be the first to apply.
            </p>

            {/* Quick Subscribe Form */}
            <div className="max-w-2xl mx-auto mb-12" data-oid=".:mpsjo">
              <div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)]"
                data-oid="rb_dwdc"
              >
                <h3
                  className="text-xl font-bold text-gray-800 mb-4"
                  data-oid="aj-et1."
                >
                  Start Getting Notifications
                </h3>
                <div
                  className="flex flex-col sm:flex-row gap-4"
                  data-oid="gi21de6"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)]"
                    data-oid="ttmibx:"
                  />

                  <button
                    onClick={() => handleSubscribe("free")}
                    className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                    data-oid=".k4--7-"
                  >
                    <Bell className="inline h-5 w-5 mr-2" data-oid="391kjov" />
                    Notify Me
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-2" data-oid="91fr2up">
                  Free forever. No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              data-oid="fbw030-"
            >
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                data-oid="9.9f_rs"
              >
                <div
                  className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                  data-oid="i9x5q60"
                >
                  50K+
                </div>
                <div className="text-gray-600" data-oid="209:-jm">
                  Active Subscribers
                </div>
              </div>
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                data-oid="5jecr2e"
              >
                <div
                  className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                  data-oid="ammqdjg"
                >
                  1000+
                </div>
                <div className="text-gray-600" data-oid="ythhpmr">
                  Jobs Notified Daily
                </div>
              </div>
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                data-oid="vr8nmzu"
              >
                <div
                  className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                  data-oid="_s2up8z"
                >
                  95%
                </div>
                <div className="text-gray-600" data-oid="hbpuc.n">
                  Success Rate
                </div>
              </div>
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                data-oid="t3tjubh"
              >
                <div
                  className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                  data-oid="hqmx7d:"
                >
                  24/7
                </div>
                <div className="text-gray-600" data-oid="-k8ns32">
                  Monitoring
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notification Types */}
        <section className="py-16 px-4" data-oid="1x:oim7">
          <div className="max-w-6xl mx-auto" data-oid="25::i8g">
            <div className="text-center mb-12" data-oid="_1zfm8r">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="g68:wp1"
              >
                What You'll Get Notified About
              </h2>
              <p className="text-xl text-gray-600" data-oid="fid18xf">
                Choose what matters most to your career
              </p>
            </div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              data-oid="hs.vrzp"
            >
              {notificationTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  data-oid="3igpz0_"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                    data-oid="v6nfaw1"
                  >
                    {type.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-800 mb-2 text-center"
                    data-oid="wyu4fht"
                  >
                    {type.title}
                  </h3>
                  <p
                    className="text-gray-600 text-center mb-4"
                    data-oid=".0m_-7f"
                  >
                    {type.description}
                  </p>
                  <div className="text-center" data-oid="wx8eqs9">
                    <span
                      className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      data-oid="x1mb7a1"
                    >
                      {type.frequency}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4" data-oid="b5ouqr8">
          <div className="max-w-6xl mx-auto" data-oid="-5gwnn2">
            <div className="text-center mb-12" data-oid="e_6:kj8">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="_b8orpl"
              >
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-600" data-oid="ohj1sel">
                Upgrade to premium for advanced features and priority access
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" data-oid="wlo:cyp">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 transform hover:-translate-y-2 ${
                    plan.popular
                      ? "border-[hsl(196,80%,45%)] shadow-xl scale-105"
                      : "border-[hsl(210,30%,95%)] hover:shadow-xl"
                  }`}
                  data-oid=":8pkt0j"
                >
                  {plan.popular && (
                    <div className="text-center mb-4" data-oid="rauwkhr">
                      <span
                        className="inline-block px-3 py-1 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full text-sm font-medium"
                        data-oid="bx4gtkh"
                      >
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6" data-oid="0qfoujd">
                    <h3
                      className="text-2xl font-bold text-gray-800 mb-2"
                      data-oid="nhi-fli"
                    >
                      {plan.name}
                    </h3>
                    <div
                      className="text-4xl font-bold text-[hsl(196,80%,45%)] mb-1"
                      data-oid="r_qapy7"
                    >
                      {plan.price}
                      <span
                        className="text-lg text-gray-600"
                        data-oid="g:p.7sw"
                      >
                        /{plan.period}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8" data-oid="nruzw1t">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                        data-oid="ufp58jb"
                      >
                        <CheckCircle
                          className="h-5 w-5 text-green-500 flex-shrink-0"
                          data-oid="gcms-ty"
                        />

                        <span className="text-gray-700" data-oid="5efc92m">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleSubscribe(plan.name.toLowerCase())}
                    className={`w-full px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white hover:shadow-lg"
                        : "border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] hover:bg-[hsl(196,80%,45%)]/10"
                    }`}
                    data-oid="m4o3kef"
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Features */}
        <section className="py-16 px-4" data-oid="yvlsehv">
          <div className="max-w-6xl mx-auto" data-oid="a98aj8y">
            <div className="text-center mb-12" data-oid="rwfdm55">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="2gyn00x"
              >
                Premium Features
              </h2>
              <p className="text-xl text-gray-600" data-oid=":k:jdpt">
                Get the competitive edge with NotifyX Premium
              </p>
            </div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              data-oid="pq:1ag2"
            >
              {premiumFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                  data-oid=":cemw2u"
                >
                  <feature.icon
                    className="h-12 w-12 text-[hsl(196,80%,45%)] mb-4 mx-auto"
                    data-oid="g9z43g6"
                  />

                  <h3
                    className="text-lg font-bold text-gray-800 mb-2 text-center"
                    data-oid="xirtfcu"
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-gray-600 text-center text-sm"
                    data-oid="32i6-0h"
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notification Preferences */}
        <section className="py-16 px-4" data-oid="byssogk">
          <div className="max-w-4xl mx-auto" data-oid="pqnqiwa">
            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
              data-oid="_acpx:y"
            >
              <div className="text-center mb-8" data-oid="ygcwrgq">
                <h2
                  className="text-2xl font-bold text-gray-800 mb-4"
                  data-oid="b9osxig"
                >
                  Customize Your Notifications
                </h2>
                <p className="text-gray-600" data-oid="94nipsf">
                  Choose what you want to be notified about
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6" data-oid=":ntrxuv">
                <div className="space-y-4" data-oid="c3_uzf6">
                  <h3
                    className="font-semibold text-gray-800"
                    data-oid="7eq0hz8"
                  >
                    Notification Types
                  </h3>
                  {Object.entries(preferences).map(([key, value]) => (
                    <label
                      key={key}
                      className="flex items-center gap-3 cursor-pointer"
                      data-oid="ka.c:j0"
                    >
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() => handlePreferenceChange(key)}
                        className="w-5 h-5 text-[hsl(196,80%,45%)] rounded focus:ring-[hsl(196,80%,45%)]"
                        data-oid="bejgqpo"
                      />

                      <span
                        className="text-gray-700 capitalize"
                        data-oid="y01:e2v"
                      >
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="space-y-4" data-oid="t_ctxmq">
                  <h3
                    className="font-semibold text-gray-800"
                    data-oid="bq9.0co"
                  >
                    Delivery Methods
                  </h3>
                  <div className="space-y-3" data-oid="-24hr:l">
                    <div
                      className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                      data-oid="44k3-vw"
                    >
                      <Mail
                        className="h-5 w-5 text-blue-600"
                        data-oid="o_t35fk"
                      />

                      <span className="text-gray-700" data-oid="._63.qv">
                        Email Notifications
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                      data-oid="2pxx9_j"
                    >
                      <MessageCircle
                        className="h-5 w-5 text-green-600"
                        data-oid="cfw5yri"
                      />

                      <span className="text-gray-700" data-oid="knkdzin">
                        WhatsApp Alerts (Premium)
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                      data-oid="736yung"
                    >
                      <Smartphone
                        className="h-5 w-5 text-purple-600"
                        data-oid="p.hv72y"
                      />

                      <span className="text-gray-700" data-oid="lw4pgy2">
                        SMS Notifications (Premium)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4" data-oid="z1z:6ec">
          <div className="max-w-6xl mx-auto" data-oid=".ki.x.8">
            <div className="text-center mb-12" data-oid="czfoh5b">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                data-oid="f_547tn"
              >
                Success Stories
              </h2>
              <p className="text-xl text-gray-600" data-oid="baj-c0:">
                See how NotifyX helped others land their dream jobs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" data-oid="n:qlvs1">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                  data-oid=":jgi_q-"
                >
                  <div
                    className="flex items-center gap-4 mb-4"
                    data-oid=":ym-xfg"
                  >
                    <div className="text-3xl" data-oid="agh9-5c">
                      {testimonial.image}
                    </div>
                    <div data-oid="e39p9x1">
                      <h4
                        className="font-bold text-gray-800"
                        data-oid="i64w2ny"
                      >
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600" data-oid="ttkdcqv">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4" data-oid="zw4:3lh">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-1" data-oid="nb5_34-">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-500 fill-current"
                        data-oid="puhqu09"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4" data-oid="et_3zo4">
          <div className="max-w-4xl mx-auto text-center" data-oid="xen9crp">
            <div
              className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
              data-oid="eog_gtv"
            >
              <h2 className="text-3xl font-bold mb-4" data-oid="fe.2._c">
                Ready to Get Notified?
              </h2>
              <p className="text-xl mb-6 text-blue-100" data-oid="n-fk6bp">
                Join thousands of professionals who never miss an opportunity
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-oid="pl.86o3"
              >
                <button
                  onClick={() => handleSubscribe("premium")}
                  className="px-6 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                  data-oid="_eg4jo4"
                >
                  <Zap className="inline h-5 w-5 mr-2" data-oid="-ys0jdv" />
                  Start Premium Trial
                </button>
                <Link
                  href="/resources/community"
                  className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[hsl(196,80%,45%)] transition-all"
                  data-oid="a96w1u9"
                >
                  <TrendingUp
                    className="inline h-5 w-5 mr-2"
                    data-oid="5:ar9-p"
                  />
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
