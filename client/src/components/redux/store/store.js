import {configureStore} from "@reduxjs/toolkit";
import { userReducer } from "../reducer/reducer";
import { productReducer } from "../reducer/userReducer";
import { cartReducer } from "../reducer/cartReducer";
import { adminFeatures } from "../reducer/adminReducer";


export const myStore=configureStore({
    reducer:{
        registeredUser:userReducer,
        productStore:productReducer,
        cartStore:cartReducer,
        adminDetails:adminFeatures
    }
})