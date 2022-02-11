const {account} = require('../models')

exports.login = (options) => {
    return account.findOne(options);
}