import { Request, Response } from 'express';
import { getCollection } from '../services/mongoService';

const getUsers = async (req: Request, res: Response) => {
  const col = getCollection('users');

  const result = await col.find({}).toArray();

  res.json(result);
};

export default getUsers;
