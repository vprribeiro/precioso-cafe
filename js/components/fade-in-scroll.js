const observerBL2 = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector(".div-imagem-esquerda").classList.add("fade-in-left")
            document.querySelector(".conteudo-texto-direita").classList.add("fade-in")
            
        }
    });
})
observerBL2.observe(document.querySelector(".bloco-2"));


const observerBL3 = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector("#h2_bl3").classList.add("fade-in")
            document.querySelector("#div-icones-produtos").classList.add("fade-in-top")           
        }
    });
})

observerBL3.observe(document.querySelector(".bloco-3"));
