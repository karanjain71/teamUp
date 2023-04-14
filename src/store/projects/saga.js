import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_PROJECTS, GET_PROJECT_DETAIL, ADD_NEW_PROJECT, DELETE_PROJECT, UPDATE_PROJECT, GET_MY_PROJECTS, GET_CREATED_EVENTS, EDIT_EVENT_DETAILS } from "./actionTypes"
import {
  getProjectsSuccess,
  getProjectsFail,
  getProjectDetailSuccess,
  getProjectDetailFail,
  addProjectFail,
  addProjectSuccess,
  updateProjectSuccess,
  updateProjectFail,
  deleteProjectSuccess,
  deleteProjectFail,
  getMyProjectsSuccess,
  getMyProjectsFail,
  getCreatedEventsSuccess,
  getCreatedEventsFail,
} from "./actions"

//Include Both Helper File with needed methods
import { getProjects, getProjectsDetails, addNewProject, updateProject, deleteProject, getMyEvents,getCreatedEvents } from "helpers/fakebackend_helper"
import { Redirect } from "react-router-dom"

function* fetchProjects() {
  try {
    const response = yield call(getProjects)
    yield put(getProjectsSuccess(response))
  } catch (error) {
    yield put(getProjectsFail(error))
  }
}

function* fetchMyProjects() {
  try {
    const response = yield call(getMyEvents)
    console.log(response)
    yield put(getMyProjectsSuccess(response))
  } catch (error) {
    yield put(getMyProjectsFail(error))
  }
}

function* fetchCreatedEvents() {
  console.log('Created events')
  try {
    const response = yield call(getCreatedEvents)
    console.log(response)
    yield put(getCreatedEventsSuccess(response))
  } catch (error) {
    yield put(getCreatedEventsFail(error))
  }
}

function* fetchProjectDetail({ projectId }) {
  try {
    const response = yield call(getProjectsDetails, projectId)
    yield put(getProjectDetailSuccess(response))
  } catch (error) {
    yield put(getProjectDetailFail(error))
  }
}

function* onUpdateProject({ payload: project }) {
  try {
    const response = yield call(updateProject, project)
    yield put(updateProjectSuccess(response))
  } catch (error) {
    yield put(updateProjectFail(error))
  }
}

function* onDeleteProject({ payload: project }) {
  try {
    const response = yield call(deleteProject, project)
    yield put(deleteProjectSuccess(response))
  } catch (error) {
    yield put(deleteProjectFail(error))
  }
}

function* onAddNewProject(value) {
  try {
    const response = yield call(addNewProject, value.payload.project)
    yield put(addProjectSuccess(response));
    value.payload.history.push("/events")
  } catch (error) {
    yield put(addProjectFail(error))
  }
}

function* editEventDetails({payload}) {
  try {
    payload.history.push('/events')
    yield put(editEventDetails(payload.values,payload.history))

  }
  catch(error){
  }
}

function* projectsSaga() {
  yield takeEvery(GET_PROJECTS, fetchProjects)
  yield takeEvery(GET_MY_PROJECTS, fetchMyProjects)
  yield takeEvery(GET_PROJECT_DETAIL, fetchProjectDetail)
  yield takeEvery(ADD_NEW_PROJECT, onAddNewProject)
  yield takeEvery(UPDATE_PROJECT, onUpdateProject)
  yield takeEvery(DELETE_PROJECT, onDeleteProject)
  yield takeEvery(GET_CREATED_EVENTS, fetchCreatedEvents)
  yield takeEvery(EDIT_EVENT_DETAILS, editEventDetails)
}

export default projectsSaga
