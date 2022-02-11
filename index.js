const express = require('express');
const app = express();
const account = require('./routes/account');
const auth = require("./routes/auth");
app.use(express.json());


app.listen(3000, () => {
    console.log('On');
})

app.use('/auth', auth)

