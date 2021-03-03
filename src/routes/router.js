const express = require('express');
const routes = express.Router();

const ProductController = require("../controllers/ProductController");

//API
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);


module.exports = routes;