import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { loginWithToken } from './services/auth-service';
import store from './store/store';

const startApp = async () => {
  await loginWithToken();

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

startApp();
