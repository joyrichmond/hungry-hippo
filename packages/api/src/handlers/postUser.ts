import { Request, Response } from 'express';
import { getCollection } from '../services/mongoService';
import { ObjectID } from 'bson';
import User from '../models/User';

const postUser = async (req: Request, res: Response) => {
  const { username, firstname, lastname } = req.body as User;

  const col = getCollection('users');

  const result = {
    username,
    firstname,
    lastname,
    _id: new ObjectID(),
  };

  await col.insertOne(result);

  res.json(result);
};

export default postUser;
