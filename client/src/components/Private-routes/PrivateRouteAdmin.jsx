import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector } from "react-redux";

   

const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
    const { auth } = useSelector( state => ({
    auth: state.auth,
    })); 
   
   return(
        <Route {...rest} render={props => (
        localStorage.getItem('jwtToken') && auth.user.role === "adminrole" ? <Component {...props} /> 
        : <Redirect to={{ pathname: '/signinadmin', state: { from: props.location } }} />
        )} />
   )
    
}

    
export default PrivateRouteAdmin;