import dotenv from "dotenv";

import AppFactory from "./presentation/factories/appFactory";
import IApplication from "./presentation/application/interfaces/appInterface";

dotenv.config();

void (async () => {
    const app: IApplication = AppFactory.create(process.env.NODE_APPLICATION);
    app.init();
    app.build();
    app.listen();
})();