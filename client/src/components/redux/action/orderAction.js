import axios from "axios";

export const REQUEST_ORDER_PLACE="REQUEST_ORDER_PLACE";
export const SUCCESS_ORDER_PLACED="SUCCESS_ORDER_PLACED";
export const FAIL_ORDER_PLACED="FAIL_ORDER_PLACED";


export const APPLY_COUPON_REQUEST="APPLY_COUPON_REQUEST";
export const APPLY_COUPON_SUCCESS="APPLY_COUPON_SUCCESS";
export const APPLY_COUPON_FAIL="APPLY_COUPON_FAIL";

export const placeOrder=(orderData,navigate)=>async(dispatch)=>{
    try {
        dispatch({type:REQUEST_ORDER_PLACE})
        const response=await axios.post("/api/orderNow",orderData)
        // console.log(response);
        if(response.data.success){
            dispatch({type:SUCCESS_ORDER_PLACED,payload:response.data})
            setTimeout(() => {
                navigate('/user-orders') 
            }, 3000);
        }
    } catch (error) {
        console.log(error);
        dispatch({type:FAIL_ORDER_PLACED,payload:error.response.data.error})
    }
}




export const applyCoupon=(code,amount)=>async(dispatch)=>{
    try {
        dispatch({type:APPLY_COUPON_REQUEST})
        const response=await axios.post("/api/apply-coupon",{couponCode:code,orderAmount:amount});
        console.log("COUPONS",response);
        if(response.data.success){
            dispatch({type:APPLY_COUPON_SUCCESS,payload:response.data.discount})
        }
    } catch (error) {
        console.log("error",error.response);
        dispatch({type:APPLY_COUPON_FAIL,payload:error.response.data.error})
    }
}

