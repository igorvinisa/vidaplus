const express = require("express")
const router = express.Router()
const signupController = require('../controllers/signupController');


router.get('/signup', function(req, res){
    res.render('Signup.ejs')
})

router.post('/signup', signupController.RegisterUser)

module.exports = router