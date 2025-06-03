const homeModel = require('../models/HomeModel');

const HomeController = {
    showHome: async (req, res) => {
        try {
            const userId = req.session.userId;
            const userData = await homeModel.getUserData(userId);
            
            res.render('Home.ejs', { 
                userName: userData.nome 
            });
        } catch (error) {
            res.redirect('/');
        }
    }
};

module.exports = HomeController;