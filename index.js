const express = require('express');
const app = express();
const account = require('./routes/account');
app.use(express.json());
const {authenticateUser} = require("./middelware/auth");


app.listen(3000, () => {
    console.log('On');
})


app.use('/', function (req, res, next) {
    authenticateUser(req.body[0].email, req.body[0].password, res, next);
});

app.use('/account', account);
//

