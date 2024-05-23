import { Request, Response } from "express";

class IndexControllers {
  index(req: Request, res: Response) {
    res.send("Hola desde el inicio osea el index");
  }
}

export const indexControllers = new IndexControllers();