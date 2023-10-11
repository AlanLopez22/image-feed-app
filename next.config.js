/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['rickandmortyapi.com'],
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
