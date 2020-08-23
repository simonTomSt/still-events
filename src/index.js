import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";
import "./scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./app/api/store/configureStore";

const store = configureStore();
const rootEl = document.getElementById("root");

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  );
}
if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}
render();
serviceWorker.unregister();
