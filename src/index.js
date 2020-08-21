import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');
function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootEl
  );
}
if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  });
}
render();
serviceWorker.unregister();
