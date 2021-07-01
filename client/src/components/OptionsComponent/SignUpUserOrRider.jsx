import React from "react";
import {Link} from "react-router-dom";
import NavBar from "../Layout/NavBar";


const SignUpUserOrRider = () => {

    return(
        <div>
            <NavBar />
            <div className="options-div" id="toppage2">
                <Link to="/signupuser"><p className="options">Sign Up as a User</p></Link>
                <p className="options"><b>OR</b></p>
                <Link to="/signuprider"><p className="options">Sign Up as a Runner</p></Link>
            </div>
        </div>
    )
}

export default SignUpUserOrRider;