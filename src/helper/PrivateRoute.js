import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from '../helper/Firebase';

function PrivateRoute({ component: Component, ...rest }) {
    const currentUser = auth.currentUser;

    return (
        <Route {...rest} render={props =>
            currentUser ? <Component {...props} /> : <Redirect to={'/auth'} />
        } />
    )
}

export default PrivateRoute