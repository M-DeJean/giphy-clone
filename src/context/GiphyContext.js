import React, { Component, useState } from 'react';

const GiphyContext = React.createContext({
    data: [],
    details: [],
    setError: () => { },
    clearError: () => { },
    setData: () => { },
    setDetails: () => { }
})

export default GiphyContext

export function GiphyProvider(props) {

    const [data, setData] = useState([])
    const [details, setDetails] = useState([])
    const [error, setError] = useState(null)
    // state = {
    //     data: [],
    //     details: [],
    //     error: null
    // };

    // setError = error => {
    //     console.error(error)
    //     this.setState({ error })
    // }

    // clearError = () => {
    //     this.setState({ error: null })
    // }

    // setData = data => {
    //     this.setState({ data })
    // }

    // setDetails = details => {
    //     this.setState({ details })
    // }


        const value = {
            data,
            details,
            error,
            setError,
            // clearError: this.clearError,
            setData,
            setDetails
        }
        return(
            <GiphyContext.Provider value={value}>
                {props.children}
            </GiphyContext.Provider>
        )
    }