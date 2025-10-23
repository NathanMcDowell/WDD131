let button = document.querySelector(".menu-btn");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");

let nav = document.querySelector("nav")

button.addEventListener("click", changeButton);

function changeButton(){
    button.classList.toggle("change");
    nav.classList.toggle("show")
}