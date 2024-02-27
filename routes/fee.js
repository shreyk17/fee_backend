const express = require("express");
const feeController = require("../controller/data");
const route = express.Router();

route.get("/", feeController.getData);

module.exports = route;
