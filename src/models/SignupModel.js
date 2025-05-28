const pool = require('../database/database');
const bcrypt = require('bcrypt');

const SignupModel = {
    async findUserByEmail(email) {
        const [result] = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
        return result.length > 0 ? result[0] : null;
    },

    async createPerson(nome, cpf, telefone, nome_mae, data_nascimento) {
        const [result] = await pool.query('INSERT INTO pessoa (nome, cpf, telefone, nome_mae, data_nascimento) VALUES (?, ?, ?, ?, ?)', 
        [nome, cpf, telefone, nome_mae, data_nascimento]);
        
        return result.insertId;
    },

    async createAddress(pessoa_id, cidade, bairro, rua, numero, estado, cep) {
        await pool.query('INSERT INTO endereco (pessoa_id, cidade, bairro, rua, numero, estado, cep) VALUES (?, ?, ?, ?, ?, ?, ?)', 
        [pessoa_id, cidade, bairro, rua, numero, estado, cep]);
    },

    async createUser(pessoa_id, nome, email, password, funcionario = false, validado = false, papel) {
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query('INSERT INTO usuario (pessoa_id, nome, email, password, funcionario, validado) VALUES (?, ?, ?, ?, ?, ?)', 
        [pessoa_id, nome, email, hashedPassword, funcionario, validado, papel]);
    }
};

module.exports = SignupModel;