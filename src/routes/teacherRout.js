
const express = require('express');
const teacherRoute = express.Router();
const { teacherController } = require('../controllers/teacherController');

const jwt = require('jsonwebtoken');
const { authMiddleware } = require('../middlewares/authMiddleware');




teacherRoute.post('/teacher/create',authMiddleware,teacherController);


//2. Named Export
exports.teacherRoute = teacherRoute;