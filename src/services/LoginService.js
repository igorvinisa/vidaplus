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
    },
    async verifyHiredUserAndValidated(usuario_id) {
        const user = await LoginModel.getUserById(usuario_id);

        if (user.funcionario && user.validado)
            return true;
        else
            return false;
    },
    async getUserRedirectPath(usuario_id) {
        const isHiredAndValidated = await this.verifyHiredUserAndValidated(usuario_id);
        return isHiredAndValidated ? '/hiredhome' : '/home';
    }
};

module.exports = LoginService;