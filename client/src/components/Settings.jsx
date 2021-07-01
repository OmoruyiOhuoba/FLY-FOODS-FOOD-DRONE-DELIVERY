import React, {useEffect} from "react";
import NavBar from "./Layout/NavBar";
import {useSelector} from "react-redux";
import history from "../history";

const Settings = () => {

    const { auth } = useSelector( state => ({
    auth: state.auth,
    })); 

    useEffect(()=> {
       
           if(!auth.isAuthenticated){
            history.push("/");
               
           }
       
       });

    return(
        <div>
            <NavBar />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <h1>Settings</h1>
                <br/>
                <br/>
                <h2 style={{textAlign: "left", marginLeft: "20px"}}><b>Profile</b></h2>
                <br/>
                <br/>
                <p style={{textAlign: "left", marginLeft: "20px"}}><b>Name</b>: {auth.user.name}</p>
               {/* <br/>
                <br/>
                <p style={{textAlign: "left", marginLeft: "20px"}}><b>Id</b>: {auth.user.id}</p>
                <br/>*/} 
                <br/>
                <p style={{textAlign: "left", marginLeft: "20px"}}><b>Email</b>: {auth.user.email}</p> 
                {/*<br/>
                <br/>
                <p style={{textAlign: "left", marginLeft: "20px"}}><b>Role</b>: {auth.user.role}</p> */}

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Settings;