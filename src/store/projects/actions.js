import {
  GET_PROJECTS,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SUCCESS,
  GET_MY_PROJECTS,
  GET_MY_PROJECTS_SUCCESS,
  GET_MY_PROJECTS_FAIL,
  GET_PROJECT_DETAIL,
  GET_PROJECT_DETAIL_FAIL,
  GET_PROJECT_DETAIL_SUCCESS,
  ADD_NEW_PROJECT,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAIL,
  UPDATE_PROJECT,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  DELETE_PROJECT,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  CHANGE_SIGNEDIN_EVENTS,
  GET_CREATED_EVENTS,
  GET_CREATED_EVENTS_SUCCESS,
  GET_CREATED_EVENTS_FAIL,
  EDIT_EVENT_DETAILS,
  ACCEPT_APPLICATIONS,
  ACCEPT_APPLICATIONS_SUCCESS,
  REJECT_APPLICATIONS,
  REJECT_APPLICATIONS_SUCCESS,
  REJECT_APPLICATIONS_FAIL
} from "./actionTypes"

export const getProjects = () => ({
  type: GET_PROJECTS,
})

export const getProjectsSuccess = projects => ({
  type: GET_PROJECTS_SUCCESS,
  payload: projects,
})

export const getProjectsFail = error => ({
  type: GET_PROJECTS_FAIL,
  payload: error,
})

export const getMyProjects = () => ({
  type: GET_MY_PROJECTS,
})

export const getMyProjectsSuccess = (projects) => ({
  type: GET_MY_PROJECTS_SUCCESS,
  payload: projects,
})

export const getMyProjectsFail = (error) => ({
  type: GET_MY_PROJECTS_FAIL,
  payload: error,
})

export const getCreatedEvents = () => ({
  type: GET_CREATED_EVENTS,
})

export const getCreatedEventsSuccess = (projects) => ({
  type: GET_CREATED_EVENTS_SUCCESS,
  payload: projects,
})

export const getCreatedEventsFail = (error) => ({
  type: GET_CREATED_EVENTS_FAIL,
  payload: error,
})

export const getProjectDetail = projectId => ({
  type: GET_PROJECT_DETAIL,
  projectId,
})

export const getProjectDetailSuccess = projectDetails => ({
  type: GET_PROJECT_DETAIL_SUCCESS,
  payload: projectDetails,
})

export const getProjectDetailFail = error => ({
  type: GET_PROJECT_DETAIL_FAIL,
  payload: error,
})

export const addNewProject = (project,history) => ({
  type: ADD_NEW_PROJECT,
  payload: {project,history},
})

export const addProjectSuccess = project => ({
  type: ADD_PROJECT_SUCCESS,
  payload: project,
})

export const addProjectFail = error => ({
  type: ADD_PROJECT_FAIL,
  payload: error,
})

export const updateProject = project => ({
  type: UPDATE_PROJECT,
  payload: project,
})

export const updateProjectSuccess = project => ({
  type: UPDATE_PROJECT_SUCCESS,
  payload: project,
})

export const updateProjectFail = error => ({
  type: UPDATE_PROJECT_FAIL,
  payload: error,
})

export const deleteProject = project => ({
  type: DELETE_PROJECT,
  payload: project,
})

export const deleteProjectSuccess = project => ({
  type: DELETE_PROJECT_SUCCESS,
  payload: project,
})

export const deleteProjectFail = error => ({
  type: DELETE_PROJECT_FAIL,
  payload: error,
})

export const changeSignedInEvents = id => ({
  type: CHANGE_SIGNEDIN_EVENTS,
  payload: id,
})

export const editEventDetails = (values,history) => ({
  type: EDIT_EVENT_DETAILS,
  payload: {values, history}
})

export const acceptApplications = (projectId, applicantId) => ({
  type: ACCEPT_APPLICATIONS,
  payload: {projectId, applicantId}
})

export const acceptApplicationsSuccess = (id) => ({
  type: ACCEPT_APPLICATIONS_SUCCESS,
  payload: id
})

export const acceptApplicationsFail = (error) => ({
  type: ACCEPT_APPLICATIONS_FAIL,
  payload: error
})

export const rejectApplications = (projectId, applicantId) => ({
  type: REJECT_APPLICATIONS,
  payload: {projectId, applicantId}
})

export const rejectApplicationsSuccess = (id) => ({
  type: REJECT_APPLICATIONS_SUCCESS,
  payload: id
})

export const rejectApplicationsFail = (error) => ({
  type: REJECT_APPLICATIONS_FAIL,
  payload: error
})