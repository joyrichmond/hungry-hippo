import { ObjectID } from 'mongodb';

export default interface Category {
  _id?: ObjectID | string;
  userId: ObjectID;
  name: string;
}
