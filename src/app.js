const express = require('express')
const app = express()
const path = require('path')
const { writeFileSync, readFileSync, readFile, writeFile } = require('fs')
const { rejects } = require('assert')

app.listen(5000)

app.use('/public', express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res) =>
{   
    res.status(200).sendFile(path.join(__dirname, '..', 'public/startPage.html'))
})
app.post('/user', (req, res)=>
{
    console.log(req.body);
})

app.post('/user/:user', (req, res) =>
{
    let buffer = readFileSync('users/users.json', "utf8")

    const users = JSON.parse(buffer)

    users.name.push(req.params.user)

    const data = JSON.stringify(users)

    writeFileSync('users/users.json', data)

    res.send('user successfully registered!').stat