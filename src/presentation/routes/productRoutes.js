const express = require("express");

module.exports = (productController) => {
  const router = express.Router();

  router
    .route("/")
    .post(productController.create)
    .get(productController.getAll);
  router
    .route("/:id")
    .get(productController.getById)
    .put(productController.update)
    .delete(productController.delete);

  return router;
};
