import { Response } from 'express';
import { ObjectID } from 'mongodb';

import { Request } from '../models/Request';
import Transaction from '../models/Transaction';
import { getCollection } from '../services/mongoService';

const postTransaction = async (req: Request, res: Response) => {
  const { date, amount, vendor, categoryId } = req.body as Transaction;

  const userId = req.user!._id!;

  const col = getCollection<Transaction>('transactions');

  const newTransaction = {
    date,
    amount,
    vendor,
    categoryId,
    userId,
    _id: new ObjectID(),
  };

  await col.insertOne(newTransaction);

  res.json(newTransaction);
};

export default postTransaction;
