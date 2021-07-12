$('#RegisterSubmit').click(()=>{
    console.log('gio');
    if($('.playerIn')[0].value != '' && $('.playerIn')[1].value != ''){
            console.log('Posted!');
            $.ajax({
                type: "POST",
                url: '/register',
                data: {
                    name: $('.playerIn')[0].value,
                    password: $('.playerIn')[1].value,  
                },
            });
       }
    })
