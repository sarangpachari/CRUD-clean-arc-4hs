const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function connectToMongo() {
  try {
    await prisma.$connect();
    console.log("MongoDB connected successfully via Prisma");
  } catch (error) {
    console.error("Failed to connect to MongoDB via Prisma:", error.message);
    process.exit(1);
  }
}

connectToMongo();

module.exports = { prisma };
