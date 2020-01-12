import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { request } from '../services/api-service';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const attemptLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      username,
      password,
    };

    request('login', { method: 'POST', body: payload })
      .then(item => {
        localStorage.setItem('_t', item.token);
        dispatch({ type: 'RESET' });
        dispatch({ type: 'SET_AUTH', item });
      })
      .catch(err => toast.error(err.message));
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
