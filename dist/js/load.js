
$(document).ready(function () {
  $.getJSON("dist/js/include.json", function (data) {
    render(data)
  });
});

function render(data) {
  var employee_data = "";
  $.each(data, function (key, value) {
    employee_data += '<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">';
    employee_data += '<div class="thumbnail">';
    employee_data += '<div class="thumbnail-image">';
    employee_data += '<img class="img-circle" src="' + value.imagePath + '">';
    employee_data += '</div>';
    employee_data += '<div class="user-indicator"></div>';
    employee_data += '<div class="user-name">' + value.lastName + value.firstName + '</div>';
    employee_data += '<div class="user-division">' + value.division + '</div>';
    employee_data += '<div class="user-position">' + value.position + '</div>';
    employee_data += '<div class="text-center"></div>';
    employee_data += '</div>';
    employee_data += '</li>';
  });
  $('#loadarea').html(employee_data);
}
//转换
function katakanaToHiragana(data) {
  return data.replace(/[\u30a1-\u30f6]/g, function (match) {
    var chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
}
//还原
$(document).ready(function(){
  $('#sorting-clear').click(function(){
    $.getJSON("dist/js/include.json", function (data) {
      $('#query-division').val('')
      render(data)
    });
  })
})



//点击名字
$(document).ready(function () {
  $('#sorting-name').click(function () {
    $.ajax({
      type: "GET",
      url: "dist/js/include.json",
      async: true,    //是否异步
      jsonp: "callbackparam",    //跨域请求的参数名，默认是callback
      dataType: "json",
      success: function (data) {
        //console.log(data);
        var Forsort = data;
        Forsort.sort(function (s1, s2) {
          var a = katakanaToHiragana(s1.firstKana.toString());
          b = katakanaToHiragana(s2.firstKana.toString());
          if (a < b) {
            return -1
          } else if (a > b) {
            return 1
          }
          return 0
        });
        $('#query-division').val('')
        render(Forsort)
      },
    });
  });
});

$(document).ready(function () {
  $('#sorting-hireday').click(function () {
    $.ajax({
      type: "GET",
      url: "dist/js/include.json",
      async: true,    //是否异步
      jsonp: "callbackparam",    //跨域请求的参数名，默认是callback
      dataType: "json",
      success: function (data) {
        var Forsort = data;
        Forsort.sort(sortUpDate)
        function sortUpDate(a, b) {
          return Date.parse(b.hireday) - Date.parse(a.hireday);
        }
        $('#query-division').val('')
        render(Forsort)
      },
    });
  });
});

$(document).ready(function () {
  $('#sorting-birthday').click(function () {
    $.ajax({
      type: "GET",
      url: "dist/js/include.json",
      async: true,    //是否异步
      jsonp: "callbackparam",    //跨域请求的参数名，默认是callback
      dataType: "json",
      success: function (data) {
        console.log(data);
        var Forsort = data;
        console.log(Forsort.sort(sortUpDate))
        function sortUpDate(a, b) {
          return Date.parse(b.birthday) - Date.parse(a.birthday);
        }
        $('#query-division').val('')
        render(Forsort)
      },
    });
  });
});

//选中value
$(document).ready(function () {
  $('#query-division').change(function () {
    var p1 = $(this).children('option:selected').val();//这就是selected的值  
    if (p1 == 'ITI') {
      $.getJSON("dist/js/include.json", function (data) {
          var arr = $.grep(data, function (n) {
            return n.division == 'ITI'
          });
          render(arr)
      });
    } else if (p1 == 'SMT') {
      $.getJSON("dist/js/include.json", function (data) {
        var arr = $.grep(data, function (n) {
          return n.division == 'SMT'
        });
        render(arr)
    });
    } else if (p1 == 'WEB') {
      $.getJSON("dist/js/include.json", function (data) {
        var arr = $.grep(data, function (n) {
          return n.division == 'WEB'
        });
        render(arr)
    });
    }
  })
}) 