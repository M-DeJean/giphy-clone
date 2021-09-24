import React, { useContext } from 'react'
import GiphyContext from '../../context/GiphyContext'
import './Search.css'
// import Gifs from './Gifs'

const Gifs = React.lazy(() => import('./Gifs'))

export default function Search() {

    const context = useContext(GiphyContext)
    // static contextType = GiphyContext

    function renderGifs() {
        const { data } = context
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
            <React.Suspense fallback={<i className="fas fa-spinner fa-pulse"></i>}>
                {renderGifs()}
            </React.Suspense>
        </div>
    )
}