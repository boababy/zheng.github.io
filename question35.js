function nowTime(){
    var iobj=document.getElementsByName("tbox");
    var time=new Date();
    var timeS=time.toLocaleTimeString()
    console.log(iobj[0].tagName)
    console.log(timeS)

    iobj[0].value=timeS;

}