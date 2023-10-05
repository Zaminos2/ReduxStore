
import { createSlice } from "@reduxjs/toolkit";

 const productDataSlice = createSlice({
    name:"userData",
    initialState:{
        productData:[],
    },
    reducers:{
        getProducts(state,action){

        },
    }
})
export const {getUser} = productDataSlice.actions;
export default productDataSlice.reducer;
