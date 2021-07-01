import React, {useState, useEffect} from  "react";
import UserDashboardNavBar from "./UserDashboardNavBar";
import axios from "axios";
import StructureUser from "./StructureUser";
import {useSelector} from "react-redux";
import Pagination from "react-js-pagination";
import StructureUserDeliveries from "./StructureUserDeliveries";




const UserDashboardDeliveries = () => {
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

    const { auth } = useSelector( state => ({
    auth: state.auth,
    })); 

    useEffect(() => {
      
        axios.get(`/api/flyfoods/userdelivered/${auth.user.id}`)
        .then((res) => {
            setOrder(res.data);
        }).catch(error =>{
            console.log(error); 
        })

   
    });



    return(
        <div>
            <UserDashboardNavBar />
            <div>
            <p className="ontop-form ontop-form2 ontop-dash ontop-dash1"><b>Delivered</b> Orders</p>

            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                        <td>
                            Order ID
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
                            Delivery Details
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                    {currentData.map((data, index) => {
             return(
                 <StructureUserDeliveries
                 key = {index}
                 id= {data._id}
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
export default UserDashboardDeliveries;