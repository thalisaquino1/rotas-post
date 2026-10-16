import { NextFunction, Request, Response} from "express";
import  jwt  from "jsonwebtoken";

export function Authenticate(req:Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    return res.json({
      message: "Token não informado."
    })
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    next()
  } catch (error) {
    console.error(error);
  }
} 