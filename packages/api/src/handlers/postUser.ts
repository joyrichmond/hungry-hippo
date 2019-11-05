import { Request, Response } from 'express';
import User from '../models/User';

const postUser = (req: Request, res: Response) => {
  const user = req.body as User;
};
