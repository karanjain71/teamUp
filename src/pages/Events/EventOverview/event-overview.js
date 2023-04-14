import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import MetaTags from 'react-meta-tags';
import { useSelector } from "react-redux"
import { isEmpty } from "lodash"
import { Col, Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"
import ProjectDetail from "./eventDetail"
import TeamMembers from "./teamMembers"
import Comments from "./comments"
import Applicants from "./applicants";

const EventOverview = (props) => {

    const [project, setProject] = useState([])
    const projectDetail = useSelector(state => state.projects.projects)
    const user = JSON.parse(localStorage.getItem('authUser'))

    useEffect(() => {
      const {
        match: {params}
      } = props

      if(params && params.id) {
        setProject(projectDetail[params.id])
      }
    }, [projectDetail])

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Event Overview | SAP Teamup</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs {...props} />

            {!isEmpty(project) && (
              <>
                <Row>
                  <Col lg="8">
                    <ProjectDetail project={project} match={props.match} history={props.history}/>
                  </Col>

                  <Col lg="4">
                    <TeamMembers team={project.team} />
                  </Col>
                </Row>
                {
                  user.email === project.createdBy?
                  <Row>
                  <Col>
                    <Applicants applications={project.applicants} match={props.match}/>
                  </Col>
                </Row>:null
                }
                <Row>
                  <Col>
                    <Comments comments={project.comments} />
                  </Col>
                </Row>                
              </>
            )}
          </Container>
        </div>
      </React.Fragment>
    )
}

EventOverview.propTypes = {
  projectDetail: PropTypes.any,
  match: PropTypes.object,
  history: PropTypes.object,
}

export default EventOverview
