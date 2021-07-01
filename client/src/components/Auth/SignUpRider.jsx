import React,{useState, useEffect} from "react";
import {useSelector} from "react-redux";
import backArrow from "../../assets/backarrow.svg";
import Logo from "../../assets/logo-2.png";
import {Link} from "react-router-dom";
import history from '../../history';
import axios from "axios";



//FAKE SIGN UP ADMIN PAGE TO SEND ALL FORM DATA TO EMAIL
const SignUpRider = () => {
    const [nameErr, setNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [phonenumberErr, setPhonenumberErr] = useState({});
    const [ageErr, setAgeErr] = useState({});
    const [addressErr, setAddressErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});
    const [confirmPasswordErr, setConfirmPasswordErr] = useState({});



    const [userinfo, setUserinfo] = useState({
        name: "",
        email: "",
        phonenumber: "",
        age: "",
        address: "",
        password: "",
        password2: "",
    });

    const handleChange = (event) => {

        const {name, value} = event.target;

        setUserinfo(prevValue => {
            return{
                ...prevValue, [name]: value
            }
        });

        console.log(userinfo);
        
    }


    const { auth } = useSelector(state => ({
      auth: state.auth,
    })); 
    
    useEffect(()=> {
        // If logged in and user navigates to Register page, should redirect them to dashboard
    
                if(auth.isAuthenticated){
        
                    if(auth.user.role==="userrole"){
                        history.push("/userdashboardhome");
            
                    }
                    if(auth.user.role==="riderrole"){
                        history.push("riderdashboardhome");
                    }
            
                    if(auth.user.role==="adminrole"){ 
                        history.push("admindashboardhome");
                    }
                    
                }
            
            });

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = formValidation();

        if(isValid){
        axios.post("/api/flyfoods/fakesignuprider", userinfo)
        .then((res) => {
            console.log(res.data);
            alert("Your data has been sent to our Admin Team.\nIf approved, you will be notified and granted access.");
            window.location.href = "/";
        }).catch((error) => {
            console.log(error);
        })

    }
        
    }


    const formValidation = () => {
        const nameErr = {};
        const emailErr = {};
        const phonenumberErr = {};
        const ageErr = {};
        const addressErr = {};
        const passwordErr = {};
        const confirmPasswordErr ={};

        let isValid = true;

        if( userinfo.name === ""){
            nameErr.nameRequired = "The name field is required";
            isValid = false;
        }
        
        if( userinfo.email === ""){
            emailErr.passwordRequired = "The email field is required";
            isValid = false;
        }
        
        if( userinfo.password === ""){
            passwordErr.passwordRequired = "The password field is required";
            isValid = false;
        }
        
        if( userinfo.password2 === ""){
            confirmPasswordErr.password2Required = "The confirm password field is required";
            isValid = false;
        }

        if( typeof userinfo.name !== "string"){
            nameErr.nameType = "Enter a valid name";
            isValid = false;

        }

        if( typeof userinfo.email !== "string"){
            emailErr.emailType = "Enter a valid email address";
            isValid = false;
        }

        if( typeof userinfo.phonenumber !== "string"){
            phonenumberErr.phonenumberType = "Enter a valid phonenumber";
            isValid = false;
        }


        if( typeof userinfo.age !== "string"){
            ageErr.ageType = "Enter a valid age";
            isValid = false;
        }


        if( typeof userinfo.address !== "string"){
            addressErr.addressType = "Enter a valid address";
            isValid = false;
        }
        
        if( userinfo.password.length > 0 && userinfo.password.length < 8 ){
            passwordErr.passwordShort = "Password must be at least 8 characters";
            isValid = false;
        }

          
        if(userinfo.password.length > 30 ){
            passwordErr.passwordLong = "Password can't be more than 30 characters";
            isValid = false;
        }

        if(userinfo.password2 !== userinfo.password){
            confirmPasswordErr.unMatchPassword = "Password does not match";
            isValid = false;

        }

        setNameErr(nameErr);
        setEmailErr(emailErr);
        setPhonenumberErr(phonenumberErr);
        setAgeErr(ageErr);
        setAddressErr(addressErr);
        setPasswordErr(passwordErr);
        setConfirmPasswordErr(confirmPasswordErr);
        return isValid;


    }



    return(
     <div>
     <Link to="/"><img className="centre-logo" src={Logo} alt="logo"/></Link>

        <div className ="contactBody">
                <br/>
               
            <div className="form-top">

            <Link to="/home" className="normal normalback"><p className="ontop-form ontop-form1"><img className="back-arrow" src={backArrow} alt="back arrow"/> &ensp; &ensp;BACK TO HOME</p></Link>
            <p className="ontop-form ontop-form2"><b>Register</b> below</p>
            <p className="ontop-form ontop-form3">Already a Runner?<Link to="/signinrider" className="normal3"><span className="bluelogin"> Log in</span></Link></p>



            </div>
            <div className="contactForm">
            <form id="myForm">
            <div class="input-group">
                 <input type="text" name="name" onChange={handleChange} value={userinfo.name} required />
                 <span class="highlight"></span>
                 <span class="bar"></span>
                <label className="label-class">Name</label>
            </div>
            {Object.keys(nameErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {nameErr[key]} </div>
            })}

            <div class="input-group">
                <input type="email" name="email" onChange={handleChange} value={userinfo.email} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Email</label>
            </div>
            {Object.keys(emailErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {emailErr[key]} </div>
            })}

            <div class="input-group">
                <input type="tel" name="phonenumber" onChange={handleChange} value={userinfo.phonenumber} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Phone Number</label>
            </div>
            {Object.keys(phonenumberErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {phonenumberErr[key]} </div>
            })}

            <div class="input-group">
                <input type="number" name="age" onChange={handleChange} value={userinfo.age} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Age</label> 
            </div>
            {Object.keys(ageErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {ageErr[key]} </div>
            })}

            <div class="input-group">
                <input type="text" name="address" onChange={handleChange} value={userinfo.address} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Address</label>
            </div>
            {Object.keys(addressErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {addressErr[key]} </div>
            })}

            <div class="input-group">
                <input type="password" name="password" onChange={handleChange} value={userinfo.password} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Password</label>
            </div>
            {Object.keys(passwordErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {passwordErr[key]} </div>
            })}

            <div class="input-group">
                <input type="password" name="password2" onChange={handleChange} value={userinfo.password2} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Confirm Pasword</label>
            </div>
            {Object.keys(confirmPasswordErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {confirmPasswordErr[key]} </div>
            })}
            <br/>

            <div className="buttonPosition">
                <button className="contact-button" type="submit" onClick={handleSubmit}> Submit </button>

                <br/>
                <br/>
              </div>
            </form>
        </div>

        </div>
        </div>
    )
}

export default SignUpRider;