"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const connection = promise_mysql_1.default.createConnection(keys_1.default.database).then((cn) => {
    if (cn) {
        console.log("database conectada");
        return cn;
    }
    else {
        throw "No se pudo conectar a la base de datos";
    }
});
exports.default = connection;
