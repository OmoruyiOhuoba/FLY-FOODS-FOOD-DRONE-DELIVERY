import React, {useState} from "react";
import { PaystackButton } from "react-paystack";
import axios from "axios";
import UserDashboardNavBar from "./UserDashboardNavBar";
import {useSelector} from "react-redux";
import history from '../../history';



const UserDashboardHome = () => {

    const publicKey = "pk_live_75957d60eac65fd1e8e0afb0ee41b3db5bf62eef";
    const [pickupcharge, setPickupcharge] = useState("");
    const [pickupaddress, setPickupaddress] = useState("");
    const [pickupoutskirt, setPickupoutskirt] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [pickupdate, setPickupdate] = useState("");
    const [pickupitem, setPickupitem] = useState("");
    const [pickupweight, setPickupweight] = useState("");
    const [weightinkg, setWeightinkg] = useState("");
    const [pickupquantity, setPickupquantity] = useState("");
    const [deliveryaddress, setDeliveryaddress] = useState("");
    const [deliveryoutskirt, setDeliveryoutskirt] = useState("");
    const [deliveryname, setDeliveryname] = useState("");
    const [deliveryphonenumber, setDeliveryphonenumber] = useState("");
    const [deliveryemail, setDeliveryemail] = useState("");
    const status= "Received";

    const amount = (((pickupweight * pickupquantity) + (pickupoutskirt*1) + (deliveryoutskirt*1) + (pickupcharge*1))*100);
    const amountInNaira = (amount/100);

    const { auth } = useSelector( state => ({
    auth: state.auth,
    })); 

    const user = auth.user.id; 
    const data = {
        user, pickupitem, pickupaddress, name, phone, email, pickupdate /*, amountInNaira*/, weightinkg, pickupquantity, 
        deliveryaddress, deliveryname, deliveryphonenumber, deliveryemail, status
    };



    const OnSubmit = () => {
        axios.post("/api/flyfoods/order", data) 
        .then((res) => {
            alert("Please note that order will be processed upon confirmation of payment.\n \n Kindly ignore if you already have an e-wallet with CityRuner Deliveries")
            console.log(`first message: ${res.data}`);
        }).catch((error) => {
            console.log(error);
        });
        

        axios.post(`/api/flyfoods/userupdate/${data.user}`, data)
        .then((res) => {
            console.log(`this is from the second success msg: ${res.data}`);
            window.location.href = "https://paystack.com/";

        })
        .catch((error) => {
          console.log(error);
      });

    }

    const CheckPrice = () => {
        window.location.href = "https://docs.google.com/document/d/1UKgl3LlcsRoFq7IhGR8evzOeMsl9hfYj/edit";

    }


    const Nothing = () => {
        axios.post("/api/flyfoods/order", data) 
        .then((res) => {
            alert("Please note that order will be processed upon confirmation of payment.\n \n Kindly ignore if you already have an e-wallet with CityRuner Deliveries")
            console.log(`first message: ${res.data}`);
        }).catch((error) => {
            console.log(error);
        });
        

        axios.post(`/api/flyfoods/userupdate/${data.user}`, data)
        .then((res) => {
            console.log(`this is from the second success msg: ${res.data}`);
            history.push("/paymentpagesuccess");

        })
        .catch((error) => {
          console.log(error);
      });

    }

    const componentProps = {
        email,
        amount,
        metadata: {
          name,
          phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () => {
          axios.post("/api/flyfoods/order", data) 
          .then((res) => {
              console.log(`first message: ${res.data}`);
              alert("Order Received!! \n Confirmation email sent");
          }).catch((error) => {
              console.log(error);
          });

          axios.post(`/api/flyfoods/userupdate/${data.user}`, data)
          .then((res) => {
              console.log(`this is from the second success msg: ${res.data}`);
          })
          .catch((error) => {
            console.log(error);
        });

        window.location.href = "/PaymentSuccess";

        },
        onClose: () => alert("Wait! Don't leave me :("),
      }


      

      const checker = () => {
        if (pickupcharge===500){
          return true
        }else{return false}
      }
    
      const checkerTwo = () => {
        if(pickupcharge===0){
          return true
        }else{return false}
    
      }

    const checkWeight = (e) => {

        setWeightinkg(e.target.value);

        if(e.target.value<0.5){
            setPickupweight(600)
        }
        if(e.target.value>0.5 && e.target.value<=1){
            setPickupweight(700)

        } if(e.target.value>1 && e.target.value<=1.5){
            setPickupweight(800)

        } if(e.target.value>1.5 && e.target.value<=2){
            setPickupweight(900)

        } if(e.target.value>2 && e.target.value<=2.5){
            setPickupweight(1000)

        } if(e.target.value>2.5 && e.target.value<=3){
            setPickupweight(1100)

        } if(e.target.value>3 && e.target.value<=3.5){
            setPickupweight(1200)

        } if(e.target.value>3.5 && e.target.value<=4){
            setPickupweight(1300)

        } if(e.target.value>4 && e.target.value<=4.5){
            setPickupweight(1400)

        } if(e.target.value>4.5 && e.target.value<=5){
            setPickupweight(1500)

        } if(e.target.value>5 && e.target.value<=5.5){
            setPickupweight(1600)

        } if(e.target.value>5.5 && e.target.value<=6){
            setPickupweight(1700)

        } if(e.target.value>6 && e.target.value<=6.5){
            setPickupweight(1800)

        } if(e.target.value>6.5 && e.target.value<=7){
            setPickupweight(1900)

        } if(e.target.value>7 && e.target.value<=7.5){
            setPickupweight(2000)

        } if(e.target.value>7.5 && e.target.value<=8){
            setPickupweight(2100)

        } if(e.target.value>8 && e.target.value<=8.5){
            setPickupweight(2200)

        } if(e.target.value>8.5 && e.target.value<=9){
            setPickupweight(2300)

        } if(e.target.value>9 && e.target.value<=9.5){
            setPickupweight(2400)

        } if(e.target.value>9.5 && e.target.value<=10){
            setPickupweight(2500)

        } if(e.target.value>10 && e.target.value<=10.5){
            setPickupweight(2600)

        } if(e.target.value>10.5 && e.target.value<=11){
            setPickupweight(2700)

        } if(e.target.value>11 && e.target.value<=11.5){
            setPickupweight(2800)

        } if(e.target.value>11.5 && e.target.value<=12){
            setPickupweight(2900)

        } if(e.target.value>12 && e.target.value<=12.5){
            setPickupweight(3000)

        } if(e.target.value>12.5 && e.target.value<=13){
            setPickupweight(3100)

        } if(e.target.value>13 && e.target.value<=13.5){
            setPickupweight(3200)

        } if(e.target.value>13.5 && e.target.value<=14){
            setPickupweight(3300)

        } if(e.target.value>14 && e.target.value<=14.5){
            setPickupweight(3400)

        } if(e.target.value>14.5 && e.target.value<=15){
            setPickupweight(3500)

        } if(e.target.value>15 && e.target.value<=15.5){
            setPickupweight(3600)

        } if(e.target.value>15.5 && e.target.value<=16){
            setPickupweight(3700)

        } if(e.target.value>16 && e.target.value<=16.5){
            setPickupweight(3800)

        } if(e.target.value>16.5 && e.target.value<=17){
            setPickupweight(3900)

        } if(e.target.value>17 && e.target.value<=17.5){
            setPickupweight(4000)

        } if(e.target.value>17.5 && e.target.value<=18){
            setPickupweight(4100)

        } if(e.target.value>18 && e.target.value<=18.5){
            setPickupweight(4200)

        } if(e.target.value>18.5 && e.target.value<=19){
            setPickupweight(4300)

        } if(e.target.value>19 && e.target.value<=19.5){
            setPickupweight(4400)

        } if(e.target.value>19.5 && e.target.value<=20){
            setPickupweight(4500)

        } if(e.target.value>20 && e.target.value<=20.5){
            setPickupweight(4600)

        } if(e.target.value>20.5 && e.target.value<=21){
            setPickupweight(4700)

        } if(e.target.value>21 && e.target.value<=21.5){
            setPickupweight(4800)

        } if(e.target.value>21.5 && e.target.value<=22){
            setPickupweight(4900)

        } if(e.target.value>22 && e.target.value<=22.5){
            setPickupweight(5000)

        } if(e.target.value>22.5 && e.target.value<=23){
            setPickupweight(5100)

        } if(e.target.value>23 && e.target.value<=23.5){
            setPickupweight(5200)

        } if(e.target.value>23.5 && e.target.value<=24){
            setPickupweight(5300)

        } if(e.target.value>24 && e.target.value<=24.5){
            setPickupweight(5400)

        }if(e.target.value>24.5 && e.target.value<=25){
            setPickupweight(5500)

        }
    }

    return(
        <div>
            <UserDashboardNavBar /> 
            <div className ="contactBody">
                <br/>
               
            <div className="form-top">
          <h1>₦ {amount/100} </h1>
            <p className="ontop-form ontop-form2 ontop-dash ontop-dash1"><b>User</b> Pick up Info</p>
            <br/>
            <br/>
            
 
            </div>
            <div className="contactForm">
            <form id="myForm">

            <div className="radio-group"> 
            <input type="radio" id="citypick" name="select" value="cityrunner" 
            checked={pickupcharge === 500} onClick={(e) => setPickupcharge(500)}/>
            <label htmlFor="citypick" className="radio-label">Drone Pick-up & Drone Delivery</label>
            <br/>
            <br/>
            <input type="radio" id="userdrop" name="select" value="user"
            checked={pickupcharge === 0} onClick={(e) => setPickupcharge(0)}/>
            <label htmlFor="userdrop" className="radio-label">Customer Drop-off & Drone Delivery</label>
            <p style={{display: checkerTwo() ? "block" : "none"}} className="drop-off-p"><br/><b>
            Drop-off address: Ground Floor, ASVA office, Engineering Building</b></p>

            </div>



            <div class="input-group">
                <input type="text" id="name" name="name" onChange={(e)=> setName(e.target.value)} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Your Name</label>
            </div>

            <div class="input-group">
                <input type="tel" id="phone" name="phone" onChange={(e)=>setPhone(e.target.value)} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Your Phone Number</label>
            </div>

            <div class="input-group">
                <input type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Your Email</label>
            </div>

            <div className="pickupinfo" style={{display: checker() ? "block" : "none"}}      >

            <div class="input-group">
                 <input type="text" id="pickupaddress" name="pickupaddress" onChange={(e)=> setPickupaddress(e.target.value)} required />
                 <span class="highlight"></span>
                 <span class="bar"></span>
                <label className="label-class">Pick-up Address</label>
            </div>

            <div class="input-group">
                 <input type="text" id="pickupstate" name="pickupstate" value="Afe-Babalola University" required />
                 <span class="highlight"></span>
                 <span class="bar"></span>
                 <label className="label-class">University</label>
            </div>

            <div class="input-group">
                <input type="date" id="pickupdate" name="pickupdate" onChange={(e)=>setPickupdate(e.target.value)} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class label-class-special">Pick up date</label>
            </div>

            <div class="input-group">
                 <input type="text" id="pickupitem" name="pickupitem" onChange={(e)=>setPickupitem(e.target.value)} required />
                 <span class="highlight"></span>
                 <span class="bar"></span>
                <label className="label-class">Food Order</label>
            </div>

            <div class="input-group">
                <input type="number" id="pickupweight" name="pickupweight" onChange={checkWeight} max="25" required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Weight (kg) (Check our food-weight menu for the item's weight. Max weight = 25kg)</label>
            </div>


            <div class="input-group">
                <input type="number" id="pickupquantity" name="pickupquantity" onChange={(e)=>setPickupquantity(e.target.value)} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Quantity</label>
            </div>

            </div>


          
            
            
            
            
            <br/>
            <br/>
            <br/>



           
            <p className="ontop-form ontop-form2 ontop-dash ontop-dash2"><b>Delivery</b> Info</p>

            <div class="input-group">
                 <input type="text" id="deliveryname" name="deliveryname" onChange={(e)=>setDeliveryaddress(e.target.value)} required />
                 <span class="highlight"></span>
                 <span class="bar"></span>
                <label className="label-class">Delivery Address</label>
            </div>

            <div class="input-group">
                 <input type="text" id="deliverystate" name="deliverystate" value="Afe-Babalola University" required />
                 <span class="highlight"></span>
                 <span class="bar"></span>
                 <label className="label-class">University</label>
            </div>

            <div class="input-group">
                <input type="text" id="deliveryname" name="deliveryname" onChange={(e)=>setDeliveryname(e.target.value)} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Name</label>
            </div>

            <div class="input-group">
                <input type="tel" id="deliveryphonenumber" name="deliveryphonenumber" onChange={(e)=>setDeliveryphonenumber(e.target.value)} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Phone Number</label>
            </div>

            <div class="input-group">
                <input type="email" id="deliveryemail" name="deliveryemail" onChange={(e)=>setDeliveryemail(e.target.value)} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Email</label>
            </div>

            <div class="input-group" style={{display: checkerTwo() ? "block" : "none"}}>
                 <input type="text" id="pickupitem" name="pickupitem" onChange={(e)=>setPickupitem(e.target.value)} required />
                 <span class="highlight"></span>
                 <span class="bar"></span>
                <label className="label-class">Food Order</label>
            </div>

            <div class="input-group" style={{display: checkerTwo() ? "block" : "none"}}>
                <input type="number" id="pickupweight" name="pickupweight" onChange={checkWeight} max="25" required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Weight (kg) (Check our food-weight menu for the item's weight. Max weight = 25kg)</label>
            </div>


            <div class="input-group" style={{display: checkerTwo() ? "block" : "none"}}>
                <input type="number" id="pickupquantity" name="pickupquantity" onChange={(e)=>setPickupquantity(e.target.value)} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Quantity</label>
            </div>


          

           
            </form>
            <div className="paypay">





           <PaystackButton {...componentProps} className="contact-button"/>

                <br/>
                <br/>
              </div>
        </div>

        </div>  

        </div>
    )
}

export default UserDashboardHome;