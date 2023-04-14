import React, { Component } from "react"
import PropTypes from "prop-types"
import { Row, Col, Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    let matchingMenuItem = null
    const ul = document.getElementById("navigation")
    const items = ul.getElementsByTagName("a")
    for (let i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem)
    }
  }

  activateParentDropdown = item => {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  render() {
    return (
      <React.Fragment>
        <div className="topnav">
          <div className="container-fluid">
            <nav
              className="navbar navbar-light navbar-expand-lg topnav-menu"
              id="navigation"
            >
              <Collapse
                isOpen={this.props.menuOpen}
                className="navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle arrow-none"
                      onClick={e => {
                        e.preventDefault()
                        this.setState({ isDashboard: !this.state.isDashboard })
                      }}
                      to="/dashboard"
                    >
                      <i className="bx bx-home-circle me-2" />
                      Dashboard {this.props.menuOpen}
                      <div className="arrow-down" />
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.isDashboard,
                      })}
                    >
                      <Link to="/dashboard" className="dropdown-item">
                        Default
                      </Link>
                      <Link to="/dashboard-saas" className="dropdown-item">
                        Saas
                      </Link>
                      <Link to="/dashboard-crypto" className="dropdown-item">
                        Crypto
                      </Link>
                      <Link to="/dashboard-blog" className="dropdown-item">
                        Blog
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      to="/#"
                      onClick={e => {
                        e.preventDefault()
                        this.setState({ uiState: !this.state.uiState })
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                    >
                      <i className="bx bx-tone me-2" />
                      UI Elements{" "}
                      <div className="arrow-down" />
                    </Link>
                    <div
                      className={classname(
                        "dropdown-menu mega-dropdown-menu dropdown-menu-left dropdown-mega-menu-xl",
                        { show: this.state.uiState }
                      )}
                    >
                      <Row>
                        <Col lg={4}>
                          <div>
                            <Link to="/ui-alerts" className="dropdown-item">
                              Alerts
                            </Link>
                            <Link to="/ui-buttons" className="dropdown-item">
                              Buttons
                            </Link>
                            <Link to="/ui-cards" className="dropdown-item">
                              Cards
                            </Link>
                            <Link to="/ui-carousel" className="dropdown-item">
                              Carousel
                            </Link>
                            <Link to="/ui-dropdowns" className="dropdown-item">
                              Dropdowns
                            </Link>
                            <Link to="/ui-grid" className="dropdown-item">
                              Grid
                            </Link>
                            <Link to="/ui-images" className="dropdown-item">
                              Images
                            </Link>
                            <Link to="/ui-lightbox" className="dropdown-item">
                              Lightbox
                            </Link>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div>
                            <Link to="/ui-modals" className="dropdown-item">
                              Modals
                            </Link>
                            <Link to="/ui-rangeslider" className="dropdown-item">
                              Range Slider
                            </Link>
                            <Link
                              to="/ui-session-timeout"
                              className="dropdown-item"
                            >
                              Session Timeout
                            </Link>
                            <Link
                              to="/ui-progressbars"
                              className="dropdown-item"
                            >
                              Progress Bars
                            </Link>
                            <Link to="/ui-sweet-alert" className="dropdown-item">
                              Sweet-Alert
                            </Link>
                            <Link
                              to="/ui-tabs-accordions"
                              className="dropdown-item"
                            >
                              Tabs & Accordions
                            </Link>
                            <Link to="/ui-typography" className="dropdown-item">
                              Typography
                            </Link>
                            <Link to="/ui-video" className="dropdown-item">
                              Video
                            </Link>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div>
                            <Link to="/ui-general" className="dropdown-item">
                              General
                            </Link>
                            <Link to="/ui-colors" className="dropdown-item">
                              Colors
                            </Link>
                            <Link to="/ui-rating" className="dropdown-item">
                              Rating
                            </Link>
                            <Link
                              to="/ui-notifications"
                              className="dropdown-item"
                            >
                              Notifications
                            </Link>
                            <Link to="/ui-breadcrumb" className="dropdown-item">
                              Breadcrumb
                            </Link>
                            <Link to="/ui-drawer" className="dropdown-item">
                              Drawer
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      to="/#"
                      onClick={e => {
                        e.preventDefault()
                        this.setState({ appState: !this.state.appState })
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                    >
                      <i className="bx bx-customize me-2" />
                      Apps <div className="arrow-down" />
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.appState,
                      })}
                    >
                      <Link to="/calendar" className="dropdown-item">
                        Calendar
                      </Link>
                      <Link to="/chat" className="dropdown-item">
                        Chat
                      </Link>
                      <Link to="/apps-filemanager" className="dropdown-item">
                        File Manager
                      </Link>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              emailState: !this.state.emailState,
                            })
                          }}
                        >
                          Email <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.emailState,
                          })}
                        >
                          <Link to="/" className="dropdown-item">
                            Inbox
                          </Link>
                          <Link to="/" className="dropdown-item">
                            Read Email
                          </Link>
                          <div className="dropdown">
                            <Link
                              className="dropdown-item dropdown-toggle arrow-none"
                              to="/#"
                              onClick={e => {
                                e.preventDefault()
                                this.setState({
                                  emailState: !this.state.emailState,
                                })
                              }}
                            >
                              <span key="t-email-templates">Templates</span>{" "}
                              <div className="arrow-down"></div>
                            </Link>
                            <div
                              className={classname("dropdown-menu", {
                                show: this.state.emailState,
                              })}
                            >
                              <Link
                                to="/"
                                className="dropdown-item"
                              >
                                Basic Action
                              </Link>
                              <Link
                                to="/"
                                className="dropdown-item"
                              >
                                Alert Email
                              </Link>
                              <Link
                                to="/"
                                className="dropdown-item"
                              >
                                Billing Email
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              ecommerceState: !this.state.ecommerceState,
                            })
                          }}
                        >
                           Ecommerce{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.ecommerceState,
                          })}
                        >
                          <Link
                            to="/ecommerce-products"
                            className="dropdown-item"
                          >
                            Products
                          </Link>
                          <Link
                            to="/ecommerce-product-details/1"
                            className="dropdown-item"
                          >
                            Product Details
                          </Link>
                          <Link to="/ecommerce-orders" className="dropdown-item">
                            Orders
                          </Link>
                          <Link
                            to="/ecommerce-customers"
                            className="dropdown-item"
                          >
                            Customers
                          </Link>
                          <Link to="/ecommerce-cart" className="dropdown-item">
                            Cart
                          </Link>
                          <Link
                            to="/ecommerce-checkout"
                            className="dropdown-item"
                          >
                            Checkout
                          </Link>
                          <Link to="/ecommerce-shops" className="dropdown-item">
                            Shops
                          </Link>
                          <Link
                            to="/ecommerce-add-product"
                            className="dropdown-item"
                          >
                            Add Product
                          </Link>
                        </div>
                      </div>

                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ isCrypto: !this.state.isCrypto })
                          }}
                        >
                          Crypto{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.isCrypto,
                          })}
                        >
                          <Link to="/crypto-wallet" className="dropdown-item">
                            Wallet
                          </Link>
                          <Link to="/crypto-buy-sell" className="dropdown-item">
                            Buy/Sell
                          </Link>
                          <Link to="/crypto-exchange" className="dropdown-item">
                            Exchange
                          </Link>
                          <Link to="/crypto-lending" className="dropdown-item">
                            Lending
                          </Link>
                          <Link to="/crypto-orders" className="dropdown-item">
                            Orders
                          </Link>
                          <Link
                            to="/crypto-kyc-application"
                            className="dropdown-item"
                          >
                            KYC Application
                          </Link>
                          <Link
                            to="/crypto-ico-landing"
                            className="dropdown-item"
                          >
                            ICO Landing
                          </Link>
                        </div>
                      </div>

                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              projectState: !this.state.projectState,
                            })
                          }}
                        >
                          Projects{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.projectState,
                          })}
                        >
                          <Link to="/projects-grid" className="dropdown-item">
                            Projects Grid
                          </Link>
                          <Link to="/projects-list" className="dropdown-item">
                            Projects List
                          </Link>
                          <Link
                            to="/projects-overview"
                            className="dropdown-item"
                          >
                            Project Overview
                          </Link>
                          <Link to="/projects-create" className="dropdown-item">
                            Create New
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ taskState: !this.state.taskState })
                          }}
                        >
                          Tasks <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.taskState,
                          })}
                        >
                          <Link to="/tasks-list" className="dropdown-item">
                            Task List
                          </Link>
                          <Link to="/tasks-kanban" className="dropdown-item">
                            Kanban Board
                          </Link>
                          <Link to="/tasks-create" className="dropdown-item">
                            Create Task
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              contactState: !this.state.contactState,
                            })
                          }}
                        >
                          Contacts{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.contactState,
                          })}
                        >
                          <Link to="/contacts-grid" className="dropdown-item">
                            User Grid
                          </Link>
                          <Link to="/contacts-list" className="dropdown-item">
                            User List
                          </Link>
                          <Link to="/contacts-profile" className="dropdown-item">
                            Profile
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              blogState: !this.state.blogState,
                            })
                          }}
                        >
                          Blog <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.blogState,
                          })}
                        >
                          <Link to="/blog-list" className="dropdown-item">
                            Blog List
                          </Link>
                          <Link to="/blog-grid" className="dropdown-item">
                            Blog Grid
                          </Link>
                          <Link to="/blog-details" className="dropdown-item">
                            Blog Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      to="/#"
                      className="nav-link dropdown-toggle arrow-none"
                      onClick={e => {
                        e.preventDefault()
                        this.setState({
                          componentState: !this.state.componentState,
                        })
                      }}
                    >
                      <i className="bx bx-collection me-2" />
                      Components{" "}
                      <div className="arrow-down" />
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.componentState,
                      })}
                    >
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ formState: !this.state.formState })
                          }}
                        >
                          Forms <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.formState,
                          })}
                        >
                          <Link to="/form-elements" className="dropdown-item">
                            Form Elements
                          </Link>
                          <Link to="/form-layouts" className="dropdown-item">
                            Form Layouts
                          </Link>
                          <Link to="/form-validation" className="dropdown-item">
                            Form Validation
                          </Link>
                          <Link to="/form-advanced" className="dropdown-item">
                            Form Advanced
                          </Link>
                          <Link to="/form-editors" className="dropdown-item">
                            Form Editors
                          </Link>
                          <Link to="/form-uploads" className="dropdown-item">
                            Form File Upload{" "}
                          </Link>
                          <Link to="/form-xeditable" className="dropdown-item">
                            Form Xeditable
                          </Link>
                          <Link to="/form-repeater" className="dropdown-item">
                            Form Repeater
                          </Link>
                          <Link to="/form-wizard" className="dropdown-item">
                            Form Wizard
                          </Link>
                          <Link to="/form-mask" className="dropdown-item">
                            Form Mask
                          </Link>
                          <Link to="/dual-listbox" className="dropdown-item">
                            Transfer List
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              chartState: !this.state.chartState,
                            })
                          }}
                        >
                          Charts{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.chartState,
                          })}
                        >
                          <Link to="/apex-charts" className="dropdown-item">
                            {" "}
                            Apex charts
                          </Link>
                          <Link to="/chartist-charts" className="dropdown-item">
                            {" "}
                            Chartjs Chart
                          </Link>
                          <Link to="/e-charts" className="dropdown-item">
                            {" "}
                            E Chart
                          </Link>
                          <Link to="/sparkline-charts" className="dropdown-item">
                            {" "}
                            Sparkline Chart
                          </Link>
                          <Link to="/charts-knob" className="dropdown-item">
                            Knob Chart
                          </Link>
                          <Link to="/re-charts" className="dropdown-item">
                            Re Chart
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ iconState: !this.state.iconState })
                          }}
                        >
                          Icons <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.iconState,
                          })}
                        >
                          <Link to="/icons-boxicons" className="dropdown-item">
                            Boxicons
                          </Link>
                          <Link
                            to="/icons-materialdesign"
                            className="dropdown-item"
                          >
                            Material Design
                          </Link>
                          <Link to="/icons-dripicons" className="dropdown-item">
                            Dripicons
                          </Link>
                          <Link
                            to="/icons-fontawesome"
                            className="dropdown-item"
                          >
                            Font awesome{" "}
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ mapState: !this.state.mapState })
                          }}
                        >
                          Maps <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.mapState,
                          })}
                        >
                          <Link to="/maps-google" className="dropdown-item">
                            Google Maps{" "}
                          </Link>
                          <Link to="/maps-vector" className="dropdown-item">
                            Vector Maps{" "}
                          </Link>
                          <Link to="/maps-leaflet" className="dropdown-item">
                            Leaflet Maps{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      onClick={e => {
                        e.preventDefault()
                        this.setState({ extraState: !this.state.extraState })
                      }}
                    >
                      <i className="bx bx-file me-2" />
                      Extra pages{" "}
                      <div className="arrow-down" />
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.extraState,
                      })}
                    >
                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              invoiceState: !this.state.invoiceState,
                            })
                          }}
                        >
                          Invoices{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.invoiceState,
                          })}
                        >
                          <Link to="/invoices-list" className="dropdown-item">
                            Invoice List
                          </Link>
                          <Link to="/invoices-detail" className="dropdown-item">
                            Invoice Detail
                          </Link>
                        </div>
                      </div>

                      <div className="dropdown">
                        <Link
                          to="/#"
                          className="dropdown-item dropdown-toggle arrow-none"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ authState: !this.state.authState })
                          }}
                        >
                          Authentication{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.authState,
                          })}
                        >
                          <Link to="/pages-login" className="dropdown-item">
                            Login
                          </Link>
                          <Link to="/pages-login-2" className="dropdown-item">
                            Login 2
                          </Link>
                          <Link to="/pages-register" className="dropdown-item">
                            Register
                          </Link>
                          <Link to="/pages-register-2" className="dropdown-item">
                            Register 2
                          </Link>
                          <Link to="/page-recoverpw" className="dropdown-item">
                            Recover Password
                          </Link>
                          <Link to="/pages-recoverpw-2" className="dropdown-item">
                            Recover Password 2
                          </Link>
                          <Link to="/auth-lock-screen" className="dropdown-item">
                            Lock Screen
                          </Link>
                          <Link
                            to="/auth-lock-screen-2"
                            className="dropdown-item"
                          >
                            Lock Screen 2
                          </Link>
                          <Link
                            to="/page-confirm-mail"
                            className="dropdown-item"
                          >
                            Confirm Mail
                          </Link>
                          <Link
                            to="/page-confirm-mail-2"
                            className="dropdown-item"
                          >
                            Confirm Mail 2
                          </Link>
                          <Link
                            to="/auth-email-verification"
                            className="dropdown-item"
                          >
                            Email verification
                          </Link>
                          <Link
                            to="/auth-email-verification-2"
                            className="dropdown-item"
                          >
                            Email verification 2
                          </Link>
                          <Link
                            to="/auth-two-step-verification"
                            className="dropdown-item"
                          >
                            Two step verification
                          </Link>
                          <Link
                            to="/auth-two-step-verification-2"
                            className="dropdown-item"
                          >
                            Two step verification 2
                          </Link>
                        </div>
                      </div>

                      <div className="dropdown">
                        <Link
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          onClick={e => {
                            e.preventDefault()
                            this.setState({
                              utilityState: !this.state.utilityState,
                            })
                          }}
                        >
                          Utility{" "}
                          <div className="arrow-down" />
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.utilityState,
                          })}
                        >
                          <Link to="/pages-starter" className="dropdown-item">
                            Starter Page
                          </Link>
                          <Link
                            to="/pages-maintenance"
                            className="dropdown-item"
                          >
                            Maintenance
                          </Link>
                          <Link to="/pages-comingsoon" className="dropdown-item">
                            Coming Soon
                          </Link>
                          <Link to="/pages-timeline" className="dropdown-item">
                            Timeline
                          </Link>
                          <Link to="/pages-faqs" className="dropdown-item">
                            FAQs
                          </Link>
                          <Link to="/pages-pricing" className="dropdown-item">
                            Pricing
                          </Link>
                          <Link to="/pages-404" className="dropdown-item">
                            Error 404
                          </Link>
                          <Link to="/pages-500" className="dropdown-item">
                            Error 500
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Collapse>
            </nav>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Navbar.propTypes = {
  location: PropTypes.object,
  menuOpen: PropTypes.any,
}

export default withRouter(Navbar)
