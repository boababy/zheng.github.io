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

$(document).ready(function(){
  $('#sorting-name').click(function(){
    $.get("dist/js/include.json","",function(data){
      var newdata=data.result
      
      console.log(newdata);
      //根据名字（name）排序
      function sortname(a,b){
        return a.lastName-b.lastName
      }
      //利用js中的sort方法
      newdata.sort(sortname);
      //打印排序后的数据到控制台
      console.log(newdata);
    })
  });
});



/*
$(document).ready(function(){
  $('#sorting-name').click(function(){
      //var user=$('#user').val();
      //var password=$('#password').val();
      //var error=true;
      $.ajax({
          type:"GET",
          url:"dist/js/include.json",
          async:true,    //是否异步
          jsonp: "callbackparam",    //跨域请求的参数名，默认是callback
          dataType:"json",
          success:function(data){
            console.log(data);
            var Forsort=data;
            data.Forsort.sort(function(s1,s2){
              return s1.lastName > s2.lastName;
            });
            console.log(data.Forsort);
          },
      });
  });
});
*/


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
