import { Response } from 'express';
import { ObjectID } from 'mongodb';

import Category from '../models/Category';
import { Request } from '../models/Request';
import { getCollection } from '../services/mongoService';

const postCategory = async (req: Request, res: Response) => {
  const { name } = req.body as Category;

  const userId = req.user!._id!;

  const col = getCollection<Category>('categories');

  const result = {
    name,
    userId,
    _id: new ObjectID(),
  };

  await col.insertOne(result);

  res.json(result);
};

export default postCategory;
