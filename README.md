# ONG Arara Azul

## Sobre o projeto

ONG Arara Azul é um projeto acadêmico desenvolvido no Curso de Análise e Desenvolvimento de Sistemas (ADS), com o objetivo de aplicar, na prática, os conhecimentos estudados na disciplina de Desenvolvimento Front-end.

O projeto simula o site de uma ONG fictícia voltada à preservação da arara-azul e de seu habitat. Possui páginas de apresentação, projetos e cadastro de voluntários.

## Objetivos

O projeto tem como objetivo construir um website desde sua estruturação semântica com HTML, passando pela estilização e responsividade com CSS, até a implementação de interatividade com JavaScript.

Também são aplicados conceitos de formulários, acessibilidade, persistência de dados no navegador, organização de código e controle de versão.

## Funcionalidades

- Navegação responsiva;
- Apresentação da ONG e de seus projetos;
- Formulário para cadastro de voluntários;
- Máscaras e validações de formato para CPF, telefone e CEP;
- Persistência dos dados do formulário no navegador utilizando `localStorage`;
- Feedback visual após o envio do cadastro;
- Modo claro e escuro com persistência da preferência;
- Link para acesso direto ao conteúdo principal por navegação via teclado;
- Menu responsivo para dispositivos móveis.

## Tecnologias utilizadas

- HTML5 — estrutura e semântica das páginas;
- CSS3 — estilização, responsividade, CSS Grid e Flexbox;
- JavaScript — interatividade, manipulação do DOM, validações e persistência de dados;
- Vite — servidor de desenvolvimento e ferramenta de build;
- SweetAlert2 — biblioteca utilizada para feedback visual no formulário;
- npm — gerenciamento das dependências do projeto;
- Git — controle de versão;
- GitHub — hospedagem do repositório e gerenciamento do desenvolvimento.

## Estrutura do projeto

O projeto está organizado em diretórios de acordo com a responsabilidade de cada arquivo:

```text
projeto-ong/
├── index.html
├── projetos.html
├── cadastro.html
├── css/
│   └── style.css
├── imagens/
│   ├── arara-azul.jpg
│   └── arara-azul.webp
├── js/
│   ├── script.js
│   ├── storage.js
│   └── validacao.js
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

- `index.html` — página inicial da ONG;
- `projetos.html` — apresentação dos projetos, voluntariado e doações;
- `cadastro.html` — formulário para cadastro de voluntários;
- `css/` — contém os estilos, layouts e regras de responsividade;
- `imagens/` — armazena os recursos visuais utilizados nas páginas;
- `js/` — contém a lógica e a interatividade da aplicação;
  - `script.js` — controla as principais interações da interface;
  - `validacao.js` — concentra as validações e máscaras do formulário;
  - `storage.js` — realiza a persistência e recuperação dos dados utilizando `localStorage`;
- `vite.config.js` — contém a configuração do Vite para desenvolvimento e build;
- `package.json` — define os scripts e dependências do projeto.

## Pré-requisitos

Para executar o projeto localmente, é necessário:

- Node.js;
- npm;
- Git;
- Navegador web moderno;
- Editor de código, como Visual Studio Code.

## Como executar localmente

1. Clone o repositório:

```bash
git clone https://github.com/ppedroalencar/projeto-ong-arara-azul.git
```

2. Acesse o diretório do projeto:

```bash
cd projeto-ong-arara-azul
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Acesse o endereço informado pelo Vite no terminal.

## Build de produção

Para gerar a versão otimizada do projeto, execute:

```bash
npm run build
```

Os arquivos gerados serão disponibilizados no diretório `dist/`.

Para visualizar localmente a versão de produção:

```bash
npm run preview
```

## Dependências

O projeto utiliza o Vite como ferramenta de desenvolvimento e build.

A biblioteca SweetAlert2 é carregada externamente por CDN e utilizada para fornecer feedback visual no formulário de cadastro.

## Testes

O projeto não possui uma suíte de testes automatizados. Os testes são realizados manualmente no navegador e incluem:

- Navegação entre as páginas;
- Funcionamento dos links internos;
- Comportamento responsivo da interface;
- Funcionamento do menu em dispositivos móveis;
- Alternância entre os temas claro e escuro;
- Validação dos campos do formulário;
- Aplicação das máscaras de CPF, telefone e CEP;
- Persistência de dados no `localStorage`;
- Feedback visual após o cadastro;
- Navegação por teclado;
- Funcionamento do link de acesso direto ao conteúdo principal.

## Acessibilidade

O projeto adota práticas básicas de acessibilidade, tendo como referência as diretrizes WCAG 2.1.

Entre as práticas implementadas estão:

- Utilização de HTML semântico;
- Textos alternativos em imagens;
- Associação entre `label` e campos de formulário;
- Navegação por teclado;
- Indicadores visuais de foco;
- Link para acesso direto ao conteúdo principal;
- Uso de atributos ARIA em elementos de navegação, quando necessário;
- Menu responsivo com controle de estado.

## Versionamento

O projeto utiliza Git e GitHub para controle de versão e gerenciamento do desenvolvimento.

As funcionalidades são desenvolvidas em branches específicas e integradas à branch `main` por meio de Pull Requests.

A partir da etapa de consolidação do projeto, os commits seguem a convenção Conventional Commits, utilizando prefixos como:

- `feat:` — nova funcionalidade;
- `fix:` — correção de problema;
- `docs:` — alteração de documentação;
- `refactor:` — refatoração de código.

O versionamento das releases segue o padrão Semantic Versioning (`MAJOR.MINOR.PATCH`).

## Projeto acadêmico

Projeto desenvolvido como atividade acadêmica do curso de Análise e Desenvolvimento de Sistemas (ADS), com foco na aplicação prática dos conceitos estudados na disciplina de Desenvolvimento Front-end.