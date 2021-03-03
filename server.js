const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const connectDB = require('./src/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT;

// mongodb connection
connectDB();

// load routers
app.use('/', require('./src/routes/router'));

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
