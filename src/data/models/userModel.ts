import { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';

const usersCollection = 'users';

const userSchema = new Schema({
  _id: {
    type: Schema.Types.String,
    default: randomUUID,
    index: true
  },
  firstName: {
    type: Schema.Types.String
  },
  lastName: {
    type: Schema.Types.String
  },
  email: {
    type: Schema.Types.String
  }
});

export default model(usersCollection, userSchema);
