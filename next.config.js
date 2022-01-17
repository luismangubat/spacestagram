/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["www.youtube.com", "img.youtube.com", "apod.nasa.gov"]
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}
