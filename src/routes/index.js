const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const PostController = require('../controllers/PostController')

const routes = express.Router();

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);
routes.delete('/categories/:id', CategoryController.delete);

routes.get('/categories/:category_id/posts', PostController.index);
routes.get('/posts', PostController.indexAll);
routes.get('/posts/:created_at', PostController.indexDate);
routes.post('/categories/:category_id/posts', PostController.store);
routes.put('/posts/:id', PostController.update);
routes.delete('/posts/:id', PostController.delete);

module.exports = routes;