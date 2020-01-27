import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom'

const store = {
    user: {
        firstName: 'Alesia',
        lastName: 'Lizahub'
    }
};

ReactDOM.render((
    <BrowserRouter>
        <App userData={store} />
    </BrowserRouter>
), document.getElementById('root'));

