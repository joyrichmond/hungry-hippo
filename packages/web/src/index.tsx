import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { loginWithToken } from './services/auth-service';

const startApp = async () => {
  await loginWithToken();

  ReactDOM.render(<App />, document.getElementById('root'));
};

startApp();
