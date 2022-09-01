const express = require('express');
const { registerController } = require('../controllers/registerController');
const registerRoute = express.Router();

registerRoute.get('/register',registerController)


exports.registerRoute=registerRoute