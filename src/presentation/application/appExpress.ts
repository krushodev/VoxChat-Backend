import express from 'express';
import cors from 'cors';

import roomRouter from '../routes/roomRouter';
import sessionRouter from '../routes/sessionRouter';
import userRouter from '../routes/userRouter';

import IApplication from './interfaces/appInterface';

class AppExpress implements IApplication {
  private app = express();
  private PORT = process.env.NODE_PORT;

  init() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      next();
    });
  }

  build() {
    this.app.use('/api/sessions', sessionRouter);
    this.app.use('/api/rooms', roomRouter);
    this.app.use('/api/users', userRouter);
  }

  listen() {
    return this.app.listen(this.PORT, () => {
      console.log(`Server running on port ${this.PORT}`);
    });
  }
}

export default AppExpress;
