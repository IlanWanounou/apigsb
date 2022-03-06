const account = require('../models');

exports.login = (options) => {
    return account.findOne(options);
}

exports.update = async (values, options) => await account.update(values, options);
