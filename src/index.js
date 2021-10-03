import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { GiphyProvider } from './context/GiphyContext';
import App from './components/App/App';
import { store } from './store/store'
import { Provider } from 'react-redux'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <GiphyProvider>
            <Provider store={store}> 
            <App />
            </Provider>
        </GiphyProvider>
    </BrowserRouter>);
