import { ObjectID } from 'mongodb';

export default interface Transaction {
  _id?: ObjectID;
  date: string;
  amount: number;
}
