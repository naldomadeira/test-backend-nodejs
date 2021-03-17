const express = require('express');
const routes = express.Router();

const ProductController = require("../controllers/ProductController");
const CategoryController = require("../controllers/CategoryController");

//API
routes.get('/products', ProductController.find);

routes.get('/products/:id', ProductController.show);

routes.post('/products', ProductController.store);

routes.put('/products/:id', ProductController.update);

routes.delete('/products/:id', ProductController.destroy)

routes.get('/categories', CategoryController.find);

routes.post('/categories', CategoryController.store);

routes.put('/categories/:id', CategoryController.update);


module.exports = routes;