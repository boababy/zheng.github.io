
window.onload=function(){ 
    changeColor();
    showtime()
}
//颜色变化函数
function changeColor(){
 
    var time = new Date();
    var hours = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var next = (60 - secs) * 1000;
  
  //产生rgb的值
    var r=Math.floor(Math.random()*255);
    var g=Math.floor(Math.random()*255);
    var b=Math.floor(Math.random()*255);
    var rgb=r.toString(16)+g.toString(16)+b.toString(16); 
    //toString(radix) 把数字转化为radix（取值范围2~36）进制值表示的字符串
    document.body.bgColor="#"+rgb;

    window.setTimeout("changeColor()",next);
    //setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。

  console.log(next)

}

function showtime(){
    var now = new Date(); 

    // var hours=nowTime.substring(10,12);
    // var mins=nowTime.substring(13,15);

    document.getElementById("a1").innerHTML="ただいまの時間は"+now.getHours()+"時"+now.getMinutes()+"分です。";
    setTimeout("showtime()",1000);
    console.log(now)
}


