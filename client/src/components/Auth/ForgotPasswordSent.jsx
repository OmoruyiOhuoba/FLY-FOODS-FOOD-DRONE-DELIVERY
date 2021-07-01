import React from "react";
import {Link} from "react-router-dom";

const ForgotPasswordSent = () => {

    return(
        <div >
            <br/>
            <br/>
                <div className="successDiv">
            <h1 className="success-page"> Password changed successfully!! </h1>
            <br/>
            <br/>
            <Link to="/signinuser"><button className="contact-button">Log in</button></Link>
            </div>
        </div>
    )

}

export default ForgotPasswordSent