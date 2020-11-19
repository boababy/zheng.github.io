function saikoro(){
    var num1=Math.ceil(Math.random() * 6);
    var num2=Math.floor(Math.random()*6)+1;
    console.log(num1)
    console.log(num2)

    var $LOG1="images/sai_"+num1+".gif";
    var $LOG2="images/sai_"+num2+".gif";
    console.log($LOG1)
    console.log($LOG2)

    var $gif1=document.getElementById('g1');
    // console.log($gif1)
    $gif1.setAttribute('src',$LOG1);

    var $gif2=document.getElementById('g2');
    //console.log($gif2)
    $gif2.setAttribute('src',$LOG2);

}