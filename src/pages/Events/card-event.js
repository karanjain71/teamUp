import PropTypes from 'prop-types'
import React from "react"
import { Link } from "react-router-dom"
import { map } from "lodash"
import {
  Badge,
  Card,
  CardBody,
  Col,
  Row,
  Media,
  Alert 
} from "reactstrap"
import companies from "assets/images/companies"
import {showToast, clearToast} from "./../Utilities/Ui-notifications"
import {changeSignedInEvents} from '../../store/projects/actions'
import {useDispatch} from 'react-redux'
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import images from "../../assets/images"

const CardEvent = ({ projects }) => {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('authUser')).username
  const emailId = JSON.parse(localStorage.getItem('authUser')).email
  return (
    <React.Fragment>
      {console.log(projects, 'This')}
      {map(projects, (project, dkey) => (
        <Col xl="4" sm="6" key={"__projectcd_" + dkey}>
          <Card>
            <CardBody>
              <div className="d-flex">
                <div>
                  <div className=''>
                    <li className="list-inline-item me-3">
                      <Badge color={project.color} className={"bg-" + project.color}>{project.status}</Badge>
                    </li>
                  </div>
                </div>

                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="text-truncate font-size-15">
                    <Link
                      to={`/event-overview/${project.id}`}
                      className="text-dark"
                    >
                      {project.name}
                    </Link>
                  </h5>
                  <p className="text-muted mb-4">{project.description}</p>

                  <div className="avatar-group">
                    {project.team.map((team, secondkey) =>
                      !team.img || team.img !== "Null" ?
                        <React.Fragment key={"_teamaa__" + secondkey}>
                          <div className="avatar-group-item">
                            <Link
                              to="#"
                              className="d-inline-block"
                              id={"member" + team.id}
                              key={"_team_" + secondkey}
                            >
                              <img
                                src={images[team.img]}
                                className="rounded-circle avatar-xs"
                                alt=""
                              />
                            </Link>
                          </div>
                        </React.Fragment>
                        :
                        <React.Fragment key={"__teama_" + secondkey}>
                          <div className="avatar-group-item">
                            <Link
                              to="#"
                              className="d-inline-block"
                              id={"member" + team.id}
                            >
                              <div className="avatar-xs">
                                <span
                                  className={
                                    "avatar-title rounded-circle bg-" +
                                    team.color +
                                    " text-white font-size-16"
                                  }
                                >
                                  {team.name}
                                </span>
                              </div>
                            </Link>
                          </div>
                        </React.Fragment>
                    )}
                  </div>
                  <div className="join-now py-3 right">
                    {
                      project.signedIn == false ? <>
                        <p className="text-muted"> Vacancies: <span style={{fontWeight: "bold"}}>{project.vacancies}</span></p>                       
                          <button type="button" style={{textAlign:'left', float: 'right'}} onClick={()=>{
                                const payload = {
                                  "id":project.id,
                                  "image":"avatar1",
                                  "fullname": user
                                }
                                dispatch(changeSignedInEvents(payload))
                                showToast("success", "Your joined an event", "Congrats")
                            }} className="btn btn-success">
                              Join us <i className="mdi mdi-plus" />
                          </button> 
                      </> :
                      <>
                        <p className="text-muted"> Vacancies: <span style={{fontWeight: "bold"}}>{project.vacancies}</span></p>                        
                      <p>{" "}</p> 
                        {
                        project.createdBy === emailId?
                        <Link to={`/event-overview/edit/${project.id}`}>
                          <button className='btn btn-primary'>
                            <i className='mdi mdi-pencil'></i>{"   "}Edit 
                          </button>
                          </Link>: null
                        }       
                        <button type="button" style={{textAlign:'right', float: 'right'}}
                           className="btn btn-dark" disabled>
                            Joined
                        </button>
                      </>   
                    }
                  </div>
                </div>
              </div>
            </CardBody>
            <div className="px-4 py-3 border-top">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-2">
                  <Badge color={project.color} className={"bg-" + project.color}>{project.status1}</Badge>
                </li>{" "}
                <li className="list-inline-item me-2">
                  <Badge color={project.color} className={"bg-danger"}>{project.category}</Badge>
                </li>{" "}
                <li className="list-inline-item me-2" id="dueDate">
                  <i className="bx bx-calendar me-1" /> {project.dueDate}
                </li>{" "}
                <li className="list-inline-item me-2" id="comments">
                  <i className="bx bx-comment-dots me-1" />{" "}
                  {project.commentsCount}
                </li>
              </ul>
            </div>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  )
}

CardEvent.propTypes = {
  projects: PropTypes.array
}

export default CardEvent
