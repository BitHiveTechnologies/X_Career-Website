'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// SVG Logo component
const Logo = () => (
    <svg
        className="h-8 w-auto"
        viewBox="0 0 120 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-oid="7s6eocy"
    >
        <path
            d="M10 5L20 15L10 25"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="y0m-8zc"
        />

        <path
            d="M30 5H40L50 25H40"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="tsz6ltv"
        />

        <text
            x="60"
            y="22"
            fontFamily="Arial"
            fontSize="18"
            fontWeight="bold"
            fill="#1E3A8A"
            data-oid="wjlttfm"
        >
            Careers
        </text>
    </svg>
);

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        // Calculate password strength
        if (name === 'password') {
            let strength = 0;
            if (value.length >= 8) strength += 1;
            if (/[A-Z]/.test(value)) strength += 1;
            if (/[0-9]/.test(value)) strength += 1;
            if (/[^A-Za-z0-9]/.test(value)) strength += 1;
            setPasswordStrength(strength);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setIsLoading(false);
            return;
        }

        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters long');
            setIsLoading(false);
            return;
        }

        if (!formData.agreeTerms) {
            setError('You must agree to the terms and conditions');
            setIsLoading(false);
            return;
        }

        // Simulate API call
        try {
            // Replace with actual registration logic
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // For demo purposes, just redirect to login
            router.push('/login');
        } catch (err) {
            setError('Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)] py-12"
            data-oid="2d6a:pr"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="iu-::in">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="4u2xk.n"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="6zqmknj"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid=":zrz3sj"
                ></div>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 z-10" data-oid="bol0eoq">
                <div className="text-center mb-6" data-oid="dnu11pi">
                    <Link href="/" className="inline-block" data-oid="adg::jp">
                        <Logo data-oid="9d8tmv6" />
                    </Link>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-800" data-oid="opvb5ls">
                        Create your account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600" data-oid="0y3yz1k">
                        Join thousands of tech freshers finding their dream jobs
                    </p>
                </div>

                <div
                    className="bg-white/80 backdrop-blur-md py-8 px-6 shadow-xl rounded-xl border border-[hsl(210,30%,95%)] sm:px-10 transform transition-all duration-500 hover:shadow-2xl"
                    data-oid="88xcc-c"
                >
                    {error && (
                        <div
                            className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-200"
                            data-oid="eqtxzhm"
                        >
                            {error}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit} data-oid="-27wv3_">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2" data-oid=".j05:d0">
                            <div data-oid="ka.u.eo">
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium text-gray-700"
                                    data-oid="258ovwk"
                                >
                                    First name
                                </label>
                                <div className="mt-1" data-oid="3:kk8u0">
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        autoComplete="given-name"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200"
                                        data-oid="ur8.2vo"
                                    />
                                </div>
                            </div>

                            <div data-oid="kqvbw42">
                                <label
                                    htmlFor="lastName"
                                    className="block text-sm font-medium text-gray-700"
                                    data-oid="1ju7jos"
                                >
                                    Last name
                                </label>
                                <div className="mt-1" data-oid="voa2lxa">
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        autoComplete="family-name"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200"
                                        data-oid="kzsx.fj"
                                    />
                                </div>
                            </div>
                        </div>

                        <div data-oid="2su3bw3">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                                data-oid="fyct.04"
                            >
                                Email address
                            </label>
                            <div className="mt-1" data-oid="cp_o:kw">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200"
                                    placeholder="you@example.com"
                                    data-oid="8_93dgf"
                                />
                            </div>
                        </div>

                        <div data-oid="28gi5et">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                                data-oid="sjdovtr"
                            >
                                Password
                            </label>
                            <div className="mt-1" data-oid="k.w6val">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200"
                                    placeholder="••••••••"
                                    data-oid="1vxyrd6"
                                />
                            </div>
                            {formData.password && (
                                <div className="mt-2" data-oid=":479jm2">
                                    <div className="flex items-center" data-oid="b0cc-3m">
                                        <div
                                            className="w-full bg-gray-200 rounded-full h-2"
                                            data-oid=".gbwpz-"
                                        >
                                            <div
                                                className={`h-2 rounded-full ${
                                                    passwordStrength === 0
                                                        ? 'bg-red-500'
                                                        : passwordStrength === 1
                                                          ? 'bg-orange-500'
                                                          : passwordStrength === 2
                                                            ? 'bg-yellow-500'
                                                            : passwordStrength === 3
                                                              ? 'bg-green-500'
                                                              : 'bg-green-600'
                                                }`}
                                                style={{ width: `${passwordStrength * 25}%` }}
                                                data-oid="3k71kbz"
                                            ></div>
                                        </div>
                                        <span
                                            className="ml-2 text-xs text-gray-500"
                                            data-oid=".0yo1ph"
                                        >
                                            {passwordStrength === 0 && 'Weak'}
                                            {passwordStrength === 1 && 'Fair'}
                                            {passwordStrength === 2 && 'Good'}
                                            {passwordStrength === 3 && 'Strong'}
                                            {passwordStrength === 4 && 'Very Strong'}
                                        </span>
                                    </div>
                                    <p className="mt-1 text-xs text-gray-500" data-oid="og4pw93">
                                        Use 8+ characters with a mix of letters, numbers & symbols
                                    </p>
                                </div>
                            )}
                        </div>

                        <div data-oid="f-tnd9n">
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700"
                                data-oid="pq5:037"
                            >
                                Confirm password
                            </label>
                            <div className="mt-1" data-oid="ugaywsb">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200"
                                    placeholder="••••••••"
                                    data-oid="du8b1.d"
                                />
                            </div>
                            {formData.password &&
                                formData.confirmPassword &&
                                formData.password !== formData.confirmPassword && (
                                    <p className="mt-1 text-xs text-red-500" data-oid="qb707o1">
                                        Passwords do not match
                                    </p>
                                )}
                        </div>

                        <div className="flex items-center" data-oid="x1oiud8">
                            <input
                                id="agreeTerms"
                                name="agreeTerms"
                                type="checkbox"
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                                className="h-4 w-4 text-[hsl(196,80%,45%)] focus:ring-[hsl(196,80%,45%)] border-gray-300 rounded"
                                data-oid="ysnn362"
                            />

                            <label
                                htmlFor="agreeTerms"
                                className="ml-2 block text-sm text-gray-700"
                                data-oid="5sxi0:a"
                            >
                                I agree to the{' '}
                                <Link
                                    href="/terms"
                                    className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)]"
                                    data-oid="ueke8iu"
                                >
                                    Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link
                                    href="/privacy-policy"
                                    className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)]"
                                    data-oid="p36.7qz"
                                >
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>

                        <div data-oid="6:h_:oo">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(196,80%,45%)] transition-all duration-300 transform hover:translate-y-[-2px] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                data-oid="6lzprnm"
                            >
                                {isLoading ? (
                                    <svg
                                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        data-oid=".e43gss"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            data-oid="fcw0gbf"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            data-oid="qp:c91x"
                                        ></path>
                                    </svg>
                                ) : null}
                                {isLoading ? 'Creating account...' : 'Create account'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6" data-oid="76gkrjp">
                        <div className="relative" data-oid="66-ff-z">
                            <div className="absolute inset-0 flex items-center" data-oid="fw86vpo">
                                <div
                                    className="w-full border-t border-gray-300"
                                    data-oid="s1h1798"
                                ></div>
                            </div>
                            <div
                                className="relative flex justify-center text-sm"
                                data-oid="_fu4q_c"
                            >
                                <span className="px-2 bg-white text-gray-500" data-oid="b8i-6u_">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3" data-oid="nql-jwn">
                            <div data-oid="5mb1hao">
                                <a
                                    href="#"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                    data-oid="1_..z1s"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="8jcvgwa"
                                    >
                                        <path
                                            d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                                            data-oid="v0nhoqy"
                                        />
                                    </svg>
                                </a>
                            </div>

                            <div data-oid="qk1tyxc">
                                <a
                                    href="#"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                    data-oid="o3u-bo6"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        data-oid="ij858db"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                                            clipRule="evenodd"
                                            data-oid="07k:6w2"
                                        />
                                    </svg>
                                </a>
                            </div>

                            <div data-oid="28b-pd4">
                                <a
                                    href="#"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                    data-oid="nzhpjai"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="1d9w.qd"
                                    >
                                        <path
                                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                                            data-oid="-px5u3g"
                                        ></path>
                                        <rect
                                            x="2"
                                            y="9"
                                            width="4"
                                            height="12"
                                            data-oid="a6phtcm"
                                        ></rect>
                                        <circle cx="4" cy="4" r="2" data-oid=":dw:lf."></circle>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center" data-oid="uuu12rv">
                    <p className="text-sm text-gray-600" data-oid="q6fumhw">
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)] transition-colors duration-200"
                            data-oid="b:vk28d"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
