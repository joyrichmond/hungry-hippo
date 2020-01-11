import { Request, Response } from 'express';
import { ObjectID } from 'mongodb';

import Token from '../models/Token';
import User from '../models/User';
import { hashPassword } from '../services/hashService';
import { getCollection } from '../services/mongoService';

type Payload = {
  username: string;
  password: string;
};

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body as Payload;

  const users = getCollection<User>('users');

  const user = await users.findOne({ username });

  if (!user) {
    return res.sendStatus(401);
  }

  const phash = await hashPassword(password, user.salt);

  if (phash !== user.phash) {
    return res.sendStatus(401);
  }

  const tokens = getCollection<Token>('tokens');

  const token: Token = {
    _id: new ObjectID(),
    userId: user._id!,
  };

  await tokens.insertOne(token);

  res.json(token._id);
};

export default login;
