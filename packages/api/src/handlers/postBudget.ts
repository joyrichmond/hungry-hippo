import { Request, Response } from 'express';
import Budget from '../models/Budget';

const postBudget = (req: Request, res: Response) => {
  const budget = req.body as Budget;
};
