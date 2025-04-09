const createCRUDController = require("../utils/crudFactory");
const userRepo = require("../repositories/userRepo");

module.exports = createCRUDController(userRepo);
