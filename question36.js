//setcookie
function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
//getcookie
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}

//check
function checkCookie(){
    var times=getCookie("username_times");   //回数

    var divObj = document.getElementById("showText");
    console.log(times);
    if (times!=""){
        var again_times = parseInt(times)+1;
        setCookie("username_times",again_times,30);
        divObj.innerHTML = again_times + "回目のご訪問ありがとうございます。";
    }
    else {
        //初めての登録を１に
        setCookie("username_times",1,30);
        divObj.innerHTML = "初めてのご訪問ありがとうございます。";
    }
}

checkCookie();