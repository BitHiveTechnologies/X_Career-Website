/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['randomuser.me'],
        unoptimized: false,
    },
    experimental: {
        optimizePackageImports: ['lucide-react'],
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
    // Remove unused CSS
    experimental: {
        optimizeCss: true,
    },
};

export default nextConfig;
