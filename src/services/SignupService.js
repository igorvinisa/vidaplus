const SignupModel = require('../models/SignupModel');

const RegisterUser = {
    async register(userData) {
        const { nome, email, password } = userData;

        const existingUser = await SignupModel.findByEmail(email);
        if (existingUser) {
            return { status: 400, message: "E-mail já cadastrado." };
        }

        await SignupModel.createUser(nome, email, password);
        return { status: 201, message: "Cadastro realizado com sucesso!" };
    }
}

module.exports = RegisterUser;