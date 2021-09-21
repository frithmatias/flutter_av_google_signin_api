const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// body-parser
app.use( bodyParser.urlencoded({ extended: true }) );

app.use('/auth', require('./routes/auth.routes'));

const port = process.env.PORT || 3000;
app.listen( port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});


