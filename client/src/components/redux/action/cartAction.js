import axios from "axios";
// import toast from "react-hot-toast";
// import Cookies from "js-cookie"

export const PRODUCT_ADDED_TO_CART_SUCCESS="PRODUCT_ADDED_TO_CART_SUCCESS";
export const PRODUCT_ADDED_TO_CART_FAILED="PRODUCT_ADDED_TO_CART_FAILED";

export const DELETE_FROM_CART_REQUSET="DELETE_FROM_CART_REQUSET";
export const DELETE_FROM_CART_SUCCESS="DELETE_FROM_CART_SUCCESS";
export const DELETE_FROM_CART_FAILED="DELETE_FROM_CART_FAILED";

export const GET_CART_REQUEST = 'GET_CART_REQUEST'
export const GET_CART_SUCCESS="GET_CART_SUCCESS";
export const GET_CART_FAIL="GET_CART_FAIL";

export const UPDATE_CART_REQUEST="UPDATE_CART_REQUEST";
export const UPDATE_CART_SUCCESS="UPDATE_CART_SUCCESS";
export const UPDATE_CART_FAIL="UPDATE_CART_FAIL";



// export const addToCart=(product)=>(dispatch)=>{
//     try {
//         console.log(product);
//         dispatch({type:PRODUCT_ADDED_TO_CART_SUCCESS,payload:product})
//         toast("Item Added to Cart")
//     } catch (error) {
//         console.log(error);
//         dispatch({type:PRODUCT_ADDED_TO_CART_FAILED,payload:error})
//         toast("Failed to Added in Cart")
//     }
// }



export const deleteFromCart=(id)=>async(dispatch)=>{
    console.log(id);
    try {
        dispatch({type:DELETE_FROM_CART_REQUSET});
        const response=await axios.delete(`/api/cart/deleteProduct/${id}`);
        console.log("delRes",response);
        if(response.data.success){
            const response=await axios.get("/api/getCart");
            // console.log("res",response.data);
            if(response.data.success){
                dispatch({type:GET_CART_SUCCESS,payload:response.data})
            }
            dispatch({type:DELETE_FROM_CART_SUCCESS,payload:response})
        }
    } catch (error) {
        // console.log(error);
        dispatch({type:DELETE_FROM_CART_FAILED,payload:error.response.data.error})
    }
}


export const addToCart=(cartData)=>async(dispatch)=>{
    console.log(cartData);
    try {
        const response=await axios.post(`/api/addCart`,{productId:cartData.productId,quantity:1,selectedVariantId:cartData.selectedVariantId});
        if(response.data.success){
            dispatch(getAllCart())
            dispatch({type:PRODUCT_ADDED_TO_CART_SUCCESS,payload:response.data.cart})
        }
    } catch (error) {
        // console.log(error);
        dispatch({type:PRODUCT_ADDED_TO_CART_FAILED,payload:error.response.data.error})
    }
}


export const getAllCart=()=> async(dispatch)=>{
    console.log("yes")
    try {
        dispatch({type:GET_CART_REQUEST});
        const response=await axios.get("/api/getCart");
        console.log("res",response.data);
        if(response.data.success){
            const response=await axios.get("/api/getCart");
            if(response.data.success){
                dispatch({type:GET_CART_SUCCESS,payload:response.data})
            }
            dispatch({type:GET_CART_SUCCESS,payload:response.data})
        }
        // toast.success("CART ITEMS")
    } catch (error) {
        // console.log(error);
        dispatch({type:GET_CART_FAIL,payload:error.response.data.error})
    }
}



export const updateCart=(variantId,quantity)=>async(dispatch)=>{
    // console.log("redux cart update",quantity,variantId);
    try {
        dispatch({type:UPDATE_CART_REQUEST});
        const response=await axios.put(`/api/cart-update?variantId=${variantId}`,{quantity})
        if(response.data.success){
            const response=await axios.get("/api/getCart");
            // console.log("res",response.data);
            if(response.data.success){
                dispatch({type:GET_CART_SUCCESS,payload:response.data})
            }
        }
    } catch (error) {
        // console.log("Cart :",error);
        dispatch({type:UPDATE_CART_FAIL,payload:error.response.data.error})
    }
}





export const CLEAR_CART_SUCCESS = 'CLEAR_CART_SUCCESS';
export const CLEAR_CART_ERROR = 'CLEAR_CART_ERROR';

export const clearCartSuccess = () => (dispatch) => {
  dispatch({ type: CLEAR_CART_SUCCESS });
};

export const clearCartError = () => (dispatch) => {
  dispatch({ type: CLEAR_CART_ERROR });
};