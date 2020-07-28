const validator = require('validator')
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

const uri = process.env.MONGODB_URI
mongoose.connect(uri, {
    useNewUrlParser:true ,
    useCreateIndex: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
})
console.log(uri)

