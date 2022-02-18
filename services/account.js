const {
    account: Account,
} = require('../models');


exports.login = (options) => {
    return Account.findOne(options);
}

exports.update = async (values, options) => await Account.update(values, options);
