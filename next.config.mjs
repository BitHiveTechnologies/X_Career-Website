/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                port: '',
                pathname: '/api/portraits/**',
            },
        ],
        unoptimized: false,
    },
    eslint: {
        ignoreDuringBuilds: false,
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    // Enable compression
    compress: true,
    // Optimize for production
    swcMinify: true,
    // Redirects configuration
    async redirects() {
        return [
            {
                source: '/resources/resume-builder',
                destination: '/resume-builder',
                permanent: true,
            },
        ];
    },
    // Webpack configuration to handle potential module resolution issues
    webpack: (config, { isServer }) => {
        // Ensure proper module resolution
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
            net: false,
            tls: false,
        };

        return config;
    },
};

export default nextConfig;
