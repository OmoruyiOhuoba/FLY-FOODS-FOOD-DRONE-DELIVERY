import React, {useState} from  "react";
import Logo from "../assets/logo-2.png";
import backArrow from "../assets/backarrow.svg";
import {Link} from "react-router-dom";
import axios from "axios";


const BecomeAPartner = () => {
    const [nameErr, setNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [phonenumberErr, setPhonenumberErr] = useState({});
    const [addressErr, setAddressErr] = useState({});
    const [purposeErr, setPurposeErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});
    const [confirmPasswordErr, setConfirmPasswordErr] = useState({});

    const [userinfo, setUserinfo] = useState("");

    const handleChange = (event) => {

        const {name, value} = event.target;

        setUserinfo(prevValue => {
            return{
                ...prevValue, [name]: value
            }
        });

        console.log(userinfo);
        
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = formValidation();

        if(isValid){
        axios.post("/api/flyfoods/becomeapartner", userinfo)
        .then((res) => {
            console.log(res.data);
            alert("Thank you for partnering with us!\nYour request has been received.\nYou will receive a response within two business days.\nHave a nice day!!");
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
        const addressErr = {};
        const purposeErr = {};
        const passwordErr = {};
        const confirmPasswordErr ={};

        let isValid = true;

        if( typeof userinfo.companyname !== "string"){
            nameErr.nameType = "Enter a valid name";
            isValid = false;

        }

        if( typeof userinfo.companyemail !== "string"){
            emailErr.emailType = "Enter a valid email address";
            isValid = false;
        }

        if( typeof userinfo.companyphonenumber !== "string"){
            phonenumberErr.phonenumberType = "Enter a valid phonenumber";
            isValid = false;
        }


        if( typeof userinfo.companyaddress !== "string"){
            addressErr.addressType = "Enter a valid address";
            isValid = false;
        }

        if( typeof userinfo.purposeofpartnership !== "string"){
            purposeErr.purposeType = "Enter a valid age";
            isValid = false;
        }

        
        if(userinfo.password.length < 8 ){
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
        setPurposeErr(purposeErr);
        setAddressErr(addressErr);
        setPasswordErr(passwordErr);
        setConfirmPasswordErr(confirmPasswordErr);
        return isValid;


    }


    return(
                <div>
        <Link to="/"><img className="centre-logo" src={Logo} alt=""/></Link> 

        <div className ="contactBody">
                <br/>
               
            <div className="form-top">

            <Link to="/"><p className="ontop-form ontop-form1"><img className="back-arrow" src={backArrow} alt="back arrow"/> &ensp; &ensp;BACK TO HOME</p></Link> 
            <p className="ontop-form ontop-form2"><b>Register</b> below</p>
            <p className="ontop-form ontop-form3">Already have a Partner account?<Link to="/signupuser"><span className="bluelogin"> Log in</span></Link></p>



            </div>
            <div className="contactForm">
            <form id="myForm">
            <div class="input-group">
                 <input type="text" name="companyname" onChange={handleChange} value={userinfo.companyname} required />
                 <span class="highlight"></span>
                 <span class="bar"></span>
                <label className="label-class">Company Name</label>
            </div>
            {Object.keys(nameErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {nameErr[key]} </div>
            })}

            <div class="input-group">
                <input type="email" name="companyemail" onChange={handleChange} value={userinfo.companyemail} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Company Email</label> 
            </div>
            {Object.keys(emailErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {emailErr[key]} </div>
            })}

            <div class="input-group">
                <input type="text" name="companyphonenumber" onChange={handleChange} value={userinfo.companyphonenumber} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Company Phone Number</label>
            </div>
            {Object.keys(phonenumberErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {phonenumberErr[key]} </div>
            })}


            <div class="input-group">
                <input type="text" name="companyaddress" onChange={handleChange} value={userinfo.companyaddress} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Address</label> 
            </div>
            {Object.keys(addressErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {addressErr[key]} </div>
            })}

            <div class="input-group">
                <input type="text" name="purposeofpartnership" onChange={handleChange} value={userinfo.purposeofpartnership} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Purpose of Partnership in Detail</label>
            </div>
            {Object.keys(purposeErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {purposeErr[key]} </div>
            })}


            <div class="input-group">
                <input type="password" name="password" onChange={handleChange} value={userinfo.password}   required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Set Password</label>
            </div>
            {Object.keys(passwordErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {passwordErr[key]} </div>
            })}


            <div class="input-group">
                <input type="password" name="password2" onChange={handleChange} value={userinfo.password2}  required />
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

export default BecomeAPartner;