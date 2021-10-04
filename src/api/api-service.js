import api from './api'

const ApiService = {
    searchGif(search) {
        return fetch(`${api.API_ENDPOINT}search?api_key=rh9A0IPelrZe4QsSjqs3HADbh0MTylva&q=${search}&limit=25&offset=0&rating=g&lang=en`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getTrending() {
        return fetch(`${api.API_ENDPOINT}trending?api_key=rh9A0IPelrZe4QsSjqs3HADbh0MTylva&limit=25&rating=g`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getRandom() {
        return fetch(`${api.API_ENDPOINT}random?api_key=rh9A0IPelrZe4QsSjqs3HADbh0MTylva&tag=&rating=g`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export const suspend = promise => {
    let result
    let status = 'pending'
    const suspender = promise.then(res => {
        status = 'success'
        result = res
    }, error => {
        status = 'error'
        result = error
    })

    return () => {
        switch(status) {
            case 'pending':
                throw suspender
            case 'error':
                throw result
            default:
                return result
        }
    }
}

// const ApiService = {
//     searchGifs: suspend(Apis.searchGif()),
//     getTrending: suspend(Apis.getTrending()),
//     getRandom: suspend(Apis.getRandom())
    
// }

// const suspend = promise => {
//     let result;
//     let status = 'pending';
//     const suspender = promise.then(response => {
//         status = 'success';
//         result = response;
//     }, error => {
//         status = 'error';
//         result = error;
//     });
// }

export default ApiService