import React, {useState, useEffect} from 'react'
import {useDispatch} from "react-redux"
import { addNewProject, getProjects, getMyProjects, getCreatedEvents } from "store/actions";
import PropTypes from "prop-types"

const Loading = (props) => {

  const dispatch = useDispatch()
  useEffect(() => {
      setTimeout(() => {
          props.history.push('/events')
      }, 1000);
  })

  useEffect(() => {
      dispatch(getProjects())
      dispatch(getMyProjects())
      dispatch(getCreatedEvents())

  })
  return (
    <div>Loading</div>
  )
}

Loading.propTypes = {
    history: PropTypes.any,
  }

export default Loading