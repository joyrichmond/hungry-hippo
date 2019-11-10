import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import spendingTrackerReducer from './reducers/spendingTrackerReducer';
import './fontawesome';

import Header from './comps/Header';
import AtAGlance from './comps/AtAGlance';
import SpendingTracker from './comps/SpendingTracker';

const store = createStore(spendingTrackerReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <AtAGlance />
        <SpendingTracker />
      </div>
    </Provider>
  );
}

export default App;
