import { toast } from 'react-toastify';

import store from '../store/store';
import { request } from './api-service';

const dispatch = store.dispatch;

export type NewUser = {
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  verifyPassword: string;
};

export const loginWithCreds = (username: string, password: string) =>
  request('login', { method: 'POST', body: { username, password } })
    .then(item => {
      localStorage.setItem('_t', item.token);
      dispatch({ type: 'RESET' });
      dispatch({ type: 'SET_AUTH', item });
    })
    .catch(err => toast.error(err.message));

export const loginWithToken = async () => {
  const token = localStorage.getItem('_t');

  if (!token) {
    return;
  }

  return request('login')
    .then(item => dispatch({ type: 'SET_AUTH', item }))
    .catch(() => null);
};

export const submitNewUserInfo = (newUser: NewUser) =>
  request('signup', { method: 'POST', body: newUser })
    .then(item => {
      localStorage.setItem('_t', item.token);
      dispatch({ type: 'RESET' });
      dispatch({ type: 'SET_AUTH', item });
    })
    .catch(err => toast.error(err.message));

export const logout = () => {
  localStorage.removeItem('_t');
  dispatch({ type: 'RESET' });
};
