const mongoose = require('mongoose')

const myschema = mongoose.Schema({
    "end_year": Number,
    "intensity": Number,
    "sector": String,
    "topic": String,
    "insight": String,
    "url": String,
    "region": String,
    "start_year": String,
    "impact": String,
    "added": Date,
    "published": Date,
    "country": String,
    "relevance": Number,
    "pestle": String,
    "source": String,
    "title": String,
    "likelihood": Number
})

const Json = mongoose.model('Json', myschema)

module.exports = Json