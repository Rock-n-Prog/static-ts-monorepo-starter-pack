const withTM = require('next-transpile-modules')(['@acme/db', '@acme/api']);

module.exports = withTM({
  reactStrictMode: true,
  webpack: config => {
    config.externals = [...(config.externals || []), '@prisma/client'];
    return config;
  },
});
