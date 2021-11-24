const express = require('express')
const app = express()
const crud = require('./router')
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use('/api',crud)

app.listen(5000,()=>{
  console.log('server is running on the port..')
})