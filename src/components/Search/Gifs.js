import React from 'react'
import { Link } from 'react-router-dom'
import './Search.css'

export default function Gifs(props) {

    const url = props.img
    const id = props.id
    return (
        <div className='gif'>
            <Link
                to={`search/${id}`}
            >
                <img
                    data-id={id}
                    src={url}
                    alt=''
                />
            </Link>
        </div>
    )
}