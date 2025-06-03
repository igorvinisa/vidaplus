const express = require("express")
const path = require('path');
const app = express()
const session = require('express-session');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));

app.set('view-engine', 'ejs')

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000
    }
}));
const homeRouter = require('./routes/HomeRouter')
const loginRouter = require('./routes/LoginRouter')
const signupRouter = require('./routes/SignupRouter')

app.use(homeRouter)
app.use(loginRouter)
app.use(signupRouter)




module.exports = app;