import { Response } from 'express';
import { ObjectID } from 'mongodb';

import Budget from '../models/Budget';
import { Request } from '../models/Request';
import { getCollection } from '../services/mongoService';

const putBudget = async (req: Request, res: Response) => {
  const id = new ObjectID(req.params.id);

  const { amount } = req.body as Budget;
  const userId = req.user!._id!;

  const col = getCollection<Budget>('budgets');

  const budget = await col.findOne({ _id: id });
  if (!budget) {
    return res.sendStatus(404);
  }

  if (budget.userId.toHexString() !== userId.toHexString()) {
    return res.sendStatus(403);
  }

  await col.updateOne({ _id: id }, { $set: { amount } });
  const result = { ...budget, amount };

  res.json(result);
};

export default putBudget;
