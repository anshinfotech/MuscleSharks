// import toast from 'react-hot-toast';
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  CONTACT_MESSAGE_SENT_FAILED,
  CONTACT_MESSAGE_SENT_REQUEST,
  CONTACT_MESSAGE_SENT_SUCCESS,
  FORGETPASSWORD_FAIL,
  FORGETPASSWORD_REQUEST,
  FORGETPASSWORD_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  USER_AUTHENTICATION_VERIFICATION_FAIL,
  USER_AUTHENTICATION_VERIFICATION_REQUEST,
  USER_AUTHENTICATION_VERIFICATION_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_ORDERS_FAIL,
  USER_ORDERS_REQUEST,
  USER_ORDERS_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATED_FAIL,
  USER_UPDATED_REQUEST,
  USER_UPDATED_SUCCESS,
} from "../action/userAction";

import {
  REQUEST_ORDER_PLACE,
  SUCCESS_ORDER_PLACED,
  FAIL_ORDER_PLACED,
} from "./../action/orderAction";

const initState = {
  user: null,
  order: null,
  isLoading: false,
  error: "",
  success: "",
  reset: "",
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, isLoading: true };
    case USER_REGISTER_SUCCESS:
      toast.success("OTP Sent to your mail successfully ...", {
        position: "bottom-right",
      });
      return {
        ...state,
        success: "OTP Sent to your mail successfully ...",
        isLoading: false,
      };
    case USER_REGISTER_FAILED:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, error: action.payload, isLoading: false };

    case USER_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case USER_LOGIN_SUCCESS:
      toast.success("Logged In Successfully", {
        position: "bottom-right",
      });
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        success: "Logged In",
      };
    case USER_LOGIN_FAILED:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, user: null, error: action.payload, isLoading: true };

    case CONTACT_MESSAGE_SENT_REQUEST:
      return { ...state, isLoading: true };
    case CONTACT_MESSAGE_SENT_SUCCESS:
      toast.success("Message Sent", {
        position: "bottom-right",
      });
      return { ...state, isLoading: false, success: "Message Sent" };
    case CONTACT_MESSAGE_SENT_FAILED:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, error: action.payload, isLoading: true };

    case CHANGE_PASSWORD_REQUEST:
      return { ...state, isLoading: true };
    case CHANGE_PASSWORD_SUCCESS:
      toast.success("Password Updated", {
        position: "bottom-right",
      });
      return { ...state, isLoading: false, success: "Password Updated" };
    case CHANGE_PASSWORD_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: true, error: action.payload };

    case LOGOUT_REQUEST:
      return { ...state, isLoading: true };
    case LOGOUT_SUCCESS:
      return { ...initState, isLoading: false, success: "Logout Successfully" };
    case LOGOUT_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, error: action.payload, isLoading: true };

    case USER_AUTHENTICATION_VERIFICATION_REQUEST:
      return { ...state, isLoading: true };
    case USER_AUTHENTICATION_VERIFICATION_SUCCESS:
      return { ...state, user: action.payload, isLoading: false };
    case USER_AUTHENTICATION_VERIFICATION_FAIL:
      return { ...state, error: action.payload, isLoading: true };

    case FORGETPASSWORD_REQUEST:
      return { ...state, isLoading: true };
    case FORGETPASSWORD_SUCCESS:
      toast.success("Link Sent to Your Mail..", {
        position: "bottom-right",
      });
      return {
        ...state,
        reset: action.payload,
        isLoading: false,
        success: "Link Sent to Your Mail..",
      };
    case FORGETPASSWORD_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, error: action.payload, isLoading: true };

    case RESET_PASSWORD_REQUEST:
      return { ...state, isLoading: true };
    case RESET_PASSWORD_SUCCESS:
      toast.success("Password Updated", {
        position: "bottom-right",
      });
      return { ...state, isLoading: false, success: "Password Updated" };
    case RESET_PASSWORD_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: true, error: "Failed to Update Password" };

    case USER_UPDATED_REQUEST:
      return { ...state, isLoading: true };
    case USER_UPDATED_SUCCESS:
      toast.success("Profile Updated", {
        position: "bottom-right",
      });
      return { ...state, isLoading: false, success: "Profile Updated" };
    case USER_UPDATED_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: true, error: action.payload };

    case REQUEST_ORDER_PLACE:
      return { ...state, isLoading: true };
    case SUCCESS_ORDER_PLACED:
      Swal.fire({
        icon: "success",
        title: "Order Placed",
        text: "Order Placed Successfully, Pay by Cash at the time of Delivery",
        timer:"3000",
        showConfirmButton: false,
      });
      return { ...state, isLoading: false };
    case FAIL_ORDER_PLACED:
      return { ...state, isLoading: false };

    case USER_ORDERS_REQUEST:
      return { ...state, isLoading: true };
    case USER_ORDERS_SUCCESS:
      toast.success("Order Success", {
        position: "bottom-right",
      });
      return { ...state, isLoading: false, order: action.payload };
    case USER_ORDERS_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: true, error: action.payload };
    default:
      return state;
  }
};
