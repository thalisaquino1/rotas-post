import { z } from "zod";


export const RegisterSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(8, "A senha precisa ter no mínimo 8 caracteres"),
  name: z.string().min(1, "O nome é obrigatório"),
});

export const LoginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(1, "A senha é obrigatória"),
});