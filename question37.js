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
    var blood=getCookie("login_user");   

    var divObj = document.getElementById("showText");
    var divObj1 = document.getElementById("showblood");

    if (blood!=""){ 
        var user_times_str = "user_times" + blood;   
        var times = getCookie(user_times_str);    
        var user_times = parseInt(times)+1;     
        setCookie(user_times_str, user_times, 30);  
        divObj.innerHTML = user_times + "回目のご訪問ありがとうございます。";
        divObj1.innerHTML="あなたの血液型は"+blood+"型ですね。";
    }
    else {
        //初めての登録を１に
        // setCookie("username_times",1,30);
        divObj.innerHTML = "１回目のご訪問ありがとうございます。";
        divObj1.innerHTML="あなたの血液型は？型ですね。";
    }
}

checkCookie();

function setBlood(blood) {
    alert(blood+"型で登録しました。")

    
    setCookie("login_user", blood, 30);
    var divObj = document.getElementById("showText");
    var divObj1 = document.getElementById("showblood");

    var user_times_str = "user_times" + blood;   
    var times = getCookie(user_times_str);    
    if (times!=""){ 
        var user_times = parseInt(times)+1;    
        setCookie(user_times_str, user_times, 30); 
        divObj.innerHTML = user_times + "回目のご訪問ありがとうございます。";
        divObj1.innerHTML="あなたの血液型は"+blood+"型ですね。";
    }else{
        setCookie(user_times_str, 1, 30);
        divObj.innerHTML = "1回目のご訪問ありがとうございます。";
        divObj1.innerHTML="あなたの血液型は"+blood+"型ですね。";
    }

}