
$('.form-control').blur(function(){
    if($(this).val() == ""){
    }else{
        $(this).next('.error_required').html("");
        $(this).removeClass("errored");
        $("#add-user-form-submit").attr('disabled', false);
    }
});


//--*課題1*----------------//
$.fn.checkUsername=function(){
    $(this).on('blur',function(){
        if(!$(this).val().match(/^[ぁ-んァ-ヶー一-龠 　\r\n\t]+$/)){
            $(this).next('.error_required').html("※漢字で入力してください。");
            $(this).addClass("errored");
            return false;
        }else{
            $(this).next('.error_required').html("");
            $(this).removeClass("errored");
            return true;
        }
    });
};

$('.required').checkUsername();

//--*課題2*----------------//
$.fn.maxNum=function(){
    $(this).on('keyup',function(){
        var count = $(this).val().length;
    if(count>=51){
      $(this).next('.error_num').html("※50文字以内にしてください。");
      $(this).addClass("errored");
      return false;
    }else{
      $(this).next('.error_num').html("");
      $(this).removeClass("errored");
      return true;
    }
    });
};
$('.max50').maxNum();

//--*課題3*----------------//
$.fn.chechKana=function(){
    $(this).on('blur',function(){
        if(!$(this).val().match(/^[ぁ-んー　]*$/)){
            $(this).next('.error_kana').html("※ひらがなで入力してください。");
            $(this).addClass("errored");
            return false;
        }else{
            $(this).next('.error_kana').html("");
            $(this).removeClass("errored");
            return true;
        }
    });
};

$('.kana').chechKana();

//--*課題4*----------------//
$.fn.checkPhone=function(){
    $(this).on('blur',function(){
        if(!$(this).val().match(/^0[9876]0[-]\d{4}[-]\d{4}$/)){
            $(this).nextAll('.error_phone').html("※正しく入力してください。");
            $(this).addClass("errored");
            return false;
        }else{
            $(this).nextAll('.error_phone').html("");
            $(this).removeClass("errored");
            return true;
        }
    });
};

$('.phone').checkPhone();

//--*課題5*----------------//
$.fn.checkEmail=function(){
    $(this).on('blur',function(){
    var regEmail=/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    if(!$(this).val().match(regEmail)){
        $(this).next('.error_email').html("※メールアドレスの形式で入力してください。");
        $(this).addClass("errored");
        // console.log('false')
        return false;
    }else{
        $(this).next('.error_email').html("");
        $(this).removeClass("errored");
        // console.log('ok')
        return true;
    }
    });
};
$('.email').checkEmail();

//--*課題6*----------------//
$("#add-user-form-submit").on('click',function(){ 
   
    console.log($(".errored").length)

    if($(".errored").length){
        return false;
    }

    var flag = 0;
    $(".form-control").each(function(){
        if($(this).val() == "" || $(this).val() == 'undefined' || $(this).val() == '0'){
           flag = 1
           $("#add-user-form-submit").attr('disabled', true);
           $(this).next('.error_required').html("※入力必須項目です。");
           $(this).addClass("errored");

        }
        else{
           $("#add-user-form-submit").attr('disabled', false);
           $(this).next('.error_required').html("");
           $(this).removeClass("errored");
       }
    });

    //return false;  
    if (flag == 1) {
       return false;
    }

});

