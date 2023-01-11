import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './reducers/profille'
import TodoReducer from './reducers/todoes'


export default configureStore({
    reducer:{
        profile:profileReducer,
        todoes:TodoReducer
    }

})