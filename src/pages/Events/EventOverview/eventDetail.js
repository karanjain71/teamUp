import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import { map, get } from "lodash"
import { AvField, AvForm } from "availity-reactstrap-validation";
import { Card, CardBody, Col, Media, Row, Input} from "reactstrap"
import img1 from "../../../assets/images/companies/img-1.png"
import { editEventDetails } from "store/actions";
import { useDispatch } from "react-redux";

const EventDetail = (props) => {

  const [dueDate, setDueDate] = useState("")
  const [startDate, setStartDate] = useState("")
  const [description, setDescription] = useState("")
  const [editable, setEditable] = useState(false)
  const dispatch = useDispatch()
  const {project, match, history} = props

  const handleSubmit = (e, values) => {
    values.id = match.params.id
    dispatch(editEventDetails(values, history))
  }

  useEffect(() => {
    // const match= {props.history}
    console.log( match)
    const slashes = match.url.split("/")
    console.log(slashes.length,'this')
    if(slashes.length<=3){
      setEditable(true)
    }
    else {
      setEditable(false)
    }
    console.log(editable)
    setDescription(project.projectDetails.description)
    setStartDate(project.startDate)
    setDueDate(project.dueDate)
  },[])
  return (
    <Card>
      <CardBody>
        <div className="d-flex">
          <img src={img1} alt="" className="avatar-sm me-4" />

          <div className="flex-grow-1 overflow-hidden">
            <h5 className="text-truncate font-size-15">{project.name}</h5>
            <p className="text-muted">{project.description}</p>
          </div>
        </div>

        <h5 className="font-size-15 mt-4">Project Details :</h5>
        {editable?<>
          <p className="text-muted">

            {get(project, "projectDetails.description")}
            </p>

            <div className="text-muted mt-4">
            {project.projectDetails &&
              map(project.projectDetails.points, (point, index) => (
                <p key={index}>
                  <i className="mdi mdi-chevron-right text-primary me-1" />
                  Points: {point}
                </p>
              ))}
            </div>
            

            <Row className="task-dates">
            <Col sm="4" xs="6">
              <div className="mt-4">
                <h5 className="font-size-14">
                  <i className="mdi mdi-account me-2 text-primary"></i>Owner
                </h5>
                <p className="text-muted mt-0">{project.createdBy}</p>
              </div>
            </Col>
            <Col sm="4" xs="6">
              <div className="mt-4">
                <h5 className="font-size-14">
                  <i className="bx bx-calendar me-1 text-primary" /> Start Date
                </h5>
                <p className="text-muted mb-0">{project.startDate}</p>
              
                
              </div>
            </Col>

            <Col sm="4" xs="6">
              <div className="mt-4">
                <h5 className="font-size-14">
                  <i className="bx bx-calendar-check me-1 text-primary" /> Due
                  Date
                </h5>
                <p className="text-muted mb-0">{project.dueDate}</p>
              </div>
            </Col>
            </Row>
        </>:<>
        <AvForm onValidSubmit={handleSubmit}>
          <p className="text-muted">

            <AvField type="text" value={description} name="description" required/>
          </p>

          <div className="text-muted mt-4">
            {project.projectDetails &&
              map(project.projectDetails.points, (point, index) => (
                <p key={index}>
                  <i className="mdi mdi-chevron-right text-primary me-1" />
                  Points: {point}
                </p>
              ))}
          </div>

          <Row className="task-dates">
            <Col sm="4" xs="6">
              <div className="mt-4">
                <h5 className="font-size-14">
                <i className="mdi mdi-account me-2 text-primary"></i>Owner
                </h5>
                <p className="text-muted mt-0">{project.createdBy}</p>
              </div>
            </Col>
            <Col sm="4" xs="6">
              <div className="mt-4">
                <h5 className="font-size-14">
                  <i className="bx bx-calendar me-1 text-primary" /> Start Date
                </h5>
                  <AvField type="date" value ={startDate} name="startDate" onChange={e => setStartDate(e.target.value)}></AvField>
              </div>
            </Col>

            <Col sm="4" xs="6">
              <div className="mt-4">
                <h5 className="font-size-14">
                  <i className="bx bx-calendar-check me-1 text-primary" /> Due
                  Date
                </h5>
                <AvField type="date" value ={dueDate} name="dueDate" onChange={e=> setDueDate(e.target.value)}></AvField>
                
              </div>
            </Col>
          </Row>
          <button className="btn btn-primary my-5" type="submit">Save</button>
        </AvForm>
        </>}
        
        
      </CardBody>
    </Card>
  )
}

EventDetail.propTypes = {
  project: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object,
}

export default EventDetail
