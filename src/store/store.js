import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { gifAPI } from "../services/gifs";
import gifs from './giphy'
import { config } from "@fortawesome/fontawesome-svg-core";
import { configure } from "@testing-library/dom";

// export const store = configureStore({
//     reducer: {
//         [gifAPI.reducerPath]: gifAPI.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(gifAPI.middleware)
// })

// setupListeners(store.dispatch)

const reducer = combineReducers({
    gifs,
})

const store = configureStore({
    reducer,
})

export default store