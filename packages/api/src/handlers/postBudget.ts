import { Response } from 'express';
import { ObjectID } from 'mongodb';

import Budget from '../models/Budget';
import { Request } from '../models/Request';
import { getCollection } from '../services/mongoService';

const postBudget = async (req: Request, res: Response) => {
  const { effectiveDate, amount, categoryId } = req.body as Budget;
  const userId = req.user!._id!;

  const col = getCollection<Budget>('budgets');

  const newBudget: Budget = {
    _id: new ObjectID(),
    effectiveDate,
    amount,
    categoryId,
    userId,
  };

  await col.insertOne(newBudget);

  res.json(newBudget);
};

export default postBudget;
