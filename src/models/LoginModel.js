const pool = require('../database/database');
const bcrypt = require('bcrypt');

const LoginModel = {
    async findByEmail(email) {
        const [result] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
        return result.length > 0 ? result[0] : null;
    },  
    
    async verifyPassword(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword);
    }
};

module.exports = LoginModel;