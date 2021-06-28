const app = require('express')()
const path = require('path')

app.listen(5000)

app.get('/', (req, res) =>
{
    const pentlePath = path.resolve('..', 'img', 'pentle.jpg')
    
    res.status(200).sendFile(pentlePath)
})

app.all('/', (req, res) => 
{
    res.status(404).send('Resource not found')
})

