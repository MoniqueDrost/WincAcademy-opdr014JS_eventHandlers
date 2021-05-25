const alertButton = document.querySelector(".btn-alert");

const promptAlertButton = () => {
    alert('Button clicked');
}

alertButton.addEventListener("click", promptAlertButton);

const body = document.querySelector("body");
const colorButton = document.querySelector(".btn-color");

/* 
const changeBackgroundColor = () =>{
body.classList.add("red-background");
}

colorButton.addEventListener("click", changeBackgroundColor);
*/
const toggleBackgroundColor = () =>{
    body.classList.toggle("red-background");
    }
    
    colorButton.addEventListener("click", toggleBackgroundColor);