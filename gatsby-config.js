module.exports = {
  siteMetadata: {
    title: 'Roome',
    description: `Portfolio of Jesús David Bossa. Here I share my experience by publicizing my projects and my way of work`,
    author: `Jesús David Bossa`,
    siteUrl: 'https://roome.jesusbossa.dev/',
    keywords: ['Roome', 'Museum', 'NFT', 'Opensea', 'Jesus bossa', 'Jesus david bossa'],
    image: '/preview.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
