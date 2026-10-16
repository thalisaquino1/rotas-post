import { Request, Response } from "express";
import * as userServiceController from "./user.service";
import Bcrypt from "bcrypt";
import * as authSchema from "../../schema/auth.schema";
import jwt from "jsonwebtoken";

export async function createUserController(req: Request, res: Response) {
  const validation = authSchema.RegisterSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(404).json({
      message: "Dados inválidos.",
    });
  }
  const { email, password, name } = validation.data;

  const newPassword = await Bcrypt.hash(password, 10);

  const newUser = await userServiceController.createUser(
    email,
    newPassword,
    name,
  );

  return res.status(201).json({
    status: "Usuario criado com sucesso",
  });
}

export async function loginUserController(req: Request, res: Response) {
  const validation = authSchema.LoginSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({
      message: "Dados inválidos.",
    });
  }
  const { email, password } = validation.data;

  const login = await userServiceController.loginUser(email, password);

  if (!login) {
    return res.status(401).json({
      message: "Email ou senha incorretos",
    });
  }

  const token = jwt.sign(
    {
      id: login.id,
      role: login.role,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "1h",
    },
  );

  return res.json({
    message: "Usuário Logado.",
    token 
  })
}
