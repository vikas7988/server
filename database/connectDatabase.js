const mongoose = require('mongoose')

async function connectDatabase(){


    const result = await  mongoose.connect('mongodb+srv://vikas:vikas@cluster0.t4bdehp.mongodb.net/assignment')

    return result
} 

module.exports = connectDatabase