const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const tempo = document.querySelector('.app__card-timer')
const image = document.querySelector('.app__image-figure')
const frase = document.querySelector('.app__title')


focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    startPauseBt.querySelector('span').textContent = "Michael";
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    startPauseBt.querySelector('span').textContent = "Carlos";
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    startPauseBt.querySelector('span').textContent = "Knopacki";
})

