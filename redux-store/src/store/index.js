import { configureStore } from "@reduxjs/toolkit";
import userReduser from './slices/userDataSlice'
import productReducer from "./slices/productDataSlice";

export default configureStore({
    reducer:{
        productData:productReducer,
        userData:userReduser
    }
})