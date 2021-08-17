import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import GiphyContext from '../../context/GiphyContext';
import Details from './Details'
class Giphy extends Component {

    static contextType = GiphyContext

    state = {
        data: [],
        details: false
    }

    componentDidMount() {
        const data = this.props.location.state.props
        this.setState({ data })
    }

    renderGiphs() {
        const { data } = this.context
        console.log('DATA:    ', data)
        return data.map(data =>
            <li className='giphy' key={data.id}>
                <Link
                to={`search/${data.id}`}
                // onClick={this.handleClick}
            >
                {/* <a href={`/${this.props.id}`}> */}
                <img
                    data-id={data.id}
                    // onClick={this.handleClick}
                    src={data.images.fixed_width.webp}
                    alt=''
                />
                {/* </a> */}
                </Link>
            </li>
        )

    }

    renderDetails() {
        const data = this.state.data
        return <Route
            exact
            path={'/:url/:id'}
            render={(props) => 
                <Details 
                    data='hello'
                    {...props}
                />
            }

        />


    }

    handleClick = e => {
        e.preventDefault()
        // const id = e.currentTarget.getAttribute('data-id')
        // this.props.history.push({ pathname: `search/${id}` })
        this.renderDetails()
    }
    render() {
        const url = this.props.location.state.props.url
        // const url = this.props.location.state.props.images.fixed_width.webp
        const id = this.props.location.state.props.id
        return (
            this.renderGiphs()
            // <div className='giphy'>
            //     {/* <Link
            //         to={`/${id}`}
            //         onClick={this.handleClick}
            //     > */}
            //     {/* <a href={`/${this.props.id}`}> */}
            //     <img
            //         onClick={this.handleClick}
            //         src={url}
            //         alt=''
            //     />
            //     {/* </a> */}
            //     {/* </Link> */}
            // </div>
        )
    }
}

export default withRouter(Giphy);