const express = require("express");

// var whitelist = ['http://localhost:4000/v1 ', 'http://example2.com']
// var corsoption = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

const Router = express.Router();
const NewsController = require("../../controllers/news");

Router.get("/getall", NewsController.getAllNews);
module.exports = Router;
