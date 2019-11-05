import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_CONNECTION!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const connect = () => client.connect();
