//import area
const express = require('express');
const { loginRout } = require('./routes/loginRout');
const { registerRoute } = require('./routes/registerRoute');
const { teacherRoute } = require('./routes/teacherRout');
const app = express();
app.use(express.json());
require('dotenv').config();

app.use('/api',registerRoute);
app.use('/api',loginRout);
app.use('/api',teacherRoute)



let port = process.env.PORT ;
app.listen(port,()=>console.log('listening on port',port));