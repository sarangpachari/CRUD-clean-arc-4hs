const { prisma } = require("../../../config/db.js");

module.exports = {
  create: async (data) => await prisma.user.create({ data }),
  getAll: async () => await prisma.user.findMany(),
  getById: async (id) => await prisma.user.findUnique({ where: { id } }),
  update: async (id, data) => await prisma.user.update({ where: { id }, data }),
  delete: async (id) => await prisma.user.delete({ where: { id } }),
};
