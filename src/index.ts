import { PrismaClient } from "./prisma-client";

function createField<Type extends string>(options: {
  type: Type;
  resolve: (db: PrismaClient) => unknown;
}) {}

// function createField(options: {
//   type: string;
//   resolve: (db: PrismaClient) => unknown;
// }) {}

createField({
  type: "Boolean",
  resolve: async (db) => {
    await db.user.findUnique({ where: { id: 1 } });
  },
});
