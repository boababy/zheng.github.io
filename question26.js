var $t=document.getElementsByTagName("table")

function resize(size=120){
	console.log(size);
    var s=document.getElementById("small");
    var showImgObj=document.getElementsByTagName('img');
    console.log(showImgObj);

    for(imgIndex of showImgObj){
    	console.log(imgIndex);
    	imgIndex.style.width=size+'px';
    	imgIndex.style.height=size+'px';
    }
   
}