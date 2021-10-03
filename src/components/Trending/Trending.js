import React, { useContext, useEffect, useState } from "react";
import ApiService from "../../api/api-service";
import { useGetGifsQuery } from '../../services/gifs';
import GiphyContext from "../../context/GiphyContext";
// import Gifs from './Gifs'
import '../Search/Search.css'
import { store } from '../../store/store'

const Gifs = React.lazy(() => import('./Gifs'))

export default function Trending() {
    const { data, error, isLoading, isSuccess, isError } = useGetGifsQuery()

    const context = useContext(GiphyContext)

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     let _data
    //     ApiService.getTrending()
    //         .then(res => {
    //             _data = res.data
    //             // context.setData(_data)
    //             setData(_data)
    //         })
    // }, [])

    function renderTrending() {
        console.log(store.getState())
        // context.setData(data)
        // const data = context.data
        return data.data.map(gif =>
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
             <React.Suspense fallback={<i className="fas fa-spinner fa-pulse"></i>}>
            {/* {console.log(data)} */}
            {isSuccess && renderTrending()}
            </React.Suspense>
        </div>
    )
}