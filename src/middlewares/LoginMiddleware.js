const LoginMiddleware = {
    validateLogin: (req, res, next) => {
        const { email, password } = req.body;        if (!email || !password) {
            return res.status(400).json({ 
                message: "Email e senha são obrigatórios." 
            });
        }        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                message: "Formato de email inválido." 
            });
        }        if (password.length < 6) {
            return res.status(400).json({ 
                message: "A senha deve ter no mínimo 6 caracteres." 
            });
        }

        next();
    },    isAuthenticated: (req, res, next) => {
        if (!req.session || !req.session.userId) {
            return res.redirect('/login');
        }
        next();
    }
};

module.exports = LoginMiddleware;