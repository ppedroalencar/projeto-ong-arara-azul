export function salvarCadastro(dados) {
    localStorage.setItem(
        "cadastro",
        JSON.stringify(dados)
    );
}

export function recuperarCadastro() {
    const dados = localStorage.getItem("cadastro");
    if (dados) {
        return JSON.parse(dados);
    }

    return null;
}