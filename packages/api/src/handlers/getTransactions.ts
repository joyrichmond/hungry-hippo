import { Response } from 'express';

import { Request } from '../models/Request';
import { getCollection } from '../services/mongoService';

const getTransactions = async (req: Request, res: Response) => {
  const col = getCollection('transactions');

  const userId = req.user!._id!;

  const result = await col.find({ userId }).toArray();

  res.json(result);
};

export default getTransactions;
