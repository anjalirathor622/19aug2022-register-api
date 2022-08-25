//import area
const express = require('express');
const { registerRoute } = require('./routes/registerRoute');
const app = express();
app.use(express.json());
require('dotenv').config();

app.use('/api',registerRoute)


let port = process.env.PORT ;
app.listen(port,()=>console.log('listening on port',port));