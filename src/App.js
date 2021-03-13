import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import axios from 'axios';

import ProtectedRoute from '../src/components/Routes/ProtectedRoute'
import './App.css';
import 'antd/dist/antd.css';

//Pages
import Login from './pages/Login';

axios.defaults.baseURL = `${BASE_URL}/`;


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Login} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
