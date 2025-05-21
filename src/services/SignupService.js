const signupModel = require('../models/SignupModel');

const SignupService = {
    async register(userData) {
        const { nome, email, password } = userData;

        const existingUser = await signupModel.findByEmail(email);
        if (existingUser) {
            return { status: 400, message: "E-mail já cadastrado." };
        }

        await signupModel.createUser(nome, email, password);
        return { status: 201, message: "Cadastro realizado com sucesso!" };
    }
}

module.exports = SignupService;