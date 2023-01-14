import { createSlice } from "@reduxjs/toolkit";

const todoesSlice=createSlice({

    name:'todo',
    // this is initial value
    initialState:[
     
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
// second
           set_toggle:(state,action)=>{
            // const toggle=!state.payload.completed
            const index=state.findIndex(todo=> todo.id===action.payload.id)
            state[index].completed=action.payload.completed


        },
// third 
            delete_todoes:(state,action)=>{

                const index=state.findIndex(todo=> todo.id===action.payload.id)

                state.splice(index, 1);
            },
//fourth 
           
    }



})
export const {set_todoes,set_toggle,delete_todoes}=todoesSlice.actions
export default todoesSlice.reducer