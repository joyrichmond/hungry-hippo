import bodyParser from 'body-parser';
import { config } from 'dotenv';
import express, { Router } from 'express';

import getBudgets from './handlers/getBudgets';
import getCategories from './handlers/getCategories';
import getTransactions from './handlers/getTransactions';
import postBudget from './handlers/postBudget';
import postCategory from './handlers/postCategory';
import postTransaction from './handlers/postTransaction';
import { connect } from './services/mongoService';

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
  app.use(bodyParser.json());

  const router = Router();

  app.use('/api', router);

  router.get('/categories', getCategories);
  router.get('/budgets', getBudgets);
  router.get('/transactions', getTransactions);

  router.post('/categories', postCategory);
  router.post('/budgets', postBudget);
  router.post('/transactions', postTransaction);

  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Listening on ${port}`));
};

main().catch(err => console.error(err));
