import { Schema, SchemaType, model } from 'mongoose';
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
      room: {
        type: Schema.Types.String,
        index: true,
        ref: 'rooms',
        required: true
      },
      isOwner: {
        type: Schema.Types.Boolean,
        required: true
      }
    }
  ]
});

userSchema.pre('find', function () {
  this.populate('rooms.room');
});

export default model(usersCollection, userSchema);
