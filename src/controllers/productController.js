const createCRUDController = require("../utils/crudFactory");
const productRepo = require("../repositories/productRepo");

module.exports = createCRUDController(productRepo);
