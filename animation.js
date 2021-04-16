function change(current, next){
    
    let current_class = document.getElementsByClassName(current)[0]
    
    let next_class= document.getElementsByClassName(next)[0]
    current_class.style.animation ="fadeOut ease 0.5s";
    setTimeout(function(){ current_class.style.display ="none"; }, 450);
    setTimeout(function(){ next_class.style.display="block"; next_class.style.animation="fadeIn ease 0.7s"; next_class.style.opacity ="1" }, 500);

}

function cover_change(current, next){
    let current_class = document.getElementsByClassName(current)[0]
    
    let next_class= document.getElementsByClassName(next)[0]
    current_class.style.animation ="fadeOut ease 0.5s";
    setTimeout(function(){ current_class.style.display ="none"; }, 450);
    setTimeout(function(){ next_class.style.display="block"; next_class.style.animation="fadeIn ease 0.7s"; next_class.style.opacity ="1" }, 500);
}









