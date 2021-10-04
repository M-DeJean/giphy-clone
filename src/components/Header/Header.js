import React, { useState, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import ApiService from '../../api/api-service'
import GiphyContext from '../../context/GiphyContext'
import { useGetGifsQuery, useSearchGifsQuery } from '../../services/gifs'
import { useSelector, useDispatch } from 'react-redux'
import { searchGifs, fetchGifs , searchHistory} from '../../store/giphy'
import { store } from '../../store/store'
import giphy from '../../store/giphy'
import "./Header.css"

function Header(props) {

    // const context = useContext(GiphyContext)

    const dispatch = useDispatch()

    const { data, history } = useSelector(state => state.gifs)

    const [search, setSearch] = useState('')
    const [result, setResult] = useState('')

    // const { data, error, isLoading, isSuccess, isError } = useSearchGifsQuery(result)

    function handleChange(ev) {
        setSearch(ev.target.value)
    }


    function handleSearch(ev) {
        ev.preventDefault()
        // let _data
        // setResult(search)
        // ApiService.searchGif(search)
        //     .then(res => {
        //         _data = res.data
        //         setSearch('')
        //         // context.setData(_data)
        //         // console.log(store.getState())
        //     })
        dispatch(searchGifs(search))
        dispatch(searchHistory(search))
        console.log(data)
        setSearch('')
        props.history.push('/search')
    }
    

    function handleTrending(){
        // let _data
        // ApiService.getTrending()
        //     .then(res =>{
        //         _data = res.data
        //         context.setData(_data)
        //         props.history.push('/trending')
        //     })
        dispatch(fetchGifs())
    }



    return (
        <div className='header'>
            <div className='inner-header'>
                <Link to='/'>
                    <h1 className='title'>
                        GIPHY
                    </h1>
                </Link>
                <form onSubmit={handleSearch}>
                    <input className='search-bar'
                        placeholder='React Hooks'
                        type='text'
                        value={search}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit'>
                        Search
                    </button>
                </form>
                <Link onClick={handleTrending} to='/trending'>Trending</Link>
            </div>
        </div>
    )
}


export default withRouter(Header)