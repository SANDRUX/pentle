fetch('/usersJson').then(response => response.json()).then(data => {
    function CheckUser(email){
        let bool;
        data.name.forEach(el =>{
            if(el.Email == email){
             bool=false
          }else{
               bool=true
         }
         })
      return bool
    }

    $('#submit').click(()=>{
        if($('.playerIn')[0].value != '' && $('.playerIn')[1].value != ''){
            if(CheckUser($('.playerIn')[0].value) == true){
                console.log('Posted!');
                $.ajax({
                    type: "POST",
                    url: '/user',
                    data: {
                        Email: $('.playerIn')[0].value,
                        Password: $('.playerIn')[1].value,
                        LoggedIn: true
                    },
                });
            }
       }
    })
});