import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import gifs from './giphy'

//Using combineReducers case more reducers are added in the future
const reducer = combineReducers({
    gifs,
})

//Setting up redux store
const store = configureStore({
    reducer,
})

export default store