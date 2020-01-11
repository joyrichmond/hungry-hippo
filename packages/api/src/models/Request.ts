import { Request as ExpressRequest } from 'express';

import User from './User';

export type Request = ExpressRequest & {
  token?: string;
  user?: User;
};
