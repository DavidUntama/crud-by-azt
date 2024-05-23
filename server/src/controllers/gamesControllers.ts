import { Request, Response } from "express";
import getConnection from "../database";

class GamesControllers {
  public async list(req: Request, res: Response) {
      const games = await (await getConnection).query("SELECT * FROM games");
      res.json(games);
  }

  public async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const game =  await (await getConnection).query("SELECT * FROM games WHERE id = ?", [id]);
    res.json(game[0]);
  }
  
  public async create(req: Request, res: Response): Promise<void> {
    (await getConnection).query("INSERT INTO games SET ?", [req.body]);
    res.json({status: "Game Saved"});
  }
  
  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await (await getConnection).query("DELETE FROM games WHERE id = ?", [id]);    
    res.json({"status": "registro eliminado"});
  }
  public async update(req: Request, res: Response) {
    const { id } = req.params;
    await (await getConnection).query("UPDATE games SET ? WHERE id = ?", [req.body, id]);
    res.json({status: "Game updated"});
  }
}

export const gamesControllers = new GamesControllers();
