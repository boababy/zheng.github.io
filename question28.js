
window.onload=function(){ 
    changeColor()
}
//颜色变化函数
function changeColor(){
    var now = new Date(); 
    var nowTime = now.toLocaleString(); 
    var hour=nowTime.substring(10,12);
    var min=nowTime.substring(13,15);

    console.log(nowTime)
    console.log(hour)
    document.getElementById("a1").innerHTML="ただいまの時間は"+hour+"時"+min+"分です。";
   
    //产生rgb的值
    var r=Math.floor(Math.random()*255);
    var g=Math.floor(Math.random()*255);
    var b=Math.floor(Math.random()*255);
    var rgb=r.toString(16)+g.toString(16)+b.toString(16); 
    //toString(radix) 把数字转化为radix（取值范围2~36）进制值表示的字符串
    document.body.bgColor="#"+rgb;
    window.setTimeout("changeColor()",60000);
    //setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。

}




