import React, { FC } from 'react';

import Login from './Login';
import Signup from './Signup';

const Gateway: FC = () => {
  return (
    <div className="flex-centered-v">
      <div className="welcome">
        <img src="/greenHippo.png" />
        <h1>Welcome to Hungry Hippo!</h1>
        <p>An easy tool to track your spending</p>
      </div>
      <div className="gateway">
        <Login />
        <Signup />
      </div>
    </div>
  );
};

export default Gateway;
