const express = require("express");

const news = require("./news");

const Router = express.Router();

Router.use("/news", news);

module.exports = Router;
