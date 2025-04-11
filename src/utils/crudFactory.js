module.exports = (repository) => ({
  create: (data) => repository.create(data),
  getAll: () => repository.getAll(),
  getById: (id) => repository.getById(id),
  update: (id, data) => repository.update(id, data),
  delete: (id) => repository.delete(id)
});
