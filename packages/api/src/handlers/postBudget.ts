import { ObjectID } from 'bson';
import { Request, Response } from 'express';

import Budget from '../models/Budget';
import { getCollection } from '../services/mongoService';

const postBudget = async (req: Request, res: Response) => {
  const { effectiveDate, amount, categoryId } = req.body as Budget;

  const col = getCollection('budgets');

  const newBudget = {
    effectiveDate,
    amount,
    categoryId,
  };

  await col.replaceOne(
    { categoryId, effectiveDate },
    newBudget,
    { upsert: true },
  );

  const result = await col.findOne({
    categoryId,
    effectiveDate,
  });

  res.json(result);
};

export default postBudget;
