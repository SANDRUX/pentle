const express = require('express')
const path = require('path')

const app = express()

app.listen(5000)

app.use(express.static(path.resolve('..', 'public')))

app.get('/', (req, res) =>
{   
    res.status(200).sendFile(path.resolve('..', 'img', 'pentle.jpg'))
})