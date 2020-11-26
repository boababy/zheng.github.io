
//〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜goTop〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
var goTop=document.getElementsByClassName('goTop')[0];

window.onscroll=function(){
    let res =document.body.scrollTop || document.documentElement.scrollTop;
    //console.log(res)
    if (res>=200){
        goTop.style.display = 'block';
    }else{
        goTop.style.display = 'none';
    }
}

function goTop1(){
   window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
    });
    //document.body.scrollTop = 0
    //document.documentElement.scrollTop = 0
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

//〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜自動スライド〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
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

//〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜submenu〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
function ShowSub(li) {
    var subMenu = li.getElementsByTagName("ul")[0] ;
    subMenu.style.display = " block ";
    }
    function HideSub(li) {
    var subMenu = li.getElementsByTagName("ul")[0];
    subMenu.style.display = " none ";
    }

//～～～～～～～～～～～～～～～～～～～tab～～～～～～～～～〜〜〜〜〜〜〜〜〜～～～～～～～～～～～～
var tabs=document.getElementsByClassName("tab")[0].getElementsByTagName("li");
var hides=document.getElementsByClassName("content")[0].getElementsByTagName("li");

    for(var i =0;i<tabs.length;i++){
        tabs[i].index=i
        tabs[i].onclick=function(){
            for(var i =0;i<tabs.length;i++){
                tabs[i].className="";
                hides[i].className="hide";
            }
            this.className="select";
            hides[this.index].className="";
        }
    }



//〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜PopUp〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
  $(function () {
    $('.openModal').click(function() {
      var btnIndex = $(this).index(); 

      $('.modalArea').eq(btnIndex).addClass('is-open'); 
      //クリックしたモーダルボタンと同じ番目のモーダルを表示する。addClassでis-openクラスを追加して表示する
  　　　　$('html, body').css('overflow', 'hidden'); 
      // overflow:hidden;の追加で背景のスクロール禁止に
    });
    $('.closeModal, .modalBg').click(function() { //closeModalかmodalBgをクリックした時に
      $('.modalArea').removeClass('is-open'); 
      //モーダルを非表示にする。removeClassでis-openクラスを削除して非表示にする
  　　　　$('html, body').removeAttr('style'); 
      //追加したoverflow:hidden;を削除
    });
  
  });


//〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜hamburge menu〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
const menuIcon=document.querySelector(".hamburger-menu");
const navbar=document.querySelector(".navbar");

menuIcon.addEventListener("click",()=>{
    navbar.classList.toggle("change");
})
