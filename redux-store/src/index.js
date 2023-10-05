import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Provider} from 'react-redux';
import store from "./store";
import { Global } from "./components/formComponent.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Global/>
    <App />
  </Provider>
);
