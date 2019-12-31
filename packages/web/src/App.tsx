import './stylesheets/app.scss';
import './fontawesome';

import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import AtAGlance from './comps/AtAGlance';
import Header from './comps/Header';
import SpendingTracker from './comps/SpendingTracker';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App flex-h flex-centered-h">
        <ToastContainer pauseOnFocusLoss />
        <Header />
        <AtAGlance />
        <div className="overlay" />
        <SpendingTracker />
      </div>
    </Provider>
  );
}

export default App;
