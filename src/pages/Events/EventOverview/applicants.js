import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Card, CardBody, CardTitle, Table } from "reactstrap"
import { Link } from "react-router-dom"
import { map } from "lodash"
import images from "assets/images"
import { useDispatch, useSelector } from "react-redux"
import {acceptApplications, rejectApplications} from "./../../../store/projects/actions"

const Applicants = ({match}) => {
  
  useEffect(() => {
    setId(match.params.id)
  },[])
  const [id,setId] = useState("")
  const applications = useSelector(state => state.projects.projects)[match.params.id]
  const dispatch = useDispatch()

  const acceptRequest = (projectId, applicantId) => {
    dispatch(acceptApplications(projectId, applicantId))

  }

  const rejectRequest = (projectId, applicantId) => {
    dispatch(rejectApplications(projectId, applicantId))
  }

  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-4">Applications</CardTitle>
        {console.log(applications.applicants)}
        <div className="table-responsive">
          <Table className="table align-middle table-nowrap">
            <tbody>
              {map(applications.applicants, (member, k) => (
                <tr key={"_member_" + k}>
                  <td style={{ width: "50px" }}>
                    {member.img !== "Null" ? (
                      <img
                        src={images[member.img]}
                        className="rounded-circle avatar-xs"
                        alt=""
                      />
                    ) : (
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-primary text-white font-size-16">
                          {member.img}
                        </span>
                      </div>
                    )}
                  </td>
                  <td>
                    <h5 className="font-size-14 px-2 mx-2">
                      <Link to="" className="text-dark">
                        {member.fullname}
                      </Link>
                    </h5>
                  </td>
                  <td>
                    <div>
                        <i className="mdi mdi-check text-success px-2 font-size-22" onClick={() => acceptRequest(match.params.id,k)}></i>
                        <i className="mdi mdi-close text-danger font-size-22" onClick={() => rejectRequest(match.params.id,k)}></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  )
}

Applicants.propTypes = {
  applications: PropTypes.array,
  match: PropTypes.object
}

export default Applicants
