
//〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜goTop〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
var goTop=document.getElementsByClassName('goTop')[0];

window.onscroll=function(){
    let res =document.body.scrollTop || document.documentElement.scrollTop;
    //console.log(res)
    if (res>=900){
        goTop.style.display = 'block';
    }else{
        goTop.style.display = 'none';
    }
}

function goTop1(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  };


//〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜スライドショー〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
var items=document.getElementsByClassName('item');
var subItems=document.getElementsByClassName('subItem');
var goPreBtn=document.getElementById('goPre');
var goNextBtn=document.getElementById('goNext');
var time =0;//クリックした時、時間を再計算
var index =0;

var clearActive =function(){
    for(var i=0;i<items.length;i++){
        items[i].className='item';
    }
    for(var i=0;i<subItems.length;i++){
        subItems[i].className='subItem';
    }
}

var goIndex = function(){
    clearActive();
    subItems[index].className='subItem active';
    items[index].className='item active';
}

var goNext=function(){
    if(index<2){
        index++;
    }else{
        index=0;
    }
    
    goIndex();
}
var goPre=function(){
    if(index==0){
        index=2;
    }else{
        index--;
    }
    goIndex();
}

goNextBtn.addEventListener('click',function(){
    goNext();
})

goPreBtn.addEventListener('click',function(){
    goPre();
})

for(var i=0;i<subItems.length;i++){
    subItems[i].addEventListener('click',function(){
    var subItemIndex=this.getAttribute('data-index');
    index=subItemIndex
    goIndex();
    time=0
    })
}

//自動スライド
setInterval(function(){
    time++;
    if(time==20){
        goNext();
        time=0;
    }
    
}, 100);

//〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜accordion=》サービスご案内〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
function SwitchMenu(obj){
    if(document.getElementById){
    var el = document.getElementById(obj);
    var ar = document.getElementById("sur").getElementsByTagName("ul"); 
    if(el.style.display != "block"){ 
    for (var i=0; i<ar.length; i++){
    if (ar[i].className=="submenu")
    ar[i].style.display = "none";
    }
    el.style.display = "block";
    }else{
    el.style.display = "none";
    }
    }
    }

//〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜submenu〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
function ShowSub(li) {
    var subMenu = li.getElementsByTagName("ul")[0] ;
    subMenu.style.display = " block ";
    }
    function HideSub(li) {
    var subMenu = li.getElementsByTagName("ul")[0];
    subMenu.style.display = " none ";
    }

//～～～～～～～～～～～～～～～～～～～tab～～～～～～～～～～～～～～～～～～～～～
var tabs=document.getElementsByClassName("tab")[0].getElementsByTagName("li");
var hides=document.getElementsByClassName("content")[0].getElementsByTagName("li");

    for(var i =0;i<tabs.length;i++){
        tabs[i].index=i
        tabs[i].onmouseover=function(){
            for(var i =0;i<tabs.length;i++){
                tabs[i].className="";
                hides[i].className="hide";
            }
            this.className="select";
            hides[this.index].className="";
        }
        
       /* tabs[i].onmouseout=function(){
            for(var i =1;i<tabs.length;i++){
                this.className="";
            }
            hides[this.index].className="show";
        }*/
    }