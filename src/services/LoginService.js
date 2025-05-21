const loginModel = require('../models/LoginModel');

const LoginService = { 
    async login(userData) {
        const { email, password } = userData;

        const user = await loginModel.findByEmail(email);
        if (!user) {
            return { status: 401, message: "E-mail ou senha inválidos." };
        }

        const isPasswordValid = await loginModel.verifyPassword(password, user.password);
        if (!isPasswordValid) {
            return { status: 401, message: "E-mail ou senha inválidos." };
        }

        return { status: 200, message: "Login realizado com sucesso!", user };
    }

};

module.exports = LoginService;