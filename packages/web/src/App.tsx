import './stylesheets/app.scss';
import './fontawesome';

import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Gateway from './comps/Gateway';
import Header from './comps/Header';
import Login from './comps/Login';
import MainPanel from './comps/MainPanel';
import { AppState } from './store/root';

function App() {
  const auth = useSelector((state: AppState) => state.auth);

  return (
    <div className="App">
      <ToastContainer pauseOnFocusLoss />
      <div className="overlay" />
      <Header />
      {auth ? <MainPanel /> : <Gateway />}
    </div>
  );
}

export default App;
