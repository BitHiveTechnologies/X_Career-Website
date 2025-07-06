"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MainNavbar from "@/components/mainNavbar";

export default function TelegramPage() {
  const [countdown, setCountdown] = useState(5);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Telegram group link - replace with your actual Telegram group link
  const telegramGroupLink = "https://t.me/your-group-invite-link";

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setIsRedirecting(true);
          // Redirect to Telegram
          window.location.href = telegramGroupLink;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [telegramGroupLink]);

  const handleJoinNow = () => {
    setIsRedirecting(true);
    window.location.href = telegramGroupLink;
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50"
      data-oid="wf:3_pg"
    >
      <MainNavbar data-oid="i9k-rq6" />

      <main className="container mx-auto px-4 py-12" data-oid="zbnq34b">
        <div className="max-w-4xl mx-auto" data-oid="iu8jnd_">
          {/* Header Section */}
          <div className="text-center mb-12" data-oid="ho.1ho3">
            <div
              className="inline-flex items-center justify-center w-24 h-24 bg-blue-500 rounded-full mb-6 shadow-lg"
              data-oid="0def7gh"
            >
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-oid="os9jr9m"
              >
                <path
                  d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                  data-oid="gdl2wfs"
                />
              </svg>
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              data-oid=":duk-8-"
            >
              Join Our Telegram Community
            </h1>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-oid="ys4i5oz"
            >
              Connect with 2,711+ tech professionals, get real-time job updates,
              and participate in focused discussions on our Telegram channel.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12" data-oid="_dcodf1">
            <div
              className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-blue-500"
              data-oid="p:t-86j"
            >
              <div
                className="text-3xl font-bold text-blue-600 mb-2"
                data-oid="36rv_m2"
              >
                2,711
              </div>
              <div className="text-gray-600" data-oid="v2bzv95">
                Active Members
              </div>
            </div>
            <div
              className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-purple-500"
              data-oid="pg6yt.w"
            >
              <div
                className="text-3xl font-bold text-purple-600 mb-2"
                data-oid="ow:8h0s"
              >
                100+
              </div>
              <div className="text-gray-600" data-oid="hvsil6o">
                Daily Messages
              </div>
            </div>
            <div
              className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-green-500"
              data-oid="1r114jn"
            >
              <div
                className="text-3xl font-bold text-green-600 mb-2"
                data-oid="i3f1pue"
              >
                24/7
              </div>
              <div className="text-gray-600" data-oid="py0g0u_">
                Active Discussions
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div
            className="bg-white rounded-2xl shadow-lg p-8 mb-12"
            data-oid="imy5mcm"
          >
            <h2
              className="text-2xl font-bold text-gray-800 mb-6 text-center"
              data-oid="s_g-w75"
            >
              What You'll Get in Our Telegram Community
            </h2>
            <div className="grid md:grid-cols-2 gap-6" data-oid="z-97zov">
              <div className="flex items-start space-x-4" data-oid="8sc2519">
                <div
                  className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                  data-oid="l6jpg5."
                >
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="fgz2b67"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
                      data-oid="1o0d0g9"
                    />
                  </svg>
                </div>
                <div data-oid="ze89ci8">
                  <h3
                    className="font-semibold text-gray-800 mb-1"
                    data-oid="i_3d.q-"
                  >
                    Curated Job Posts
                  </h3>
                  <p className="text-gray-600 text-sm" data-oid="swljngo">
                    High-quality job opportunities specifically for tech
                    freshers
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-oid="88lw-3i">
                <div
                  className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                  data-oid="zwzt75r"
                >
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="l3qq-9d"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      data-oid="uj5e0o4"
                    />
                  </svg>
                </div>
                <div data-oid="3_ka_2t">
                  <h3
                    className="font-semibold text-gray-800 mb-1"
                    data-oid="2bo6p.5"
                  >
                    Tech Discussions
                  </h3>
                  <p className="text-gray-600 text-sm" data-oid="vg1pqyw">
                    Engage in meaningful conversations about technology trends
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-oid="--0edzm">
                <div
                  className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                  data-oid="foc.:.v"
                >
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="nbsdezm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      data-oid="q8ec1gm"
                    />
                  </svg>
                </div>
                <div data-oid="a_n.28m">
                  <h3
                    className="font-semibold text-gray-800 mb-1"
                    data-oid="wpbv1vs"
                  >
                    Learning Resources
                  </h3>
                  <p className="text-gray-600 text-sm" data-oid=".k2lnvf">
                    Access to tutorials, courses, and skill development
                    materials
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-oid="qctmbsy">
                <div
                  className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center"
                  data-oid="v9mh8ze"
                >
                  <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="oj:w0do"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      data-oid="p30w58s"
                    />
                  </svg>
                </div>
                <div data-oid="a3q1ncf">
                  <h3
                    className="font-semibold text-gray-800 mb-1"
                    data-oid="6ing1kp"
                  >
                    Quick Updates
                  </h3>
                  <p className="text-gray-600 text-sm" data-oid="00-z00g">
                    Fast notifications and real-time industry updates
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-oid="39ozjrq">
                <div
                  className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center"
                  data-oid="qm0:h:u"
                >
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="vnqvjji"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      data-oid="xf2nnqd"
                    />
                  </svg>
                </div>
                <div data-oid="e7afl3t">
                  <h3
                    className="font-semibold text-gray-800 mb-1"
                    data-oid="sldpwma"
                  >
                    Supportive Community
                  </h3>
                  <p className="text-gray-600 text-sm" data-oid="n--29lj">
                    Get help and support from experienced professionals
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-oid="dkg.smv">
                <div
                  className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center"
                  data-oid="haytm89"
                >
                  <svg
                    className="w-5 h-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="s5q06rr"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      data-oid="t2xxjkj"
                    />
                  </svg>
                </div>
                <div data-oid="h.65xr0">
                  <h3
                    className="font-semibold text-gray-800 mb-1"
                    data-oid="93nh.zf"
                  >
                    Career Analytics
                  </h3>
                  <p className="text-gray-600 text-sm" data-oid="8lzcqt_">
                    Market insights and career progression data
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Telegram Features */}
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 mb-12 text-white"
            data-oid="pct8r_g"
          >
            <h2
              className="text-2xl font-bold mb-6 text-center"
              data-oid="v17_v3t"
            >
              Why Telegram?
            </h2>
            <div className="grid md:grid-cols-2 gap-6" data-oid="j8pqgdv">
              <div className="flex items-center space-x-3" data-oid="ebgq6aq">
                <div
                  className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                  data-oid="bjhg5xy"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    data-oid="9zzvy3e"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                      data-oid="16si.hv"
                    />
                  </svg>
                </div>
                <span data-oid=".cq-5sm">End-to-end encryption</span>
              </div>
              <div className="flex items-center space-x-3" data-oid="bk-rxkx">
                <div
                  className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                  data-oid="w8ul.vz"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    data-oid="mtqcvl_"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                      data-oid="6bbi30."
                    />
                  </svg>
                </div>
                <span data-oid="yxzwth9">File sharing up to 2GB</span>
              </div>
              <div className="flex items-center space-x-3" data-oid=".y3rd0c">
                <div
                  className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                  data-oid="9:lmmxy"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    data-oid="i391sfc"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                      data-oid="ewizm6z"
                    />
                  </svg>
                </div>
                <span data-oid="ffzvek2">Cross-platform sync</span>
              </div>
              <div className="flex items-center space-x-3" data-oid=".b9bky3">
                <div
                  className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                  data-oid="i8_agpe"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    data-oid="759e8wy"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                      data-oid="jnif.zr"
                    />
                  </svg>
                </div>
                <span data-oid="kpuy94t">No ads or distractions</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg p-8 text-center text-white"
            data-oid="ezvvf06"
          >
            <h2 className="text-3xl font-bold mb-4" data-oid="yfuyl9j">
              Ready to Join?
            </h2>
            <p className="text-blue-100 mb-6 text-lg" data-oid="bxw_793">
              {isRedirecting
                ? "Redirecting you to Telegram..."
                : `Redirecting to Telegram in ${countdown} seconds...`}
            </p>

            <div className="space-y-4" data-oid="s48m8zy">
              <button
                onClick={handleJoinNow}
                disabled={isRedirecting}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                data-oid="ff3e:ub"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="fa1lh3x"
                >
                  <path
                    d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                    data-oid="8s9tvn:"
                  />
                </svg>
                {isRedirecting ? "Joining..." : "Join Telegram Channel Now"}
              </button>

              <div className="text-blue-100 text-sm" data-oid="6m10qvs">
                <p data-oid="827sw7w">
                  Don't have Telegram?{" "}
                  <a
                    href="https://telegram.org/apps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white"
                    data-oid="9iu0wvp"
                  >
                    Download it here
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8" data-oid="um66l:j">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
              data-oid="14c_aul"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="69hp6gi"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  data-oid="xa2.mdx"
                />
              </svg>
              Back to CareerX
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
