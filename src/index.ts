import dotenv from "dotenv";
import { Server } from "http";

import DbFactory from "./data/factories/dbFactory";
import AppFactory from "./presentation/factories/appFactory";

import IAdapter from "./data/adapters/interfaces/adapterInterface";
import IApplication from "./presentation/application/interfaces/appInterface";

import createSocketServer from "./presentation/socket";

dotenv.config();

void (async () => {
  const db: IAdapter = DbFactory.create(process.env.DB_ADAPTER);
  db.init(process.env.DB_URI!);

  const app: IApplication = AppFactory.create(process.env.NODE_APPLICATION);
  app.init();
  app.build();
  const httpServer: Server = app.listen();

  createSocketServer(httpServer);
})();
