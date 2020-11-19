function goLink(){
    var selected=document.getElementById("link");
    var sindx=selected.selectedIndex;
    var optionvalue=selected[sindx].value;
   
    console.log(selected)
    console.log(sindx)
    console.log(optionvalue)

    window.location.href=optionvalue
}

