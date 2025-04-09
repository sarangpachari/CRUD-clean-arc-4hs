const productRepo = require('../../infrastructure/database/repositories/productRepositoryImpl.js');
const crudFactory = require ('../../application/use-cases/crudFactory.js');

const productCrud = crudFactory(productRepo);

module.exports = {
  create: async (req, res) => {
    const product = await productCrud.create(req.body);
    res.status(201).json(product);
  },
  getAll: async (req, res) => {
    const products = await productCrud.getAll();
    res.json(products);
  },
  getById: async (req, res) => {
    const product = await productCrud.getById(req.params.id);
    res.json(product);
  },
  update: async (req, res) => {
    const product = await productCrud.update(req.params.id, req.body);
    res.json(product);
  },
  delete: async (req, res) => {
    await productCrud.delete(req.params.id);
    res.json({ message: 'Deleted' });
  }
};
