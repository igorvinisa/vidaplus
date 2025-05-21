const loginService = require('../services/LoginService');

const LoginUser = async (req, res) => { 
    try {
        const result = await loginService.login(req.body);

        if(result.status === 200)
            return res.redirect('/home');
        else
            res.status(result.status).json(result.message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao fazer login.", error: error.message });
    }

};

module.exports = { LoginUser };    