/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_KEY: process.env.API_KEY,
        API_URL: process.env.API_URL,
        API_GECKO: process.env.API_GECKO
    }
}

module.exports = nextConfig
