import { createSlice } from "@reduxjs/toolkit";
import ApiService from '../api/api-service'

//Slice
const slice = createSlice({
    name: 'gifs',
    initialState: {
        data: [],
        history: []
    },
    reducers: {
        getGifs: (state, action) => {
            state.data = action.payload
        },
        getSearch: (state, action) => {
            state.data = action.payload
        },
        getRandom: (state, action) => {
            state.data = action.payload
        },
        getHistory: (state, action) => {
            state.history = [action.payload, ...state.history]
        }
    }
})

export default slice.reducer

//Actions
const { getGifs, getSearch, getRandom, getHistory } = slice.actions

export const fetchGifs = () => async dispatch => {
    try {
        await ApiService.getTrending()
            .then((res => dispatch(getGifs(res.data))))
    }
    catch (e) {
        return (console.error(e.message))
    }
}

export const searchGifs = (search) => async dispatch => {
    try {
        await ApiService.searchGif(search)
            .then((res => dispatch(getSearch(res.data))))
    }
    catch (e) {
        return (console.error(e.message))
    }
}

export const randomGifs = () => async dispatch => {
    try{
        await ApiService.getRandom()
            .then((res => dispatch(getRandom(res.data))))
    }
    catch (e) {
        return(console.error(e.message))
    }
}

export const searchHistory = (search) => dispatch => {
    return dispatch(getHistory(search))
}


