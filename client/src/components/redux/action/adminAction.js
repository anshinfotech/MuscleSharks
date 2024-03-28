import axios from "axios";
// import { toast } from "sonner";
import { toast } from 'react-toastify';

export const REQUEST_TO_REGISTER_ADMIN="REQUEST_TO_REGISTER_ADMIN";
export const ADMIN_REGISTER_SUCCESS="ADMIN_REGISTER_SUCCESS";
export const ADMIN_REGISTER_FAIL="ADMIN_REGISTER_FAIL";


export const REQUEST_TO_LOGIN_ADMIN="REQUEST_TO_LOGIN_ADMIN";
export const ADMIN_LOGIN_SUCCESS="ADMIN_LOGIN_SUCCESS";
export const ADMIN_LOGIN_FAIL="ADMIN_LOGIN_FAIL";


export const registerAdmin=(user)=>async(dispatch)=>{
    console.log("ac",user);
    try {
        dispatch({type:REQUEST_TO_REGISTER_ADMIN})
        const response=await axios.post("/api/admin/register",{name:user.name,email:user.email,password:user.password})
        if(response.data.success){
            dispatch({type:ADMIN_REGISTER_SUCCESS,payload:response})
        }
        // console.log(response);
    } catch (error) {
        console.log(error);
        dispatch({type:ADMIN_REGISTER_FAIL,payload:error.response.data.error})
    }
}

export const loginAdmin=(admin,navigate)=> async(dispatch)=>{
    // console.log(admin);
    try {
        dispatch({type:REQUEST_TO_LOGIN_ADMIN})
        const response=await axios.post("/api/admin/login",admin);
        // console.log(response.data);
        if(response.data.success){
            dispatch(verifyAdmin())
            dispatch({type:ADMIN_LOGIN_SUCCESS,payload:response.data.admin})
            toast.success("Logged In successfully")
            navigate("/admin")
        }
    } catch (error) {
        console.log(error);
        dispatch({type:ADMIN_LOGIN_FAIL,payload:error.response.data.error});
    }
}


export const ADD_PRODUCT_REQUEST="ADD_PRODUCT_REQUEST";
export const ADD_PRODUCT_SUCCESS="ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILED="ADD_PRODUCT_FAILED";

export const FETCH_PRODUCTS_REQUEST="FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS="FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILED="FETCH_PRODUCTS_FAILED";

export const FETCH_ALL_USERS_REQUEST="FETCH_ALL_USERS_REQUEST";
export const FETCH_ALL_USERS_SUCCESS="FETCH_ALL_USERS_SUCCESS";
export const FETCH_ALL_USERS_FAILED="FETCH_ALL_USERS_FAILED";

export const FETCH_ALL_ORDERS_REQUEST="FETCH_ALL_ORDERS_REQUEST";
export const FETCH_ALL_ORDERS_SUCCESS="FETCH_ALL_ORDERS_SUCCESS";
export const FETCH_ALL_ORDERS_FAILED="FETCH_ALL_ORDERS_FAILED";

export const ADMIN_AUTHENTICATION_VERIFICATION_REQUEST="ADMIN_AUTHENTICATION_VERIFICATION_REQUEST";
export const ADMIN_AUTHENTICATION_VERIFICATION_SUCCESS="ADMIN_AUTHENTICATION_VERIFICATION_SUCCESS";
export const ADMIN_AUTHENTICATION_VERIFICATION_FAIL="ADMIN_AUTHENTICATION_VERIFICATION_FAIL";

export const ADMIN_LOGOUT_REQUEST="ADMIN_LOGOUT_REQUEST";
export const ADMIN_LOGOUT_SUCCESS="ADMIN_LOGOUT_SUCCESS";
export const ADMIN_LOGOUT_FAIL="ADMIN_LOGOUT_FAIL";

