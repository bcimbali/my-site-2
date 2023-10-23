/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName: true,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      cssProp: true,
      // Empty by default.
      minify: true,
      // Not supported yet.
      transpileTemplateLiterals: true
      // Not supported yet.
      // pure?: boolean,
    }
  }
};

module.exports = nextConfig;
