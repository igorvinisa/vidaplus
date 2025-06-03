const SignupMiddleware = {
    validateSignup: (req, res, next) => {
        const { nome, email, password } = req.body;
        if (!nome || !email || !password) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios." });
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                message: "Formato de email inválido." 
            });
        }
        
        if (password.length < 6) {
            return res.status(400).json({ 
                message: "A senha deve ter no mínimo 6 caracteres." 
            });
        }

    next();
    }
}

module.exports =  SignupMiddleware;;