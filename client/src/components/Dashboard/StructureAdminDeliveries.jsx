import React from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import history from '../../history';

const StructureAdminDeliveries = (props) => {

    const { auth } = useSelector( state => ({
        auth: state.auth,
        }));  
    
        const data = props.info;

        const SetDelivered = () => { 

            axios.post("/api/flyfoods/orderdelivered", data) 
            .then((res) => {
                console.log(`Confirmation email sent`);
            }).catch((error) => {
                console.log(error);
            });

            axios.put("/api/flyfoods/deliverydetailsdelivered", data)
            .then(() => {
                console.log(`delivery info set to delivered`);
                history.push('/admindashboarddeliveries')
                window.location.href="/admindashboarddeliveries";

    
            }).catch((error) => {
                console.log(error); 
            });

           
        }

        const SetPartial = () => {

            axios.post("/api/flyfoods/orderpartialdelivered", data) 
            .then((res) => {
                console.log(`Confirmation email sent`);
            }).catch((error) => {
                console.log(error);
            });

            axios.put("/api/flyfoods/deliverydetailspartial", data)
            .then(() => {
                console.log(`delivery info set to partial`);
                history.push('/admindashboarddeliveries')
                window.location.href="/admindashboarddeliveries";

    
            }).catch((error) => {
                console.log(error); 
            });

        }


        const SetRescheduled = () => {

            axios.post("/api/flyfoods/orderrescheduled", data) 
            .then((res) => {
                console.log(`Confirmation email sent`);
            }).catch((error) => {
                console.log(error);
            });

            axios.put("/api/flyfoods/deliverydetailsrescheduled", data)
            .then(() => {
                console.log(`delivery info set to rescheduled`);
                history.push('/admindashboarddeliveries')
                window.location.href="/admindashboarddeliveries";

    
            }).catch((error) => {
                console.log(error); 
            });

           
        }

        const SetCancelled = () => {


            axios.post("/api/flyfoods/ordercancelled", data) 
            .then((res) => {
                console.log(`Confirmation email sent`);
            }).catch((error) => {
                console.log(error);
            });

            axios.put("/api/flyfoods/deliverydetailscancelled", data)
            .then(() => {
                console.log(`delivery info set to cancelled`);
                history.push('/admindashboarddeliveries')
                window.location.href="/admindashboarddeliveries";

    
            }).catch((error) => {
                console.log(error); 
            });


        }

        const SetRejected = () => {


            axios.post("/api/flyfoods/orderrejected", data) 
            .then((res) => {
                console.log(`Confirmation email sent`);
            }).catch((error) => {
                console.log(error);
            });

            
            axios.put("/api/flyfoods/deliverydetailsrejected", data)
            .then(() => {
                console.log(`delivery info set to rejected`);
                history.push('/admindashboarddeliveries');
                window.location.href="/admindashboarddeliveries";

    
            }).catch((error) => {
                console.log(error); 
            });


        }



  
    return (
        <tr >
           <td > 
                {props.id}
            </td>
            <td>
                {props.user}
            </td>
            <td>
                {props.pickupitem} 
            </td>
            <td>
                {props.pickupaddress}  
            </td>
            <td>
                {props.name}
            </td>
            <td>
                {props.phone}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                {props.pickupdate}
            </td>
            <td>
               {props.amountInNaira} 
            </td>
            <td>
               {props.weightinkg} 
            </td>
            <td>
                {props.pickupquantity}
            </td>
            <td>
                {props.deliveryaddress}
            </td>
            <td>
                {props.deliveryname}
            </td>
            <td>
                {props.deliveryphonenumber}
            </td>
            <td>
                {props.deliveryemail}
            </td>
            <td>
                {props.status}
            </td> 
            <td>
                {props.rider} 
            </td> 
            <td>
                {props.deliverydetails}
            </td> 
            <td onClick={SetDelivered} className="orangeandunderline">
                Delivered
            </td> 
            <td onClick={SetPartial} className="orangeandunderline">
                Partial Delivery
            </td> 
            <td onClick={SetRescheduled} className="orangeandunderline">
               Rescheduled
            </td> 
            <td onClick={SetCancelled} className="orangeandunderline">
                Cancelled
            </td> 
            <td onClick={SetRejected} className="orangeandunderline">
                Rejected
            </td> 
        </tr>
    );

}

export default StructureAdminDeliveries;