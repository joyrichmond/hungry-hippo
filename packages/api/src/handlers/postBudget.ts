import { Request, Response } from 'express';
import { getCollection } from '../services/mongoService';
import { ObjectID } from 'bson';
import Budget from '../models/Budget';

const postBudget = async (req: Request, res: Response) => {
  const { effectiveDate, amount } = req.body as Budget;

  const col = getCollection('budgets');

  const result = {
    effectiveDate,
    amount,
    _id: new ObjectID(),
  };

  await col.insertOne(result);

  res.json(result);
};

export default postBudget;
