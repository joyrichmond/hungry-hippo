import { Request, Response } from 'express';
import { getCollection } from '../services/mongoService';

const getBudgets = async (req: Request, res: Response) => {
  const col = getCollection('budgets');

  const result = await col.find({}).toArray();

  res.json(result);
};

export default getBudgets;
