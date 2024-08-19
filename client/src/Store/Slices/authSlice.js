import { createSlice } from "@reduxjs/toolkit"

const initialState={
    token:null,
    user:null,
}
// create autSlice
const authSlice=createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        // write the actions for authSlice
        login:(state,action)=>{
            state.token=action.payload.token
            state.user=action.payload.user
        },
        logout:(state)=>{
            state.token=null
            state.user=null
        }
    }
})
export const {login,logout}=authSlice.actions
export default authSlice.reducer
// export the what we need