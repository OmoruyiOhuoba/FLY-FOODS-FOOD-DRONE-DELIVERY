import React, {useState} from "react";
import NavBar from "./Layout/NavBar";

const Prices = () => {
    const [pickupoutskirt, setPickupoutskirt] = useState("");
    const [pickupweight, setPickupweight] = useState("");
    const [pickupquantity, setPickupquantity] = useState("");
    const [deliveryoutskirt, setDeliveryoutskirt] = useState("");
    const [pickupcharge, setPickupcharge] = useState("");
    const Amount = ((pickupweight*1) * (pickupquantity*1)) + (pickupcharge*1) + (pickupoutskirt*1) + (deliveryoutskirt*1);


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
    

    const realWeight = (e) => {
        
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
        <div id="toppage3">
            <NavBar />

            <div className="form-top">

        <p className="ontop-form ontop-form2 ontop-dash ontop-dash1"><b> Check Price</b></p>



        </div>

        <div>
        <br/>
        <h1 className="color-color" style={{}}>₦ {Amount}</h1>
        </div>
        <br/>
      


        <div className="contactForm">
            <form id="myForm">

            <div className="radio-group">
            <input type="radio" id="delivery" name="options" value="yes-delivery" 
            checked={pickupcharge === 500} onClick={(e) => setPickupcharge(500)}/>
            <label htmlFor="delivery" className="radio-label">Pick-up & Delivery</label>
            <br/>
            <br/>
            <input type="radio" id="pick-up" name="options" value="no-delivery"
            checked={pickupcharge === 0} onClick={(e) => setPickupcharge(0)}/>
            <label htmlFor="pick-up" className="radio-label">Delivery only</label>
            <p style={{display: checkerTwo() ? "block" : "none"}} className="drop-off-p"><br/><b>
            Drop-off location: Ground Floor, ASVA office, Engineering Building</b></p>

            </div>

        <div className="pickupinfo" style={{display: checker() ? "block" : "none"}}      >

        <br/>
        <br/>
        <div className="form-top">         
                   <p className="ontop-form ontop-form2 ontop-dash ontop-dash2"><b>Pick up</b> Info </p>
           </div>

            <div class="input-group">
                 <input type="text" name="pickupaddress" id="pickupaddress" required />
                 <span class="highlight"></span>
                 <span class="bar"></span>
                <label className="label-class">Pick up address</label>
            </div>
            <div class="input-group">
                 <input type="text" name="state" id="state" value="Lagos" required />
                 <span class="highlight"></span>
                 <span class="bar"></span>
                 <label className="label-class">State</label>
            </div>

            <div class="input-group outskirt">
            <label className="outskirt" style={{textAlign: "left"}}>Is the pick-up address at the outskirts of Lagos? e.g after Ojodu Berger(Arepo, Mowe)/ beyond Ajah(Epe)</label>
               
            </div>

            <div className="radio-group">
            <input type="radio" id="yespickupoutskirt" name="pickupoutskirt" value="yespickupoutskirt" 
            checked={pickupoutskirt === 300} onClick={(e) => setPickupoutskirt(300)}/>
            <label htmlFor="yespickupoutskirt" className="radio-label">Yes, at outskirts</label>
            <br/>
            <br/>
            <input type="radio" id="nopickupoutskirt" name="pickupoutskirt" value="nopickupoutskirt"
            checked={pickupoutskirt === 0} onClick={(e) => setPickupoutskirt(0)}/>
            <label htmlFor="nopickupoutskirt" className="radio-label">No, within Lagos</label>

            </div>

            <div class="input-group">
                <input type="number" name="pickupweight" id="pickupweight" onChange={realWeight} max="25" required />
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



           
<p className="ontop-form ontop-form2 ontop-dash ontop-dash2"><b>Delivery</b> Info</p>

            <div class="input-group">
                <input type="text" name="deliveryaddress" id="deliveryaddress" required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Delivery Address</label>
            </div>

            <div class="input-group">
                 <input type="text" name="deliverystate"id="deliverystate" value="Afe Babalola University" required />
                 <span class="highlight"></span>
                 <span class="bar"></span>
                 <label className="label-class">University</label>
            </div>

            <div class="input-group outskirt">
            <label className="outskirt" style={{textAlign: "left"}}>Is the delivery address in the Medical College?</label>
               
            </div>

            <div className="radio-group">
            <input type="radio" id="yesdeliveryoutskirt" name="deliveryoutskirt" value="yesdeliveryoutskirt" 
            checked={deliveryoutskirt === 300} onClick={(e) => setDeliveryoutskirt(300)}/>
            <label htmlFor="yesdeliveryoutskirt" className="radio-label">Yes</label>
            <br/>
            <br/>
            <input type="radio" id="nodeliveryoutskirt" name="deliveryoutskirt" value="nodeliveryoutskirt"
            checked={deliveryoutskirt === 0} onClick={(e) => setDeliveryoutskirt(0)}/>
            <label htmlFor="nodeliveryoutskirt" className="radio-label">No</label>

            </div>

            <div class="input-group" style={{display: checkerTwo() ? "block" : "none"}}>
                <input type="number" name="pickupweight" id="pickupweight" onChange={realWeight} max="25" required />
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
                <br/>
                <br/>
            <div className="buttonPosition">
                <h1 className="color-color" style={{}}>Price: ₦ {Amount}</h1>
                <br/>
                <p className="very-small color-color">*Fill all fields for accurate estimate</p>
                <br/>
                <br/>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
            </form>
        </div>

        </div>
    )
}

export default Prices;




