import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Gifs extends Component {
    render() {
        const url = this.props.img
        const id = this.props.id
        return (
            <div className='gif'>
                <React.Suspense fallback={<h1>GIFS LOADING...</h1>}>
                    <Link
                        to={`search/${id}`}
                    >

                        <img
                            data-id={id}
                            src={url}
                            alt=''
                        />

                    </Link>
                </React.Suspense>
            </div>
        )
    }
}