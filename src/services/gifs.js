import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const gifAPI = createApi({
    reducerPath: 'gifs',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.giphy.com/v1/gifs'
    }),
    endpoints: (builder) => ({
        getGifs: builder.query({
            query: () => 'trending?api_key=rh9A0IPelrZe4QsSjqs3HADbh0MTylva&limit=25&rating=g'
        }),
        searchGifs: builder.query({
            query: (search) => `search?api_key=rh9A0IPelrZe4QsSjqs3HADbh0MTylva&q=${search}&limit=25&offset=0&rating=g&lang=en`
        })

    })
})

export const { useGetGifsQuery, useSearchGifsQuery } = gifAPI