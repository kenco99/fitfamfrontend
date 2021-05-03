import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Login from './pages/clientLogin'
import MainPage from './pages/mainPage'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <div>
                            Hello world
                        </div>
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/main">
                        <MainPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
