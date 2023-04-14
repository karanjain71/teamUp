import React from "react"
import PropTypes from 'prop-types'
import { Route, Redirect } from "react-router-dom"

const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  breadcrumb,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      props["breadcrumb"] = breadcrumb
      if (isAuthProtected && !localStorage.getItem("authUser")) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

AppRoute.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
  breadcrumb: PropTypes.any
}

export default AppRoute
