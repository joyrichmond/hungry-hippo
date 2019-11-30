import { Request, Response } from 'express';
import { getCollection } from '../services/mongoService';

const getCategories = async (req: Request, res: Response) => {
  const col = getCollection('categories');

  const result = await col.find({}).toArray();

  res.json(result);
};

export default getCategories;
