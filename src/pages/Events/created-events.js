import React, { Component, useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';
import PropTypes from "prop-types"
import { connect, useSelector } from "react-redux"
import {
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row, Nav, NavItem, NavLink, TabContent, TabPane, Input, Label, Card, CardBody,CardTitle,

} from "reactstrap"
import classnames from "classnames"
import "nouislider/distribute/nouislider.css"

import { filter, map } from "lodash"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//Import Cards
import CardProject from "./card-event"
import { events } from "common/data";
const CreatedEvents = (props)  => {

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(5)
  const [filteredEvents, setFilteredEvents] = useState([])
  const [filteredMyEvents, setFilteredMyEvents] = useState([])
  const eventCategories = ['Sports','Indoor Games','Technical','Leisure', 'Health', 'Others']
  const statusOfEvent = ['New','Ongoing','Completed']
  const [selectedEventCategory, setSelectedEventCategory] = useState("")
  const [selectedStatusOfEvent, setSelectedStatusOfEvent] = useState("")
  const createdEvents = useSelector(state => state.projects.createdEvents)
  const emailId = JSON.parse(localStorage.getItem('authUser')).email

  const categoryFilter = (category,status) => {
    console.log(filteredEvents)
    console.log(category, status, "Here")
    setSelectedEventCategory(category)
    setSelectedStatusOfEvent(status)
    setFilteredEvents(createdEvents)
    setFilteredEvents(createdEvents.filter(event => {
      if(category === "" && status === "")
        return true
      if(category === "")
        return event.status1 === status
      else if(status === "")
        return event.category === category
      else {
        return event.category === category && event.status1 === status
      }
      // console.log(event.category, value,'category')
    }))
  }

  const handlePageClick = page => {
    setPage(page)
  }

  useEffect(() => {
    setFilteredEvents(createdEvents)
  },[createdEvents])

  console.log(createdEvents)

  if(createdEvents){
    return (
        <React.Fragment>
          <div className="page-content">
            <MetaTags>
              <title>Created Events | SAP Teamup</title>
            </MetaTags>
            <Container fluid>
              <Breadcrumbs {...props} />
              <Row>
                <Col lg="3">
                  <Card>
                    <CardBody>
                      <CardTitle className="mb-4">Filters</CardTitle>
                      <div className="mt-4 pt-3">
                        <h5 className="font-size-14">Category</h5>
                        <Label htmlFor="selectedEventCategory"></Label>
                        <Input type="select" className="form-select" value = {selectedEventCategory} onChange={e => categoryFilter(e.target.value, selectedStatusOfEvent)}
                          >
                            <option value="">Select One</option>
                          {eventCategories.map(category => {
                            return <option value={category} key={category}>{category}</option>
                          })}
                        </Input>
                      </div>
  
                      <div className="mt-4 pt-3">
                        <h5 className="font-size-14">Status</h5>
                        <Label htmlFor="selectedStatusOfEvent"></Label>
                        <Input type="select" className="form-select" value = {selectedStatusOfEvent} onChange={e => categoryFilter(selectedEventCategory,e.target.value)}>
                          <option value="">Select One</option>
                          {statusOfEvent.map(status => {
                            return <option value={status} key={status}>{status}</option>
                          })}
                        </Input>
                      </div>
                      <button type="button" className="btn btn-primary my-4" onClick={() => categoryFilter("","")}>Clear</button> 
                    </CardBody>
                  </Card>
                </Col>
              <Col lg="9">
                <Row className="mb-3">
                  <Row>
                    {/* Import Cards */}
                    <CardProject projects={filteredEvents} key={"cardproject"} />
                  </Row>
  
                    <Row>
                      <Col lg="12">
                        <Pagination className="pagination pagination-rounded justify-content-center mt-2 mb-5">
                          <PaginationItem disabled={page === 1}>
                            <PaginationLink
                              previous
                              href="#"
                              onClick={() => handlePageClick(page - 1)}
                            />
                          </PaginationItem>
                          {map(Array(totalPage), (item, i) => (
                            <PaginationItem active={i + 1 === page} key={'_k'+i}>
                              <PaginationLink
                                onClick={() => handlePageClick(i + 1)}
                                href="#"
                              >
                                {i + 1}
                              </PaginationLink>
                            </PaginationItem>
                          ))}
                          <PaginationItem disabled={page === totalPage}>
                            <PaginationLink
                              next
                              href="#"
                              onClick={() => handlePageClick(page + 1)}
                            />
                          </PaginationItem>
                        </Pagination>
                      </Col>
                    </Row>
                  </Row>
              </Col>
              </Row>
            </Container>
          </div>
        </React.Fragment>
      )
    }
    else {
        return (
        <p>You are yet to create any events</p>
        )
    }
  
}

export default CreatedEvents
