const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')


function clicado() {
    alert('Funcionaaaaa');
}

focoBt.addEventListener('click', () => {
    //html.setAttribute('data-contexto', 'foco')
    alert('1');
})

curtoBt.addEventListener('click', () => {
    //html.setAttribute('data-contexto', 'descanso-curto')
    alert('2');
})

longoBt.addEventListener('click', () => {
    //html.setAttribute('data-contexto', 'descanso-longo')
    alert('3');
})

