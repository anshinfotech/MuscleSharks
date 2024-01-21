
// import {toast} from "sonner"
import axios from "axios";
import {toast} from "react-toastify";


export const USER_REGISTER_REQUEST="USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS="USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILED="USER_REGISTER_FAILED";

export const VERIFY_OTP_REQUEST="VERIFY_OTP_REQUEST";
export const VERIFY_OTP_SUCCESS="VERIFY_OTP_SUCCESS";
export const VERIFY_OTP_FAIL="VERIFY_OTP_FAIL"

export const USER_LOGIN_REQUEST="USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS="USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED="USER_LOGIN_FAILED";

// const FETCH_PRODUCTS_SUCCESS="FETCH_PRODUCTS_SUCCESS";
// const FETCH_PRODUCTS_FAILED="FETCH_PRODUCTS_FAILED";

export const CONTACT_MESSAGE_SENT_REQUEST="CONTACT_MESSAGE_SENT_REQUEST";
export const CONTACT_MESSAGE_SENT_SUCCESS="CONTACT_MESSAGE_SENT_SUCCESS";
export const CONTACT_MESSAGE_SENT_FAILED="CONTACT_MESSAGE_SENT_FAILED";

export const USER_UPDATED_REQUEST="USER_UPDATED_REQUEST";
export const USER_UPDATED_SUCCESS="USER_UPDATED_SUCCESS";
export const USER_UPDATED_FAIL="USER_UPDATED_FAIL";

export const LOGOUT_REQUEST="LOGOUT_REQUEST";
export const LOGOUT_SUCCESS="LOGOUT_SUCCESS";
export const LOGOUT_FAIL="LOGOUT_FAIL";

export const FORGETPASSWORD_REQUEST="FORGETPASSWORD_REQUEST";
export const FORGETPASSWORD_SUCCESS="FORGETPASSWORD_SUCCESS";
export const FORGETPASSWORD_FAIL="FORGETPASSWORD_FAIL";

export const RESET_PASSWORD_REQUEST="RESET_PASSWORD_REQUEST"
export const RESET_PASSWORD_SUCCESS="RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAIL="RESET_PASSWORD_FAIL";

export const CHANGE_PASSWORD_REQUEST="CHANGE_PASSWORD_REQUEST";
export const CHANGE_PASSWORD_SUCCESS="CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAIL="CHANGE_PASSWORD_FAIL";

export const USER_AUTHENTICATION_VERIFICATION_REQUEST="USER_AUTHENTICATION_VERIFICATION_REQUEST"
export const USER_AUTHENTICATION_VERIFICATION_SUCCESS="USER_AUTHENTICATION_VERIFICATION_SUCCESS";
export const USER_AUTHENTICATION_VERIFICATION_FAIL="USER_AUTHENTICATION_VERIFICATION_FAIL";


export const USER_ORDERS_REQUEST="USER_ORDERS_REQUEST";
export const USER_ORDERS_SUCCESS="USER_ORDERS_SUCCESS";
export const USER_ORDERS_FAIL="USER_ORDERS_FAIL";


export const userRegistrationAction=(user,navigate)=>async(dispatch)=>{
    try {
        dispatch({type:USER_REGISTER_REQUEST})
        const response=await axios.post("/api/register",user);
        console.log("Response",response);
        if(response.data.success){
            dispatch({type:USER_REGISTER_SUCCESS,payload:user});
            // toast.success("OTP Sent Successfully for Verification")
            navigate("/verification");
        }
    } catch (error) {
        console.log(error.response.data.error);
        dispatch({type:USER_REGISTER_FAILED,payload:error.response.data.error[0]})
        // toast.error("Failed to Register User");
    }
}

export const userLogInAction=(user,navigate)=>async(dispatch)=>{
    try {
        dispatch({type:USER_LOGIN_REQUEST})
        const response=await axios.post("/api/login",user);
        // console.log(response.data.logIn);
        if(response.data.success){
            dispatch({type:USER_LOGIN_SUCCESS,payload:response.data.logIn});
            navigate("/");
        }
    } catch (error) {
        dispatch({type:USER_LOGIN_FAILED,payload:error.response.data.error})
    }
}




export const contactHere=(user)=>async(dispatch)=>{
    try {
        dispatch({type:CONTACT_MESSAGE_SENT_REQUEST})
        const response=await axios.post("/api/contact",user);
        dispatch({type:CONTACT_MESSAGE_SENT_SUCCESS,payload:response})
        // toast("Message Sent")
    } catch (error) {
        // console.log(error);
        dispatch({type:CONTACT_MESSAGE_SENT_FAILED,payload:error.response.data.error});
        // toast("Failed to Sent Message");
    }
}


