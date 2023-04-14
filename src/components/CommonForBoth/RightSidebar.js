import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Col, FormGroup, Row } from "reactstrap";

import { connect } from "react-redux";

/** Import actions */
import {
  hideRightSidebar,
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  changePreloader,
  changeTopbarTheme,
} from "../../store/actions";

//constants
import {
  layoutTypes,
  layoutWidthTypes,
  topBarThemeTypes,
  leftBarThemeImageTypes,
  leftSidebarTypes,
  leftSideBarThemeTypes,
} from "../../constants/layout"

//SimpleBar
import SimpleBar from "simplebar-react"

import { Link } from "react-router-dom"

import "./rightbar.scss"

class RightSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      layoutType: this.props.layoutType,
      sidebarType: this.props.leftSideBarType,
      layoutWidth: this.props.layoutWidth,
      sidebarTheme: this.props.leftSideBarTheme,
      sidebarThemeImage: this.props.leftSideBarThemeImage,
      topbarTheme: this.props.topbarTheme,
    }
    this.hideRightbar = this.hideRightbar.bind(this)
    this.changeLayout = this.changeLayout.bind(this)
    this.changeLayoutWidth = this.changeLayoutWidth.bind(this)
    this.changeLeftSidebarTheme = this.changeLeftSidebarTheme.bind(this)
    this.changeLeftSidebarThemeImage = this.changeLeftSidebarThemeImage.bind(this)
    this.changeLeftSidebarType = this.changeLeftSidebarType.bind(this)
    this.changeTopbarTheme = this.changeTopbarTheme.bind(this)
    this.changeThemePreloader = this.changeThemePreloader.bind(this)
    this.onCloseRightBar = this.onCloseRightBar.bind(this);
  }

  /**
   * Hides the right sidebar
   */
  hideRightbar(e) {
    e.preventDefault()
    this.props.hideRightSidebar()
  }
  componentDidMount() {
    this.setState({
      layoutType: this.props.layoutType,
      sidebarType: this.props.leftSideBarType,
      layoutWidth: this.props.layoutWidth,
      sidebarTheme: this.props.leftSideBarTheme,
      sidebarThemeImage: this.props.leftSideBarThemeImage,
      topbarTheme: this.props.topbarTheme,
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        layoutType: this.props.layoutType,
        sidebarType: this.props.leftSideBarType,
        layoutWidth: this.props.layoutWidth,
        sidebarTheme: this.props.leftSideBarTheme,
        sidebarThemeImage: this.props.leftSideBarThemeImage,
        topbarTheme: this.props.topbarTheme,
      })
    }
  }

  changeThemePreloader = () => {
    this.props.changePreloader(!this.props.isPreloader)
  }
  /**
   * Change the layout
   * @param {*} e
   */
  changeLayout(e) {
    if (e.target.checked) {
      this.props.changeLayout(e.target.value)
    }
  }

  /**
   * Changes layout width
   * @param {*} e
   */
  changeLayoutWidth(e) {
    if (e.target.checked) {
      this.props.changeLayoutWidth(e.target.value)
    }
  }

  // change left sidebar design
  changeLeftSidebarType(e) {
    if (e.target.checked) {
      this.props.changeSidebarType(e.target.value)
    }
  }

  // change left sidebar theme
  changeLeftSidebarTheme(e) {
    if (e.target.checked) {
      this.props.changeSidebarTheme(e.target.value)
    }
  }

  changeLeftSidebarThemeImage(e) {
    if (e.target.checked) {
      this.props.changeSidebarThemeImage(e.target.value)
    }
  }

  // change topbar theme
  changeTopbarTheme(e) {
    if (e.target.checked) {
      this.props.changeTopbarTheme(e.target.value)
    }
  }
  onCloseRightBar = () => {
    this.props.onClose();
  }

  render() {
    return (
      <React.Fragment>
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title px-3 py-4">
              <Link
                to="#"
                onClick={this.onCloseRightBar}
                className="right-bar-toggle float-end"
              >
                <i className="mdi mdi-close noti-icon" />
              </Link>
              <h5 className="m-0">Settings</h5>
            </div>

            <hr className="my-0" />

            <div className="p-4">

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Layout Width
                </span>
                <input
                  type="radio"
                  id="radioFluid"
                  name="radioWidth"
                  value={layoutWidthTypes.FLUID}
                  checked={this.state.layoutWidth === layoutWidthTypes.FLUID}
                  onChange={this.changeLayoutWidth}
                />
                <label htmlFor="radioFluid">Fluid</label>
                {"   "}
                <input
                  type="radio"
                  id="radioBoxed"
                  name="radioWidth"
                  value={layoutWidthTypes.BOXED}
                  checked={this.state.layoutWidth === layoutWidthTypes.BOXED}
                  onChange={this.changeLayoutWidth}
                />
                <label htmlFor="radioBoxed" className="me-2">Boxed</label>
                <input
                  type="radio"
                  id="radioscrollable"
                  name="radioscrollable"
                  value={layoutWidthTypes.SCROLLABLE}
                  checked={this.state.layoutWidth === layoutWidthTypes.SCROLLABLE}
                  onChange={this.changeLayoutWidth}
                />
                <label htmlFor="radioscrollable">Scrollable</label>
              </div>

              <hr className="mt-1" />

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Topbar Theme
                </span>
                <input
                  type="radio"
                  id="radioThemeLight"
                  name="radioTheme"
                  value={topBarThemeTypes.LIGHT}
                  checked={this.state.topbarTheme === topBarThemeTypes.LIGHT}
                  onChange={this.changeTopbarTheme}
                />

                <label htmlFor="radioThemeLight">Light</label>
                {"   "}
                <input
                  type="radio"
                  id="radioThemeDark"
                  name="radioTheme"
                  value={topBarThemeTypes.DARK}
                  checked={this.state.topbarTheme === topBarThemeTypes.DARK}
                  onChange={this.changeTopbarTheme}
                />
                <label htmlFor="radioThemeDark">Dark</label>
                {this.state.layoutType === "vertical" ? null : (
                  <>
                    {" "}
                    <input
                      type="radio"
                      id="radioThemeColored"
                      name="radioTheme"
                      value={topBarThemeTypes.COLORED}
                      checked={this.state.topbarTheme === topBarThemeTypes.COLORED}
                      onChange={this.changeTopbarTheme}
                    />
                    <label htmlFor="radioThemeColored">Colored</label>{" "}
                  </>
                )}
              </div>

              {this.state.layoutType === "vertical" ? (
                <React.Fragment>
                  <hr className="mt-1" />
                  <div className="radio-toolbar">
                    <span className="mb-2 d-block" id="radio-title">
                      Left Sidebar Type
                    </span>
                    <input
                      type="radio"
                      id="sidebarDefault"
                      name="sidebarType"
                      value={leftSidebarTypes.DEFAULT}
                      checked={
                        this.state.sidebarType === leftSidebarTypes.DEFAULT
                      }
                      onChange={this.changeLeftSidebarType}
                    />

                    <label htmlFor="sidebarDefault">Default</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarCompact"
                      name="sidebarType"
                      value={leftSidebarTypes.COMPACT}
                      checked={this.state.sidebarType === leftSidebarTypes.COMPACT}
                      onChange={this.changeLeftSidebarType}
                    />
                    <label htmlFor="sidebarCompact">Compact</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarIcon"
                      name="sidebarType"
                      value={leftSidebarTypes.ICON}
                      checked={this.state.sidebarType === leftSidebarTypes.ICON}
                      onChange={this.changeLeftSidebarType}
                    />
                    <label htmlFor="sidebarIcon">Icon</label>
                  </div>

                </React.Fragment>
              ) : null}

            </div>
          </div>
        </SimpleBar>
        <div className="rightbar-overlay" />
      </React.Fragment>
    )
  }
}

RightSidebar.propTypes = {
  changeLayout: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changePreloader: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeSidebarThemeImage: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  hideRightSidebar: PropTypes.func,
  isPreloader: PropTypes.bool,
  layoutType: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  leftSideBarThemeImage: PropTypes.any,
  leftSideBarType: PropTypes.any,
  topbarTheme: PropTypes.any,
  onClose: PropTypes.func
}

const mapStatetoProps = state => {
  return { ...state.Layout }
}

export default connect(mapStatetoProps, {
  hideRightSidebar,
  changeLayout,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  changeLayoutWidth,
  changeTopbarTheme,
  changePreloader,
})(RightSidebar)
