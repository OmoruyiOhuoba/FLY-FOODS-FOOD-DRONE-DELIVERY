import React, {useState, useEffect} from  "react";
import AdminDashboardNavBar from "./AdminDashboardNavBar";
import StructureAdmin from "./StructureAdmin";
import axios from "axios";
import Pagination from "react-js-pagination";
import StructureAdminDeliveries from "./StructureAdminDeliveries";



const AdminDashboardDeliveries = () => {
    const [order, setOrder] = useState([""]);

    /*pagination stuff*/
    const dataPerPage = 20;
    const [ activePage, setCurrentPage ] = useState( 1 );

    const indexOfLastData = activePage * dataPerPage; 
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = order.slice( indexOfFirstData, indexOfLastData );

    const handlePageChange = ( pageNumber ) => {
        console.log( `active page is ${ pageNumber }` );
        setCurrentPage( pageNumber )
     };
    

    useEffect(() => {

        let isActive = true;

        if (isActive){
            axios.get(`/api/flyfoods/admindelivered`)
            .then((res) => {
            setOrder(res.data);

        }).catch(error =>{
            console.log(error);
        })

        }
        return () => {
            isActive = false;
          };
        
   
    },[]);


    return(
        <div>
            <AdminDashboardNavBar />
            <div>
            <p className="ontop-form ontop-form2 ontop-dash ontop-dash1"><b>Total</b> Deliveries</p>

            </div>
            <div className="table">
                <table>
                    <thead>
                    <tr>
                        <td>
                            Order ID
                            </td>
                            <td>
                            User ID
                            </td>
                            <td>
                            Item
                            </td>
                            <td>
                            Pick-up Address
                            </td>
                            <td>
                            Sender Name
                            </td>
                            <td>
                            Sender Phone Number
                            </td>
                            <td>
                            Sender E-mail
                            </td>
                            <td>
                            Pick-up Date
                            </td>
                            <td>
                            Order Charge
                            </td>
                            <td>
                            Item Weight
                            </td>
                            <td>
                            Item Quantity
                            </td>
                            <td>
                            Recipient Address
                            </td>
                            <td>
                            Recipient Name
                            </td>
                            <td>
                            Recipient Phone Number
                            </td>
                            <td>
                            Recipient E-mail
                            </td>
                            <td>
                            Order Status
                            </td>
                            <td>
                            Delivered by Rider ID
                            </td>
                            <td>
                            Delivery Details
                            </td>
                            <td>
                            Delivered  
                            </td>  
                            <td>
                            Partial Delivery 
                            </td> 
                            <td>
                            Rescheduled 
                            </td>
                             <td>
                            Cancelled 
                            </td> 
                            <td>
                            Rejected
                            </td> 
                        </tr>
                    </thead>
                    <tbody>
                    {currentData.map((data, index) => {
             return(
                 <StructureAdminDeliveries 
                 key = {index}
                 id= {data._id}
                 user = {data.user}
                 pickupitem = {data.pickupitem}
                 pickupaddress = {data.pickupaddress}
                 name= {data.name}
                 phone = {data.phone}
                 email = {data.email}
                 pickupdate = {data.pickupdate}
                 amountInNaira= {data.amountInNaira}
                 weightinkg = {data.weightinkg}
                 pickupquantity = {data.pickupquantity}
                 deliveryaddress = {data.deliveryaddress}
                 deliveryname= {data.deliveryname}
                 deliveryphonenumber = {data.deliveryphonenumber}
                 deliveryemail ={data.deliveryemail}
                 status = {data.status}
                 rider = {data.rider}
                 deliverydetails = {data.deliverydetails}
                 info = {data} 
                 
                 />);
         })}
                    </tbody>
                </table>

                </div>

<div className= "pagination" >
<Pagination
   activePage={ activePage }
   itemsCountPerPage={ 20 }
   totalItemsCount={ order.length }
   pageRangeDisplayed={ 5 }
   onChange={ handlePageChange }
/>
</div>
<br/>
<br/>
<br/>

</div>
)
}

export default AdminDashboardDeliveries;