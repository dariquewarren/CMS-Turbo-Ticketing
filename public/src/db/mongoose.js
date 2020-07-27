const validator = require('validator')
const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://turboticket:turboticket@turboticket.3l28m.mongodb.net/turboticket?retryWrites=true&w=majority', {
    useNewUrlParser:true ,
    useCreateIndex: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
})

