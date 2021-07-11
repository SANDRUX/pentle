
$('#submit').click(()=>{
    if($('.playerIn')[0].value != '' && $('.playerIn')[1].value != ''){
        console.log('Posted!');
        $.ajax({
            type: "POST",
            url: 'http://localhost:5000/user',
            data: {
                Email: $('.playerIn')[0].value,
                Password: $('.playerIn')[1].value
            },
        });
   }
})