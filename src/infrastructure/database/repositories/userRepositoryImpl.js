const prisma = require("../../../config/db.js");

const userRepository = {
  create: (data) => prisma.user.create({ data }),
  findAll: () => prisma.user.findMany(),
  findById: (id) => prisma.user.findUnique({ where: { id } }),
  update: (id, data) => prisma.user.update({ where: { id }, data }),
  delete: (id) => prisma.user.delete({ where: { id } }),
};

module.exports = userRepository;
