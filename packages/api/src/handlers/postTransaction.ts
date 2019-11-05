import { Request, Response } from 'express';
import Transaction from '../models/Transaction';

const postTransaction = (req: Request, res: Response) => {
  const transaction = req.body as Transaction;
};
