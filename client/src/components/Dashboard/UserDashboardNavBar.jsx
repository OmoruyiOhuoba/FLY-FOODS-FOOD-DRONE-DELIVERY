import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import SecondNavBar from "./SecondNavBar";
import OrderImg from "../../assets/order.svg";
import PendingImg from "../../assets/pending.svg";
import DeliveryImg from "../../assets/delivery.svg";
import ReceivedImg from "../../assets/received.svg";



const UserDashboardNavBar = () => {

    const [order, setOrder] = useState("");
    const [receive, setReceive] = useState("");
    const [pending, setPending] = useState("");
    const [delivered, setDelivered] = useState("");

 



    const callOrder = () => {
        setOrder(true);
    }

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
            
            if(window.location.href.split("/").pop() === "userdashboardhome"){
                callOrder();
                
            }

            if(window.location.href.split("/").pop() === "userdashboardreceived"){
                callReceived();
            }

            if(window.location.href.split("/").pop() === "userdashboardpending"){
                callPending(); 
            }

            if(window.location.href.split("/").pop() === "userdashboarddeliveries"){
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
                    <Link className="dashnav dashnav1 dashnavuser" to="/userdashboardhome"><li className = {order ? "orangedash" : "dashli"} > <img className="dashicon dashicon1 dashuser" src={OrderImg} alt="dash"/>Order</li></Link>
                    <Link className="dashnav dashnav2 dashnavuser" to="/userdashboardreceived"><li className = {receive ? "orangedash" : "dashli"}> <img className="dashicon dashicon2 dashuser" src={ReceivedImg} alt="dash"/>Received</li></Link>
                    <Link className="dashnav dashnav3 dashnavuser" to="/userdashboardpending"><li className = {pending ? "orangedash" : "dashli"}> <img className="dashicon dashicon3user dashuser" src={PendingImg} alt="dash"/>Pending</li></Link>
                    <Link className="dashnav dashnav4 dashnavuser" to="/userdashboarddeliveries"><li className = {delivered ? "orangedash" : "dashli"}> <img className="dashicon dashicon4user dashuser" src={DeliveryImg} alt="dash"/>Delivered</li></Link>
                </ul>

                <hr className="nav-under"/>  
                
            </nav>
        </div>
    ) 
}

export default UserDashboardNavBar;