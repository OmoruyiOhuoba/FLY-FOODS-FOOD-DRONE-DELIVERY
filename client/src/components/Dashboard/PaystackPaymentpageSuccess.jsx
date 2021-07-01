import React from "react";
import {Link} from "react-router-dom";


const PaystackPaymentpageSuccess = () => {
    return(
        <div >
            <br/>
            <br/>
                <div className="successDiv">
            <h1 className="success-page"> Thank you for placing the order!!  </h1>
            <h2 className="success-page-2"> Order again?</h2>
            <br/>
            <br/>
            <Link to="/userdashboardhome"><button className="contact-button">Order</button></Link>
            </div>
        </div>
    )
}

export default PaystackPaymentpageSuccess