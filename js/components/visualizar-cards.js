const acionarCardTClara = () => {
    if(icone_torra_clara.classList.contains("icone-produto-selecionado")){
        div_torra_clara.classList.add("card-hidden");
        icone_torra_clara.classList.remove("icone-produto-selecionado");
    }else{
        ocultarCards();
        div_torra_clara.classList.remove("card-hidden");
        icone_torra_clara.classList.add("icone-produto-selecionado");
    }
}

const acionarCardTMedia = () => {
    if(icone_torra_media.classList.contains("icone-produto-selecionado")){
        div_torra_media.classList.add("card-hidden");
        icone_torra_media.classList.remove("icone-produto-selecionado");
    }else{
        ocultarCards();
        div_torra_media.classList.remove("card-hidden");
        icone_torra_media.classList.add("icone-produto-selecionado");
    }
}

const acionarCardTEscura = () => {
    if(icone_torra_escura.classList.contains("icone-produto-selecionado")){
        div_torra_escura.classList.add("card-hidden");
        icone_torra_escura.classList.remove("icone-produto-selecionado");
    }else{
        ocultarCards();
        div_torra_escura.classList.remove("card-hidden");
        icone_torra_escura.classList.add("icone-produto-selecionado");
    }
}

const ocultarCards = () =>{
    div_torra_clara.classList.add("card-hidden");
    div_torra_media.classList.add("card-hidden");
    div_torra_escura.classList.add("card-hidden");
    icone_torra_clara.classList.remove("icone-produto-selecionado");
    icone_torra_media.classList.remove("icone-produto-selecionado");
    icone_torra_escura.classList.remove("icone-produto-selecionado");
}

const icone_torra_clara = document.querySelector("#icone-torra-clara")
const icone_torra_media = document.querySelector("#icone-torra-media")
const icone_torra_escura = document.querySelector("#icone-torra-escura")

icone_torra_clara.addEventListener("click", acionarCardTClara);
icone_torra_media.addEventListener("click", acionarCardTMedia);
icone_torra_escura.addEventListener("click", acionarCardTEscura);

const div_torra_clara = document.querySelector("#torra-clara")
const div_torra_media = document.querySelector("#torra-media")
const div_torra_escura = document.querySelector("#torra-escura")
