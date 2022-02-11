const jwt = require('jsonwebtoken')
require('dotenv').config();
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