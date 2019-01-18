module.exports = {
  siteMetadata: {
    title: 'Ofstad Enterprise',
    navTitle: 'Ofstad Enterprise',
    description:
      'Software solutions for small businesses. We design and setup modern web services, like web applications and APIs for gathering data.',
    keywords: 'software, web development, data, raspberry pi, analytics',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/markdown`,
      },
    },
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
