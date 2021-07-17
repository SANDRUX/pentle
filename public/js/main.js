const io = require('socket.io-client')

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
                        console.log('USER REGISTERED!');
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
                        if($('.passwordEx').hasClass("hidden")){
                            $('.userEx').removeClass("hidden")
                        }else{
                            $('.passwordEx').addClass("hidden")
                            $('.userEx').removeClass("hidden")
                        }
                    },
                    401:xhr=>{
                        if($('.userEx').hasClass("hidden")){
                            $('.passwordEx').removeClass("hidden")
                        }else{
                            $('.userEx').addClass("hidden")
                            $('.passwordEx').removeClass("hidden")
                        }
                    }, 
                    201:xhr =>
                    {
                        const socket = io('http://localhost:3000')
                        
                        socket.on('connect', () => 
                        {
                            console.log('Connected to a server')
                        })

                        socket.on('disconnect', () =>
                        {
                            console.log('Disconnected from a server')
                        })                        
                    }
                  }
            });
       }
})