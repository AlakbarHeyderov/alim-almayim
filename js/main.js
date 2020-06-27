var a = false;
function menu(){
    if(a == false){
        document.getElementById("hidden-menu").classList.remove("hide");
        document.getElementById("hidden-menu").classList.add("show");
        a = true;
    }else if(a == true){
        document.getElementById("hidden-menu").classList.remove("show");
        document.getElementById("hidden-menu").classList.add("hide");
        a = false;
    }
    
}