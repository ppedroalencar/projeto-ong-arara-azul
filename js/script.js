import { salvarCadastro, recuperarCadastro } from "./storage.js";
import { configurarValidacoes } from "./validacao.js";
configurarValidacoes();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("menu-open");

});

const form = document.querySelector("form");
const toast = document.querySelector(".toast");
if (form && toast) {
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

const conteudo = document.getElementById("conteudo");
function renderizarPagina(html) {
    conteudo.innerHTML = html;
}
if (conteudo) {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const rota = link.getAttribute("href");
            const partes = rota.split("#");
            const pagina = partes[0];
            switch (pagina) {
                case "index.html":
                    renderizarPagina(`
                        <section>
            <h2>Quem somos</h2>
            <p>A ONG Arara Azul trabalha na preservação da fauna brasileira, promovendo ações de conservação, educação ambiental e conscientização da sociedade.</p>
            <picture>
                <source srcset="../imagens/arara-azul.webp" type="image/webp">
                <img src="../imagens/arara-azul.jpg" alt="Duas Araras Azuis em uma árvore" width="300">
            </picture>
            
        </section>
        <section>
            <h2>Entre em contato</h2>
            <p><strong>E-mail:</strong> contato@ongararazul.org</p>
            <p><strong>Telefone:</strong> (83) 91234-5678</p>
            <p><strong>Localização:</strong> João Pessoa - PB</p>
        </section>`);
                    break;

                case "projetos.html":
                    renderizarPagina(`
                        <section id="nossos-projetos">
            <h2>Nossos Projetos</h2>
            <p>Conheça algumas iniciativas desenvolvidas pela ONG Arara Azul para contribuir com a conservação da fauna e educação ambiental.</p>
            ${htmlProjetos}
        </section>
        <section id="voluntariado">
            <h2>Voluntariado
                <span class="badge">Inscrições abertas</span>
            </h2>
            <p>Você pode contribuir com a ONG Arara Azul participando de nossas ações de conservação e educação ambiental.</p>
            <div class="alert">As incrições estão abertas</div>
            <h3>Como participar</h3>
            <ul>
                <li>Apoio em ações de educação ambiental.</li>
                <li>Participação em campanhas de conscientização.</li>
                <li>Auxílio em eventos e atividades da ONG.</li>
            </ul>
        </section>
        <section id="doacoes">
            <h2>Doações</h2>
            <p>As doações ajudam a manter nossos projetos de conservação, educação ambiental e proteção da fauna brasileira.</p>
            <h3>Como contribuir</h3>
            <p>Você pode apoiar nossas ações através de contribuições financeiras ou da doação de materiais destinados a manutenção dos projetos da ONG.</p>
        </section>`);
                    break;

                case "cadastro.html":
                    console.log("Rota: Cadastro");
                    break;

            }
        });
    });
}