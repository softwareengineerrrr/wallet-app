/**
 * @type {import('next').NextConfig}
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
};

if (process.env.NODE_ENV !== 'development') {
    nextConfig.compiler = {
        removeConsole: {
            exclude: ['warn', 'error'],
        },
    };
    nextConfig.eslint = {
        ignoreDuringBuilds: true,
    };
}
const plugins = () => {
    const plugins = [withBundleAnalyzer];
    return plugins.reduce((acc, next) => next(acc), {
        webpack(config) {
            // config.module.rules.push({
            // });
            return config;
        },
        ...nextConfig,
    });
};

module.exports = plugins();
