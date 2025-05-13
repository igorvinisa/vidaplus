const express = require("express")
const router = express.Router()
const signupController = require('../controllers/signupController');
const signupMiddleware = require('../middlewares/SignupMiddleware');

router.get('/signup', function(req, res){
    res.render('Signup.ejs')
})

router.post('/signup', signupMiddleware.validateSignup, signupController.RegisterUser)

module.exports = router