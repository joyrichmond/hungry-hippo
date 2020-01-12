import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { request } from '../services/api-service';

type NewUser = {
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  verifyPassword: string;
};

const Signup: FC = () => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const dispatch = useDispatch();

  const doPasswordsMatch = password === verifyPassword;

  const submitUserInfo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser: NewUser = {
      username,
      firstname,
      lastname,
      password,
      verifyPassword,
    };
    request('signup', { method: 'POST', body: newUser })
      .then(item => {
        localStorage.setItem('_t', item.token);
        dispatch({ type: 'RESET' });
        dispatch({ type: 'SET_AUTH', item });
      })
      .catch(err => toast.error(err.message));
  };

  return (
    <form className="signup" onSubmit={e => submitUserInfo(e)}>
      <h3>Signup</h3>
      <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} value={username} required />
      <input type="text" placeholder="first name" onChange={e => setFirstname(e.target.value)} value={firstname} required />
      <input type="text" placeholder="last name" onChange={e => setLastname(e.target.value)} value={lastname} required />
      <input type="text" placeholder="password" onChange={e => setPassword(e.target.value)} value={password} required />
      <input type="text" placeholder="verify password" onChange={e => setVerifyPassword(e.target.value)} value={verifyPassword} required />
      <button type="submit" disabled={!doPasswordsMatch}></button>
    </form>
  );
};

export default Signup;
