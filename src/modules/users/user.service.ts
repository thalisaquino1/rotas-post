import { prisma } from "../../lib/prisma";
import Bcrypt from "bcrypt";

export async function createUser(
  email: string,
  password: string,
  name: string,
) {
  await prisma.user.create({
    data: {
      email,
      password,
      name
    },
  });
}

export async function loginUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return false;
  }

  const verifyPassword = Bcrypt.compare(password, user.password);
   
  if (!verifyPassword) {
    return false
  }
  
  return user
}
