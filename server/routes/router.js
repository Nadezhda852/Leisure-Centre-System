const express = require('express');
const route = express.Router() 
const services=require('../services/render');
const controller=require('../controller/controller');

/**
 * Route Route
 * method GET/
 */
route.get('/',services.homeRoutes); 

/**
 * add athlet
 * method GET/add-athlet
 */

route.get('/add-athlet',services.add_athlet)

/**
 * update athlet
 * method GET/update-athlet
 */


route.get('/update-athlet',services.update_athlet)

//API
route.post('/api/athlets',controller.create);
route.get('/api/athlets',controller.find);
route.put('/api/athlets/:id',controller.update);
route.delete('/api/athlets/:id',controller.delete);

module.exports = route 