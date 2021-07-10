const express = require('express')
const app = express()
const path = require('path')
const { writeFileSync, readFileSync, readFile, writeFile } = require('fs')
const { rejects } = require('assert')

async function emptyJson(fileName)
{
    return new Promise((resolve, reject) =>
    {
        readFile(fileName, (err, data) => 
        {
            if (err)
            {
                reject(err)
            }

            else
            {
                let file_data = 
                {
                    size : data.length,
                    content : data
                }

                resolve(file_data)    
            }
        })
    })
}

app.listen(5000)

app.use('/public', express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res) =>
{   
    res.status(200).sendFile(path.join(__dirname, '..', 'public/startPage.html'))
})

app.get('/user/:user', (req, res) =>
{
    // emptyJson('users/users.json').then(data => 
    // {
    //     //TODO
    // })

    let buffer = readFileSync('users/users.json', "utf8")

    const users = JSON.parse(buffer)

    users.name.push(req.params.user)

    const data = JSON.stringify(users)

    writeFileSync('users/users.json', data)

    res.send('user successfully registered!').status(200)
})