// import { toast } from "sonner";
import { toast } from "react-toastify";
import {
  ADD_BLOG_FAIL,
  ADD_BLOG_REQUEST,
  ADD_BLOG_SUCCESS,
  ADD_COUPON_FAIL,
  ADD_COUPON_REQUEST,
  ADD_COUPON_SUCCESS,
  ADD_OFFER_FAIL,
  ADD_OFFER_REQUEST,
  ADD_OFFER_SUCCESS,
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADMIN_AUTHENTICATION_VERIFICATION_FAIL,
  ADMIN_AUTHENTICATION_VERIFICATION_REQUEST,
  ADMIN_AUTHENTICATION_VERIFICATION_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT_FAIL,
  ADMIN_LOGOUT_REQUEST,
  ADMIN_LOGOUT_SUCCESS,
  CHANGE_ORDER_STATUS_FAIL,
  CHANGE_ORDER_STATUS_REQUEST,
  CHANGE_ORDER_STATUS_SUCCESS,
  DELETE_BLOG_FAIL,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  DELETE_COUPON_FAIL,
  DELETE_COUPON_REQUEST,
  DELETE_COUPON_SUCCESS,
  DELETE_OFFER_FAIL,
  DELETE_OFFER_REQUEST,
  DELETE_OFFER_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FETCH_ALL_ORDERS_FAILED,
  FETCH_ALL_ORDERS_REQUEST,
  FETCH_ALL_ORDERS_SUCCESS,
  FETCH_ALL_USERS_FAILED,
  FETCH_ALL_USERS_REQUEST,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  GET_ALL_BLOG_FAIL,
  GET_ALL_BLOG_REQUEST,
  GET_ALL_BLOG_SUCCESS,
  GET_ALL_COUPONS_FAIL,
  GET_ALL_COUPONS_REQUEST,
  GET_ALL_COUPONS_SUCCESS,
  GET_ALL_OFFER_FAIL,
  GET_ALL_OFFER_REQUEST,
  GET_ALL_OFFER_SUCCESS,
  REQUEST_TO_LOGIN_ADMIN,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "../action/adminAction";
import {
  APPLY_COUPON_FAIL,
  APPLY_COUPON_REQUEST,
  APPLY_COUPON_SUCCESS,
} from "../action/orderAction";

const intinalState = {
  admin: null,
  isLoading: false,
  success: "",
  error: "",
  newProduct: {},
  products: [],
  users: [],
  orders: [],
  allCoupons: [],
  discountCoupon: 0,
  blogs: [],
  offers: [],
};

export const adminFeatures = (state = intinalState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case REQUEST_TO_LOGIN_ADMIN:
      return { ...state, isLoading: true };
    case ADMIN_LOGIN_SUCCESS:
      toast.success("Logged In Successfully", {
        position: "bottom-right",
      });
      return { ...state, isLoading: false };
    case ADMIN_LOGIN_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: true, error: action.payload };

    case ADMIN_AUTHENTICATION_VERIFICATION_REQUEST:
      return { ...state, isLoading: true };
    case ADMIN_AUTHENTICATION_VERIFICATION_SUCCESS:
      return { ...state, isLoading: false, admin: action.payload };
    case ADMIN_AUTHENTICATION_VERIFICATION_FAIL:
      // toast.error(action.payload,{
      //     position:"bottom-right"
      // })
      return { ...state, isLoading: true, error: action.payload };

    case ADMIN_LOGOUT_REQUEST:
      return { ...state, isLoading: true };
    case ADMIN_LOGOUT_SUCCESS:
      toast.success("Log Out Successfully", {
        position: "bottom-right",
      });
      return { ...state, isLoading: false, admin: null };
    case ADMIN_LOGOUT_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: true };

    case ADD_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case ADD_PRODUCT_SUCCESS:
      toast.success("Product Added", {
        position: "bottom-right",
      });
      return { ...state, newProduct: action.payload, isLoading: false };
    case ADD_PRODUCT_FAILED:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, error: action.payload, isLoading: true };

    case UPDATE_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case UPDATE_PRODUCT_SUCCESS:
      toast.success("Product Updated", {
        position: "bottom-right",
      });
      return { ...state, isLoading: false };
    case UPDATE_PRODUCT_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: true };

    case DELETE_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_PRODUCT_SUCCESS:
      toast.success("Product Deleted", {
        position: "bottom-right",
      });
      return { ...state, isLoading: false };
    case DELETE_PRODUCT_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: true };

    case FETCH_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, isLoading: false };
    case FETCH_PRODUCTS_FAILED:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, error: action.payload, isLoading: true };

    case FETCH_ALL_USERS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_ALL_USERS_SUCCESS:
      return { ...state, users: action.payload, isLoading: false };
    case FETCH_ALL_USERS_FAILED:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, error: action.payload, isLoading: true };

    case FETCH_ALL_ORDERS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_ALL_ORDERS_SUCCESS:
      return { ...state, orders: action.payload, isLoading: false };
    case FETCH_ALL_ORDERS_FAILED:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, error: action.payload, isLoading: true };

    case CHANGE_ORDER_STATUS_REQUEST:
      return { ...state, isLoading: true };
    case CHANGE_ORDER_STATUS_SUCCESS:
      toast.success("Please Refresh to see changes", {
        position: "bottom-right",
      });
      return { ...state, isLoading: false };
    case CHANGE_ORDER_STATUS_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: true };

    case GET_ALL_COUPONS_REQUEST:
      return { ...state, isLoading: true };
    case GET_ALL_COUPONS_SUCCESS:
      return { ...state, isLoading: false, allCoupons: action.payload };
    case GET_ALL_COUPONS_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: true, error: action.payload };

    case APPLY_COUPON_REQUEST:
      return { ...state, isLoading: true };
    case APPLY_COUPON_SUCCESS:
      toast.success("Coupon Applied", {
        position: "bottom-right",
      });
      return {
        ...state,
        isLoading: false,
        discountCoupon: action.payload,
        success: "Coupon Applied",
      };
    case APPLY_COUPON_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: true, error: action.payload };

    case ADD_COUPON_REQUEST:
      return { ...state, isLoading: true };
    case ADD_COUPON_SUCCESS:
      toast.success("Coupon Created Successfully", {
        position: "bottom-right",
      });
      return { ...state, isLoading: false };
    case ADD_COUPON_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: true };

    case DELETE_COUPON_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_COUPON_SUCCESS:
      toast.success("Coupon Deleted", {
        position: "bottom-right",
      });
      return { ...state, isLoading: false };
    case DELETE_COUPON_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: true };
    case GET_ALL_BLOG_REQUEST:
      return { ...state, isLoading: true };
    case GET_ALL_BLOG_SUCCESS:
      toast.success("Blogs Fetched", {
        position: "bottom-right",
      });
      return {
        ...state,
        isLoading: false,
        blogs: action.payload,
        success: "Blogs Fetched",
      };

    case GET_ALL_BLOG_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ADD_BLOG_REQUEST:
      return { ...state, isLoading: true };
    case ADD_BLOG_SUCCESS:
      const newBlog = action.payload.blogs;
      toast.success("Blog Created", {
        position: "bottom-right",
      });
      return {
        ...state,
        isLoading: false,
        blogs: [...state.blogs, newBlog],
        success: "Blog Created",
      };

    case ADD_BLOG_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: false, error: action.payload };

    case DELETE_BLOG_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_BLOG_SUCCESS:
      toast.success("Blog Deleted", {
        position: "bottom-right",
      });
      return { ...state, isLoading: false, blogs: action.payload };

    case DELETE_BLOG_FAIL:
      toast.error(action.payload, {
        position: "bottom-right",
      });
      return { ...state, isLoading: false, error };

    case GET_ALL_OFFER_REQUEST:
      return { ...state, isLoading: true };
    case GET_ALL_OFFER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        offers: action.payload,
        success: "Offers Fetched",
      };

    case GET_ALL_OFFER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ADD_OFFER_REQUEST:
      return { ...state, isLoading: true };
    case ADD_OFFER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        offers: action.payload,
        success: "Offer Created",
      };

    case ADD_OFFER_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    case DELETE_OFFER_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_OFFER_SUCCESS:
      return { ...state, isLoading: false, offers: action.payload };

    case DELETE_OFFER_FAIL:
      return { ...state, isLoading: false, error };

    default:
      return state;
  }
};
