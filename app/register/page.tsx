"use client";

import { useState, useEffect, Suspense } from "react";
import { useAuth } from "@/lib/auth/AuthContext";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import MainNavbar from "@/components/mainNavbar";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { register, isAuthenticated } = useAuth();
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

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);

    const result = await register(name, email, password);

    if (!result.success) {
      setError(result.error || "Registration failed");
    }

    setIsLoading(false);
  };

  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-br from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        data-oid="pd-:u7m"
      >
        <div className="max-w-md w-full space-y-8" data-oid="zkq:noq">
          <div
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20"
            data-oid="y-3ix3r"
          >
            <div data-oid="inaj8l1">
              <h2
                className="mt-6 text-center text-3xl font-extrabold text-gray-900"
                data-oid="54-mefg"
              >
                Create your account
              </h2>
              <p
                className="mt-2 text-center text-sm text-gray-600"
                data-oid="bfdh9zh"
              >
                Or{" "}
                <Link
                  href="/login"
                  className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)] transition-colors"
                  data-oid="m9_tofm"
                >
                  sign in to your existing account
                </Link>
              </p>
            </div>

            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmit}
              data-oid="zw-d088"
            >
              {error && (
                <div
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                  data-oid="gye4mfj"
                >
                  {error}
                </div>
              )}

              <div className="space-y-4" data-oid="b.z5fix">
                <div data-oid="zjwc0q9">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                    data-oid="wmip-sa"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] focus:z-10 sm:text-sm transition-all duration-200"
                    placeholder="Enter your full name"
                    data-oid="pjjt:sz"
                  />
                </div>

                <div data-oid="435ywj8">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                    data-oid="kvdwkak"
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
                    data-oid="_0gq6j9"
                  />
                </div>

                <div data-oid="5nmlt_.">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                    data-oid="nkdxgjs"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] focus:z-10 sm:text-sm transition-all duration-200"
                    placeholder="Create a password"
                    data-oid="r237u-v"
                  />
                </div>

                <div data-oid="bvmtxno">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                    data-oid="uz.nop_"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] focus:z-10 sm:text-sm transition-all duration-200"
                    placeholder="Confirm your password"
                    data-oid="mpl-8_q"
                  />
                </div>
              </div>

              <div className="flex items-center" data-oid="l7jq:yy">
                <input
                  id="agree-terms"
                  name="agree-terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-[hsl(196,80%,45%)] focus:ring-[hsl(196,80%,45%)] border-gray-300 rounded"
                  data-oid="esdlod9"
                />

                <label
                  htmlFor="agree-terms"
                  className="ml-2 block text-sm text-gray-900"
                  data-oid="5v8os9o"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)]"
                    data-oid="x4.:a0p"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)]"
                    data-oid="sbyaxgj"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div data-oid=":bfu_x_">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(196,80%,45%)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                  data-oid="bwlg.vu"
                >
                  {isLoading ? (
                    <div className="flex items-center" data-oid="5amwmje">
                      <div
                        className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                        data-oid="11-xgik"
                      ></div>
                      Creating account...
                    </div>
                  ) : (
                    "Create account"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default function RegisterPage() {
  return (
    <div
      className="min-h-screen bg-white text-gray-800 font-sans"
      data-oid="wdcsjfm"
    >
      <MainNavbar data-oid="shn5kza" />
      <Suspense
        fallback={
          <div
            className="min-h-screen bg-gradient-to-br from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] flex items-center justify-center"
            data-oid="nww.z2f"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"
              data-oid="_7ghd0s"
            ></div>
          </div>
        }
        data-oid="crw81vn"
      >
        <RegisterForm data-oid=".j2ptn_" />
      </Suspense>
    </div>
  );
}
