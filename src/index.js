import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { GiphyProvider } from './context/GiphyContext';
import App from './components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter>
    <GiphyProvider>
        <App />
    </GiphyProvider>
</BrowserRouter>);
