import { createSlice } from "@reduxjs/toolkit";

const todoesSlice=createSlice({

    name:'todo',
    // this is initial value
    initialState:[
       {id:'1',task:'today im gonna learn redux',completed:false},
       {id:'2',task:'using redux with next js',completed:false}
    ],
    // to update the initial value
    reducers:{
        set_todoes:(state,action)=>{
           const newOb={
            id:Date.now(),
            task:action.payload.task,
            completed:action.payload.completed
           }
           state.push(newOb)
          
        }
    }



})
export const {set_todoes}=todoesSlice.actions
export default todoesSlice.reducer