import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.js";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

const routes = (
        <Provider store={createStore(reducers)}>
            <BrowserRouter>
            <Switch>
             <Route path="/home" component={App} />
             <Redirect from="/" to="/home" />
            </Switch>
            </BrowserRouter>
        </Provider>
);

ReactDOM.render(routes, document.getElementById("root"));