export const updateUserProfile=(user)=>async(dispatch)=>{
    try {
        dispatch({type:USER_UPDATED_REQUEST})
        const response=await axios.put("/api/updateProfile",{user});
        // console.log(response);
        if(response.data.success){
            dispatch({type:USER_UPDATED_SUCCESS,payload:response});
            // toast.success("Profile Updated..")
        }
    } catch (error) {
        // console.log(error);
        dispatch({type:USER_UPDATED_FAIL,payload:error.response.data.error})
    }
}



export const changePassword = (passwords) => async (dispatch) => {
    try {
        dispatch({type:CHANGE_PASSWORD_REQUEST})
      const response = await axios.put("/api/changePassword", {
        oldPassword: passwords.oldPassword,
        newPassword: passwords.newPassword,
        confirmPassword: passwords.confirmPassword
      });
      dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: CHANGE_PASSWORD_FAIL, payload:error.response.data.error });
    }
  };
  


export const logout=(navigate)=>async(dispatch)=>{
    try {
        dispatch({type:LOGOUT_REQUEST})
        const response=await axios.get("/api/logout");
        if(response.data.success){
            dispatch({type:LOGOUT_SUCCESS,payload:response})
            toast.success("Log Out Successfully",{
                position:"bottom-right"
            })
            navigate("/")
        }
    } catch (error) {
        // console.log(error);
        dispatch({type:LOGOUT_FAIL,payload:error.response.data.error});
    }
}



export const forgetPassword=(email)=>async(dispatch)=>{
    // console.log("Welcome");
    try {
        dispatch({type:FORGETPASSWORD_REQUEST})
        // console.log("heello",email);
        const response=await axios.put(`/api/forget-password`,{email});
        // console.log(response.data.user.resetPasswordToken);
        dispatch({type:FORGETPASSWORD_SUCCESS,payload:response.data})
        // toast.success("Link Sent to Your Mail..");
        // navigate("/reset-password");
    } catch (error) {
        // console.log(error);
        dispatch({type:FORGETPASSWORD_FAIL,payload:error.response.data.error})
    }
}

export const resetPassword=(user,token)=>async(dispatch)=>{
    try {
        dispatch({type:RESET_PASSWORD_REQUEST})
        const response=await axios.post(`/api/reset-password?token=${token}`,{newPassword:user.newPassword,confirmPassword:user.confirmPassword})
        // console.log(response);
        dispatch({type:RESET_PASSWORD_SUCCESS,payload:response})
        // toast.success("Password Updated..")
    } catch (error) {
        // console.log(error);
        dispatch({type:RESET_PASSWORD_FAIL,payload:error.response.data.error})
    }
}


export const userAuth=()=>async(dispatch)=>{
    try {
        dispatch({type:USER_AUTHENTICATION_VERIFICATION_REQUEST})
        const response=await axios.get("/api/verifyingUser");
        // console.log("LOgg",response.data.user);
        dispatch({type:USER_AUTHENTICATION_VERIFICATION_SUCCESS,payload:response.data.user})
    } catch (error) {
        // console.log(error);
        dispatch({type:USER_AUTHENTICATION_VERIFICATION_FAIL,payload:error.response.data.error})
    }
}


export const verifyOtp=(data,navigate)=>async(dispatch)=>{
    // console.log(data, typeof(data.otp));
    const otp=parseInt(data.otp);
    try {
        dispatch({type:VERIFY_OTP_REQUEST});
        const response=await axios.post("/api/verify-account",{otp,email:data.email});
        // console.log(response);
        if(response.data.success){
            dispatch({type:VERIFY_OTP_SUCCESS,payload:response.data})
            toast.success(response.data.message)
            navigate("/signin")
        }
    } catch (error) {
        console.log(error);
        dispatch({type:VERIFY_OTP_FAIL,payload:error.response.error})
    }
}



export const getSingleOrder=()=>async(dispatch)=>{
    try {
        dispatch({type:USER_ORDERS_REQUEST})
        const response=await axios.get("/api/getAllOrdersUser")
        // console.log(response);
        if(response.data.success){
            dispatch({type:USER_ORDERS_SUCCESS,payload:response.data.orders});
        }
    } catch (error) {
        // console.log(error);
        dispatch({type:USER_ORDERS_FAIL,error:error.response.data.error})
    }
}