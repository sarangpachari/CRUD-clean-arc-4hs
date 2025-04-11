const express = require("express");

module.exports = (userController) => {
  const router = express.Router();

  router.route("/").post(userController.create).get(userController.getAll);
  router
    .route("/:id")
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.delete);

  return router;
};
