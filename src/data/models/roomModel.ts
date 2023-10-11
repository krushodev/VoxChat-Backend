import { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';

const roomsCollection = 'rooms';

const roomSchema = new Schema({
  _id: {
    type: Schema.Types.String,
    default: randomUUID
  },
  name: {
    type: Schema.Types.String,
    required: true
  },
  topics: [
    {
      type: Schema.Types.String
    }
  ],
  messages: [
    {
      _id: {
        type: Schema.Types.String,
        default: randomUUID
      },
      text: {
        type: Schema.Types.String,
        required: true
      },
      user: {
        type: Schema.Types.String,
        index: true,
        ref: 'users'
      },
      date: {
        type: Schema.Types.Date,
        default: Date.now()
      }
    }
  ],
  members: [
    {
      _id: {
        type: Schema.Types.String,
        default: randomUUID
      },
      user: {
        type: Schema.Types.String,
        index: true,
        ref: 'users'
      }
    }
  ],
  owner: {
    type: Schema.Types.String,
    index: true,
    ref: 'users'
  },
  isPrivate: {
    type: Schema.Types.Boolean,
    default: false
  },
  password: {
    type: Schema.Types.String,
    default: null
  }
});

roomSchema.pre('find', function () {
  this.populate('messages.user');
  this.populate('members.user');
  this.populate('owner');
});

roomSchema.pre('findOne', function () {
  this.populate('messages.user');
  this.populate('members.user');
  this.populate('owner');
});

roomSchema.pre('save', function () {
  this.populate('messages.user');
  this.populate('members.user');
  this.populate('owner');
});

export default model(roomsCollection, roomSchema);
