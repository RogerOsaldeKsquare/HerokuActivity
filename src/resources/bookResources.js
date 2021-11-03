// Modules
const express = require('express');
const BookResources = express.Router();

// Controllers
const { BookControllers } = require('../controllers');

//Middleware
const {Middleware} = require('../middleware')

// All book resources
BookResources.get('/', BookControllers.getAll);
BookResources.post('/', Middleware.author, Middleware.year, Middleware.duplicated, BookControllers.createBook);
BookResources.get('/:guid', BookControllers.getByGuid);
BookResources.put('/:guid', Middleware.author, Middleware.year, Middleware.duplicated,BookControllers.updateBook);
BookResources.delete('/:guid', BookControllers.deleteBook);

module.exports = BookResources;