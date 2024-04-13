import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App";
import { Provider } from "react-redux";
import { setupStore } from "./app/redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
   <Provider store={ setupStore({})}>
        <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
