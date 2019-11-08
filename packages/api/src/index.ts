import express from 'express';
import { config } from 'dotenv';
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

  app.get('/spending-tracker', (req, res) => {
    res.json({ status: 'received' });
  });

  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Listening on ${port}`));
};

main().catch(err => console.error(err));
