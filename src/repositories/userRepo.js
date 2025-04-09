const prisma = require("../config/db");

const userRepo = {
  create: (data) => prisma.user.create({ data }),
  getAll: () => prisma.user.findMany(),
  getById: (id) => prisma.user.findUnique({ where: { id } }),
  update: (id, data) => prisma.user.update({ where: { id }, data }),
  remove: (id) => prisma.user.delete({ where: { id } }),
};

module.exports = userRepo;
