import './stylesheets/app.scss';
import './fontawesome';

import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import AtAGlance from './comps/AtAGlance';
import Header from './comps/Header';
import MasterSidebar from './comps/MasterSidebar';
import SpendingTracker from './comps/SpendingTracker';
import DashboardView from './comps/spendingTracker/DashboardView';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToastContainer pauseOnFocusLoss />
        <div className="overlay" />
        <Header />
        <MasterSidebar />
        <DashboardView />
        <SpendingTracker />
      </div>
    </Provider>
  );
}

export default App;
