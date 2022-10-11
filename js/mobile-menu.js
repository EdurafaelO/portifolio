var mobile_menu = document.querySelector(".mobile-menu");
var links = document.querySelectorAll(".link-menu")
mobile_menu.addEventListener("click", () =>{
    var menu = document.querySelector(".nav-bar");
    menu.classList.toggle("active");
})