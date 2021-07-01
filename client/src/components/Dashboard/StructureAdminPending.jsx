import React from  "react";
import axios from "axios";
import {useSelector} from "react-redux";
import history from '../../history';

const StructureAdminPending = (props) => {

    const { auth } = useSelector( state => ({
    auth: state.auth,
    }));  

    const data = props.info;


    const SubmitOrder = () => {

        axios.put("/api/flyfoods/riderupdatestatustodelivered", data)
        .then(() => {
            console.log(`status update: to "delivered"`);
            history.push("/admindashboarddeliveries");


        }).catch((error) => {
            console.log(error); 
        });
        console.log("done");

       }

    return (
        <tr >
           <td  onClick = {SubmitOrder} className="orangeandunderline"> 
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
            
        </tr>
    );

}

export default StructureAdminPending;