import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loginUser} from "../../actions/authActions";
import {Link} from "react-router-dom";
import backArrow from "../../assets/backarrow.svg";
import Logo from "../../assets/logo-2.png";
import history from '../../history'; 
import axios from "axios";



const ForgotPassword = () => {
    const [emailErr, setEmailErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});


    const [userData, setUserData] = useState({
        email: "",
        password: "",
        errors:{},
    });


    const { auth, errors } = useSelector(state => ({
        auth: state.auth,
        errors: state.errors,
      })); 


    
      const handleChange = (event) => {
        const {name, value} =event.target;

        setUserData(prevData => {
            return {
                ...prevData, [name]: value
            }
        });

        console.log(userData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = formValidation();


      if(isValid){ 
                axios.post("/api/flyfoods/forgotpasswordemail", userData) 
                .then(() => {
                    alert("finally");
                    console.log("forgot password email sent");
                }).catch((error) => {
                    console.log(error);
                });   
                
                
                axios.post("/api/flyfoods/forgotpasswordreset", userData) 
                .then(() => {
                    console.log("email reset");
                    window.location.href = "/forgotpasswordsent";
                    history.push("/forgotpasswordsent");
                }).catch((error) => {
                    console.log(error);
                });  
                
        }        

        }

    const formValidation = () => {
        const emailErr = {};
        let isValid = true;



        if( userData.password === ""){
            passwordErr.passwordRequired = "The password field is required";
            isValid = false;
        }
        
        if(userData.password.length > 0 && userData.password.length < 8){
            passwordErr.passwordShort = "Password must be at least 8 characters";
            isValid = false;
        }

          
        if(userData.password.length > 30 ){
            passwordErr.passwordLong = "Password can't be more than 30 characters";
            isValid = false;
        }
  
        if( typeof userData.email !== "string"){
            emailErr.emailType = "Enter a valid email address";
            isValid = false;
        }

        if( userData.email === ""){
            emailErr.emailRequired = "The email field is required";
            isValid = false;
        }
        
        setPasswordErr(passwordErr);
        setEmailErr(emailErr);
        return isValid;


    }

  
     


    return(
            <div>
            <Link to="/home" ><img className="centre-logo" src={Logo} alt="logo"/></Link> 
            <br/>


            <div className="contactForm">
            <form id="myForm">
                <br/>
                <br/>
                <br/>

                <div class="input-group outskirt2">
            <p className="outskirt2">Please reset your password using your registered email</p>

            </div>
                
            <div class="input-group">
                <input type="email" name="email" onChange={handleChange} value={userData.email} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Your Email</label>
            </div>
            {Object.keys(emailErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {emailErr[key]} </div>
            })}

            <div class="input-group">
                <input type="password" name="password" onChange={handleChange} value={userData.password} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Your Password</label>
            </div>
            {Object.keys(passwordErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {passwordErr[key]} </div>
            })}


            <br/>
            <div className="buttonPosition">
                <button className="contact-button" type="submit" onClick={handleSubmit}> Send Mail </button>

                
              </div>
            </form>
        </div>




            </div>
    
    )

}

export default ForgotPassword;