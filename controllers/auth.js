const {verify} = require("node-php-password");
const account = require('../services/account')
const auth = require('../services/auth');
const Cookies = require( "cookies" );


exports.login = (req, res) => {
    try {
        const {email, password} = req.body;
        if (!(email && password)) {
            return res.status(400).send("Email ou mot de passe manquant");
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
                res.status(200).send('OK');
            })
        } else {
            return res.status(400).send("Email ou mot de passe incorrect");
        }
    } catch (err) {
        console.log(err);
    }
}