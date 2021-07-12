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
                statusCode: {
                    409:xhr=>{
                        $('.already').removeClass("hidden")
                    },
                    201:xhr=>{
                        window.location.href = "/public/test.html";
                    }
                  }
            });
       }

})
