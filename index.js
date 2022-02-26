const express = require('express');
const app = express();
const auth = require("./routes/auth");
const fichefrais = require('./routes/fichefrais')
app.use(express.json());


app.listen(3000, () => {
    console.log('On');
})

app.use('/auth', auth);
app.use('/fichefrais', fichefrais);