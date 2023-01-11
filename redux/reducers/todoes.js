import { createSlice } from "@reduxjs/toolkit";

const todoesSlice=createSlice({

    name:'todo',
    // this is initial value
    initialState:{
        name:'nn',
    },
    // to update the initial value
    reducers:{
        set_todoes(state,action){
            state.name=action.payload
        }
    }



})
export const {set_todoes}=todoesSlice.actions
export default todoesSlice.reducer