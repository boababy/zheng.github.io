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

function ColorHyouji(){

    var showImgObj=document.getElementsByTagName('img');
    console.log(showImgObj);
    var i=1;
    for(imgIndex of showImgObj){
    	console.log(i);
    	console.log(imgIndex);
    	imgIndex.src = "images/nature0"+i+".jpg";
    	i++;
    }
   
}

function MonoHyouji(){
    var showImgObj=document.getElementsByTagName('img');
    var i=1
    for(imginedex of showImgObj){
        imginedex.src="images/m_nature0"+i+".jpg";
        i++
    }
}