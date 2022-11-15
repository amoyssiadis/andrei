const prismic = require("@prismicio/client");

const sm = require("./sm.json");

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);
  // async function headers() {
  //   return [
  //     {
  //       source: "/_next/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Origin", value: "http://example.com" },
  //       ],
  //     },
  //   ]
  // };

  return {
    reactStrictMode: true,
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales,
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: locales[0],
    },
    images: {
      domains: ['andrei-portfolio.cdn.prismic.io','images.prismic.io'],
    },
  };
};

module.exports = nextConfig;
