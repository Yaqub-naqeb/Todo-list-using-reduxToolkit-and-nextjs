import { createSlice } from "@reduxjs/toolkit";

const profileSlice=createSlice({

    name:'profile',
    // this is initial value
    initialState:{
        name:'name',
    },
    // to update the initial value
    reducers:{
        set_name(state,action){
            state.name=action.payload
        }
    }



})
export const {set_name}=profileSlice.actions
export default profileSlice.reducer