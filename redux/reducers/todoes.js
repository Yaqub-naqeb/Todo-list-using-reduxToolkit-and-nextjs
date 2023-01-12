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
            completed:false
           }
           state.push(newOb)},

           set_toggle:(state,action)=>{
            // const toggle=!state.payload.completed
            const index=state.findIndex(todo=> todo.id===action.payload.id)
            state[index].completed=action.payload.completed


        }
    }



})
export const {set_todoes,set_toggle}=todoesSlice.actions
export default todoesSlice.reducer