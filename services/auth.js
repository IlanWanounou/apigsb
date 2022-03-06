const jwt = require('jsonwebtoken')
require('dotenv').config();
const Cookies = require( "cookies" );

exports.generateToken = (user) => {
    return jwt.sign(
        {
            userId: user.id,
            email: user.email,
        },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        },
    );
}

exports.getIdVisteur = (req, res) => {
    let cookie = new Cookies(req, res).get('token');
    const regex = /"/ig;
    cookie = cookie.replace(regex, '');
    const id = jwt.verify(cookie, process.env.TOKEN_KEY);
    return id.userId;
}