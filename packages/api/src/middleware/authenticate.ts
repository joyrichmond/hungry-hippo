import { RequestHandler } from 'express';
import { ObjectId } from 'mongodb';

import { Request } from '../models/Request';
import Token from '../models/Token';
import User from '../models/User';
import { getCollection } from '../services/mongoService';

const authenticate: RequestHandler = async (req: Request, res, next) => {
  const tokenId = req.headers.authorization;

  if (!tokenId) {
    return res.sendStatus(401);
  }

  const tokens = getCollection<Token>('tokens');

  const token = await tokens.findOne({ _id: new ObjectId(tokenId) });

  if (!token) {
    return res.sendStatus(401);
  }

  const users = getCollection<User>('users');

  const user = await users.findOne({ _id: new ObjectId(token.userId) });

  if (!user) {
    return res.sendStatus(401);
  }

  req.token = tokenId;
  req.user = user;

  next();
};

export default authenticate;
