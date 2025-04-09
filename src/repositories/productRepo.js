const prisma = require("../config/db");

const productRepo = {
  create: (data) => prisma.product.create({ data }),
  getAll: () => prisma.product.findMany(),
  getById: (id) => prisma.product.findUnique({ where: { id } }),
  update: (id, data) => prisma.product.update({ where: { id }, data }),
  remove: (id) => prisma.product.delete({ where: { id } }),
};

module.exports = productRepo;
