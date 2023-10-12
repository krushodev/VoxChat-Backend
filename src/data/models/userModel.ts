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
  image: {
    type: Schema.Types.String,
    default: null
  },
  password: {
    type: Schema.Types.String,
    required: true
  },
  rooms: [
    {
      _id: {
        type: Schema.Types.String,
        default: randomUUID
      },
      room: {
        type: Schema.Types.String,
        required: true
      },
      isOwner: {
        type: Schema.Types.Boolean,
        required: true
      }
    }
  ]
});

export default model(usersCollection, userSchema);
