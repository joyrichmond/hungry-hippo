import { ObjectID } from 'mongodb';

export default interface Category {
  _id?: ObjectID;
  userId: ObjectID;
  name: string;
  budgets: ObjectID[];
  transactions: ObjectID[];
}
