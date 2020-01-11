import { ObjectID } from 'bson';
import { Request, Response } from 'express';

import Token from '../models/Token';
import User from '../models/User';
import { generateSalt, hashPassword } from '../services/hashService';
import { getCollection } from '../services/mongoService';

type CreateUser = {
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  verifyPassword: string;
};

const signup = async (req: Request, res: Response) => {
  const { username, firstname, lastname, password, verifyPassword } = req.body as CreateUser;

  if (password !== verifyPassword) {
    return res.sendStatus(400);
  }

  const users = getCollection<User>('users');

  const user = await users.findOne({ username });

  if (user) {
    return res.sendStatus(409);
  }
  // it would probably be better to use an email as the username and send a 200 success response to maintain privacy

  const salt = await generateSalt();
  const phash = await hashPassword(password, salt);

  const newUser: User = {
    _id: new ObjectID(),
    username,
    firstname,
    lastname,
    phash,
    salt,
  };

  await users.insertOne(newUser);

  const newToken: Token = {
    _id: new ObjectID(),
    userId: newUser._id!,
  };

  const tokens = getCollection<Token>('tokens');

  await tokens.insertOne(newToken);

  const result = {
    username,
    firstname,
    lastname,
    newToken,
  };

  res.json(result);
};

export default signup;
