// sessao como regularizar a minha cnh
const passosRegularizarCNH = [
    {
        passo: "Passo 1",
        titulo: "Solicite o seu orçamento",
        conteudo: "Solicite seu orçamento com a MD Consultoria e envie as informações e documentos solicitados.",
        imgMobile: "icone-passo1.svg",
        imgDesk: "passo1-desk.svg"
    },

    {
        passo: "Passo 2",
        titulo: "Acompanha as etapas",
        conteudo: "Com os documentos solicitados, a sua defesa será enviada para o Detran. Você acompanha todo o processo com os protocolos enviados pela MD Consultoria.",
        imgMobile: "icone-passo2.svg",
        imgDesk: "passo2-desk.svg"
    },

    {
        passo: "Passo 3",
        titulo: "Solicite o seu orçamento",
        conteudo: "Solicite seu orçamento com a MD Consultoria e envie as informações e documentos solicitados.",
        imgMobile: "icone-passo3.svg",
        imgDesk: "passo3-desk.svg"
    }
];

const regularizarCNHMobile = document.querySelector("#regularizarCNHMobile");
const regularizarDesk = document.querySelector("#regularizarCNHDesk");

passosRegularizarCNH.forEach(passo => {
    regularizarCNHMobile.innerHTML += `
            <div class="col-12 center mb-5">
                    <h3 class="h3 c-azul01 mb-3">${passo.passo}</h3>
                    <img class="mb-3" src="./assets/img/${passo.imgMobile}">
                    <h4 class="mb-3 bold c-azul02">${passo.titulo}</h4>
                    <p class="p1 c-azul02">${passo.conteudo}</p>
            </div>
    `

    regularizarDesk.innerHTML += `
    <div class="col-lg-3">
            <img class="mb-3 center" src="./assets/img/${passo.imgDesk}">
            <h3 class="h3 c-azul01 mb-3">${passo.passo}</h3>
            <h4 class="mb-3 c-azul02">${passo.titulo}</h4>
            <p class="p1 c-azul02">${passo.conteudo}</p>
    </div>
`
});


const dadosResolvaSemSairDeCasa = [
    {
        pergunta: "Teve a sua CNH suspensa por pontuação?",
        resposta: "Regularize a sua situação de forma rápida e prática."
    },

    {
        pergunta: "Sua CNH foi cassada e não pode dirigir?",
        resposta: "Sem problema! Nós temos ajudamos.."
    },

    {
        pergunta: "Foi constatado positivo no bafômetro?",
        resposta: "Peça o seu orçamento e volte a dirigir com segurança."
    }
];

const semSairMobile = document.querySelector("#resolvaSemSairDeCasaMobile");
const semSairDesk = document.querySelector("#resolvaSemSairDeCasaDesk");

dadosResolvaSemSairDeCasa.forEach(dado => {
    semSairMobile.innerHTML += `
   <div class="col-8 mb-5">
        <h2 class=" h2 c-verde01 center italic">${dado.pergunta}</h2>
        <p class="h3 c-branco center">${dado.resposta}</p>
    </div>
   `;

    semSairDesk.innerHTML += `
   <div class="col-3 mb-5">
        <h2 class="h2 italic c-verde01">${dado.pergunta}</h2>
        <p class="h3 c-branco">${dado.resposta}</p>
   </div>
   `;
});


// collapese duvidas
const perguntas = document.querySelectorAll(".pergunta");
const ocultarTodasRespostas = () => {
    perguntas.forEach(pergunta => {
        pergunta.nextElementSibling.classList.add("d-none");
        let img = pergunta.querySelector("img");
        img.setAttribute("src", "./assets/img/exbir.png");
    });
}

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        ocultarTodasRespostas();
        pergunta.nextElementSibling.classList.toggle('d-none');
        let seta = pergunta.querySelector("img");
        seta.setAttribute('src', './assets/img/fechar.png');
    });
});

const cardsSomosConsultoria = Array.from(document.querySelectorAll(".bg-card"));
console.log(cardsSomosConsultoria);

const modal = document.querySelector("#modal");
const modalContainer = document.querySelector("#carrouselModal");

