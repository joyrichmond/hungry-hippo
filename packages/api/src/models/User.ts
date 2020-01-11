import { ObjectID } from 'mongodb';

export default interface User {
  _id?: ObjectID;
  username: string;
  firstname: string;
  lastname: string;
  phash: string;
  salt: string;
}
