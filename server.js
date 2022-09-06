const express = require('express')
const cors = require('cors')
const square = require('./middlewares/validate-number')
const handleError = require('./error-handlers/500')

const app = express()


app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send('Hello Home')
})

app.all('/square',square,(req,res)=>{
    res.status(200).json({
        num : req.num
    })
})

app.use(handleError)

function start(PORT) {
    app.listen(PORT , ()=>{
        console.log(`Helllo the server is Running ... ${PORT} `)
    })
}

module.exports = {
    app,
    start

}
