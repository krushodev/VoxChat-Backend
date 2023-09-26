import { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';

const usersCollection = 'users';

const userSchema = new Schema({
  _id: {
    type: Schema.Types.String,
    default: randomUUID
  },
  username: {
    type: Schema.Types.String,
    required: true
  },
  email: {
    type: Schema.Types.String,
    required: true
  },
  password: {
    type: Schema.Types.String,
    required: true
  }
});

export default model(usersCollection, userSchema);
