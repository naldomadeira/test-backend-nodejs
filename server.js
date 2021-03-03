const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const connectDB = require('./src/database/connection');

const app = express();
// app use json 
app.use(express.json());

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT;

// mongodb connection
connectDB();

// load models
require('./src/models/Product');

// load routers
app.use('/api', require('./src/routes/router'));


app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