const conteudoModal = [
    
     {
        "titulo": "CNH cassada",
        "conteudo": `
            <p class="c-azul02">
            Com a habilitação cassada, o(a) motorista precisa realizar o pagamento da multa, aguardar 2 anos e realizar uma defesa para requerer a reabilitação.
            </p>

            <p class="c-azul02">
            Para ter a CNH de volta, é preciso aguardar o período necessário, realizar o curso de reciclagem e iniciar o processo de uma nova habilitação com o Detran, junto a especialistas.
            </p>

            <p class="c-azul02">
            Verifique a sua situação com nossos especialistas para dirigir com segurança novamente.
            </p>
        `,
        "img": "cnhCassada.svg"
    },

     {
        "titulo": "CNH suspensa",
        "conteudo": `
        <p class="c-azul02">
        A partir de 20 pontos na carteira ou infração auto suspensiva, é aplicada a CNH suspensa, que pode durar de 12 meses a 2 anos.
        </p>

        <p class="c-azul02">
        Para regularizar, é preciso realizar um curso de reciclagem, aguardar o período necessário e realizar uma defesa.
        </p>

        <p class="c-azul02">
        Por isso, é essencial que o processo seja feito e acompanhado por especialistas.
        </p>
    `,
        "img": "cnhSuspensa.svg"
    },

    {
        "titulo": "Bafômetro",
        "conteudo": `
        <p class="c-azul02">
        Com o positivo ou com a recusa na realização do teste do bafômetro, o(a) motorista deve pagar uma multa e, posteriormente, passar pela Defesa Prévia.
        </p>

        <p class="c-azul02">
        Caso a primeira defesa tenha sido renegada, haverá ainda o Recurso em 1ª Instância e o Recurso em 2ª Instância. 
        </p>

        <p class="c-azul02">
        Dessa forma, é importante que os argumentos utilizados sejam feitos por profissionais capacitados, a fim de ter a solução de forma efetiva, segura e rápida.
        </p>
    `,
        "img": "bafometro.svg"
    },

    {
        "titulo": "Documentos em geral",
        "conteudo": `
        <p class="c-azul02">
        Nós te ajudamos com documentações de transferência de veículos, placas mercosul, parcelamento de débitos, registro de veículos 0km, IPVA, multas, entre outras documentações.
        </p>

        <p class="c-azul02">
        Peça o seu orçamento ou entre em contato para tirar suas dúvidas com os especialistas da MD Consultoria.
        </p>
    `,
        "img": "documentosGeral.svg"
    }
]

const renderizarModal = (element, objeto, index) => {
    element.innerHTML = `
       <div class="row  justify-content-lg-around align-items-center">
            <div class="col-12 col-lg-3">
                    <h2 class="h2 regular c-azul01">${objeto[index].titulo}</h2>
            </div>

            <div class="col-12 col-lg-3 d-flex justify-content-end">
                <svg id="anterior" class="mr-3 cursor-pointer" width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.7778 12H2.62969" stroke="#5396FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 1L1 12L12 23" stroke="#5396FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg id="proximo" class="mr-5 cursor-pointer" width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.22217 12H31.3703" stroke="#5396FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 1L33 12L22 23" stroke="#5396FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg id="fechar" class="cursor-pointer" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5 1.5L1 25" stroke="#5396FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 1.5L24.5 25" stroke="#5396FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
       </div>

       <div class="row justify-content-center justify-content-lg-around align-items-center">
            <div class="col-lg-6">

                ${objeto[index].conteudo}

                <a class="btn bdc-azul01 bgc-azul01 c-azul02 uppercase" href="#S01">
                    Entrar em contato
                </a>
            </div>

            <div class="d-none d-lg-block col-lg-4">
                <img class="d-block w-100" src="./assets/img/${objeto[index].img}">
            </div>
       </div>
    `
}

cardsSomosConsultoria.forEach((card) => {
    card.addEventListener("click", () => {
        modal.style.display = "block";
        console.log(card.getAttribute("id"));
        let keySelected = parseInt(card.getAttribute("id"));
        renderizarModal(modalContainer, conteudoModal, keySelected);

        const botaoFecharModal = document.querySelector("#fechar");
        botaoFecharModal.addEventListener("click", () => {
            modal.style.display = "none";
        });

        const botaoAnterior = document.querySelector("#anterior");
        botaoAnterior.addEventListener("click", () => {
            console.log("anterior");

            keySelected = keySelected - 1;

            renderizarModal(modalContainer, conteudoModal, keySelected);
        });
    });
});


// VALIDACAO FORM
$("#form").validate({
    rules: {
        nome: {
            required: true,
            minlength: 3
        },
        email: {
            required: true,
            email: true
        },
        CPF: {
            required: true,
            minlength: 11
        },
        CNH: {
            required: true,
            minlength: 11
        }
    },
    messages: {
        nome: {
            required: 'Este campo está vazio',
            minlength: 'Ops, esse campo precisa ter mais de 3 caracteres'
        },
        email: {
            required: 'Este campo está vazio',
            email: 'Insira um e-mail válido'
        },
        CPF: {
            required: 'Este campo está vazio',
            minlength: 'Esse CPF é invalido'
        },
        CNH: {
            required: 'Este campo está vazio',
            minlength: 'Ops, esse campo precisa ter no mínimo 11 caracteres'
        }
    }
});


// inicializacoes carousels
$('#clientesMobile').flickity({
    prevNextButtons: false,
    contain: true,
    freeScroll: true,
    wrapAround: true,
    pageDots: true
});

$('#insta').flickity({
    prevNextButtons: false,
    contain: true,
    freeScroll: true,
    wrapAround: true,
    pageDots: true,
    watchCSS: true
});

$('#consultoriaCompleta').flickity({
    prevNextButtons: false,
    contain: true,
    freeScroll: true,
    wrapAround: true,
    pageDots: true,
    watchCSS: true
});

// menu
const iconeMenu = $(".menu-mobile");
const menuMobile = $(".links-menu");
const btnFecharMenu = $(".menu-fechar");

iconeMenu.click(function () {
    menuMobile.slideToggle();

});

btnFecharMenu.click(function () {
    menuMobile.fadeOut();
});

















