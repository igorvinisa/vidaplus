const express = require("express")
const router = express.Router()

router.get('/home', function(req, res){
    res.render('Home.ejs')
})

module.exports = router