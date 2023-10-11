const express = require('express')

const filterRouter = require('./router/filterData')
const getRouter =  require('./router/getData')
const connectDatabase = require('./database/connectDatabase')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/fil',filterRouter)
app.use('/get',getRouter)



connectDatabase()
.then(()=>{
    app.listen(3035, ()=>{
        console.log('Mongo Connected server start listeing at 3035')
    })
}).catch(()=>(console.log("error")))



