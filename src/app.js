const express = require("express");
const app = express();
app.use(express.json());

const userRepoImpl = require("./infrastructure/database/repositories/userRepositoryImpl");
const productRepoImpl = require("./infrastructure/database/repositories/productRepositoryImpl");

const createUserUseCase = require("./application/use-cases/userUseCase");
const createProductUseCase = require("./application/use-cases/productUseCase");

const userUseCase = createUserUseCase(userRepoImpl);
const productUseCase = createProductUseCase(productRepoImpl);

const userController = require("./presentation/controllers/userController")(userUseCase);
const productController = require("./presentation/controllers/productController")(productUseCase);

const userRoutes = require("./presentation/routes/userRoutes")(userController);
const productRoutes = require("./presentation/routes/productRoutes")(productController);

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

module.exports = app;
