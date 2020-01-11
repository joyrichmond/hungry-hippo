import { RequestHandler } from 'express';
import { ObjectId } from 'mongodb';

import { Request } from '../models/Request';
import Token from '../models/Token';
import { getCollection } from '../services/mongoService';

const logout: RequestHandler = async (req: Request, res) => {
  const tokens = getCollection<Token>('tokens');

  await tokens.deleteOne({ _id: new ObjectId(req.token!) });

  res.send();
};

export default logout;
