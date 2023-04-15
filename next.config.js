/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    env: {
        API_KEY: process.env.API_KEY,
        API_URL: process.env.API_URL,
        API_GECKO: process.env.API_GECKO
    },
    images: {
        domains: ['assets.coingecko.com'],
    },
}

module.exports = nextConfig
