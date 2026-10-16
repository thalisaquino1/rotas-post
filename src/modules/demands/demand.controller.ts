import { Request, Response } from "express";
import { createDemand } from "./demand.service";
import  { z } from "zod";

export async function createDemandController(req: Request, res: Response) {

  const bodySchema = z.object({
    title: z.string(),
    description: z.string()
  })

  const {title, description } = bodySchema.parse(req.body)

  const newDemand = await createDemand(title, description);
  return res.status(201).json({
    status: "Demanda criada com sucesso",
  });

}
