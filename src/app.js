const express = require('express');
const app = express();
const path = require('path');
const { writeFileSync, readFileSync, readFile, writeFile } = require('fs');     
const { rejects } = require('assert');
const { data } = require('jquery');
const { resolve } = require('url');
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
    let buffer = readFileSync('users/users.json', "utf8")

    const users = JSON.parse(buffer)
    console.log(req.body);
    if (FindUser(users.user, req.body))
    {
        res.status(409).end() // User already registered or already exists
    }

    else
    {   
        users.user.push({name : req.body.name, password : req.body.password })

        writeFileSync('users/users.json', JSON.stringify(users))

        res.status(201).end() // User successfully registered
    }
})
