"use client";

import { useAuth } from "@/lib/auth/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MainNavbar from "@/components/mainNavbar";
import Link from "next/link";

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div
        className="min-h-screen bg-white flex items-center justify-center"
        data-oid="f5q0qnv"
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)]"
          data-oid=".5lzk4e"
        ></div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div
      className="min-h-screen bg-white text-gray-800 font-sans"
      data-oid="e.pnqcf"
    >
      <MainNavbar data-oid="k.gw.tm" />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        data-oid="afbigdx"
      >
        {/* Welcome Section */}
        <div
          className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-xl p-8 mb-8 text-white"
          data-oid=".owc5mz"
        >
          <div className="flex items-center space-x-4" data-oid="-dozjml">
            <img
              src={
                user.avatar ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=2563eb&color=fff`
              }
              alt={user.name}
              className="w-16 h-16 rounded-full border-4 border-white/20"
              data-oid="5a_qnqw"
            />

            <div data-oid="9npz8h8">
              <h1 className="text-3xl font-bold" data-oid="t-lc148">
                Welcome back, {user.name}!
              </h1>
              <p className="text-blue-100" data-oid="i4s-0cw">
                Ready to take the next step in your career?
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          data-oid="pc.yte5"
        >
          <Link
            href="/jobs"
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            data-oid="3ooe6ts"
          >
            <div className="flex items-center space-x-3" data-oid="90sdda6">
              <div className="bg-blue-100 p-3 rounded-lg" data-oid="hbghmn1">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="r2aak5j"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                    data-oid="1gyqyj-"
                  />
                </svg>
              </div>
              <div data-oid="przj:mc">
                <h3 className="font-semibold text-gray-900" data-oid="nb2emg.">
                  Browse Jobs
                </h3>
                <p className="text-sm text-gray-600" data-oid="-b3v7em">
                  Find your next opportunity
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/internships"
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            data-oid="0e6w_ma"
          >
            <div className="flex items-center space-x-3" data-oid="_e4oaj-">
              <div className="bg-green-100 p-3 rounded-lg" data-oid="txlha5x">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="ofqdnhk"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    data-oid="0jpw-ff"
                  />
                </svg>
              </div>
              <div data-oid="yani4vt">
                <h3 className="font-semibold text-gray-900" data-oid="pmdc9g_">
                  Internships
                </h3>
                <p className="text-sm text-gray-600" data-oid="muwh0yu">
                  Gain valuable experience
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/resume-builder"
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            data-oid=":8_myiz"
          >
            <div className="flex items-center space-x-3" data-oid="wr71-f:">
              <div className="bg-purple-100 p-3 rounded-lg" data-oid="4--nny0">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid=".kahw8-"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    data-oid="z0ga2mx"
                  />
                </svg>
              </div>
              <div data-oid="8mgf59g">
                <h3 className="font-semibold text-gray-900" data-oid="c0gjq-h">
                  Resume Builder
                </h3>
                <p className="text-sm text-gray-600" data-oid="zn4spx8">
                  Create ATS-friendly resume
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/profile"
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            data-oid="tsapw.w"
          >
            <div className="flex items-center space-x-3" data-oid="xhp1pll">
              <div className="bg-orange-100 p-3 rounded-lg" data-oid="rxxjcvw">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="v7lw53o"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    data-oid="u9gqnjd"
                  />
                </svg>
              </div>
              <div data-oid="06658hn">
                <h3 className="font-semibold text-gray-900" data-oid="so_uh_x">
                  Profile
                </h3>
                <p className="text-sm text-gray-600" data-oid="2nv.j1n">
                  Manage your account
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-8" data-oid=":5ov_01">
          <div
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6"
            data-oid="5khk2jb"
          >
            <h2
              className="text-xl font-bold text-gray-900 mb-4"
              data-oid="k_6fyz_"
            >
              Recent Applications
            </h2>
            <div className="space-y-4" data-oid="0_kjnsf">
              <div
                className="text-center py-8 text-gray-500"
                data-oid="dxhh6nz"
              >
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="v.i1gke"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    data-oid="_23uh7p"
                  />
                </svg>
                <p data-oid="bjk.sbo">No applications yet</p>
                <p className="text-sm" data-oid="23mlww_">
                  Start applying to jobs to see them here
                </p>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6"
            data-oid="ab_hjtq"
          >
            <h2
              className="text-xl font-bold text-gray-900 mb-4"
              data-oid=":u2u0ut"
            >
              Saved Jobs
            </h2>
            <div className="space-y-4" data-oid="p.c-:.2">
              <div
                className="text-center py-8 text-gray-500"
                data-oid="wfp-uwy"
              >
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="1ndn:_j"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    data-oid="0rfel1a"
                  />
                </svg>
                <p data-oid="cjxv_s7">No saved jobs yet</p>
                <p className="text-sm" data-oid="w.xoox7">
                  Save jobs you're interested in to see them here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
