export function configurarValidacoes() {
    const cpf = document.getElementById('cpf');
    const erroCpf = document.getElementById("erro-cpf");
    if (cpf) {
        cpf.addEventListener("input", function (e) {
            let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o ponto entre o terceiro e o quarto dígito
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o ponto entre o sexto e o sétimo dígito
            valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca o hífen entre o nono e o décimo dígito
            e.target.value = valor;
        });
        cpf.addEventListener("blur", () => {
            if (!cpf.checkValidity()) {
                erroCpf.innerHTML = "Informe um CPF válido no formato 000.000.000-00";
            }
            else {
                erroCpf.innerHTML = "";
            }
        });
    }

    const erroCep = document.getElementById("erro-cep");
    const cep = document.getElementById('cep');
    if (cep) {
        cep.addEventListener("input", function (e) {
            let valor = e.target.value.replace(/\D/g, '');
            valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
            e.target.value = valor;
        });
        cep.addEventListener("blur", () => {
            if (!cep.checkValidity()) {
                erroCep.innerHTML = "Informe um CEP no formato 00000-000";
            }
            else {
                erroCep.innerHTML = "";
            }
        });
    }

    const erroTelefone = document.getElementById("erro-telefone");
    const telefone = document.getElementById('telefone');
    if (telefone) {
        telefone.addEventListener("input", function (e) {
            let valor = e.target.value.replace(/\D/g, '');
            valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
            valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
            e.target.value = valor;
        });
        telefone.addEventListener("blur", () => {
            if (!telefone.checkValidity()) {
                erroTelefone.innerHTML = "Informe um número de telefone no formato (00) 00000-0000";
            }
            else {
                erroTelefone.innerHTML = "";
            }
        });
    }
}