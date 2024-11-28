const foco = document.querySelector('.button-foco')
const curto = document.querySelector('.button-curto')
const longo = document.querySelector('.button-longo')
const botoes = document.querySelectorAll('.button')

foco.addEventListener('click', ()=> {
    console.log("foco");
    foco.classList.add('active')
})

curto.addEventListener('click', ()=> {
    console.log("curto");
    curto.classList.add('active')
})

longo.addEventListener('click', ()=> {
    console.log("longo");
    longo.classList.add('active')
})

function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
     })
}