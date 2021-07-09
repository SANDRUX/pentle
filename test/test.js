let status = true

const func = () => 
{
    return new Promise((resolve, reject) => 
    {
        if (status)
        {
            resolve('True')
        }
        else
        {
            reject('False')
        }
    })
}

func().then(data => console.log(data)).catch(err => console.log(err))