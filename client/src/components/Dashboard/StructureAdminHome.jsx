import React from  "react";
import axios from "axios";
import {useSelector} from "react-redux";
import history from '../../history';


const StructureAdminHome = (props) => {

    const { auth } = useSelector( state => ({
    auth: state.auth,
    }));  

    const data = props.info;
    /* data.new1 = "60057537abc9250004136dec";
    data.new2 = "60057619abc9250004136ded";
    data.new3 = "600577b6abc9250004136dee"; */

    /*const SubmitOrder = () => {

        axios.put("/api/flyfoods/riderupdatestatustopending", data)
        .then(() => { 
            console.log(`status update: to "pending", id of: ${data._id}`);

        }).catch((error) => {
            console.log(error);
        });

       axios.put(`/api/flyfoods/riderupdaterider/${auth.user.id}`, data)
        .then(() => {
            console.log(`rider update for ${auth.user.id}`);
            history.push("/admindashboardpending");
        }).catch((error) => {
            console.log(error); 
        }); 

        console.log("done");

       }*/

    const AssignOrderRider1 = () => {


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

        axios.put(`/api/flyfoods/adminassignrider1`, data)
        .then(() => {
            console.log(`rider assignment`);
            history.push("/admindashboardpending");
        }).catch((error) => {
            console.log(error); 
        }); 


        console.log("done");

       }

    const AssignOrderRider2 = () => {


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

        axios.put(`/api/flyfoods/adminassignrider2`, data)
        .then(() => {
            console.log(`rider assignment`);
            history.push("/admindashboardpending");
        }).catch((error) => {
            console.log(error); 
        }); 


        console.log("done");
           
    }

const AssignOrderRider3 = () => {


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

        axios.put(`/api/flyfoods/adminassignrider3`, data)
        .then(() => {
            console.log(`rider assignment`);
            history.push("/admindashboardpending");
        }).catch((error) => {
            console.log(error); 
        }); 


        console.log("done"); 
           
    }

    return (
        <tr>     
           <td /*onClick = {SubmitOrder}*/>
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
            <td onClick = {AssignOrderRider1} className="orangeandunderline">
                Assign To Rider 1
            </td>  
            <td onClick = {AssignOrderRider2} className="orangeandunderline"> 
                Assign to Rider 2
            </td>  
            <td onClick = {AssignOrderRider3} className="orangeandunderline">
                Assign to Rider 3
            </td> 
            <td>
                {props.rider} 
            </td> 
        </tr>
    );

}

export default StructureAdminHome; 