import React from 'react';
import './App.css';

import Header from '.comps/Header';
import AtAGlance from '.comps/AtAGlance';
import SpendingTracker from '.comps/SpendingTracker';

function App() {
  return (
    <div className="App">
      <Header />
      <AtAGlance />
      <SpendingTracker />
    </div>
  );
}

export default App;
