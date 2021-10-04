import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import  store  from './store/store'
import { Provider } from 'react-redux'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
            <Provider store={store}> 
            <App />
            </Provider>
    </BrowserRouter>);
