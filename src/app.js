const express = require('express')
const path = require('path')

const app = express()

app.listen(5000)

app.use('/static', express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res) =>
{   
    res.status(200).sendFile(path.join(__dirname, '..', 'img', 'pentle.png'))
})