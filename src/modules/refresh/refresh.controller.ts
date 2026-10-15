import { Request, Response } from "express";

export async function refreshToken(_req: Request, res: Response) {
  const token = "token123";

  return res.json({
    message: "Token renovado com sucesso",
  });
}
