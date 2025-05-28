const loginService = require('../services/LoginService');

const LoginController = {
    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await loginService.login(email, password);
              req.session.userId = user.id;
            
            return res.redirect('/home');
        } catch (error) {
            if (error.message === 'Usuário não encontrado') {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === 'Senha inválida') {
                return res.status(401).json({ message: error.message });
            }
            return res.status(500).json({ 
                message: "Erro ao fazer login.", 
                error: error.message 
            });
        }
    }
};

module.exports = LoginController;