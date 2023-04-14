import PropTypes from 'prop-types'
import React, { Component } from "react"
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';

import { connect } from "react-redux"

import { Link } from "react-router-dom"

// Import menuDropdown
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"
import RightSidebar from '../CommonForBoth/RightSidebar'

import logo from "../../assets/images/logo.svg"
import logoLightSvg from "../../assets/images/logo-light.svg"

// Redux Store
import { toggleRightSidebar } from "../../store/actions"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearch: false,
      open: false,
      position: 'right',
    }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleRightDrawer = this.toggleRightDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
  }
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.toggleMenuCallback()
  }
  /** 
   * Right sidebar drawer 
  * */

  toggleRightDrawer() {
    this.setState({ position: 'right' });
    this.setState({ open: !this.state.open });
  } 
  closeDrawer() {
    this.setState({ open: false });
  }
  onDrawerClose() {
    this.setState({ open: false });
  }


  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar()
  }
  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">

            <div className="d-flex">
              <div className="navbar-brand-box d-lg-none d-md-block">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logo} alt="" height="22" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoLightSvg} alt="" height="22" />
                  </span>
                </Link>
              </div>

              <button
                type="button"
                onClick={this.toggleMenu}
                className="btn btn-sm px-3 font-size-16 header-item"
                id="vertical-menu-btn"
              >
                <i className="fa fa-fw fa-bars"></i>
              </button>

              <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bx bx-search-alt"></span>
                </div>
              </form>

              </div>
            <div className="d-flex">
              <div className="dropdown d-inline-block d-lg-none ms-2">
                <button
                  onClick={() => {
                    this.setState({ isSearch: !this.state.isSearch })
                  }}
                  type="button"
                  className="btn header-item noti-icon"
                  id="page-header-search-dropdown"
                >
                  <i className="mdi mdi-magnify"></i>
                </button>
                <div
                  className={
                    this.state.isSearch
                      ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                      : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  }
                  aria-labelledby="page-header-search-dropdown"
                >
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                          aria-label="Recipient's username"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <NotificationDropdown />
              <ProfileMenu />

              <div
                onClick={this.toggleRightDrawer} disabled={this.state.open}
                className="dropdown d-inline-block"
              >
                <button
                  type="button"
                  className="btn header-item noti-icon right-bar-toggle"
                >
                  <i className="bx bx-cog bx-spin"></i>
                </button>
              </div>
            </div>
          </div>
        </header>
        <ReactDrawer
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}
        >
          <RightSidebar onClose={this.onDrawerClose} />
        </ReactDrawer>
      </React.Fragment>
    )
  }
}

const mapStatetoProps = state => {
  const { layoutType } = state.Layout
  return { layoutType }
}

export default connect(mapStatetoProps, { toggleRightSidebar })(Header)

Header.propTypes = {
  toggleMenuCallback: PropTypes.any,
  toggleRightSidebar: PropTypes.func
}