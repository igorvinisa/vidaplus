const pool = require('../database/database');
const bcrypt = require('bcrypt');

const SignupModel = {
    async findByEmail(email) {
        const [result] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
        return result.length > 0 ? result[0] : null;
    },

    async createUser(nome, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query('INSERT INTO user (nome, email, password) VALUES (?, ?, ?)', [nome, email, hashedPassword]);
    }
};

module.exports = SignupModel;