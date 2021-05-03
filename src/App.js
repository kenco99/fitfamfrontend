import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

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
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
