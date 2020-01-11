import { ObjectID } from 'mongodb';

export default interface Token {
  _id?: ObjectID;
  userId: ObjectID;
}
