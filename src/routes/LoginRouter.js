const express = require("express")
const router = express.Router()
const LoginController = require('../controllers/LoginController');

router.get('/', function(req, res){
    res.render('Login.ejs')
})

module.exports = router