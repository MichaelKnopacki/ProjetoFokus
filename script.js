const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const tempo = document.querySelector('.app__card-timer')
const image = document.querySelector('.app__image-figure')
const frase = document.querySelector('.app__title')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')
const musicaFoco = new Audio ('./sons/lun')

/*
Crie uma nova variável chamada ‘musicaFoco’ e utilize o objeto Audio para criar uma instância dele com o caminho do arquivo de música "Sons/Luna-Rise-Part-1.mp3";
Defina o atributo loop do objeto Audio como true para tocar a música em loop;
Adicione um evento de change ao input ‘musicaFocoInput’ usando addEventListener;
Crie uma função anônima dentro do evento para verificar se a música está pausada utilizando a propriedade paused do objeto Audio:
Se estiver pausada, utilize o método play para tocá-la;
Caso contrário, utilize o método pause para pausar a música.
*/


focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute( 'src', `./imagens/${contexto}.png`)

    botoes.forEach(function (contexto){
       contexto.classList.remove('active')
    })

    switch (contexto){
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
        break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`
        break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
        break;
        default:
        break;
    }
}