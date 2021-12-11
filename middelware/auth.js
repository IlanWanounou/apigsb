const {verify} = require("node-php-password");
const {account} = require('../models')

exports.authenticateUser = (email, password, res, next) => {
    if (!email || !password) {
        res.send('Paramètres manquants').end();
    } else {
        account.findOne({where: {email: email}, attributes: ['mdp']}).then(data => {
            if (!data) {
                res.status(400).json({
                    status: 'error',
                    error: 'Veuillez vérifier votre email',
                }).end();
            } else if (!verify(password, data.mdp)) {
                res.status(400).json({
                    status: 'error',
                    error: 'Veuillez vérifier vos informations.'
                }).end();
            } else {
                next();
            }
        })
    }
}
