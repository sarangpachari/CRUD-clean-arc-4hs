const productRepo = require("../../infrastructure/database/repositories/productRepositoryImpl.js");
const crudFactory = require("../../utils/crudFactory.js");

module.exports = crudFactory(productRepo);
