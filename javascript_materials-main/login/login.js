$(document).ready(function(){
    $('#login').click(function(){
        var user=$('#user').val();
        var password=$('#password').val();
        var error=true;
        
        $.ajax({
            type:"GET",
            url:"data.json",
            async:true,
            jsonp: "callbackparam",
            dataType:"json",
            success:function(data){
                $('#loading').fadeOut('fast');
                $.each(data,function(key,value){
                    if(user==value.user_name && password==value.password){
                        error=false;
                    }
                });
                if(error==false){
                    alert('success!');
                    document.location="save_ss.php?user_login=" +user;
                }else{
                    
                    //$('#container').slideUp('slow').slideDown('slow');
                    $('#user').val('');
                    $('#password').val('');
                    alert('ユーザー名或いはパスワードが間違います。'); 
                }

            },
        });
        return false; 
    });
});


/*
        */
