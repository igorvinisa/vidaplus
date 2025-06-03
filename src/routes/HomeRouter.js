const express = require("express");
const router = express.Router();
const homeController = require('../controllers/HomeController');
const loginMiddleware = require('../middlewares/LoginMiddleware');

router.get('/home', loginMiddleware.isAuthenticated, homeController.showHome);


module.exports = router;