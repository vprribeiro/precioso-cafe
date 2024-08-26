function retornarAoTopo() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let btn_inicio = document.querySelector("#btn_inicio");

btn_inicio.addEventListener("click", retornarAoTopo)

window.onscroll = function() {scrollFunction()};

window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn_inicio.style.display = "block";
    } else {
      btn_inicio.style.display = "none";
    }

}