import React, { FC } from 'react';

import Login from './Login';
import Signup from './Signup';

const Gateway: FC = () => {
  return (
    <div className="gateway">
      <Login />
      <Signup />
    </div>
  );
};

export default Gateway;
