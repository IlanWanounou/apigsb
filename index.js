const express = require('express')
const app = express()

const account = require('./routes/account');
const bdd = require('./Database');

app.listen(3000, () => {
    console.log('On');
})


app.use('/account', account);