export default function initModal(){

}

const btnAbrir = document.querySelector('[data-modal="abrir"]')
const btnfechar = document.querySelector('[data-modal="fechar"]')
const containerModal = document.querySelector('[data-modal="container"]')

function abrirModal(event){
    event.preventDefault();
    containerModal.classList.add('ativo')
    console.log(event)
}

function fecharModal(event){
    event.preventDefault();
    containerModal.classList.remove('ativo')
}

function cliqueForaModal(event){
    console.log(event.target)
    
    fecharModal(event);
}


btnAbrir.addEventListener('click', abrirModal)
btnfechar.addEventListener('click', fecharModal)
containerModal.addEventListener('click', cliqueForaModal)
