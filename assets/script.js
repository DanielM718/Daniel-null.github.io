// moblie menu dropdown
let mobile_menu = document.querySelector("#header_menu");
let mobile_search = document.querySelector('#header_search')
let dropdown = document.querySelector(".dropdown")


mobile_menu.addEventListener("click",function(){
    event.preventDefault();
    dropdown.classList.toggle("show")
});