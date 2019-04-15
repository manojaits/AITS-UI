import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeader, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/credr_logo.png'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);


    this.state = {
      performLogout: false,


    }
  }
  handleLogout() {
    this.setState({
      performLogout: true,
      userName: this.state.userName

    })

  }
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    if (this.state.performLogout) {
      return (
        <Redirect to={{
          pathname: '/login'
        }} />);

    } else {

      return (
        <AppHeader>
          <React.Fragment>

            <AppSidebarToggler className="d-lg-none" display="md" mobile />
            <AppNavbarBrand
            // full={{ src: logo, width: 82, height: 25, alt: 'Credr_Logo' }}
            // minimized={{ src: logo, width: 89, height: 25, alt: 'Credr_Logo' }}
            />
            <Nav className="ml-auto" navbar>
              <NavItem className="d-md-down-none">
                <NavLink href="#" />
              </NavItem>

              <AppHeaderDropdown direction="down">
                <DropdownToggle nav>
                  <i className="fa fa-user fa-fw" />
                  <i className="fa fa-caret-down fa-fw" />
                </DropdownToggle>
                <DropdownMenu right style={{ right: "auto" }}>
                  <Link to="/EditProfile">

                    <DropdownItem>
                      {/* <Link to="/register"> */}

                      <i className="fa fa-user fa-fw" /> Edit Profile
</DropdownItem>
                  </Link>
                  {/* <DropdownItem>
                  <i className="fa fa-gear fa-fw" /> Settings
</DropdownItem> */}

                  <DropdownItem
                    onClick={() => {
                      this.handleLogout()
                    }}>

                    <i className="fa fa-sign-out fa-fw" /> Logout
</DropdownItem>
                </DropdownMenu>
              </AppHeaderDropdown>
            </Nav>

          </React.Fragment>
        </AppHeader>
      );
    }
  }
}
DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
