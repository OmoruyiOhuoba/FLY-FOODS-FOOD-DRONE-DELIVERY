import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loginUser} from "../../actions/authActions";
import {Link} from "react-router-dom";
import backArrow from "../../assets/backarrow.svg";
import Logo from "../../assets/logo-2.png";
import history from '../../history'; 




const SignInUser = () => {
    const [emailErr, setEmailErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});
    const [incorrect, setIncorrect] = useState(5);


    const [userData, setUserData] = useState({
        email: "",
        password: "",
        errors:{},
    });
    
    const dispatch = useDispatch();
    
    const { auth, errors } = useSelector(state => ({
      auth: state.auth,
      errors: state.errors,
    })); 
    

    useEffect(()=> {
     // If logged in and user navigates to Register page, should redirect them to dashboard

        if(auth.isAuthenticated){

            if(auth.user.role==="userrole"){
                history.push("/userdashboardhome");
    
            }
            if(auth.user.role==="riderrole"){
                history.push("/riderdashboardhome");
            }
    
            if(auth.user.role==="adminrole"){
                history.push("/admindashboardhome");
            }
            
        }
    
    });
    
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
                if(userData.email && userData.password && userData.errors){
                  dispatch(loginUser(userData));
    
                  if(errors.message==="Request failed with status code 400"){
                    setIncorrect(1000);
                }
        
                    setEmailErr("");
                    setPasswordErr("");
                  
                }
    
    
    
            }



            console.log(userData);
    
        if(auth.isAuthenticated){
             // If logged in and user navigates to Login page, should
            history.push("/userdashboardhome");
          
        }
    
    
    
        }

        const formValidation = () => {
            const emailErr = {};
            const passwordErr = {};
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

        const showMe = () =>{
            if(incorrect ===1000){
                return true
            }
        }

    return(
        <div>
       <Link to="/home" ><img className="centre-logo" src={Logo} alt="logo"/></Link> 
        <div className ="contactBody">
                <br/>
               
            <div>

            <Link to="/home" className="normal normalback"><p className="ontop-form ontop-form1"><img className="back-arrow" src={backArrow} alt="back arrow"/> &ensp; &ensp;BACK TO HOME</p></Link>
            <p className="ontop-form ontop-form2"><b>Log in</b> below</p>
            <p className="ontop-form ontop-form3">Don't have an account?<Link to="/signupuser" className="normal3"><span className="bluelogin"> Register</span></Link></p>

            </div>
            <div className="contactForm">
            <form id="myForm">
            <div class="input-group">
                <input type="email" name="email" onChange={handleChange} value={userData.email} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Email</label>
            </div>
            {Object.keys(emailErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {emailErr[key]} </div>
            })}


            <div class="input-group">
                <input type="password" name="password" onChange={handleChange} value={userData.password} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="label-class">Password</label>
            </div>
            {Object.keys(passwordErr).map((key)=> {
                return <div style={{color: "red", textAlign: "left"}}> {passwordErr[key]} </div>
            })}
            <div style={{display: showMe() ? "block" : "none", color: "red", textAlign: "left" }} className="leftleft">
            <p className="leftleft"> Incorrect username or password</p>
            <br/>
            </div>
            <br/>
            <div className="buttonPosition">
                <button className="contact-button" type="submit" onClick={handleSubmit}> Sign In </button>

                <br/>
                <br/>
                <Link to="/forgotpassword"><p className="forgotpassword">Forgot password?</p></Link>
              </div>
            </form>
        </div>

        </div>
        </div>
    )
}

export default SignInUser;