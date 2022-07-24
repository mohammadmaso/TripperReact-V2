module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack5: true,
}

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
// module.exports = withBundleAnalyzer({})

const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { withSentryConfig } = require('@sentry/nextjs');

if (process.env.ACTIVE_PWA === "true") {
  module.exports = withPWA({
    pwa: {
      dest: 'public',
      runtimeCaching,
      register: true,
      skipWaiting: true,
    },
})}

// module.exports = {
//   images: {
//     domains: ['cdn.pay.ir'],
//   },
// }



const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};


module.exports = withSentryConfig(sentryWebpackPluginOptions);
