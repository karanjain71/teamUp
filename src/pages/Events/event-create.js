import React, { Component, Fragment, useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux";
import { addNewProject } from "store/actions";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap"
import Select from "react-select"
// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import {showToast, clearToast} from "./../Utilities/Ui-notifications"

//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { AvField, AvForm } from "availity-reactstrap-validation";
import { propTypes } from "react-bootstrap-editable";

const eventCategory = ["Sports", "Indoor Games", "Technical", "Leisure", "Health"]
const categoryTags = {
  "":[],
  "Sports":["Tennis", "Football", "Cricket", "Basketball", "Volleyball", "Rugby"],
  "Indoor Games":["Chess", "Carrom", "Billiards", "Cards"],
  "Technical":["Projects", "Hackathon", "Discussion"],
  "Leisure":["Movie", "Partying", "Commute", "Room Share"],
  "Health": ["Yoga", "Walkathon", "GYM"]
}

const EventCreate = (props) => {

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [selectedMulti, setSelectedMulti] = useState(null)
  const [selectedEventTag, setSelectedEventTag] = useState("Select One")
  const [selectedEventCategory, setSelectedEventCategory] = useState("")
  const [inputFields, setInputFields] = useState([{ name: "", file: "" }])
  const projects = useSelector(state => state.projects.projects)
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('authUser'))

  const handleMulti = (event, field) => {
    let opts = [], opt;
    for (let i = 0, len = event.target.options.length; i < len; i++) {
        opt = event.target.options[i];
        if (opt.selected) {
            opts.push(opt.value);
        }
    }
    console.log(event)
    if(field=="selectedEventTag"){
      setSelectedEventTag(opts)
    }
  }

  const startDateChange = date => {
   setStartDate(date)
  }

  const endDateChange = date => {
    setEndDate(date)
  }

  const handleSubmit = (e, values) => {
    const payload = [{
      "id":1,
      "img":"avatar1",
      "fullname": user.username
    }]
    values.id = projects.length
    values.comments = []
    values.img = "img4"
    values.team = []
    values.projectDetails = []
    values.files = []
    values.signedIn = true
    values.status1 = "New"
    values.color = "success"
    values.commentCount = 0
    values.team = payload
    values.createdBy = user.email

    dispatch(addNewProject(values,props.history))
    showToast("success", "Your event has been added", "Congrats")
  }

    return (
      <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <title>Create Event | SAP Teamup</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs {...props} />

            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Create New Event</CardTitle>
                    <AvForm className="outer-repeater" onValidSubmit={handleSubmit}>
                      <div data-repeater-list="outer-group" className="outer">
                        <div data-repeater-item className="outer">
                          <FormGroup className="mb-4" row>
                            <Label
                              htmlFor="name"
                              className="col-form-label col-lg-2"
                            >
                              Event Name
                            </Label>
                            <Col lg="10">
                              <AvField
                                id="eventName"
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Enter event Name..."
                                required
                              />
                            </Col>
                          </FormGroup>
                          
                          <FormGroup className="mb-4" row>
                            <Label className="col-form-label col-lg-2" htmlFor="category">
                              Event Category
                            </Label>
                            <Col lg="10">
                            <AvField
                              className="form-select"
                              name="category"
                              type="select"
                              value={selectedEventCategory}
                              required
                              onChange={e => setSelectedEventCategory(e.target.value)}
                              >                 
                              <option value="">Select One</option>        
                            {eventCategory.map((options,index) => 
                              <option key={options}>{options}</option>)}
                            </AvField>
                            </Col>
                          </FormGroup>
                          <FormGroup className="mb-4" row>
                            <Label className="col-form-label col-lg-2" htmlFor="color">
                              Event tag
                            </Label>
                            <Col lg="10">
                            <AvField
                              className="form-select"
                              type="select"
                              value={selectedEventTag}
                              name="color"
                              required
                              >
                                <option value="">{selectedEventCategory?"Select One":"Select Event Category"}</option>  
                              {categoryTags[selectedEventCategory].map((options,index) => 
                                <option key={options}>{options}</option>)}
                              </AvField>
                            </Col>
                          </FormGroup>
                          <FormGroup className="mb-4" row>
                            <Label className="col-form-label col-lg-2" htmlFor="description">
                              Short Description
                            </Label>
                            <Col lg="10">
                              <AvField
                                name="description"
                                placeholder="Short description..."
                                required
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup className="mb-4" row>
                            <Label className="col-form-label col-lg-2" htmlFor="description">
                              Long Description
                            </Label>
                            <Col lg="10">
                              <AvField
                                name="longDescription"
                                type="textarea"
                                placeholder="Place Your Content Here..."
                                required
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup className="mb-4" row>
                            <Label className="col-form-label col-lg-2">
                              Event Date
                            </Label>
                            <Col lg="10">
                              <Row>
                                <Col md="6" className="pe-md-0 md-pe-3">
                                  <Label className="pe-md-0 md-pe-3" htmlFor="startDate">
                                    From
                                  </Label>
                                  <AvField
                                    type="date"
                                    name="startDate"
                                    className="form-control"
                                    selected={startDate}
                                    onChange={startDateChange}
                                  />
                                </Col>
                                <Col md="6" className="ps-md-0">
                                  <Label className="pe-md-0 md-pe-3" htmlFor="dueDate">
                                    To
                                  </Label>
                                  <AvField  
                                    type="date"
                                    name="dueDate"
                                    className="form-control"
                                    selected={endDate}
                                    onChange={endDateChange}
                                  />
                                </Col>
                              </Row>
                            </Col>
                          </FormGroup>
                          <FormGroup className="mb-4" row>
                            <label
                              htmlFor="vacancies"
                              className="col-form-label col-lg-2"
                            >
                              No.of vacancies
                            </label>
                            <div className="col-lg-10">
                              <AvField
                                id="eventVacancies"
                                name="vacancies"
                                type="number"
                                max="1000"
                                placeholder="Enter Num Of Vacancies..."
                                className="form-control"
                                required
                              />
                            </div>
                          </FormGroup>
                        </div>
                      </div>
                        <Row className="justify-content-end">
                        <Col lg="10">
                          <Button type="submit" color="primary">
                            Create Event
                          </Button>
                        </Col>
                      </Row>
                    </AvForm>
                    
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  
}

EventCreate.propTypes = {
  history: PropTypes.object,
}

export default EventCreate
