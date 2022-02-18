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
            raw: true,
            where: {
                email
            },
        }
        const user = account.login(options);

        if (user) {
            user.then(data => {
                if(verify(password, data.mdp)) {
                    const token = auth.generateToken(data);
                    const reponse = {
                        statut: "OK",
                        message: "Email et mot de passe valide",
                        autorisation: true,
                        AUTH_TOKEN: token,
                    }

                    account.update({AUTH_TOKEN: token}, {where: {id: data.id}})
                     res.status(200).json(reponse);
                } else {
                    const reponse = {
                        statut: "error",
                        message: "Email ou mot de passe incorrect",
                        autorisation: false
                    }
                    return res.status(200).json(reponse);
                }
            })
        } else {
            const reponse = {
                statut: "error",
                message: "Email incorrect",
                autorisation: false
            }
            return res.status(200).json(reponse);
        }
    } catch (err) {
        console.log(err);
    }
}