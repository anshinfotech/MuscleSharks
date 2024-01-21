import {toast} from "sonner"
import axios from "axios";

export const FETCH_PRODUCTS_REQUEST="FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS="FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILED="FETCH_PRODUCTS_FAILED";

export const GET_SINGLE_PRODUCT_REQUEST="GET_SINGLE_PRODUCT_REQUEST";
export const  GET_SINGLE_PRODUCT_SUCCESS="GET_SINGLE_PRODUCT_SUCCESS";
export const GET_SINGLE_PRODUCT_FAIL="GET_SINGLE_PRODUCT_FAIL"

export const REQUEST_TO_ADD_REVIEW="REQUEST_TO_ADD_REVIEW";
export const ADD_REVIEW_SUCCESS="ADD_REVIEW_SUCCESS";
export const ADD_REVIEW_FAIL="ADD_REVIEW_FAIL";


export const GET_REVIEWS_REQUEST="GET_REVIEWS_REQUEST";
export const GET_REVIEWS_SUCCESS="GET_REVIEWS_SUCCESS";
export const GET_REVIEWS_FAIL="GET_REVIEWS_FAIL";


export const GET_SORTED_REQUEST="GET_SORTED_REQUEST";
export const GET_SORTED_SUCCESS="GET_SORTED_SUCCESS";
export const GET_SORTED_FAIL="GET_SORTED_FAIL";


export const fetchProducts=()=>async(dispatch)=>{
    try {
        dispatch({type:FETCH_PRODUCTS_REQUEST})
        const response=await axios.get("/api/getAllProducts");
        // console.log("productss:--",response.data.Products);
        if(response.data.success){
            dispatch({type:FETCH_PRODUCTS_SUCCESS,payload:response.data.Products});
        }
        // toast("Fetch All Products Successfully")
    } catch (error) {
        console.log(error);
        dispatch({type:FETCH_PRODUCTS_FAILED,payload:error});
        toast("Failed to Fetch Products")
    }
}



export const getSingleProduct=(id,naviagte)=>async(dispatch)=>{
    // console.log('single product',id)
    try {
        dispatch({type:GET_SINGLE_PRODUCT_REQUEST});
        const response=await axios.get(`/api/getProduct/${id}`);
        // console.log(response.data.SingleProduct);
        if(response.data.success){
            dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:response.data.SingleProduct});
            localStorage.setItem("singleItem",response.data.SingleProduct._id);
            naviagte("/productDetails");
        }
    } catch (error) {
        console.log(' in single', error);
        dispatch({type:GET_SINGLE_PRODUCT_FAIL,payload:error});
    }
}



export const addReview=(id,review,rating)=>async(dispatch)=>{
    try {
        dispatch({type:REQUEST_TO_ADD_REVIEW});
        const response=await axios.post(`/api/review/${id}`,{comment:review,rating});
        // console.log(response);
        if(response.data.success){
            const response=await axios.get(`/api/getReview/${id}`)
            // console.log(response);
            if(response.data.success){
                dispatch({type:GET_REVIEWS_SUCCESS,payload:response});
            }
            dispatch({type:ADD_REVIEW_SUCCESS,payload:response});
            toast.success("Your review has been added");
        }
        // toast.error("Fails to add your review");
    } catch (error) {
        // console.log("revu",error);
        dispatch({type:ADD_REVIEW_FAIL,payload:error});
        toast.error("Review failed to add")
    }
}


export const getReviews=(id)=>async(dispatch)=>{
    try {
        dispatch({type:GET_REVIEWS_REQUEST});
        const response=await axios.get(`/api/getReview/${id}`)
        // console.log(response);
        if(response.data.success){
            dispatch({type:GET_REVIEWS_SUCCESS,payload:response});
        }
    } catch (error) {
        console.log(error);
        dispatch({type:GET_REVIEWS_FAIL,payload:error})
    }
}

export const fetchSortedProducts=(query)=>async(dispatch)=>{
    try {
        dispatch({type:GET_SORTED_REQUEST});
        console.log(query);
        const response=await axios.get(`/api/products/sort/${query}`);
        if(response.data.success){
            dispatch({type:GET_SORTED_SUCCESS,payload:response.data.sortedProducts})
        }
        console.log(response);
    } catch (error) {
        console.log(error);
        dispatch({type:GET_SORTED_FAIL,payload:error});
    }
}