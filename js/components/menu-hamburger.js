const hamburger = document.querySelector("#hamburger")

const navUL = document.querySelector(".menu-nav-ul")

hamburger.addEventListener("click", ()=>{
    navUL.classList.toggle("show");
});