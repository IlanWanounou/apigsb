const {verify} = require("node-php-password");
const {account} = require('../models')

exports.authenticateUser = (email, password, res) => {
    if (!email || !password) {
        res.send('Paramètres manquants');
        return false;
    } else {
        account.findOne({attributes: ['mdp']}).then(function (data) {
            let bool = verify(password, data.mdp);
            if (!bool) {
                res.send('Veuillez vérifier vos informations.');
                return false;
            }
        })
        return true;
    }
}
