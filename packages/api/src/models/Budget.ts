import { ObjectID } from 'mongodb';

export default interface Budget {
  _id?: ObjectID;
  categoryId: ObjectID;
  effectiveDate: Date;
  amount: number;
  userId: ObjectID;
}
// intentional duplication of data (userId) for security