export const CHANGE_ORDER_STATUS_REQUEST="CHANGE_ORDER_STATUS_REQUEST";
export const CHANGE_ORDER_STATUS_SUCCESS="CHANGE_ORDER_STATUS_SUCCESS";
export const CHANGE_ORDER_STATUS_FAIL="CHANGE_ORDER_STATUS_FAIL";


export const UPDATE_PRODUCT_REQUEST="UPDATE_PRODUCT_REQUEST";
export const UPDATE_PRODUCT_SUCCESS="UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_FAIL="UPDATE_PRODUCT_FAIL";

export const DELETE_PRODUCT_REQUEST="DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCT_SUCCESS="DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAIL="DELETE_PRODUCT_FAIL";

export const DELETE_ORDER_REQUEST="DELETE_ORDER_REQUEST";
export const DELETE_ORDER_SUCCESS="DELETE_ORDER_SUCCESS";
export const DELETE_ORDER_FAIL="DELETE_ORDER_FAIL";


export const GET_SINGLE_ORDER_REQUEST="GET_SINGLE_ORDER_REQUEST";
export const GET_SINGLE_ORDER_SUCCESS="GET_SINGLE_ORDER_SUCCESS";
export const GET_SINGLE_ORDER_FAIL="GET_SINGLE_ORDER_FAIL";


export const DELETE_USER_REQUEST="DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS="DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL="DELETE_USER_FAIL";



export const GET_ALL_COUPONS_REQUEST="GET_ALL_COUPONS_REQUEST";
export const GET_ALL_COUPONS_SUCCESS="GET_ALL_COUPONS_SUCCESS";
export const GET_ALL_COUPONS_FAIL="GET_ALL_COUPONS_FAIL";


export const DELETE_COUPON_REQUEST="DELETE_COUPON_REQUEST";
export const DELETE_COUPON_SUCCESS="DELETE_COUPON_SUCCESS";
export const DELETE_COUPON_FAIL="DELETE_COUPON_FAIL";


export const ADD_COUPON_REQUEST="ADD_COUPON_REQUEST";
export const ADD_COUPON_SUCCESS="ADD_COUPON_SUCCESS";
export const ADD_COUPON_FAIL="ADD_COUPON_FAIL";


export const addProduct=(product)=>async(dispatch)=>{
    try {
        dispatch({type:ADD_PRODUCT_REQUEST});
        const response=await axios.post("/api/addProduct",product);
        if(response.data.success){
            const response=await axios.get("/api/getAllProducts");
            if(response.data.success){
                dispatch({type:FETCH_PRODUCTS_SUCCESS,payload:response.data.Products});
            }
            dispatch({type:ADD_PRODUCT_SUCCESS,payload:response.data});
        }
    } catch (error) {
        console.log(error);
        dispatch({type:ADD_PRODUCT_FAILED,payload:error.response.data.error});
    }
}

export const fetchProducts=()=>async(dispatch)=>{
    try {
        dispatch({type:FETCH_PRODUCTS_REQUEST});
        const response=await axios.get("/api/getAllProducts");
        if(response.data.success){
            dispatch({type:FETCH_PRODUCTS_SUCCESS,payload:response.data.Products});
        }
    } catch (error) {
        console.log(error);
        dispatch({type:FETCH_PRODUCTS_FAILED,payload:error.response.data.error})
    }
}





export const getAllUsers=()=>async(dispatch)=>{
    try {
        dispatch({type:FETCH_ALL_USERS_REQUEST})
        const response=await axios.get("/api/allUsers");
        if(response.data.success){
            dispatch({type:FETCH_ALL_USERS_SUCCESS,payload:response.data.Users})
        }
    } catch (error) {
        console.log(error);
        dispatch({type:FETCH_ALL_USERS_FAILED,payload:error.response.data.error});
    }
}


