const {account} = require('../models')

exports.findAll = (req, res) => {
    account.findAll().then(function(success)
    {
        if(success){res.json(success);
    }
        else{res.send(error);
    }});


}