function photoChange(){
    // var $selected=document.getElementsByName("photo");


    var qqq=document.getElementById("sop");
    var showimg=document.getElementById("showimg");

    var $show=document.getElementsByName("BigPhoto")

	var sindex=qqq.selectedIndex;

	var optionValue=qqq[sindex].value;
    console.log(optionValue)
    console.log($show)
    console.log(sindex)

    showimg.src=optionValue

}


