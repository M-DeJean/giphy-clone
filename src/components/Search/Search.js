import React from 'react'
import { useSelector } from 'react-redux'
import './Search.css'
import Gifs from './Gifs'

export default function Search() {
    //Accessing state from Redux store
    const { data } = useSelector(state => state.gifs)

    function renderGifs() {
        return data.map(data =>
            <Gifs
                key={data.id}
                img={data.images.fixed_width.webp}
                id={data.id}
            />
        )
    }

    return (
        <div className='gif-list'>
            {renderGifs()}
        </div>
    )
}