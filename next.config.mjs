/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },

    reactStrictMode: false,

    async rewrites() {
        return [
            {
                source: '/api/todo/:path*', // The path you want to proxy
                // destination: 'http://localhost:8080/todo/:path*', // The local Express endpoint
                destination: 'http://114.132.189.139:8080/todo/:path*', // The local Express endpoint
            },
        ];
    },
};

export default nextConfig;
