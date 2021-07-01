import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import SecondNavBar from "./SecondNavBar";
import OrderImg from "../../assets/order.svg";
import PendingImg from "../../assets/pending.svg";
import DeliveryImg from "../../assets/delivery.svg";

const RiderDashboardNavBar = () => {
    const [receive, setReceive] = useState("");
    const [pending, setPending] = useState("");
    const [delivered, setDelivered] = useState("");



    const callReceived = () => {
        setReceive(true);
    }
     
    const callPending = () => {
        setPending(true);
    }

    const callDelivered = () => {
        setDelivered(true);
    }

    useEffect(() => {

        let isActive = true;
    
        if (isActive){
            
           
            if(window.location.href.split("/").pop() === "riderdashboardhome"){
                callReceived();
            }

            if(window.location.href.split("/").pop() === "riderdashboardpending"){
                callPending(); 
            }

            if(window.location.href.split("/").pop() === "riderdashboarddeliveries"){
                callDelivered();
            }

        }
        return () => {
            isActive = false;
          };
        
    
    },[]);

    return(
        <div>
            <SecondNavBar />
            <nav>
                <ul className="uldash uldashuser">
                    <Link className="dashnav dashnav1 dashnavuser" to="/riderdashboardhome"><li className = {receive ? "orangedash2" : "dashli"}> <img className="dashicon dashicon1" src={OrderImg} alt="dash"/> Orders</li></Link>
                    <Link className="dashnav dashnav2 dashnavuser" to="/riderdashboardpending"><li className = {pending ? "orangedash2" : "dashli"}> <img className="dashicon dashicon2" src={PendingImg} alt="dash"/> Pending</li></Link>
                    <Link className="dashnav dashnav3 dashnavuser" to="/riderdashboarddeliveries"><li className = {delivered ? "orangedash2" : "dashli"}> <img className="dashicon dashicon3" src={DeliveryImg} alt="dash"/> Delivered</li></Link>
                </ul>
                
                <hr className="nav-under"/>

            </nav> 
        </div>
    ) 
}

export default RiderDashboardNavBar;