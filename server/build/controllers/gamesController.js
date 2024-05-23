"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesControllers = void 0;
class GamesControllers {
    index(req, res) {
        res.send("games");
    }
}
exports.gamesControllers = new GamesControllers();
