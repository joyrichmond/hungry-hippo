import React, { FC, FormEvent, useState } from 'react';

import { loginWithCreds } from '../services/auth-service';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const attemptLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginWithCreds(username, password);
  };

  return (
    <form className="login" onSubmit={e => attemptLogin(e)}>
      <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} value={username} required />
      <input type="text" placeholder="password" onChange={e => setPassword(e.target.value)} value={password} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
