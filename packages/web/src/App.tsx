import React from 'react';
import { Provider } from 'react-redux';
import './stylesheets/app.scss';
import './fontawesome';
import { ToastContainer } from 'react-toastify';
import store from './store/store';

import Header from './comps/Header';
import AtAGlance from './comps/AtAGlance';
import SpendingTracker from './comps/SpendingTracker';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToastContainer pauseOnFocusLoss />
        <Header />
        <AtAGlance />
        <SpendingTracker />
      </div>
    </Provider>
  );
}

export default App;
