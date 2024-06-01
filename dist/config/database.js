"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const client_1 = require("../entity/client");
exports.default = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "sushiapp",
    entities: [client_1.Client],
    synchronize: true,
    logging: false
});
