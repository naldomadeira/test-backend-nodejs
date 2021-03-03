const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT;

// mongodb connection

// load routers
app.get('/', (req, res) =>  {
    res.send('OK');
});

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
