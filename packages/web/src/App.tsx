import './stylesheets/app.scss';
import './fontawesome';

import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import AtAGlance from './comps/AtAGlance';
import Header from './comps/Header';
import SpendingTracker from './comps/SpendingTracker';
import DashboardView from './comps/spendingTracker/DashboardView';
import RecordTransaction from './comps/spendingTracker/RecordTransaction';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToastContainer pauseOnFocusLoss />
        <div className="overlay" />
        <Header />
        <div className="masterSidebar"></div>
        <div className="dashboardView">
          <DashboardView />
        </div>
        <div className="spendingSidebar">
          <SpendingTracker />
        </div>
      </div>
    </Provider>
  );
}

export default App;
