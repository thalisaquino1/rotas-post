import { Request, Response } from "express";
import { createDemand } from "./demand.service";

export async function createDemandController(req: Request, res: Response) {
  const { title, description } = req.body;

  const newDemand = await createDemand(title, description);
  return res.json({
    status: "Demanda criada com sucesso",
  });

}
