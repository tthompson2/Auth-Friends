import React, { Component } from "react"
import { Route, Redirect} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
        <Route         
        {...rest}
        render={props => {

            if(localStorage.getItem("token")) {
                return <Component {...props} />;
            }  else {
                return <Redirect to="/login"/>;
            }
        }}

        />
    )
};

export default PrivateRoute;

// this code is used to create a boiler plate private wrapper that will ensure the code you return to the user will only 
// allow them to access certain pages once it is confirmed on the client machine that a token has been stored for the user 
// attempting to access the page