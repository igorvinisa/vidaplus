const signupService = require('../services/SignupService');

const RegisterUser = async (req, res) => {
    try {
        const result = await signupService.register(req.body);
        res.status(result.status).json(result.message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao cadastrar usuário.", error: error.message });
    }
};


module.exports = { RegisterUser };

