import { createSlice } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/dist/query";
import { api } from '../api/api'
import  ApiService  from '../api/api-service'
//Slice

const slice = createSlice({
    name: 'gifs',
    initialState: {
        data: []
    },
    reducers: {
        getGifs: (state, action) => {
            state.data = action.payload
        },
        getSearch: (state, action) => {
            state.data = action.payload
        }
    }
})

export default slice.reducer

//Actions

const{ getGifs, getSearch } = slice.actions

export const fetchGifs = () => async dispatch => {
    try {
        await ApiService.getTrending()
            .then((res => dispatch(getGifs(res.data))))
    }
    catch(e) {
        return(console.error(e.message))
    }
}

export const searchGifs = (search) => async dispatch => {
    try{
        await ApiService.searchGif(search)
            .then((res => dispatch(getSearch(res.data))))
    }
    catch(e){
        return(console.error(e.message))
    }
}

