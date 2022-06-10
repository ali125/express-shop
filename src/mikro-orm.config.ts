import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    // entities: [],
    dbName: process.env.DB_Name,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    type: process.env.DB_TYPE || 'postgresql',
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];