import { salvarCadastro, recuperarCadastro } from "./storage.js";
import { configurarValidacoes } from "./validacao.js";
configurarValidacoes();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const menuAberto = nav.classList.toggle("menu-open");

        menuToggle.setAttribute("aria-expanded", menuAberto);
        menuToggle.setAttribute(
            "aria-label",
            menuAberto
                ? "Fechar menu de navegação"
                : "Abrir menu de navegação"
        );
    });
}

const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const dadosCadastro = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            nascimento: document.getElementById("nascimento").value,
            cpf: document.getElementById("cpf").value,
            telefone: document.getElementById("telefone").value,
            endereco: document.getElementById("endereco").value,
            cep: document.getElementById("cep").value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value,
        };

        salvarCadastro(dadosCadastro);

        Swal.fire({
            title: "Cadastro realizado!",
            text: "Seus dados foram salvos com sucesso!",
            icon: "success"
        });
    });

    const dadosSalvos = recuperarCadastro();
    if (dadosSalvos) {
        document.getElementById("nome").value = dadosSalvos.nome;
        document.getElementById("email").value = dadosSalvos.email;
        document.getElementById("nascimento").value = dadosSalvos.nascimento;
        document.getElementById("cpf").value = dadosSalvos.cpf;
        document.getElementById("telefone").value = dadosSalvos.telefone;
        document.getElementById("endereco").value = dadosSalvos.endereco;
        document.getElementById("cep").value = dadosSalvos.cep;
        document.getElementById("cidade").value = dadosSalvos.cidade;
        document.getElementById("estado").value = dadosSalvos.estado;
    }
}

const projetos = [
    {
        titulo: "Preservação da Arara Azul",
        descricao: "Ações voltadas à conservação e proteção da espécie."
    },
    {
        titulo: "Educação ambiental para as comunidades",
        descricao: "Desenvolvimento de palestras, oficinas e atividades educativas para conscientizar a população sobre a importância da conservação da fauna e dos ecossistemas locais."
    },
    {
        titulo: "Recuperação de Habitats Naturais",
        descricao: "Ações de reflorestamento, proteção de áreas degradadas e restauração de ambientes essenciais para a sobrevivência da arara-azul e de outras espécies nativas."
    }
];

let htmlProjetos = "";
projetos.forEach((projeto) => {
    htmlProjetos += `
    <h3>${projeto.titulo}</h3>
    <p>${projeto.descricao}</p>
    `;
});

const listaProjetos = document.getElementById("lista-projetos");

if (listaProjetos) {
    listaProjetos.innerHTML = htmlProjetos;
}

const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

function aplicarTema(tema) {
    if (tema === "dark") {
        html.setAttribute("data-theme", "dark");
    } else {
        html.removeAttribute("data-theme");
    }

    if (themeToggle) {
        const temaEscuro = tema === "dark";

        themeToggle.textContent = temaEscuro ? "☀️" : "🌙";
        themeToggle.setAttribute(
            "aria-label",
            temaEscuro ? "Ativar modo claro" : "Ativar modo escuro"
        );
    }
}

const temaSalvo = localStorage.getItem("tema");
aplicarTema(temaSalvo);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const temaAtual = html.getAttribute("data-theme");
        const novoTema = temaAtual === "dark" ? "light" : "dark";

        localStorage.setItem("tema", novoTema);
        aplicarTema(novoTema);
    });
}