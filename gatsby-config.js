module.exports = {
  siteMetadata: {
    title: 'Ofstad Enterprise',
    navTitle: 'Ofstad Enterprise',
    description:
      'Software solutions for small businesses. We design and setup modern web services, like web applications and APIs for gathering data.',
    keywords: 'software, web development, data, raspberry pi, analytics',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `markdown-pages`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ofstad Enterprise',
        short_name: 'Ofstad',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'browser',
        icon: 'src/images/cube.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
