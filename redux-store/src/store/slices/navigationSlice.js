import { createSlice } from "@reduxjs/toolkit";


const navigationSlice = createSlice({
    name:"navigation",
    initialState:{navigationState:"/"},
    reducers:{
        setNavigation:(state,action)=>{
            state.navigationState = action.payload;
        }
    }
},
)
export const selectNavigationState = (state)=>{state.navigation.navigationState};
export const {setNavigation} = navigationSlice.actions;
export default navigationSlice.reducer;