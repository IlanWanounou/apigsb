const {verify} = require("node-php-password");
const account = require('../services/account')
const auth = require('../services/auth');
const Cookies = require( "cookies" );


exports.login = (req, res) => {
    try {
        const {email, password} = req.body;
        if (!(email && password)) {
            const reponse = {
                statut: "error",
                message: "Email ou mot de passe manquant",
                autorisation: false
            }
            return res.status(200).json(reponse);
        }
        const options = {
            where: {
                email
            },
        }
        const user = account.login(options);

        if (user) {
            user.then(data => {
                let cookies = new Cookies(req, res)
                const token = auth.generateToken(data);
                cookies.set('token', token, {
                })
                const reponse = {
                    statut: "OK",
                    message: "Email et mot de passe valide",
                    autorisation: true
                }
                res.status(200).json(reponse);
            })
        } else {
            const reponse = {
                statut: "error",
                message: "Email ou mot de passe incorrect",
                autorisation: false
            }
            return res.status(200).json(reponse);
        }
    } catch (err) {
        console.log(err);
    }
}