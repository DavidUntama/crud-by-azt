"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControllers_1 = require("../controllers/gamesControllers");
class GamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", gamesControllers_1.gamesControllers.list);
        this.router.get("/:id", gamesControllers_1.gamesControllers.getOne);
        this.router.post("/", gamesControllers_1.gamesControllers.create);
        this.router.delete("/:id", gamesControllers_1.gamesControllers.delete);
        this.router.put("/:id", gamesControllers_1.gamesControllers.update);
    }
}
exports.default = new GamesRoutes().router;
