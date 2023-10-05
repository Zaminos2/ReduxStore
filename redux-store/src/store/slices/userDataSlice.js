import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


 export const feachUser = createAsyncThunk(
    'user/feachUser',async function({username,email},{rejectWithValue}){
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}&email=${email}`)
            const user = await response.json();
            
            return user;
         
        }catch(error){
            console.error('Error feaching User',error)
            return rejectWithValue ({message:'Error feaching User'})
        }
    }
 );

 const userDataSlice = createSlice({
    name:"userData",
    initialState:{
        userDataState:{},
        statusState: null,
        errorState:null,
    },
    reducers:{
        getUser(state,action){
            state.userDataState = action.payload[0];
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(feachUser.fulfilled,(state,action)=>{
            if(Object.keys(action.payload).length>0){
            state.userDataState= action.payload[0];
            function userDecompose() {
               
                const user = {
                  ...state.userDataState,
                  ...state.userDataState.address,
                  ...state.userDataState.company,
                  ...state.userDataState.address.geo,
                };
                delete user.address;
                delete user.company;
                delete user.geo;
                return user;
              }
            localStorage.setItem('user',JSON.stringify(userDecompose()))
            state.statusState = 'fulfiled';
            state.errorState = null
            }else{
                state.userDataState= {};
                state.statusState = 'rejected';
                state.errorState = 'No such User found'
            }
        });
        builder.addCase(feachUser.pending,(state,action)=>{
            state.statusState = 'pending';
            state.errorState = null
        });
        builder.addCase(feachUser.rejected,(state,action)=>{
            state.statusState = 'rejected';
            state.errorState = action.payload;
        });
    }
})
export const selectStatusUser = (state)=>state.userData.statusState;
export const selectUserData = (state)=>state.userData.userDataState;
export const errorState = (state)=>state.userData.errorState;
export const {getUser} = userDataSlice.actions;
export default userDataSlice.reducer;


