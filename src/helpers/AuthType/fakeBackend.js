import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import * as url from "../url_helper"
import accessToken from "../jwt-token-access/accessToken"
import {
  calenderDefaultCategories,
  chats,
  contacts,
  events,
  groups,
  invoiceList,
  messages,
  projects,
  tasks,
  userProfile,
  users as members,
} from "../../common/data"

let users = [
  {
    uid: 1,
    username: "Karan Jain",
    role: "admin",
    password: "123456",
    email: "karan.jain@sap.com",
  },
  {
    uid: 2,
    username: "Vasanth Gopa",
    role: "admin",
    password: "123456",
    email: "vasanth.gopa@sap.com",
  },
]

const fakeBackend = () => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios)

  mock.onPost("/post-fake-register").reply(config => {
    const user = JSON.parse(config["data"])
    users.push(user)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user])
      })
    })
  })

  mock.onPost("/post-fake-login").reply(config => {
    const user = JSON.parse(config["data"])
    const validUser = users.filter(
      usr => usr.email === user.email && usr.password === user.password
    )

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          resolve([200, validUser[0]])
        } else {
          reject([
            "Username and password are invalid. Please enter correct username and password",
          ])
        }
      })
    })
  })

  mock.onPost("/fake-forget-pwd").reply(config => {
    // User needs to check that user is eXist or not and send mail for Reset New password

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, "Check you mail and reset your password."])
      })
    })
  });

  mock.onPost("/post-jwt-register").reply(config => {
    const user = JSON.parse(config["data"])
    users.push(user)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user])
      })
    })
  })

  mock.onPost("/post-jwt-login").reply(config => {
    const user = JSON.parse(config["data"])
    const validUser = users.filter(
      usr => usr.email === user.email && usr.password === user.password
    )

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken

          // JWT AccessToken
          const tokenObj = { accessToken: token } // Token Obj
          const validUserObj = { ...validUser[0], ...tokenObj } // validUser Obj

          resolve([200, validUserObj])
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ])
        }
      })
    })
  })

  mock.onPost("/post-jwt-profile").reply(config => {
    const user = JSON.parse(config["data"])

    const one = config.headers

    let finalToken = one.Authorization

    const validUser = users.filter(usr => usr.uid === user.idx)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verify Jwt token from header.Authorization
        if (finalToken === accessToken) {
          if (validUser["length"] === 1) {
            let objIndex

            //Find index of specific object using findIndex method.
            objIndex = users.findIndex(obj => obj.uid === user.idx)

            //Update object's name property.
            users[objIndex].username = user.username

            // Assign a value to locastorage
            localStorage.removeItem("authUser")
            localStorage.setItem("authUser", JSON.stringify(users[objIndex]))

            resolve([200, "Profile Updated successfully"])
          } else {
            reject([400, "Something wrong for edit profile"])
          }
        } else {
          reject([400, "Invalid Token !!"])
        }
      })
    })
  })

  mock.onPost("/post-fake-profile").reply(config => {
    const user = JSON.parse(config["data"])

    const validUser = users.filter(usr => usr.uid === user.idx)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          let objIndex

          //Find index of specific object using findIndex method.
          objIndex = users.findIndex(obj => obj.uid === user.idx)

          //Update object's name property.
          users[objIndex].username = user.username

          // Assign a value to locastorage
          localStorage.removeItem("authUser")
          localStorage.setItem("authUser", JSON.stringify(users[objIndex]))

          resolve([200, "Profile Updated successfully"])
        } else {
          reject([400, "Something wrong for edit profile"])
        }
      })
    })
  })

  mock.onPost("/jwt-forget-pwd").reply(config => {
    // User needs to check that user is eXist or not and send mail for Reset New password

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, "Check you mail and reset your password."])
      })
    })
  })

  mock.onPost("/social-login").reply(config => {
    const user = JSON.parse(config["data"])

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.token) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken

          // JWT AccessToken
          const tokenObj = { accessToken: token } // Token Obj
          const validUserObj = { ...user[0], ...tokenObj } // validUser Obj

          resolve([200, validUserObj])
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ])
        }
      })
    })
  })


  mock.onGet(url.GET_EVENTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (events) {
          // Passing fake JSON data as response
          resolve([200, events])
        } else {
          reject([400, "Cannot get events"])
        }
      })
    })
  })

  mock.onPost(url.ADD_NEW_EVENT).reply(event => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data])
        } else {
          reject([400, "Cannot add event"])
        }
      })
    })
  })

  mock.onPost(url.ADD_NEW_USER).reply(user => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.data) {
          // Passing fake JSON data as response
          resolve([200, user.data])
        } else {
          reject([400, "Cannot add user"])
        }
      })
    })
  })

  mock.onPut(url.UPDATE_USER).reply(user => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.data) {
          // Passing fake JSON data as response
          resolve([200, user.data])
        } else {
          reject([400, "Cannot update user"])
        }
      })
    })
  })

  mock.onDelete(url.DELETE_USER).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.user])
        } else {
          reject([400, "Cannot delete user"])
        }
      })
    })
  })

  mock.onPut(url.UPDATE_EVENT).reply(event => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data])
        } else {
          reject([400, "Cannot update event"])
        }
      })
    })
  })

  mock.onDelete(url.DELETE_EVENT).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.event])
        } else {
          reject([400, "Cannot delete event"])
        }
      })
    })
  })

  mock.onGet(url.GET_CATEGORIES).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (calenderDefaultCategories) {
          // Passing fake JSON data as response
          resolve([200, calenderDefaultCategories])
        } else {
          reject([400, "Cannot get categories"])
        }
      })
    })
  })

  mock.onGet(url.GET_CHATS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (chats) {
          // Passing fake JSON data as response
          resolve([200, chats])
        } else {
          reject([400, "Cannot get chats"])
        }
      })
    })
  })

  mock.onGet(url.GET_GROUPS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (groups) {
          // Passing fake JSON data as response
          resolve([200, groups])
        } else {
          reject([400, "Cannot get groups"])
        }
      })
    })
  })

  mock.onGet(url.GET_CONTACTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (contacts) {
          // Passing fake JSON data as response
          resolve([200, contacts])
        } else {
          reject([400, "Cannot get contacts"])
        }
      })
    })
  })

  mock.onGet(new RegExp(`${url.GET_MESSAGES}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (messages) {
          // Passing fake JSON data as response
          const { params } = config
          const filteredMessages = messages.filter(
            msg => msg.roomId === params.roomId
          )
          resolve([200, filteredMessages])
        } else {
          reject([400, "Cannot get messages"])
        }
      })
    })
  })

  mock.onPost(url.ADD_MESSAGE).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config.data) {
          // Passing fake JSON data as response
          resolve([200, config.data])
        } else {
          reject([400, "Cannot add message"])
        }
      })
    })
  })

  mock.onGet(url.GET_PROJECTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (projects) {
          // Passing fake JSON data as response
          resolve([200, projects])
        } else {
          reject([400, "Cannot get projects"])
        }
      })
    })
  })

  mock.onPost(url.ADD_NEW_PROJECT).reply(project => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (project && project.data) {
          // Passing fake JSON data as response
          resolve([200, project.data])
        } else {
          reject([400, "Cannot add project"])
        }
      })
    })
  })

  mock.onPut(url.UPDATE_PROJECT).reply(project => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (project && project.data) {
          // Passing fake JSON data as response
          resolve([200, project.data])
        } else {
          reject([400, "Cannot update project"])
        }
      })
    })
  })

  mock.onDelete(url.DELETE_PROJECT).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.project])
        } else {
          reject([400, "Cannot delete project"])
        }
      })
    })
  })

  mock.onGet(new RegExp(`${url.GET_PROJECT_DETAIL}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (projects) {
          // Passing fake JSON data as response
          const { params } = config
          const project = projects.find(
            project => project.id.toString() === params.id.toString()
          )
          console.log(project, 'Inside fakebackend')
          resolve([200, project])
        } else {
          reject([400, "Cannot get project detail"])
        }
      })
    })
  })

  mock.onGet(url.GET_USERS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (members) {
          // Passing fake JSON data as response
          resolve([200, members])
        } else {
          reject([400, "Cannot get users"])
        }
      })
    })
  })

  mock.onGet(url.GET_USER_PROFILE).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userProfile) {
          // Passing fake JSON data as response
          resolve([200, userProfile])
        } else {
          reject([400, "Cannot get user profile"])
        }
      })
    })
  });

  mock.onGet(url.GET_MY_EVENTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const myEvents = projects.filter(project => {
          return project.signedIn === true
        })
        if (myEvents) {
          resolve([200, myEvents])
        } else {
          reject([400, "Cannot get my events"])
        }
      })
    })
  });

  mock.onGet(url.GET_CREATED_EVENTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const createdEvents = projects.filter(project => {
          return project.createdBy === JSON.parse(localStorage.getItem('authUser')).email
        })
        if (createdEvents) {
          resolve([200, createdEvents])
        } else {
          reject([400, "Cannot get created events"])
        }
      })
    })
  });

  mock.onPost(url.CHANGE_SIGNEDIN_EVENTS).reply((projectId) => {
    const data = JSON.parse(projectId["data"])
    const id = data.id
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        if (projectId.data && projectId.data) {
          resolve([200, projects])
        } else {
          reject([400, "Cannot add project"])
        }
      })
    })
  })

}

export default fakeBackend
