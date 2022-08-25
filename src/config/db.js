const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_DB}.bmcybml.mongodb.net/?retryWrites=true&w=majority`)
.then(
    d=>console.log('db connected')

).catch(
    e=>console.log('error connecting')
)

exports.mongoose=mongoose