export const getAllOrders=()=>async(dispatch)=>{
    try {
        dispatch({type:FETCH_ALL_ORDERS_REQUEST});
        const response=await axios.get("/api/allOrders");
        
        dispatch({type:FETCH_ALL_ORDERS_SUCCESS,payload:response.data.orders})
    } catch (error) {
        console.log(error);
        dispatch({type:FETCH_ALL_ORDERS_FAILED,payload:error.response.data.error})
    }
}





export const verifyAdmin=()=>async(dispatch)=>{
    try {
        dispatch({type:ADMIN_AUTHENTICATION_VERIFICATION_REQUEST});
        const response=await axios.get("/api/adminAuth");
        // console.log(response);
        if(response.data.success){
            dispatch({type:ADMIN_AUTHENTICATION_VERIFICATION_SUCCESS,payload:response.data.admin});
        }
    } catch (error) {
        console.log(error);
        dispatch({type:ADMIN_AUTHENTICATION_VERIFICATION_FAIL,payload:error.response.data.error})
    }
}


export const logoutAdmin=()=>async(dispatch)=>{
    try {
        dispatch({type:ADMIN_LOGOUT_REQUEST})
        const response=await axios.get("/api/admin/logout");
        if(response.data.success){
            dispatch({type:ADMIN_LOGOUT_SUCCESS,payload:response});
            // toast("Logout Successfully...")
        }
    } catch (error) {
        console.log(error);
        dispatch({type:ADMIN_LOGOUT_FAIL,payload:error.response.data.error})
    }
}


export const updatedProduct=(product,id)=>async(dispatch)=>{
    try {
        dispatch({type:UPDATE_PRODUCT_REQUEST});
        const response=await axios.put(`/api/updateProduct/${id}`,product)
        if(response.data.success){
            const response=await axios.get("/api/getAllProducts");
            if(response.data.success){
                dispatch({type:FETCH_PRODUCTS_SUCCESS,payload:response.data.Products});
            }
            dispatch({type:UPDATE_PRODUCT_SUCCESS,payload:response});
            // toast.success("Product Updated")
        }
    } catch (error) {
        console.log(error);
        dispatch({type:UPDATE_PRODUCT_FAIL,payload:error.response.data.error})
    }
}


export const deleteProduct=(id)=>async(dispatch)=>{
    try {
        dispatch({type:DELETE_PRODUCT_REQUEST});
        const response=await axios.delete(`/api/deleteProduct/${id}`);
        if(response.data.success){
            const response=await axios.get("/api/getAllProducts");
            if(response.data.success){
                dispatch({type:FETCH_PRODUCTS_SUCCESS,payload:response.data.Products});
            }
            // toast.success("Product Deleted ")
            dispatch({type:DELETE_PRODUCT_SUCCESS,payload:response});
        }
    } catch (error) {
        console.log(error);
        dispatch({type:DELETE_PRODUCT_FAIL,payload:error.response.data.error})
    }
}





export const changeOrderStatus=(orderStatus,id)=>async(dispatch)=>{
    try {
        console.log("Details Order",id._id);
        dispatch({type:CHANGE_ORDER_STATUS_REQUEST});
        const response=await axios.post(`/api/order-status/${id._id}`,{orderStatus});
        // console.log(response);
        if(response.data.success){
            dispatch({type:CHANGE_ORDER_STATUS_SUCCESS,payload:response})
            // toast.success("Updated Status")
        }
    } catch (error) {
        dispatch({type:CHANGE_ORDER_STATUS_FAIL,payload:error.response.data.error})
    }
}

export const deleteOrder=(id)=>async(dispatch)=>{
    try {
        dispatch({type:DELETE_ORDER_REQUEST});
        const response=await axios.delete(`/api/delete-order/${id}`)
        if(response.data.success){
            dispatch({type:DELETE_ORDER_SUCCESS});
            // toast.success(response.data.message)
        }
    } catch (error) {
        console.log(error);
        dispatch({type:DELETE_ORDER_FAIL,payload:error.response.data.error})
    }
}


