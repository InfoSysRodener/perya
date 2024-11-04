/* eslint-disable @typescript-eslint/no-require-imports */

const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  // Your Next.js config
  reactStrictMode: true,
});
