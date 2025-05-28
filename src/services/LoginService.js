const LoginModel = require('../models/LoginModel');

const LoginService = {
    async login(email, password) {
        const user = await LoginModel.findByEmail(email);
        
        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        const isValidPassword = await LoginModel.verifyPassword(password, user.password);
        
        if (!isValidPassword) {
            throw new Error('Senha inválida');
        }

        return user;
    }
};

module.exports = LoginService;