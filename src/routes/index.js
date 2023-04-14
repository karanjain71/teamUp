import React from "react"
import { Redirect } from "react-router-dom"
import Chat from "../pages/Chat/Chat"
import Calendar from "../pages/Calendar/index"
import UserProfile from "../pages/Authentication/UserProfile"

import EventsGrid from "../pages/Events/events-grid"
import ProjectsList from "../pages/Events/events-list"
import EventOverview from "../pages/Events/EventOverview/event-overview"
import EventCreate from "../pages/Events/event-create"
import CreatedEvents from "../pages/Events/created-events"

import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

import LeaderBoard from "pages/Leaderboard/index"
import Loading from "pages/Loading/Loading"

const authProtectedRoutes = [
  { path: "/profile", component: UserProfile, breadcrumb: [{text: "Profile",href: "/profile"}] },
  { path: "/chat", component: Chat, breadcrumb: [{text: "Chat",href: "/chat"}]},
  { path: "/calendar", component: Calendar, breadcrumb: [{text: "Calendar",href: "/calendar"}] },
  { path: "/loading", component: Loading },
  { path: "/leaderboard", component: LeaderBoard, breadcrumb: [{text: "Leaderboard",href: "/leaderboard"}]},

  { path: "/events", component: EventsGrid, breadcrumb: [{text: "Events",href: "/events"}] },
  { path: "/events-list", component: ProjectsList, breadcrumb: [{text: "Events List",href: "/events-list"}] },
  { path: "/event-overview", component: EventOverview, breadcrumb: [{text: "Events",href: "/events"},{text: "Event Overview",href: "/event-overview"}] },
  { path: "/event-overview/:id", component: EventOverview, breadcrumb: [{text: "Events",href: "/events"},{text: "Event Overview",href: "/event-overview/:id"}] },
  { path: "/event-overview/edit/:id", component: EventOverview, breadcrumb: [{text: "Events",href: "/events"},{text: "Event Overview",href: "/event-overview/edit/:id"}] },
  { path: "/event-create", component: EventCreate, breadcrumb: [{text: "Create",href: "/event-create"}] },
  { path: "/created-events", component: CreatedEvents, breadcrumb: [{text: "Created Events",href: "/created-events"}] },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/events" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { authProtectedRoutes, publicRoutes }
