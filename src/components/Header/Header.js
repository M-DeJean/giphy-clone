import React, { useState, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import ApiService from '../../api/api-service'
import GiphyContext from '../../context/GiphyContext'
import { useSearchGifsQuery } from '../../services/gifs'
import "./Header.css"

function Header(props) {
    const context = useContext(GiphyContext)

    const [search, setSearch] = useState('');

    const{ data, error, isLoading, isSuccess, isError } = useSearchGifsQuery(search)

    function handleChange(ev) {
        setSearch(ev.target.value)
    }

    function handleSearch(ev){
        ev.preventDefault()
        let _data
        setSearch(ev.target.value)
        ApiService.searchGif(search)
            .then(res => {
                _data = res.data
                setSearch('')
                context.setData(_data)
                props.history.push('/search')
            })
    }

    // function handleTrending(){
    //     let _data
    //     ApiService.getTrending()
    //         .then(res =>{
    //             _data = res.data
    //             context.setData(_data)
    //             // props.history.push('/trending')
    //         })
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
                            placeholder='React Hooks'
                            type='text'
                            value={search}
                            // onChange={handleChange}
                            required
                        />
                        <button type='submit'>
                            Search
                        </button>
                    </form>
                    <Link to='/trending'>Trending</Link>
                </div>
            </div>
        )
    }


export default withRouter(Header)