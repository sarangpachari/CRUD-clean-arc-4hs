const { prisma } = require("../../../config/db.js");

module.exports = {
  create: async (data) => await prisma.product.create({ data }),
  getAll: async () => await prisma.product.findMany(),
  getById: async (id) => await prisma.product.findUnique({ where: { id } }),
  update: async (id, data) => await prisma.product.update({ where: { id }, data }),
  delete: async (id) => await prisma.product.delete({ where: { id } })
};
