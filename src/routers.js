const express = require("express");
const routers = express.Router();

const ProductController = require("./controllers/ProductController");
routers.get("/products", ProductController.index);
routers.get("/products/:id", ProductController.show);
routers.post("/products", ProductController.store);
routers.put("/products/:id", ProductController.update);
routers.delete("/products/:id", ProductController.destroy);

module.exports = routers;
