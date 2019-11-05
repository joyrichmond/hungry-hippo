import { ObjectID } from 'mongodb';

export default interface Budget {
  _id?: ObjectID;
  duration: string;
  amount: number;
}
