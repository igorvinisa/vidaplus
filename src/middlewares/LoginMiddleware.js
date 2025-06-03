const LoginMiddleware = {
    validateLogin: (req, res, next) => {
        const { email, password } = req.body;        
        
            if (!email || !password) {
            return res.status(400).json({ 
                message: "Email e senha são obrigatórios." 
            });
        }

        next();
        
    },  isAuthenticated: (req, res, next) => {
        if (!req.session || !req.session.userId) {
            return res.redirect('/login');
        }
        next();
    }
};

module.exports = LoginMiddleware;