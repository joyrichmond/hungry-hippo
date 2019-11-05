import { ObjectID } from 'mongodb';

export default interface User {
  _id?: ObjectID;
  username: string;
  fn: string;
  ln: string;
}
