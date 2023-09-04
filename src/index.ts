import dotenv from "dotenv";
import { Server } from "http";

import AppFactory from "./presentation/factories/appFactory";
import IApplication from "./presentation/application/interfaces/appInterface";
import createSocketServer from "./presentation/socket";

dotenv.config();

void (async () => {
    const app: IApplication = AppFactory.create(process.env.NODE_APPLICATION);
    app.init();
    app.build();
    const httpServer: Server = app.listen();

    createSocketServer(httpServer); 
})();