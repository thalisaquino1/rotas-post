import { prisma } from "../src/lib/prisma";
import Bcrypt from "bcrypt";

async function createAdmin() {
  try {
    const passwordAdmin = "thalis1234";
    const passwordCript = await Bcrypt.hash(passwordAdmin, 10);

    await prisma.user.create({
      data: {
        email: "admin@nike.com",
        name: "Thalis",
        password: passwordCript,
        role: "ADMIN",
      },
    });
    console.log("Admin criado com sucesso");
  } catch (error) {
    console.log("Deu erro na criação do admin");
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
