import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";

//Import images
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";

class NotificationDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false,
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      menu: !prevState.menu,
    }))
  }
  render() {
    return (
      <React.Fragment>
        <Dropdown
          isOpen={this.state.menu}
          toggle={this.toggle}
          className="dropdown d-inline-block"
          tag="li"
        >
          <DropdownToggle
            className="btn header-item noti-icon"
            tag="button"
            id="page-header-notifications-dropdown"
          >
            <i className="bx bx-bell bx-tada" />
            <span className="badge bg-danger rounded-pill">3</span>
          </DropdownToggle>

          <DropdownMenu className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
            <div className="p-3">
              <Row className="align-items-center">
                <Col>
                  <h6 className="m-0"> Notifications</h6>
                </Col>
                <div className="col-auto">
                  <a href="#" className="small">
                    {" "}
                    View All
                  </a>
                </div>
              </Row>
            </div>

            <SimpleBar style={{ height: "230px" }}>
              <Link to="" className="text-reset notification-item">
                <div className="media">
                  <div className="avatar-xs me-3">
                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                      <i className="mdi mdi-cricket" />
                    </span>
                  </div>
                  <div className="media-body">
                    <h6 className="mt-0 mb-1">
                      Chidanand Created New Sport Event
                    </h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">
                          Call for participants - Cricket League
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline" />{" "}
                        3 min ago{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="" className="text-reset notification-item">
                <div className="media">
                  <img
                    src={avatar3}
                    className="me-3 rounded-circle avatar-xs"
                    alt="user-pic"
                  />
                  <div className="media-body">
                    <h6 className="mt-0 mb-1">Jose, Ajit</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">
                        Signed up for your Walkathon
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline" />
                        1 hours ago{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="" className="text-reset notification-item">
                <div className="media">
                  <div className="avatar-xs me-3">
                    <span className="avatar-title bg-success rounded-circle font-size-16">
                      <i className="mdi mdi-timer-outline" />
                    </span>
                  </div>
                  <div className="media-body">
                    <h6 className="mt-0 mb-1">
                      Hurry up!! Only few hours left
                    </h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">
                        To sign up for Teamup project
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-timer-alert-outline" />{" "}
                        3 min ago
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

            </SimpleBar>
            <div className="p-2 border-top d-grid">
              <Link className="btn btn-sm btn-link font-size-14 text-center" to="#">
                <i className="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View More..</span>
              </Link>
            </div>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    )
  }
}

export default NotificationDropdown
