import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/productDataSlice";
import{api,apiReducerPath,apiMiddleware}from './slices/api'


export default configureStore({
    reducer:{
        productData:productReducer,
        [apiReducerPath]:api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),

    
})