
$(document).ready(function(){
    $.getJSON("dist/js/include.json",function(data){
        var employee_data="";
        $.each(data,function(key,value){
            employee_data+='<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">';
            employee_data+='<div class="thumbnail">';
            employee_data+='<div class="thumbnail-image">';
            employee_data+='<img class="img-circle" src="'+value.imagePath+'">';
            employee_data+='</div>';
            employee_data+='<div class="user-indicator"></div>';
            employee_data+='<div class="user-name">'+value.lastName+value.firstName+'</div>';
            employee_data+='<div class="user-division">'+value.division+'</div>';
            employee_data+='<div class="user-position">'+value.position+'</div>';
            employee_data+='<div class="text-center"></div>';
            employee_data+='</div>';
            employee_data+='</li>';
        });
        console.log(employee_data);
        $('#loadarea').append(employee_data);

    });
});




/*
$(document).ready(function(){
      $.ajax({
          type:"GET",
          url:"dist/js/include.json",
          async:true,    //是否异步
          jsonp: "callbackparam",    //跨域请求的参数名，默认是callback
          dataType:"json",
          success:function(data){
              var employee_data="";
              $.each(data,function(key,value){
                employee_data+='<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">';
                employee_data+='<div class="thumbnail">';
                employee_data+='<div class="thumbnail-image">';
                employee_data+='<img class="img-circle" src="'+value.imagePath+'">';
                employee_data+='</div>';
                employee_data+='<div class="user-indicator"></div>';
                employee_data+='<div class="user-name">'+value.lastName+value.firstName+'</div>';
                employee_data+='<div class="user-division">'+value.division+'</div>';
                employee_data+='<div class="user-position">'+value.position+'</div>';
                employee_data+='<div class="text-center"></div>';
                employee_data+='</div>';
                employe_data+='</li>';
              });
              console.log(employee_data);
              $('#loadarea').append(employee_data);
          },
      });  
});
*/



/*
<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">
            <div class="thumbnail">
              <div class="thumbnail-image">
                <img class="img-circle" src="dist/img/jinbutsu_male.jpg">
              </div>
              <div class="user-indicator"></div>
              <div class="user-name">日比野定男</div>
              <div class="user-division">WEB</div>
              <div class="user-position">主査</div>
              <div class="text-center"></div>
            </div>
</li>
*/
