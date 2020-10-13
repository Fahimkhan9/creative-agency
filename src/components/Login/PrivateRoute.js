import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { UserContext } from '../../App'

function PrivateRoute({ children, ...rest }) {
const [loggedinuser,setLoggedinuser] =  useContext(UserContext)

    return (
        
        <Route
      {...rest}
      render={({ location }) =>
        loggedinuser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    )
}

export default PrivateRoute
