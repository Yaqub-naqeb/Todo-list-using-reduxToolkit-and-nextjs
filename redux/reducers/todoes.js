import { createSlice } from "@reduxjs/toolkit";

const todoesSlice=createSlice({

    name:'todo',
    // this is initial value
    initialState:[
       {id:'1',task:'today im gonna learn redux',completed:false},
       {id:'2',task:'using redux with next js',completed:false,modal:false}
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

                state[index]='';
            },
//fourth 
            // set_modal:(state,action)=>{

            // }
    }



})
export const {set_todoes,set_toggle,delete_todoes}=todoesSlice.actions
export default todoesSlice.reducer