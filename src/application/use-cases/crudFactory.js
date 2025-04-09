const crudFactory = (repo) => ({
  create: async (data) => await repo.create(data),
  getAll: async () => await repo.findAll(),
  getById: async (id) => await repo.findById(id),
  update: async (id, data) => await repo.update(id, data),
  delete: async (id) => await repo.delete(id),
});

module.exports = crudFactory;
