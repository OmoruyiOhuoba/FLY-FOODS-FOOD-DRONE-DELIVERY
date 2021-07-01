import React from  "react";
import axios from "axios";
import {useSelector} from "react-redux";
import history from '../../history';


const StructureRiderHome = (props) => {

    const { auth } = useSelector( state => ({
    auth: state.auth,
    }));  

    const data = props.info;


    const SubmitOrder = () => { 


        axios.post("/api/flyfoods/orderpending", data) 
        .then((res) => {
            console.log(`Pending confirmation email sent`);
        }).catch((error) => { 
            console.log(error);   
        });

        axios.put("/api/flyfoods/riderupdatestatustopending", data)
        .then(() => {
            console.log(`status update: to "pending", id of: ${data._id}`);

        }).catch((error) => {
            console.log(error);
        });

       axios.put(`/api/flyfoods/riderupdaterider/${auth.user.id}`, data)
        .then(() => {
            console.log(`rider update for ${auth.user.id}`);
            history.push("/riderdashboardpending");
        }).catch((error) => {
            console.log(error); 
        }); 


        console.log("done");

       }

    return (
        <tr>     
           <td onClick = {SubmitOrder}>
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
        </tr>
    );

}

export default StructureRiderHome;