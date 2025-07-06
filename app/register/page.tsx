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
        data-oid="ssm_xqy"
      >
        <div className="max-w-md w-full space-y-8" data-oid="lbjv00g">
          <div
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20"
            data-oid="3_2a.1z"
          >
            <div data-oid="h:.t6hn">
              <h2
                className="mt-6 text-center text-3xl font-extrabold text-gray-900"
                data-oid="-mkprl2"
              >
                Create your account
              </h2>
              <p
                className="mt-2 text-center text-sm text-gray-600"
                data-oid=":67n:_x"
              >
                Or{" "}
                <Link
                  href="/login"
                  className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)] transition-colors"
                  data-oid="ynhlrad"
                >
                  sign in to your existing account
                </Link>
              </p>
            </div>

            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmit}
              data-oid="i9n2e34"
            >
              {error && (
                <div
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                  data-oid="xp8lmp7"
                >
                  {error}
                </div>
              )}

              <div className="space-y-4" data-oid="tzd1yyg">
                <div data-oid="0l08ils">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                    data-oid="7eyhr8:"
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
                    data-oid="sjnoj4d"
                  />
                </div>

                <div data-oid="4pbcdnr">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                    data-oid="h-9:zer"
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
                    data-oid="tz185kz"
                  />
                </div>

                <div data-oid="wrl3jr2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                    data-oid="9u.sdhh"
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
                    data-oid="ki7jjhv"
                  />
                </div>

                <div data-oid="jtxx4ru">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                    data-oid="u1tlqoi"
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
                    data-oid="9ovn.6."
                  />
                </div>
              </div>

              <div className="flex items-center" data-oid="kvh:gy.">
                <input
                  id="agree-terms"
                  name="agree-terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-[hsl(196,80%,45%)] focus:ring-[hsl(196,80%,45%)] border-gray-300 rounded"
                  data-oid="u78fyih"
                />

                <label
                  htmlFor="agree-terms"
                  className="ml-2 block text-sm text-gray-900"
                  data-oid="v-jfonq"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)]"
                    data-oid="_hf3lhj"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)]"
                    data-oid="97jtkji"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div data-oid="k0.io_j">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(196,80%,45%)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                  data-oid="aigmltf"
                >
                  {isLoading ? (
                    <div className="flex items-center" data-oid="lmew90c">
                      <div
                        className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                        data-oid="ua.ur5n"
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
      data-oid="eh10ie3"
    >
      <MainNavbar data-oid="4l60mph" />
      <Suspense
        fallback={
          <div
            className="min-h-screen bg-gradient-to-br from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] flex items-center justify-center"
            data-oid="0ina-s3"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"
              data-oid="sr174k2"
            ></div>
          </div>
        }
        data-oid="ule-.i:"
      >
        <RegisterForm data-oid="9mg03yr" />
      </Suspense>
    </div>
  );
}
