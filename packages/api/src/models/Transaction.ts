import { ObjectID } from 'mongodb';

export default interface Transaction {
  _id?: ObjectID;
  categoryId: ObjectID;
  date: Date;
  amount: number;
  vendor: string;
}
