import AppExpress from "../application/appExpress";
import IApplication from "../application/interfaces/appInterface";

class AppFactory {
    public static create(appType = "AppExpress") {
        const apps = new Map();
        apps.set("AppExpress", AppExpress);

        const app = apps.get(appType);
        return new app();
    }
}

export default AppFactory;
