import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { Collapse, NavbarToggler, NavItem } from 'reactstrap'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <div
        className="navbar navbar-expand-md navbar-light bg-light px-md-5 col-12 ml-auto mr-auto py-1"
        id="myNav"
      >
        <Link to="/" className="navbar-brand py-0">
          {this.props.navBarTitle}
        </Link>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <ul className="navbar-nav ml-auto align-items-center">
            {this.props.navItems.map((item, index) => (
              <NavItem key={index}>
                <Link
                  className="nav-link"
                  // activeStyle={{ color: 'red' }}
                  activeClassName="active"
                  to={item.to}
                >
                  {item.name}
                </Link>
              </NavItem>
            ))}
          </ul>
        </Collapse>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  navItems: PropTypes.array,
}

export default Header
