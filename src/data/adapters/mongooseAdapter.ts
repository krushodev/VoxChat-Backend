import mongoose from 'mongoose';
import IAdapter from './interfaces/adapterInterface';

class MongooseAdapter implements IAdapter {
  async init(uri: string) {
    try {
      await mongoose.connect(uri);
      console.log('Database connected');
    } catch (err) {
      console.log('Error connecting to database: ', err);
    }
  }

  async close() {
    try {
      await mongoose.connection.close();
      console.log('Database disconnected');
    } catch (err) {
      console.log('Error disconnecting to database: ', err);
    }
  }
}

export default MongooseAdapter;
