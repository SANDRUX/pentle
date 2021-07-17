const express = require('express');
const app = express();
const path = require('path');
const http = require('http')
const io = require('socket.io')(3000, 
{
    cors :
    {
        origin: ['http://localhost:5000']
    }
})
const { writeFileSync, readFileSync, readFile, writeFile } = require('fs');     
const { FindUser } = require('./FindUser')

app.listen(5000, () => 
{
    console.log("Server is listening on port 5000")
})

app.use(express.urlencoded({extended: true}))

app.use('/public', express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res) => 
{
    res.status(200).sendFile(path.join(__dirname, '..', 'public/main.html'))
})

app.post('/register', (req, res) =>
{
    const buffer = readFileSync('db/users/users.json', 'utf-8')

    const users = JSON.parse(buffer)

    if (FindUser(users.user, req.body))
    {
        res.status(409).end() // User already registered or already exists
    }

    else
    {   
        users.user.push({name : req.body.name, password : req.body.password })

        writeFileSync('db/users/users.json', JSON.stringify(users))
        
        res.status(201).end() // User successfully registered
    }
})

app.post('/login', (req, res) =>
{
    const buffer = readFileSync('db/users/users.json', 'utf-8')

    const users = JSON.parse(buffer)

    const user = FindUser(users.user, req.body)

    if (user)
    {
        if (req.body.password === user.password)
        {
            res.status(201).end()
        }

        else
        {
            res.status(401).end()
        }
    }

    else
    {
        res.status(404).end()
    }
})

io.on('connection', socket => 
{
    console.log('USER CONNECTED!')
})








