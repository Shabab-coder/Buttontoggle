btn = document.querySelector(".switch-off");
toggleButton = document.querySelector(".toggle-button");
btn.addEventListener("click", ()=>{
    btn.classList.toggle("switch-on");
    toggleButton.classList.toggle("toggle-button-on");
    if (btn.classList.contains("switch-on")){
        document.body.style.backgroundColor = "black";
    }else{
        document.body.style.backgroundColor = "white";
    }
    
});