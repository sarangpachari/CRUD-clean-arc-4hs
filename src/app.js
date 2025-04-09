const express = require("express");
const userRoutes = require("./presentation/routes/userRoutes.js");
const productRoutes = require("./presentation/routes/productRoutes.js");

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

module.exports = app;
