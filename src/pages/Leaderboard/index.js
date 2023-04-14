import React, { Component } from "react"
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Input
} from "reactstrap"
import MetaTags from 'react-meta-tags';
import Breadcrumbs from "../../components/Common/Breadcrumb"

const LeaderBoard = (props) => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
        </Container>
        <MetaTags>
          <title>Events List | SAP Teamup</title>
        </MetaTags>
        <Breadcrumbs {...props}></Breadcrumbs>
        <Row py="4">
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle className="mb-4">Top Enthusiasts</CardTitle>
                <Table hover>
                  <thead>
                    <tr>
                      <th>
                        #
                      </th>
                      <th>
                        Username
                      </th>
                      <th>
                        Points
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        1
                      </th>
                      <td>
                        Gopa Vasanth
                      </td>
                      <td>
                        130
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        2
                      </th>
                      <td>
                        Karan Jain
                      </td>
                      <td>
                        100
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        3
                      </th>
                      <td>
                      Shreya Das
                      </td>
                      <td>
                        80
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        4
                      </th>
                      <td>       	
                      Aditi Parmar
                      </td>
                      <td>
                        60
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        5
                      </th>
                      <td>	
                      Tukan Dutta
                      </td>
                      <td>
                        60
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        6
                      </th>
                      <td>
                      Harsh Srivastava
                      </td>
                      <td>
                        40
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default LeaderBoard