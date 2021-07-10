$('#submit').click(() => {
            const data = 
            {
              name : "data"
            }

            axios.post('/user', data)
              .then(response => {
                console.log(response);
              })
              .catch(error => {
                console.log(error);
              });
        })