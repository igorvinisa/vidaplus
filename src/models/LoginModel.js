const pool = require('../database/database');
const bcrypt = require('bcrypt');

const LoginModel = {
    findByEmail: async (email) => {
        const [result] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
        return result.length > 0 ? result[0] : null;
    },
    
    verifyPassword: async (password, hashedPassword) => {
        return await bcrypt.compare(password, hashedPassword);
    },

    getUserById: async (id) => {
        const [result] = await pool.query('SELECT * FROM user WHERE id = ?', [id]);
        return result.length > 0 ? result[0] : null;
    }
};

module.exports = LoginModel;