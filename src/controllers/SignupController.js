const signupService = require('../services/SignupService');

const SignupController = {
    registerUser: async (req, res) => {
        try {
            await signupService.register(req.body);
            return res.status(201).json({ 
                message: "Cadastro realizado com sucesso!" 
            });
        } catch (error) {
            if (error.message === 'E-mail já cadastrado') {
                return res.status(400).json({ 
                    message: error.message 
                });
            }
            return res.status(500).json({ 
                message: "Erro ao cadastrar usuário.", 
                error: error.message 
            });
        }
    }
};

module.exports = SignupController;