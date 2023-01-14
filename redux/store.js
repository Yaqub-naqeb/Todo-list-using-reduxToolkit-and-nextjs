import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './reducers/profille'
import TodoReducer from './reducers/todoes'
import modalReducer from './reducers/modal'


export default configureStore({
    reducer:{
        profile:profileReducer,
        todoes:TodoReducer,
        modal:modalReducer
    }

})