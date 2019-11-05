import { Request, Response } from 'express';
import Category from '../models/Category';

const postCategory = (req: Request, res: Response) => {
  const category = req.body as Category;
};
