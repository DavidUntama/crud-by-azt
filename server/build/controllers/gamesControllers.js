"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesControllers = void 0;
const database_1 = __importDefault(require("../database"));
class GamesControllers {
    async list(req, res) {
        const games = await (await database_1.default).query("SELECT * FROM games");
        res.json(games);
    }
    async getOne(req, res) {
        const { id } = req.params;
        const game = await (await database_1.default).query("SELECT * FROM games WHERE id = ?", [id]);
        res.json(game[0]);
    }
    async create(req, res) {
        (await database_1.default).query("INSERT INTO games SET ?", [req.body]);
        res.json({ status: "Game Saved" });
    }
    async delete(req, res) {
        const { id } = req.params;
        await (await database_1.default).query("DELETE FROM games WHERE id = ?", [id]);
        res.json({ "status": "registro eliminado" });
    }
    async update(req, res) {
        const { id } = req.params;
        await (await database_1.default).query("UPDATE games SET ? WHERE id = ?", [req.body, id]);
        res.json({ status: "Game updated" });
    }
}
exports.gamesControllers = new GamesControllers();
