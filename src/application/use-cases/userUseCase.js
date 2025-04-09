const userRepo = require("../../infrastructure/database/repositories/userRepositoryImpl.js");
const crudFactory = require("../../utils/crudFactory.js");

module.exports = crudFactory(userRepo);
