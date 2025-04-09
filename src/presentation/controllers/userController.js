const userRepo = require("../../infrastructure/database/repositories/userRepositoryImpl.js");
const crudFactory = require("../../application/use-cases/crudFactory.js");

const userCrud = crudFactory(userRepo);

module.exports = {
  create: async (req, res) => {
    const user = await userCrud.create(req.body);
    res.status(201).json(user);
  },
  getAll: async (req, res) => {
    const users = await userCrud.getAll();
    res.json(users);
  },
  getById: async (req, res) => {
    const user = await userCrud.getById(req.params.id);
    res.json(user);
  },
  update: async (req, res) => {
    const user = await userCrud.update(req.params.id, req.body);
    res.json(user);
  },
  delete: async (req, res) => {
    await userCrud.delete(req.params.id);
    res.json({ message: "Deleted" });
  },
};
