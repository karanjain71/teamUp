import {
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SUCCESS,
  GET_MY_PROJECTS_SUCCESS,
  GET_MY_PROJECTS_FAIL,
  GET_PROJECT_DETAIL_FAIL,
  GET_PROJECT_DETAIL_SUCCESS,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAIL,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  CHANGE_SIGNEDIN_EVENTS,
  GET_CREATED_EVENTS_SUCCESS,
  GET_CREATED_EVENTS_FAIL,
  EDIT_EVENT_DETAILS,
  ACCEPT_APPLICATIONS,
  REJECT_APPLICATIONS
} from "./actionTypes"

const INIT_STATE = {
  projects: [],
  myProjects: [],
  createdEvents:[],
  projectDetail: {},
  error: {},
}

const projects = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
      }

    case GET_PROJECTS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_CREATED_EVENTS_SUCCESS:
      return {
        ...state,
        createdEvents: action.payload,
      }

    case GET_CREATED_EVENTS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    case GET_MY_PROJECTS_SUCCESS:
      return {
        ...state,
        myProjects: action.payload,
      }
  
      case GET_MY_PROJECTS_FAIL:
        return {
          ...state,
          error: action.payload,
        }

    case GET_PROJECT_DETAIL_SUCCESS:
      return {
        ...state,
        projectDetail: action.payload,
      }

    case GET_PROJECT_DETAIL_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case ADD_PROJECT_SUCCESS:
      if(action.payload.signedIn){
        return {
          ...state,
          projects: [...state.projects, action.payload],
          myProjects: [...state.myProjects, action.payload]
        }
      }
      else{
        return {
          ...state,
          projects: [...state.projects, action.payload],
        }
      }

    case ADD_PROJECT_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id.toString() === action.payload.id.toString()
            ? { project, ...action.payload }
            : project
        ),
      }

    case UPDATE_PROJECT_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: state.projects.filter(
          project => project.id.toString() !== action.payload.id.toString()
        ),
      }

    case DELETE_PROJECT_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case CHANGE_SIGNEDIN_EVENTS:
      const newProjects = state.projects.map(project => {
        if(action.payload.id === project.id){
          project.signedIn = true;
          project.vacancies = project.vacancies -1; 
          const payload1 = {
            "id":project.team.length,
            "img":action.payload.image,
            "fullname": action.payload.fullname
          }
          project.team.push(payload1)
        }
        return project
      })
      return {
        ...state,
        projects: newProjects,
        myProjects: [...state.myProjects, state.projects[action.payload.id]]
      }

    case EDIT_EVENT_DETAILS:
      const changedProjects = state.projects.map(project => {
        if(action.payload.values.id == project.id){
          project.startDate = action.payload.values.startDate
          project.dueDate = action.payload.values.dueDate
          project.projectDetails.description = action.payload.values.description
        }
        return project
      })

      const changedCreatedEvents = state.createdEvents.map(event => {
        if(action.payload.values.id == event.id){
          console.log(event,'Why')
          event.startDate = action.payload.values.startDate
          event.dueDate = action.payload.values.dueDate
          event.projectDetails.description = action.payload.values.description
        }
        return event
      })
      return {
        ...state,
        projects:changedProjects,
        createdEvents: changedCreatedEvents
      }

    case ACCEPT_APPLICATIONS:
      var newApplicants = []
      var applicationIndex = 0
      const originalApplicants = state.projects[action.payload.projectId].applicants
      const changeApplicants = state.projects.map((project,projectIndex) => {
        if(action.payload.projectId == project.id){
          newApplicants = originalApplicants.filter((applicant,index) => {
            console.log(applicant.id, action.payload.applicantId, index)
            if(index == action.payload.applicantId){
              applicationIndex = index
            }
            return index != action.payload.applicantId
          })
          console.log(state.projects[projectIndex].applicants, projectIndex, 'This is the index')
          project.team.push(state.projects[projectIndex].applicants[applicationIndex])
          project.applicants = newApplicants
          
        }
        return project
      })
      const changeMyApplicants = state.myProjects.map((project,index) => {
        if(action.payload.projectId == project.id){
            console.log(originalApplicants,'original')
            newApplicants = originalApplicants.filter((applicant,index) => {
              console.log(applicant.id, action.payload.applicantId)
              if(index== action.payload.applicantId){
                applicationIndex = index
              }
            return index != action.payload.applicantId
          })
          project.team.push(state.myProjects[index].applicants[applicationIndex])
          project.applicants = newApplicants
        }
        return project
      })

      const changeCreatedApplicants = state.createdEvents.map((project,index) => {
        if(action.payload.projectId == project.id){
          newApplicants = originalApplicants.filter((applicant,index) => {
            console.log(applicant.id, action.payload.applicantId)
            if(index== action.payload.applicantId){
              applicationIndex = index
            }
            return index != action.payload.applicantId
          })
          project.team.push(state.createdEvents[index].applicants[applicationIndex])
          project.applicants = newApplicants
        }
        return project
      })
      return {
        ...state,
        projects: changeApplicants,
        myProjects: changeMyApplicants,
        createdEvents: changeCreatedApplicants,
      }
    
    case REJECT_APPLICATIONS:
      var newApplicants = []
      const originalApplicantsReject = state.projects[action.payload.projectId].applicants
      const changeApplicantsReject = state.projects.map(project => {
        if(action.payload.projectId == project.id){
          newApplicants = originalApplicantsReject.filter((applicant,index) => {
            console.log(applicant.id, action.payload.applicantId)
            return index != action.payload.applicantId
          })
          project.applicants = newApplicants
          
        }
        return project
      })
      const changeMyApplicantsReject = state.myProjects.map(project => {
        if(action.payload.projectId == project.id){
            console.log(originalApplicantsReject,'original')
            newApplicants = originalApplicantsReject.filter((applicant,index) => {
              console.log(applicant.id, action.payload.applicantId)
              return index != action.payload.applicantId
            })
          project.applicants = newApplicants
        }
        return project
      })

      const changeCreatedApplicantsReject = state.createdEvents.map(project => {
        if(action.payload.projectId == project.id){
          newApplicants = originalApplicantsReject.filter((applicant,index) => {
            console.log(applicant.id, action.payload.applicantId)
            return index != action.payload.applicantId
          })
          project.applicants = newApplicants
        }
        return project
      })
      return {
        ...state,
        projects: changeApplicantsReject,
        myProjects: changeMyApplicantsReject,
        createdEvents: changeCreatedApplicantsReject,
      }
  
  

    default:
      return state
  }
}

export default projects
