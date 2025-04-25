const express = require("express")
const path = require('path');

const app = express()

app.set('views', path.join(__dirname, 'views'));

app.set('view-engine', 'ejs')

app.use(express.static('public'));

const homeRouter = require('./routes/HomeRouter')
const loginRouter = require('./routes/LoginRouter')
const signupRouter = require('./routes/SignupRouter')

app.use(homeRouter)
app.use(loginRouter)
app.use(signupRouter)

app.listen(3000, ()=>{
    console.log("executando na porta 3000")
})