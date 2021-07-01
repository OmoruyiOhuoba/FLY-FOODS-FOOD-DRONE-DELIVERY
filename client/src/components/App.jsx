import React from "react";
import '../App.css';
import { Router, Route, Switch } from 'react-router-dom';

import {Provider} from "react-redux";
import store from "../store";

import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import {setCurrentUser, logoutUser} from "../actions/authActions";

import history from '../history';
import Prices from "./Prices";
import SignUpUserOrRider from "./OptionsComponent/SignUpUserOrRider";
import SignInUserOrRider from "./OptionsComponent/SignInUserOrRider";
import SignUpUser from "./Auth/SignUpUser";
import SignUpRider from "./Auth/SignUpRider";
import SignInUser from "./Auth/SignInUser";
import SignInRider from "./Auth/SignInRider";
import SignUpAdmin from "./Auth/SignUpAdmin";
import SignInAdmin from "./Auth/SignInAdmin";
import ZHiddenSignUpAdmin from "./Auth/ZHiddenSignUpAdmin";
import ZHiddenSignUpRider from "./Auth/ZHiddenSignUpRider";
import UserDashboardHome from "./Dashboard/UserDashboardHome";
import UserDashboardPending from "./Dashboard/UserDashboardPending";
import UserDashboardDeliveries from "./Dashboard/UserDashboardDeliveries";
import RiderDashboardHome from "./Dashboard/RiderDashboardHome";
import RiderDashboardPending from "./Dashboard/RiderDashboardPending";
import RiderDashboardDeliveries from "./Dashboard/RiderDashboardDeliveries";
import AdminDashboardHome from "./Dashboard/AdminDashboardHome";
import AdminDashboardDeliveries from "./Dashboard/AdminDashboardDeliveries";
import AdminDashboardPending from "./Dashboard/AdminDashboardPending";
import PrivateRouteUser from "./Private-routes/PrivateRouteUser";
import PrivateRouteRider from "./Private-routes/PrivateRouteRider";
import PrivateRouteAdmin from "./Private-routes/PrivateRouteAdmin";
import Footer from "./Layout/Footer";
import WhoWeAre from "./Layout/FooterInfo/WhoWeAre";
import Success from "./Dashboard/Success";
import UserDashboardReceived from "./Dashboard/UserDashboardReceived";
import Help from "./Help";
import Settings from "./Settings";
import BecomeAPartner from "./BecomeAPartner";
import PaystackPaymentpageSuccess from "./Dashboard/PaystackPaymentpageSuccess";
import ForgotPassword from "./Auth/ForgotPassword";
import ForgotPasswordSent from "./Auth/ForgotPasswordSent";



/*keep user logged in */
if(localStorage.jwtToken){
  const token = localStorage.jwtToken;
  setAuthToken(token);

  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  
  const currentTime= Date.now() / 1000;
  if (decoded.exp < currentTime){
      store.dispatch(logoutUser());

      window.location.href = "./login";
  }


}

const App = () => {
    return(
        <Provider store={store}>
           <Router history={history}>

              <Switch>
                <Route exact path="/" component={WhoWeAre} />
                <Route path="/home" component={WhoWeAre} />
               <Route path="/prices" component={Prices} />

                <Route path="/signupuserorrider" component={SignUpUserOrRider} />
                <Route path="/signinuserorrider" component={SignInUserOrRider} />

                <Route path="/signupuser" component={SignUpUser} />  
                <Route path="/signuprider" component={SignUpRider} />  

                <Route path="/signinuser" component={SignInUser} />  
                <Route path="/zhiddensignuprider" component={ZHiddenSignUpRider} />
                <Route path="/signinrider" component={SignInRider} />

                <Route path="/signupadmin" component={SignUpAdmin} />
                <Route path="/zhiddensignupadmin" component={ZHiddenSignUpAdmin} />
                <Route path="/signinadmin" component={SignInAdmin} />

                <PrivateRouteUser path="/userdashboardhome" component={UserDashboardHome} />
                <PrivateRouteUser path="/userdashboardreceived" component={UserDashboardReceived} />
                <PrivateRouteUser path="/userdashboardpending" component={UserDashboardPending} />
                <PrivateRouteUser path="/userdashboarddeliveries" component={UserDashboardDeliveries} />
                <PrivateRouteUser path="/PaymentSuccess" component={Success} />


                <PrivateRouteRider path="/riderdashboardhome" component={RiderDashboardHome} />
                <PrivateRouteRider path="/riderdashboardpending" component={RiderDashboardPending} />
                <PrivateRouteRider path="/riderdashboarddeliveries" component={RiderDashboardDeliveries} />

                <PrivateRouteAdmin path="/admindashboardhome" component={AdminDashboardHome} />
                <PrivateRouteAdmin path="/admindashboardpending" component={AdminDashboardPending} />
                <PrivateRouteAdmin path="/admindashboarddeliveries" component={AdminDashboardDeliveries} />

                <Route path="/becomeapartner" component={BecomeAPartner} />
                <Route path="/whoweare" component={WhoWeAre} />
     

                <Route path="/help" component={Help} />
                <Route path="/settings" component={Settings} />
                <Route path="/paymentpagesuccess" component={PaystackPaymentpageSuccess}/>
                <Route path="/forgotpassword" component={ForgotPassword}/>
                <Route path="/forgotpasswordsent" component={ForgotPasswordSent}/>







              </Switch>

              <Footer />
           </Router>
        </Provider>
    )
}

export default App;
