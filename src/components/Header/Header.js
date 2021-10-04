import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { searchGifs, fetchGifs, searchHistory, randomGifs } from '../../store/giphy'
import "./Header.css"

function Header(props) {
    const dispatch = useDispatch()

    //Accessing state from Redux store
    const { data, history } = useSelector(state => state.gifs)

    //Using state to set search result
    const [search, setSearch] = useState('')

    function handleChange(ev) {
        setSearch(ev.target.value)
    }


    function handleSearch(ev) {
        ev.preventDefault()
        //Once form is submitted, search results will be fetched and component will be rendered
        dispatch(searchGifs(search))
        dispatch(searchHistory(search))
        setSearch('')
        props.history.push('/search')
    }


    function handleTrending() {
        //Once trending button is clicked, trending gifs will be fetched
        dispatch(fetchGifs())
    }

    // function renderHistory() {
    //     return history.map((res, key) =>
    //         <div className='historyItem'>
    //             <p>{res}</p>
    //         </div>
    //     )
    // }



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
                        placeholder='Search for GIFs'
                        type='text'
                        value={search}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit'>
                        <i className="fas fa-search"></i>
                    </button>
                </form>
                <Link onClick={handleTrending} to='/trending'>Trending</Link>
                {/* <div className='history'>
                    {renderHistory()}
                </div> */}
            </div>
        </div>
    )
}


export default withRouter(Header)