import React from "react";
import {Link} from "react-router-dom";
import NavBar from "./Layout/NavBar";


const AppComingSoon = () => {
    return(
        <div >
            <NavBar />
            <br/>
            <br/>
                <div className="successDiv">
            <h1 className="success-page"> Mobile App coming to iOS and Android soon!! </h1>
            <h2 className="success-page-2"> Back to the website?</h2>
            <br/>
            <br/>
            <Link to="/"><button className="contact-button">Website</button></Link>
            </div>
        </div>
    )
}

export default AppComingSoon