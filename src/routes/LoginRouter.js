const express = require("express")
const router = express.Router()
const loginController = require('../controllers/LoginController');

router.get('/', function(req, res){
    res.render('Login.ejs')
})

router.post('/login', loginController.LoginUser)

module.exports = router