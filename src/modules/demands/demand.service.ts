import { prisma } from "../../lib/prisma";

export async function createDemand(title: string, description: string) {
  await prisma.demands.create({
    data: {
      title,
      description,
    },
  });
}
