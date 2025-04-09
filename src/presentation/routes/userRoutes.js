const express = require("express");
const controller = require("../controllers/userController.js");
const router = express.Router();

router.route("/").post(controller.create).get(controller.getAll);
router
  .route("/:id")
  .get(controller.getById)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
