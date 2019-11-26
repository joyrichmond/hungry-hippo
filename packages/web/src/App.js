import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import spendingTrackerReducer from './reducers/spendingTrackerReducer';
import './stylesheets/app.scss';
import './fontawesome';
import { ToastContainer } from 'react-toastify';

import Header from './comps/Header';
import AtAGlance from './comps/AtAGlance';
import SpendingTracker from './comps/SpendingTracker';

const store = createStore(
  spendingTrackerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

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
