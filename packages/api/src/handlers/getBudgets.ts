import { Response } from 'express';

import Budget from '../models/Budget';
import { Request } from '../models/Request';
import { getCollection } from '../services/mongoService';

const getBudgets = async (req: Request, res: Response) => {
  const col = getCollection<Budget>('budgets');

  const userId = req.user!._id!;

  const result = await col.find({ userId }).toArray();

  res.json(result);
};

export default getBudgets;
