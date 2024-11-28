1 -> Iniciando o projeto Fokus

1) Capturando elementos com JavaScript
Você está trabalhando no projeto Fokus, um aplicativo de cronômetro, onde será possível clicar no botão “Iniciar”, para iniciar e pausar um cronômetro. Para realizar o passo a passo, seu primeiro objetivo é implementar métodos do JavaScript que permitam selecionar os seguintes elementos do HTML:

O documento HTML, onde serão manipulados os elementos;

-> const html = document.querySelector('html');

O elemento HTML em que irá aparecer o temporizador;

-> const tempo = document.querySelector('#timer');

O elemento HTML no qual as imagens de cada contexto irão trocar de posição;

-> const image = document.querySelector('.app__image');

O elemento HTML onde as frases de cada contexto irão trocar de posição.

-> const frase = document.querySelector('.app__title');

2) Criando variáveis no JavaScript
Com os elementos selecionados (conforme visto no exercício anterior), a próxima etapa é guardar cada um desses elementos em variáveis para serem utilizados posteriormente no sistema que você está desenvolvendo. Para verificar se as variáveis estão corretas, utilize o console do navegador, por exemplo: console.log(nome-da-variável).

-> Já definido na atividade anterior. Testado no console.log cada um dos botões;

3) Criando botões da aplicação
Já definimos vários elementos que serão modificados no projeto “Fokus”, porém essas mudanças irão acontecer a partir do click em botões. Nesta etapa do projeto, crie as variáveis dos 4 (quatro) botões que vamos utilizar:

Botão que servirá para iniciar e pausar o temporizador;

-> const start = document.getElementById('start-pause');

Botão para escolher o temporizador de “Foco”;

-> const focoBt = document.querySelector('.app__card-button--foco')

Botão para escolher o temporizador de “Descanso curto”;

-> const curtoBt = document.querySelector('.app__card-button--curto')

Botão para escolher o temporizador de “Descanso longo”.

-> const longoBt = document.querySelector('.app__card-button--longo')

4) Selecionando botões com JavaScript
Até essa etapa, você já selecionou diversos elementos e os guardou em variáveis. Agora, crie variáveis com o tempo de cada tipo de temporizador:

Temporizador de foco com valor 1500;

-> const duracaoFoco = 1500

Temporizador de descanso curto com valor 300;

-> const duracaoCurti= 300

Temporizador de descanso longo com valor 900.

-> const duracaoLongo = 900

Esses valores serão convertidos em segundos posteriormente.

----------------------------------------------------------------------------------------------------------------------------------------

-> Manipulando elementos da pagina

1) Criando funções no JavaScript
Na construção do projeto Fokus, crie uma função chamada alterarContexto() que altera o caminho da imagem e a cor de fundo, de acordo com o contexto de cada um dos três temporizadores: “Foco”, “Descanso curto” e “Descanso longo”.

2) Alterando imagens e estilos dinamicamente
A próxima etapa da construção do projeto Fokus é a seguinte: utilize a função alterarContexto(), criada anteriormente, para adicionar um evento de click, alterando o contexto de imagem e cor de fundo, de acordo com o clique em cada um dos botões de foco.

3) Alterando textos dinamicamente
Até esta etapa de desenvolvimento do projeto Fokus, o código teve algumas repetições que podem ser melhoradas. Vamos corrigir isso? Assim, refatore o código, passando os valores de cada contexto dinamicamente na forma de parâmetro para a função alterarContexto(). Além disso, insira frases de acordo com cada contexto, através da variável titulo (já criada):

O contexto de foco terá a frase: “Otimize sua produtividade, mergulhe no que importa.”
O contexto de descanso curto terá a frase: “Que tal dar uma respirada? Faça uma pausa curta!”
O contexto de descanso longo terá a frase: “Hora de voltar à superfície. Faça uma pausa longa.”

-> A resposta está no código feito dentro do arquivo script.js

----------------------------------------------------------------------------------------------------------------------------------------

-> Aplicando áudio e estilo

1) Inserindo estilos dos botões com JavaScript
Crie uma página HTML simples que inclua três botões: "Foco", "Descanso Curto" e "Descanso Longo" (o layout não precisa ser muito complexo). Cada botão deve inicialmente ter um estilo básico. Utilize o JavaScript para inserir a classe active entre esses botões, de modo que, ao clicar em um botão, ele receba um estilo destacado (por exemplo, cor de fundo e borda diferenciada). Certifique-se de aplicar os conceitos de manipulação de classes com JavaScript aprendidos, alterando dinamicamente a classe active para indicar o botão selecionado.

2) Alternando o estilo dos botões com JavaScript
Com o método para aplicar a classe active nos três botões definidos no exercício anterior, repare no seguinte: sempre quando um botão é clicado, o estilo é inserido. Para corrigir isso, aplique, na função alterarContexto, um método para retirar a classe active de modo que ela seja inserida apenas no último botão clicado.

3) Controlando a reprodução de música com um Checkbox
Desenvolva, no projeto Fokus, um input do tipo checkbox para controlar a reprodução de um arquivo de música. O arquivo de áudio, luna-rise-part-one.mp3, deve começar a tocar quando o checkbox for marcado e parar quando for desmarcado. Implemente essa lógica usando o JavaScript, criando um objeto Audio para o arquivo de música e um EventListener para o checkbox que verifica o estado da propriedade paused do objeto Audio, alternando entre os métodos play e pause conforme o estado do checkbox.

4) Reproduzindo arquivo de Audio em modo infinito
Você já aprendeu como inserir arquivos de Audio em um projeto utilizando JavaScript, e também aplicou métodos para reproduzir e pausar esse tipo de arquivo. Nesse momento, você deve utilizar das técnicas aplicadas nesta aula para fazer um arquivo de Audio ser reproduzido em modo de loop, ou seja, iniciando automaticamente sempre que finalizado.

-> A resposta está no código feito dentro do arquivo script.js

----------------------------------------------------------------------------------------------------------------------------------------