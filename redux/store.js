import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './reducers/profille'



export default configureStore({
    reducer:{
        profile:profileReducer
    }

})