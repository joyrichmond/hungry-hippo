import express from 'express';
import { MongoClient } from 'mongodb';

require('dotenv').config();

const main = async () => {
  const client = new MongoClient(process.env.DB_CONNECTION!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  const app = express();

  app.get('/spending-tracker', (req, res) => {
    res.json({ status: 'received' });
  });

  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Listening on ${port}`));
};

main().catch(err => console.error(err));