export const deleteUser=(id)=>async(dispatch)=>{
    try {
        dispatch({type:DELETE_USER_REQUEST});
        // console.log("DEL",id);
        const response=await axios.delete(`/api/delete-user/${id}`);
        if(response.data.success){
            const response=await axios.get("/api/allUsers");
            if(response.data.success){
                dispatch({type:FETCH_ALL_USERS_SUCCESS,payload:response.data.Users})
                // toast("Users Fetched Successfully")
            }
            // toast.success("User Deleted Successfully");
            dispatch({type:DELETE_USER_SUCCESS,payload:response})
        }
    } catch (error) {
        console.log(error);
        dispatch({type:DELETE_USER_FAIL,payload:error.response.data.error})
    }
}


// Offers

export const GET_ALL_OFFER_REQUEST="GET_ALL_OFFER_REQUEST";
export const GET_ALL_OFFER_SUCCESS="GET_ALL_OFFER_SUCCESS";
export const GET_ALL_OFFER_FAIL="GET_ALL_OFFER_FAIL";


export const DELETE_OFFER_REQUEST="DELETE_OFFER_REQUEST";
export const DELETE_OFFER_SUCCESS="DELETE_OFFER_SUCCESS";
export const DELETE_OFFER_FAIL="DELETE_OFFER_FAIL";


export const ADD_OFFER_REQUEST="ADD_OFFER_REQUEST";
export const ADD_OFFER_SUCCESS="ADD_OFFER_SUCCESS";
export const ADD_OFFER_FAIL="ADD_OFFER_FAIL";

export const addOffer=(offer)=>async(dispatch)=>{
    try {
        dispatch({type:ADD_OFFER_REQUEST})
        const response=await axios.post(`/api/make-offer`,offer);
        if(response.data.success){
            const response=await axios.get(`/api/allOffers`);
            if(response.data.success){
                dispatch({type:GET_ALL_OFFER_SUCCESS,payload:response.data.offers});
            }
            dispatch({type:ADD_OFFER_SUCCESS,payload:response.data});
            // toast.success("Coupon Created..");
        }
    } catch (error) {
        console.log(error);
        dispatch({type:ADD_OFFER_FAIL,payload:error.response.data.error})
    }
}



export const deleteOffer=(id)=>async(dispatch)=>{
    try {
        dispatch({type:DELETE_OFFER_REQUEST});
        const response=await axios.delete(`/api/delete-offer/${id}`);
        if(response.data.success){
            const response=await axios.get(`/api/allOffers`);
            if(response.data.success){
                dispatch({type:GET_ALL_OFFER_SUCCESS,payload:response.data.offers});
            }
            dispatch({type:DELETE_OFFER_SUCCESS,payload:response.data})
            // toast.success("Coupon Deleted..")
        }
    } catch (error) {
        console.log(error);
        dispatch({type:DELETE_OFFER_FAIL,payload:error.response.data.error})
    }
}




export const getAllOffers=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_ALL_OFFER_REQUEST});
        const response=await axios.get(`/api/allOffers`);
        if(response.data.success){
            dispatch({type:GET_ALL_OFFER_SUCCESS,payload:response.data.offers});
        }
    } catch (error) {
        console.log(error);
        dispatch({type:GET_ALL_OFFER_FAIL,payload:error.response.data.error})
    }
}


export const addCoupon=(coupon)=>async(dispatch)=>{
    try {
        dispatch({type:ADD_COUPON_REQUEST})
        const response=await axios.post(`/api/make-coupon`,coupon);
        if(response.data.success){
            const response=await axios.get(`/api/allCoupons`);
            if(response.data.success){
                dispatch({type:GET_ALL_COUPONS_SUCCESS,payload:response.data.coupons});
            }
            dispatch({type:ADD_COUPON_SUCCESS,payload:response.data});
            // toast.success("Coupon Created..");
        }
    } catch (error) {
        console.log(error);
        dispatch({type:ADD_COUPON_FAIL,payload:error.response.data.error})
    }
}



