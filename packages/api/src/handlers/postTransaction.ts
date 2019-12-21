import { ObjectID } from 'bson';
import { Request, Response } from 'express';

import Transaction from '../models/Transaction';
import { getCollection } from '../services/mongoService';

const postTransaction = async (req: Request, res: Response) => {
  const { date, amount, vendor, categoryId } = req.body as Transaction;

  const col = getCollection('transactions');

  const result = {
    date,
    amount,
    vendor,
    categoryId,
    _id: new ObjectID(),
  };

  await col.insertOne(result);

  res.json(result);
};

export default postTransaction;
