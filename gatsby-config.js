const languages = require("./src/lang/languajes.ts");

module.exports = {
  siteMetadata: {
    title: "Roome",
    description: `Portfolio of Jesús David Bossa. Here I share my experience by publicizing my projects and my way of work`,
    author: `Jesús David Bossa`,
    siteUrl: "https://roome.jesusbossa.dev/",
    keywords: [
      "Roome",
      "Museum",
      "NFT",
      "Opensea",
      "Jesus bossa",
      "Jesus david bossa",
    ],
    image: "/preview.png",
    languages,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@images": "src/images",
        },
        extensions: ["ts", "tsx"],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
