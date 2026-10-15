import { Request, Response } from "express";
import * as userServiceController from "./user.service";
import Bcrypt from "bcrypt";

export async function createUserController(req: Request, res: Response) {
  const { email, password, name } = req.body;
  const newPassword = await Bcrypt.hash(password, 10);

  const newUser = await userServiceController.createUser(email, newPassword, name);

  return res.json({
    status: "Usuario criado com sucesso",
  });
}

export async function loginUserController (req: Request, res: Response) {
  const { email, password } = req.body
  const login = await userServiceController.loginUser(email, password)

  if (!login) {
    return res.status(401).json({
      message: "Email ou senha incorretos"
    })
  }
  return res.status(200).json({
    message: "Usuário Encontrado com sucesso"
  })
}