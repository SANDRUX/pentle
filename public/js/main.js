
$('#submit').click(() =>{
    $('.playerIn').each(el=>{
        if($('.playerIn')[0].value != '' && $('.playerIn')[1].value != ''){
            const data = {
                login:{
                    nameOne:$('.playerIn')[0].value,
                    nameTwo:$('.playerIn')[1].value
                } 
            }
            axios.post('/user', {
                data
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    })
})  