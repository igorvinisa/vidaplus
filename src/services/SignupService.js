const signupModel = require('../models/SignupModel');

const SignupService = {
    async register(userData) {
        const { nome, email, password, cpf, telefone, nome_mae, data_nascimento } = userData;

        const existingUser = await signupModel.findUserByEmail(email);
        if (existingUser) {
            throw new Error('E-mail já cadastrado');
        }
        const newPersonId = await signupModel.createPerson(nome, cpf, telefone, nome_mae, data_nascimento);

        console.log(newPersonId);
        const newAddress = await  signupModel.createAddress(newPersonId, userData.cidade, userData.bairro, userData.rua, userData.numero, userData.estado, userData.cep);   
        const newUser = await signupModel.createUser(newPersonId, userData.nome, userData.email, userData.password);
    }
};

module.exports = SignupService;