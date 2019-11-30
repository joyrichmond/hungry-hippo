import { Request, Response } from 'express';
import { getCollection } from '../services/mongoService';
import { ObjectID } from 'bson';
import Transaction from '../models/Transaction';

const postTransaction = async (req: Request, res: Response) => {
  const { date, amount } = req.body as Transaction;

  const col = getCollection('transactions');

  const result = {
    date,
    amount,
    _id: new ObjectID(),
  };

  await col.insertOne(result);

  res.json(result);
};

export default postTransaction;
