import { ObjectID } from 'bson';
import { Request, Response } from 'express';

import Category from '../models/Category';
import { getCollection } from '../services/mongoService';

const postCategory = async (req: Request, res: Response) => {
  const { name } = req.body as Category;

  const col = getCollection('categories');

  const result = {
    name,
    _id: new ObjectID().toHexString,
  };

  await col.insertOne(result);

  res.json(result);
};

export default postCategory;
