import React, { useContext, useEffect } from "react";
import ApiService from "../../api/api-service";
import GiphyContext from "../../context/GiphyContext";
import Gifs from './Gifs'
import '../Search/Search.css'

export default function Trending() {

    const context = useContext(GiphyContext)

    useEffect(() => {
        let _data
        ApiService.getTrending()
            .then(res => {
                _data = res.data
                context.setData(_data)
            })
    })

    function renderTrending() {
        const data = context.data
        return data.map(gif =>
            <Gifs
                key={gif.id}
                img={gif.images.fixed_width.webp}
                id={gif.id}
            />
        )

    }

    function renderLoading() {
        return <div> LOADING </div>
    }

        return (

            <div className='gif-list'>
                {context.data.length ? renderTrending() : renderLoading()}
            </div>
        )
}