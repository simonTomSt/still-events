import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";
import "./scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./app/store/configureStore";
import ScrollToTop from "./app/layout/scrollToTop";
const store = configureStore();

const rootEl = document.getElementById("root");

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  );
}

if (module.hot) {
  module.hot.accept("./app/layout/App", function () {
    setTimeout(render);
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
