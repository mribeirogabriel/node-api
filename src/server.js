const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");
requireDir("./models");

const DB = process.env.DATABASE || "localhost";
const PORT = process.env.APP_PORT || "3333";
const Product = mongoose.model("Product");
const app = express();

mongoose.connect(`mongodb://${DB}:27017/nodeapi`);

app.use(cors());
app.use(express.json());
app.use("/api", require("./routers"));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
