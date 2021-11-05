// Modules
const express = require('express');
const ActivityResources = express.Router();

// Controllers
const { ActivityControllers } = require('../controllers');

//Middleware
const {Middleware} = require('../middleware')

// All activity resources
ActivityResources.get('/', ActivityControllers.getAll);
ActivityResources.post('/', Middleware.author, Middleware.duplicated, ActivityControllers.createActivity);
ActivityResources.get('/:id', ActivityControllers.getById);
ActivityResources.put('/:id', Middleware.author, Middleware.duplicated,ActivityControllers.updateActivity);
ActivityResources.delete('/:id', ActivityControllers.deleteActivity);

module.exports = ActivityResources;