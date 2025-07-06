"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MainNavbar from "@/components/mainNavbar";

export default function WhatsAppPage() {
  const [countdown, setCountdown] = useState(5);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // WhatsApp group link - replace with your actual WhatsApp group link
  const whatsappGroupLink = "https://chat.whatsapp.com/your-group-invite-link";

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setIsRedirecting(true);
          // Redirect to WhatsApp
          window.location.href = whatsappGroupLink;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [whatsappGroupLink]);

  const handleJoinNow = () => {
    setIsRedirecting(true);
    window.location.href = whatsappGroupLink;
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50"
      data-oid="w50-215"
    >
      <MainNavbar data-oid="nhf97c_" />

      <main className="container mx-auto px-4 py-12" data-oid="lf9cnj6">
        <div className="max-w-4xl mx-auto" data-oid="wxmw2af">
          {/* Header Section */}
          <div className="text-center mb-12" data-oid="1l:.d2y">
            <div
              className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-6 shadow-lg"
              data-oid="o.tdanx"
            >
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-oid="hmy_k88"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  data-oid="2487yo."
                />
              </svg>
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              data-oid="gbo7bkl"
            >
              Join Our WhatsApp Community
            </h1>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-oid="ocdp3_a"
            >
              Connect with 35,000+ tech freshers, get instant job alerts, and
              share opportunities in our active WhatsApp community.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12" data-oid="rqdo6nb">
            <div
              className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-green-500"
              data-oid="m6n0g7_"
            >
              <div
                className="text-3xl font-bold text-green-600 mb-2"
                data-oid="i0_91ap"
              >
                35,213
              </div>
              <div className="text-gray-600" data-oid="vtpwu4d">
                Active Members
              </div>
            </div>
            <div
              className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-blue-500"
              data-oid="-_kl38g"
            >
              <div
                className="text-3xl font-bold text-blue-600 mb-2"
                data-oid="a8p3knx"
              >
                500+
              </div>
              <div className="text-gray-600" data-oid="9dvi8kz">
                Daily Job Updates
              </div>
            </div>
            <div
              className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-purple-500"
              data-oid="s69jsn4"
            >
              <div
                className="text-3xl font-bold text-purple-600 mb-2"
                data-oid="s19tbhd"
              >
                24/7
              </div>
              <div className="text-gray-600" data-oid="r4urqdb">
                Community Support
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div
            className="bg-white rounded-2xl shadow-lg p-8 mb-12"
            data-oid="xvr8.fr"
          >
            <h2
              className="text-2xl font-bold text-gray-800 mb-6 text-center"
              data-oid="q.2bevl"
            >
              What You'll Get in Our WhatsApp Community
            </h2>
            <div className="grid md:grid-cols-2 gap-6" data-oid=":-xo8dg">
              <div className="flex items-start space-x-4" data-oid="ri8goj6">
                <div
                  className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                  data-oid="rvg1m6y"
                >
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="xzy:xut"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      data-oid="c:kndj6"
                    />
                  </svg>
                </div>
                <div data-oid="gbuo-ps">
                  <h3
                    className="font-semibold text-gray-800 mb-1"
                    data-oid="bd5rs:u"
                  >
                    Instant Job Alerts
                  </h3>
                  <p className="text-gray-600 text-sm" data-oid="rye1:oa">
                    Get notified immediately when new fresher jobs are posted
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-oid="raat62z">
                <div
                  className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                  data-oid=":l-jysw"
                >
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="8cqlrld"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      data-oid="q_puhmv"
                    />
                  </svg>
                </div>
                <div data-oid="sy1k6_k">
                  <h3
                    className="font-semibold text-gray-800 mb-1"
                    data-oid="k60w_5a"
                  >
                    Peer Networking
                  </h3>
                  <p className="text-gray-600 text-sm" data-oid="0wdk91z">
                    Connect with fellow freshers and experienced professionals
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-oid="6j-vokn">
                <div
                  className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                  data-oid="pknskgy"
                >
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="vttzcw-"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      data-oid="xqshwgc"
                    />
                  </svg>
                </div>
                <div data-oid="492sfh_">
                  <h3
                    className="font-semibold text-gray-800 mb-1"
                    data-oid="ab5uaij"
                  >
                    Career Guidance
                  </h3>
                  <p className="text-gray-600 text-sm" data-oid="ggo_zyk">
                    Get advice on resume building, interview prep, and career
                    growth
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-oid="1b6qes0">
                <div
                  className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center"
                  data-oid="s:zbxcr"
                >
                  <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="zas.sj7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      data-oid="2xhpljz"
                    />
                  </svg>
                </div>
                <div data-oid="3j0hmw8">
                  <h3
                    className="font-semibold text-gray-800 mb-1"
                    data-oid="0au9c_u"
                  >
                    Salary Insights
                  </h3>
                  <p className="text-gray-600 text-sm" data-oid="hgagyeb">
                    Learn about salary ranges and negotiation tips for freshers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg p-8 text-center text-white"
            data-oid="fzsgd:2"
          >
            <h2 className="text-3xl font-bold mb-4" data-oid="j-4r_o4">
              Ready to Join?
            </h2>
            <p className="text-green-100 mb-6 text-lg" data-oid="q9d0hhd">
              {isRedirecting
                ? "Redirecting you to WhatsApp..."
                : `Redirecting to WhatsApp in ${countdown} seconds...`}
            </p>

            <div className="space-y-4" data-oid="shpy37:">
              <button
                onClick={handleJoinNow}
                disabled={isRedirecting}
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                data-oid="yvt7yl0"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="9r.235i"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    data-oid="dnjfq68"
                  />
                </svg>
                {isRedirecting ? "Joining..." : "Join WhatsApp Group Now"}
              </button>

              <div className="text-green-100 text-sm" data-oid="nfgrp1s">
                <p data-oid="tk54v:m">
                  Don't have WhatsApp?{" "}
                  <a
                    href="https://www.whatsapp.com/download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white"
                    data-oid="_:3:3v5"
                  >
                    Download it here
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8" data-oid="kkpv-5-">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
              data-oid="cg8b3i."
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="tl5x70n"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  data-oid="bmq4ef9"
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
