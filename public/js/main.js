$('#RegisterSubmit').click(()=>{
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


$('#LoginSubmit').click(()=>{
    if($('.playerIn')[2].value != '' && $('.playerIn')[3].value != ''){
        console.log('Posted!');
            $.ajax({
                type: "POST",
                url: '/login',
                data: {
                    name: $('.playerIn')[2].value,
                    password: $('.playerIn')[3].value,  
                },
                statusCode: {
                    404:xhr=>{
                        $('.dosenot').removeClass("hidden")
                    },
                    201:xhr=>{
                        window.location.href = "/public/test.html";
                    }
                  }
            });
       }
    }
})