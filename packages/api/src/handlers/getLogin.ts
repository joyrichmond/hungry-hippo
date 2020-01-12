import { Response } from 'express';

import { Request } from '../models/Request';

const getLogin = async (req: Request, res: Response) => {
  const { firstname, lastname } = req.user!;

  const token = req.token!;

  const result = {
    firstname,
    lastname,
    token,
  };

  res.json(result);
};

export default getLogin;
