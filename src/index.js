import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

// Add a request interceptor to add a Bearer token to all outgoing requests
// axios.interceptors.request.use(function (request) {
//     const bearerToken = localStorage.getItem('token');
//     if (bearerToken) {
//         request.headers.Authorization = `bearer ${bearerToken}`;
//     }
//     request.headers['Content-Type'] = 'application/json';
//     return request;
// }, function (error) {
//     return Promise.reject(error);
// });


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

