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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-129592097-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'ofstad.io',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              username: 'heofs',
              includeDefaultCss: true,
            },
          },
        ],
      },
    },
  ],
}
