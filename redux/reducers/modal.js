import { createSlice } from "@reduxjs/toolkit";

const modalSlice=createSlice({

    name:'modal',
    // this is initial value
    initialState:{
        md:false,
    },
    // to update the initial value
    reducers:{
        set_md(state,action){
            state.md=!state.md
        }
    }



})
export const {set_md}=modalSlice.actions
export default modalSlice.reducer