import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { gifAPI } from "../services/gifs";

export const store = configureStore({
    reducer: {
        [gifAPI.reducerPath]: gifAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(gifAPI.middleware)
})

setupListeners(store.dispatch)