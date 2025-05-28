const express = require("express");
const router = express.Router();
const loginController = require('../controllers/LoginController');
const loginMiddleware = require('../middlewares/LoginMiddleware');

router.get('/', function(req, res){
    res.render('Login.ejs')
});

router.post('/login', loginMiddleware.validateLogin, loginController.loginUser);

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;