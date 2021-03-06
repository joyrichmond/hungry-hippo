import bodyParser from 'body-parser';
import { config } from 'dotenv';
import express, { Router } from 'express';

import getBudgets from './handlers/getBudgets';
import getCategories from './handlers/getCategories';
import getLogin from './handlers/getLogin';
import getTransactions from './handlers/getTransactions';
import login from './handlers/login';
import logout from './handlers/logout';
import postBudget from './handlers/postBudget';
import postCategory from './handlers/postCategory';
import postTransaction from './handlers/postTransaction';
import putBudget from './handlers/putBudget';
import signup from './handlers/signup';
import authenticateToken from './middleware/authenticateToken';
import { connect } from './services/mongoService';
import cors from 'cors';

config();

const main = async () => {
  if (!process.env.DB_CONNECTION) {
    throw new Error('No database connection');
  }

  if (!process.env.DB_NAME) {
    throw new Error('No database name');
  }

  await connect();

  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  const router = Router();

  app.use('/api', router);

  router.post('/signup', signup);
  router.post('/login', login);

  router.use(authenticateToken);

  router.get('/login', getLogin);
  router.get('/categories', getCategories);
  router.get('/budgets', getBudgets);
  router.get('/transactions', getTransactions);

  router.post('/categories', postCategory);
  router.post('/budgets', postBudget);
  router.post('/transactions', postTransaction);

  router.put('/budgets/:id', putBudget);

  router.post('/logout', logout);

  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Listening on ${port}`));
};

main().catch(err => console.error(err));
