const pool = require('../database/database');

const HomeModel = {
    getUserData: async (userId) => {
        const [result] = await pool.query(
            'SELECT u.nome FROM usuario u WHERE u.id = ?', 
            [userId]
        );
        return result[0];
    }
};

module.exports = HomeModel;