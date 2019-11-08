import { MongoClient } from 'mongodb';

let client: MongoClient | null;

const getClient = () => {
  if (!client) {
    client = new MongoClient(process.env.DB_CONNECTION!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  return client;
};

export const connect = () => getClient().connect();

export const getDb = () => getClient().db(process.env.DB_NAME);
