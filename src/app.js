import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppComponent from "components/App/App.js";
import store from "redux/store.js";

const app = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        <AppComponent />
    </Provider>, 
    app);