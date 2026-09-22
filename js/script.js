const cpf = document.getElementById('cpf');
if (cpf) {
    cpf.addEventListener("input", function(e) {
        let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o ponto entre o terceiro e o quarto dígito
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o ponto entre o sexto e o sétimo dígito
        valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca o hífen entre o nono e o décimo dígito
        e.target.value = valor;
    });
}

const cep = document.getElementById('cep');
if (cep) {
    cep.addEventListener("input", function(e) {
        let valor = e.target.value.replace(/\D/g, '');
        valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = valor;
    });
}

const telefone = document.getElementById('telefone');
if (telefone) {
    telefone.addEventListener("input", function(e) {
        let valor = e.target.value.replace(/\D/g, '');
        valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
        valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = valor;
    });
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("menu-open");

});
