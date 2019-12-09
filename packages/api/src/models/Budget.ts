import { ObjectID } from 'mongodb';

export default interface Budget {
  _id?: ObjectID | string;
  categoryId: ObjectID;
  effectiveDate: Date;
  amount: number;
}
