import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";;
import { routing } from "./src/i18n/routing"; 
const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: `/${routing.defaultLocale}`,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