export const deleteCoupon=(id)=>async(dispatch)=>{
    try {
        dispatch({type:DELETE_COUPON_REQUEST});
        const response=await axios.delete(`/api/delete-coupon/${id}`);
        if(response.data.success){
            const response=await axios.get(`/api/allCoupons`);
            if(response.data.success){
                dispatch({type:GET_ALL_COUPONS_SUCCESS,payload:response.data.coupons});
            }
            dispatch({type:DELETE_COUPON_SUCCESS,payload:response.data})
            // toast.success("Coupon Deleted..")
        }
    } catch (error) {
        console.log(error);
        dispatch({type:DELETE_COUPON_FAIL,payload:error.response.data.error})
    }
}




export const getAllCoupons=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_ALL_COUPONS_REQUEST});
        const response=await axios.get(`/api/allCoupons`);
        if(response.data.success){
            dispatch({type:GET_ALL_COUPONS_SUCCESS,payload:response.data.coupons});
        }
    } catch (error) {
        console.log(error);
        dispatch({type:GET_ALL_COUPONS_FAIL,payload:error.response.data.error})
    }
}



export const GET_ALL_BLOG_REQUEST="GET_ALL_BLOG_REQUEST";
export const GET_ALL_BLOG_SUCCESS="GET_ALL_BLOG_SUCCESS";
export const GET_ALL_BLOG_FAIL="GET_ALL_BLOG_FAIL";


export const DELETE_BLOG_REQUEST="DELETE_BLOG_REQUEST";
export const DELETE_BLOG_SUCCESS="DELETE_BLOG_SUCCESS";
export const DELETE_BLOG_FAIL="DELETE_BLOG_FAIL";


export const ADD_BLOG_REQUEST="ADD_BLOG_REQUEST";
export const ADD_BLOG_SUCCESS="ADD_BLOG_SUCCESS";
export const ADD_BLOG_FAIL="ADD_BLOG_FAIL";



export const fetchAllBlogs = ()=>async(dispatch)=>{
    try {
        dispatch({type:GET_ALL_BLOG_REQUEST})
        const response=await axios.get(`/api/admin/allblogs`);
        if(response){
            dispatch({type:GET_ALL_BLOG_SUCCESS, payload:response.data.blogs})
        }
        
    } catch (error) {
        console.log(error);
         dispatch({type:GET_ALL_BLOG_FAIL, payload:error.response.data.error})
    }
}


export const addBlog=(user)=>async(dispatch)=>{
    try {
        dispatch({type:ADD_BLOG_REQUEST})
        const response=await axios.post(`/api/admin/create-blog`,user);
        if(response.data.success){
            const response=await axios.get(`/api/admin/allblogs`);
            if(response.data.success){
                dispatch({type:GET_ALL_BLOG_SUCCESS,payload:response.data.blogs});
            }
            dispatch({type:ADD_BLOG_SUCCESS,payload:response.data});
            // toast.success("Coupon Created..");
        }
    } catch (error) {
        console.log(error);
        dispatch({type:ADD_BLOG_FAIL,payload:error.response.data.error})
    }
}



export const deleteBlog=(id)=>async(dispatch)=>{
    try {
        dispatch({type:DELETE_BLOG_REQUEST});
        const response=await axios.delete(`/api/admin/delete-blog/${id}`);
        if(response.data.success){
            const response=await axios.get(`/api/admin/allblogs`);
            if(response.data.success){
                dispatch({type:GET_ALL_BLOG_SUCCESS,payload:response.data.coupons});
            }
            dispatch({type:DELETE_BLOG_SUCCESS,payload:response.data})
            // toast.success("Coupon Deleted..")
        }
    } catch (error) {
        console.log(error);
        dispatch({type:DELETE_BLOG_FAIL,payload:error.response.data.error})
    }
}