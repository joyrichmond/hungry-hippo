import { ObjectID } from 'mongodb';

export default interface Transaction {
  _id?: ObjectID;
  userId: ObjectID;
  categoryId: ObjectID;
  date: Date;
  amount: number;
  vendor: string;
}
