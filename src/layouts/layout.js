import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'

import './reduction.scss'
import Particles from 'react-particles-js'

const navItems = [
  //   { to: '/', name: 'Home' },
  { to: '/about', name: 'About Us' },
  { to: '/services', name: 'Services' },
]

const particlesConfig = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#3CA9D1',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: '#ffffff',
      opacity: 0.4,
      width: 0.8,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0,
      },
      grab: {
        distance: 200,
        // duration: 2,
      },
    },
  },
  retina_detect: true,
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            navTitle
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: data.site.siteMetadata.keywords,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          navBarTitle={data.site.siteMetadata.navTitle}
          navItems={navItems}
        />
        <div
          class="container-fluid px-0 align-middle header-container"
          style={{ height: '18rem' }}
        >
          <Particles
            params={particlesConfig}
            style={{
              top: '0px',
              position: 'absolute',
              width: '100%',
              backgroundColor: `rgb(49, 49, 49)`,
            }}
            height={'100%'}
          />

          <div class="header-text-container mx-auto text-center">
            <h1 class="header-text mb-1">Software and Services</h1>
            <p class="lead mb-0">Built for your needs.</p>
          </div>
        </div>

        <div
          style={{
            margin: '0 auto',
            maxWidth: 1100,
            padding: '0px',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <footer className="py-5 text-muted text-center text-small">
          <p className="mb-0">© 2016-2018 Hepa Solutions</p>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
