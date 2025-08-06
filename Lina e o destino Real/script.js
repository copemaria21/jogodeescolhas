const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Lina vive com seus pais adotivos em uma pacata aldeia. Ela sempre sentiu que algo estava errado, que ela não pertencia àquele lugar. Em um mercado local, um misterioso homem idoso se aproxima dela e, antes de partir, entrega-lhe um amuleto dourado com um selo real.",
        alternativas: [
            {
                texto: "Guardo o amuleto e sigo meu dia normalmente.",
                afirmacao: "Você não se preocupou muito com o amuleto e decidiu seguir sua rotina, mas o objeto ficou rondando sua mente. "
            },
            {
                texto: "Decido investigar mais sobre o amuleto, não consigo parar de pensar nele.",
                afirmacao: "A curiosidade foi maior e você passou o resto do dia tentando descobrir o significado daquele estranho presente."
            }
        ]
    },
    {
        enunciado: "Naquela noite, um mensageiro real chega à sua casa trazendo uma carta. Ao abrir, você descobre que é a filha perdida da falecida rainha de Arandor, a legítima herdeira ao trono. O que você faz?",
        alternativas: [

            {
                texto: "Decido ir ao castelo para descobrir mais sobre meu passado.",
                afirmacao: "A carta a deixou assustada, mas também empolgada. Decidiu que era hora de conhecer a verdade sobre sua origem."
            },
            {
                texto: "Fico assustada e não sei o que fazer. Decido ignorar a carta por enquanto.",
                afirmacao: "Você não sabia se poderia confiar no que estava escrito, e a ideia de mudar de vida repentinamente era assustadora demais."
            }
        ]
    },
    {
        enunciado: "Lina decide finalmente seguir para o castelo, onde é recebida pelo Rei Thorian, que confirma sua verdadeira linhagem. Alaric, um jovem com poderes mágicos, também se apresenta como seu protetor. Como ela reage?",
        alternativas: [
            {
                texto: "Eu aceito minha herança e me preparo para governar o reino.",
                afirmacao: "Você percebeu que não tinha mais como fugir do seu destino e começou a se preparar para a responsabilidade de ser princesa."
            },
            {
                texto: "Eu me sinto deslocada. Decido fugir para não lidar com essa responsabilidade.",
                afirmacao: "O peso da situação foi muito grande, e você temeu que nunca seria capaz de ser a princesa que esperavam."
            }
        ]
    },
    {
        enunciado: "Lina descobre que o reino está à beira de uma guerra com uma força sombria conhecida como A Sombra do Norte. Ela precisa decidir qual papel vai desempenhar para ajudar a proteger Arandor.",
        alternativas: [
            {
                texto: "Vou aprender magia e me preparar para lutar contra a Sombra.",
                afirmacao: "Você decidiu não apenas governar, mas também se tornar uma guerreira mágica para enfrentar a ameaça diretamente."
            },
            {
                texto: "Prefiro ajudar com estratégias e liderança, evitando o combate direto.",
                afirmacao: "Você sentiu que sua força estava em guiar os outros, não em lutar. Então, decidiu reunir um exército e organizar a defesa."
            }
        ]
    },
    {
        enunciado: "Durante a batalha, Lina descobre que o Duque Varian, um dos conselheiros mais próximos do rei, está trabalhando secretamente com a Sombra do Norte. O que Lina faz?",
        alternativas: [
            {
                texto: "Eu confrontaria o Duque Varian imediatamente.",
                afirmacao: "Sua coragem falou mais alto. Você sabia que precisava parar o traidor antes que causasse mais danos ao reino."
            },
            {
                texto: "Decido investigar mais antes de agir. Não quero fazer nada precipitado.",
                afirmacao: "Você escolheu agir com cautela, esperando reunir mais provas antes de tomar qualquer atitude."
            }
        ]
    },
    {
        enunciado: "Finalmente, Lina está diante da batalha decisiva contra a Sombra do Norte. Ela precisa escolher entre uma ação arriscada e um plano mais seguro, mas demorado.",
        alternativas: [
            {
                texto: "Eu arriscaria tudo para derrotar a Sombra do Norte de uma vez por todas.",
                afirmacao: "Você se sentiu pronta para sacrificar tudo em nome da vitória, sabendo que poderia ser a única chance de salvar o reino."
            },
            {
                texto: "Eu prefiro um plano mais seguro, mesmo que leve mais tempo para garantir a derrota da Sombra.",
                afirmacao: "Você escolheu ser estratégica e cautelosa, acreditando que um plano bem executado, sem pressa, seria a melhor opção."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Ao final...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();