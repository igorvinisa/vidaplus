const pool = require('../database/database');
const bcrypt = require('bcrypt');

const LoginModel = {
    findByEmail: async (email) => {
        const [result] = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
        return result.length > 0 ? result[0] : null;
    },
    
    verifyPassword: async (password, hashedPassword) => {
        return await bcrypt.compare(password, hashedPassword);
    },

    getUserById: async (usuario_id) => {
        const [result] = await pool.query('SELECT * FROM usuario WHERE id = ?', [usuario_id]);
        return result.length > 0 ? result[0] : null;
    }
};

module.exports = LoginModel;