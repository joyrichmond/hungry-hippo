import './stylesheets/app.scss';
import './fontawesome';

import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Header from './comps/Header';
import MainPanel from './comps/MainPanel';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToastContainer pauseOnFocusLoss />
        <div className="overlay" />
        <Header />
        <MainPanel />
      </div>
    </Provider>
  );
}

export default App;
