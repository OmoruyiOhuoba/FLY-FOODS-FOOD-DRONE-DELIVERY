import React from "react";
import {Link} from "react-router-dom";
import NavBar from "../Layout/NavBar";


const SignInUserOrRider = () => {
  
    return(
        <div>
        <NavBar />
        <div>

        </div>
        <div  className="options-div">
            <Link to="/signinuser"><p className="options">Sign In as a User</p></Link>
            <p className="options"><b>OR</b></p>
            <Link to="/signinrider"><p className="options">Sign In as a Runner</p></Link>
        </div>
        </div>
    )
}

export default SignInUserOrRider;