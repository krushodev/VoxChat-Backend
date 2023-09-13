import MongooseAdapter from "../adapters/mongooseAdapter";

class DbFactory {
    static create(dbType = "MongooseAdapter") {
        const dbs = new Map();
        dbs.set("MongooseAdapter", MongooseAdapter);

        const db = dbs.get(dbType);
        return new db();
    }
}

export default DbFactory;
