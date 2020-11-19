function check(){
    var $answer=document.getElementById("answer").value;
    console.log($answer)

    if ($answer==="apple"){
        alert("正解です。");
    }else{
        alert("間違いです。");
    }
}