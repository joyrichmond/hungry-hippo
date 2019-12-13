import { ObjectID } from 'bson';
import { Request, Response } from 'express';

import Budget from '../models/Budget';
import { getCollection } from '../services/mongoService';

const postBudget = async (req: Request, res: Response) => {
  const { effectiveDate, amount, categoryId } = req.body as Budget;

  const col = getCollection('budgets');

  const result = {
    effectiveDate,
    amount,
    categoryId,
    _id: new ObjectID(),
  };

  await col.insertOne(result);

  res.json(result);
};

export default postBudget;
