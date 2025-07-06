"use client";

import { useState, useEffect, Suspense } from "react";
import { useAuth } from "@/lib/auth/AuthContext";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import MainNavbar from "@/components/mainNavbar";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const redirectTo = searchParams.get("redirect") || "/dashboard";
      router.push(redirectTo);
    }
  }, [isAuthenticated, router, searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const result = await login(email, password);

    if (!result.success) {
      setError(result.error || "Login failed");
    }

    setIsLoading(false);
  };

  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-br from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        data-oid="-w32tkb"
      >
        <div className="max-w-md w-full space-y-8" data-oid="1.t8l1p">
          <div
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20"
            data-oid="-ui367:"
          >
            <div data-oid="jc9eylu">
              <h2
                className="mt-6 text-center text-3xl font-extrabold text-gray-900"
                data-oid="z3:gcbc"
              >
                Sign in to your account
              </h2>
              <p
                className="mt-2 text-center text-sm text-gray-600"
                data-oid="_jd-apl"
              >
                Or{" "}
                <Link
                  href="/register"
                  className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)] transition-colors"
                  data-oid="vf4ibhe"
                >
                  create a new account
                </Link>
              </p>
            </div>

            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmit}
              data-oid="g4qr89_"
            >
              {error && (
                <div
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                  data-oid="3fi:91_"
                >
                  {error}
                </div>
              )}

              <div className="space-y-4" data-oid="0ysbicz">
                <div data-oid="rs_uz0l">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                    data-oid="8rf_4b7"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] focus:z-10 sm:text-sm transition-all duration-200"
                    placeholder="Enter your email"
                    data-oid="xdf8m7k"
                  />
                </div>

                <div data-oid="6ms9kc0">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                    data-oid="rfsuu_s"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] focus:z-10 sm:text-sm transition-all duration-200"
                    placeholder="Enter your password"
                    data-oid="nj:67n:"
                  />
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="_7ocsdy"
              >
                <div className="flex items-center" data-oid="tj:ui3w">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[hsl(196,80%,45%)] focus:ring-[hsl(196,80%,45%)] border-gray-300 rounded"
                    data-oid="jhb8o9r"
                  />

                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                    data-oid="3xpy6ex"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm" data-oid=":f:50ks">
                  <Link
                    href="/forgot-password"
                    className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)] transition-colors"
                    data-oid="1re7j-n"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div data-oid="3e8k:k0">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(196,80%,45%)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                  data-oid="tf_ysuc"
                >
                  {isLoading ? (
                    <div className="flex items-center" data-oid="ercqplu">
                      <div
                        className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                        data-oid="447g-fo"
                      ></div>
                      Signing in...
                    </div>
                  ) : (
                    "Sign in"
                  )}
                </button>
              </div>

              <div className="mt-6" data-oid="x2--mrj">
                <div className="relative" data-oid="08mh7-f">
                  <div
                    className="absolute inset-0 flex items-center"
                    data-oid="npo3oc:"
                  >
                    <div
                      className="w-full border-t border-gray-300"
                      data-oid="1_iijru"
                    />
                  </div>
                  <div
                    className="relative flex justify-center text-sm"
                    data-oid="p-025q2"
                  >
                    <span
                      className="px-2 bg-white text-gray-500"
                      data-oid="_4nm3.i"
                    >
                      Demo Credentials
                    </span>
                  </div>
                </div>
                <div
                  className="mt-3 text-center text-xs text-gray-600 bg-gray-50 p-3 rounded-lg"
                  data-oid="8pk_d.m"
                >
                  <p data-oid="3b.l2wb">
                    <strong data-oid="tjcwa2c">Email:</strong> demo@careerx.com
                  </p>
                  <p data-oid="68y9edx">
                    <strong data-oid="lo3s7ve">Password:</strong> Any password
                    (6+ characters)
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default function LoginPage() {
  return (
    <div
      className="min-h-screen bg-white text-gray-800 font-sans"
      data-oid="n2lsm4c"
    >
      <MainNavbar data-oid="x2nsm_0" />
      <Suspense
        fallback={
          <div
            className="min-h-screen bg-gradient-to-br from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] flex items-center justify-center"
            data-oid="vwvbim1"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"
              data-oid="rayjler"
            ></div>
          </div>
        }
        data-oid="zzz.add"
      >
        <LoginForm data-oid="p12v6wi" />
      </Suspense>
    </div>
  );
}
