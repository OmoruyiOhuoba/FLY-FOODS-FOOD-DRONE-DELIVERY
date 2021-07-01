import {SET_CURRENT_USER, USER_LOADING, GET_ERRORS} from "./types";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import history from '../history';





export const registerUser = (userData) => dispatch => {

    axios.post("/api/flyfoods/register", userData)
      .then(() => {
        console.log("success");
        history.push("/signinuser");
      }) // re-direct to login on successful register
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      );
  };
 
  export const registerRider = (userData) => dispatch => {

    axios.post("/api/flyfoods/register", userData)
      .then(() => {
        console.log("success");
        history.push("/signinrider");
      }) // re-direct to login on successful register
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      );
  };

  export const registerAdmin = (userData) => dispatch => {

    axios.post("/api/flyfoods/register", userData)
      .then(() => {
        console.log("success");
        history.push("/signinadmin");
      }) // re-direct to login on successful register
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      );
  };


  // Login - get user token
  export const loginUser = userData => dispatch => {
    axios.post("/api/flyfoods/login", userData)
      .then(res => {
        // Save to localStorage
  // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
        history.push("/userdashboardhome");
              })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      );
  };

  export const loginRider = userData => dispatch => {
    axios.post("/api/flyfoods/login", userData)
      .then(res => {
        // Save to localStorage
  // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
        history.push("/riderdashboardhome");
             })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      );
  };

  export const loginAdmin = userData => dispatch => {
    axios.post("/api/flyfoods/login", userData)
      .then(res => {
        // Save to localStorage
  // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
        history.push("/admindashboardhome");
              })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err
        });
      
      }
      );
  };

export const setCurrentUser = decoded => {
        return {
            type: SET_CURRENT_USER,
            payload: decoded
        }
    };

 export const setUserLoading = () => {
        return {
            type: USER_LOADING
        };
    };

export const logoutUser = () => dispatch => {
        localStorage.removeItem("jwtToken");
        setAuthToken(false);
        dispatch(setCurrentUser({}))
        history.push("/");
        
    };

export const logoutRider = () => dispatch => {
        localStorage.removeItem("jwtToken");
        setAuthToken(false);
        dispatch(setCurrentUser({}))
        history.push("/signinrider");
        
    };

export const logoutAdmin = () => dispatch => {
        localStorage.removeItem("jwtToken");
        setAuthToken(false);
        dispatch(setCurrentUser({}))
        history.push("/signinadmin");
        
    };


