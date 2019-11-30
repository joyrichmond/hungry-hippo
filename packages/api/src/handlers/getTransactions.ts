import { Request, Response } from 'express';
import { getCollection } from '../services/mongoService';

const getTransactions = async (req: Request, res: Response) => {
  const col = getCollection('transactions');

  const result = await col.find({}).toArray();

  res.json(result);
};

export default getTransactions;
