import express from "express";
import cors from "cors";
import IApplication from "./interfaces/appInterface";

class AppExpress implements IApplication {
  private app = express();
  private PORT = process.env.NODE_PORT;

  init() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      next();
    });
  }

  build() {}

  listen() {
    return this.app.listen(this.PORT, () => {
      console.log(`Server running on port ${this.PORT}`);
    });
  }
}

export default AppExpress;
