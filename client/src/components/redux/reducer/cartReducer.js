import { toast } from "react-toastify";
// import toast from "react-hot-toast";
import {
  CLEAR_CART_ERROR,
  CLEAR_CART_SUCCESS,
  DELETE_FROM_CART_FAILED,
  DELETE_FROM_CART_REQUSET,
  DELETE_FROM_CART_SUCCESS,
  GET_CART_FAIL,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  PRODUCT_ADDED_TO_CART_FAILED,
  PRODUCT_ADDED_TO_CART_SUCCESS,
  UPDATE_CART_FAIL,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
} from "../action/cartAction";

const intialState = {
  items: [],
  // updatedItems:[],
  success: "",
  isLoading: false,
  error: "",
};

export const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case PRODUCT_ADDED_TO_CART_SUCCESS:
      toast.success("Item Added", {
        position: "bottom-right",
      });
      return {
        ...state,
        items: [...state.items, action.payload],
        success: "Product Added",
      };
    case PRODUCT_ADDED_TO_CART_FAILED:
      toast.error("Please Login first", {
        position: "bottom-right",
      });
      return { ...state, error: "Please Login first" };

    case GET_CART_REQUEST:
      return { ...state, isLoading: true };
    case GET_CART_SUCCESS:
      return { ...state, items: action.payload.products, isLoading: false };
    case GET_CART_FAIL:
      return { ...state, error: action.payload, isLoading: true };

    case DELETE_FROM_CART_REQUSET:
      return { ...state, isLoading: true };
    case DELETE_FROM_CART_SUCCESS:
      toast.success("Item Deleted", {
        position: "bottom-right",
      });
      return { ...state, isLoading: false };
    case DELETE_FROM_CART_FAILED:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: true };

    case UPDATE_CART_REQUEST:
      return { ...state, isLoading: true };
    case UPDATE_CART_SUCCESS:
      return { ...state, items: action.payload, isLoading: false };
    case UPDATE_CART_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, error: action.payload, isLoading: true };

    case CLEAR_CART_SUCCESS:
      return { ...state, success: "" };
    case CLEAR_CART_ERROR:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, error: "" };

    default:
      return state;
  }
};
