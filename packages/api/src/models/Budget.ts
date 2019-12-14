import { ObjectID } from 'mongodb';

export default interface Budget {
  _id?: ObjectID | string;
  categoryId: ObjectID | string;
  effectiveDate: Date;
  amount: number;
}
