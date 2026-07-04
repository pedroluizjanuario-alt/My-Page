# Portfólio — Pedro Luiz Januário

Página de portfólio pessoal em formato de "prancha de desenho técnico" (blueprint), construída em HTML/CSS puro (sem frameworks ou dependências de build).

**[Ver demo](./portfolio.html)**

## Conceito

O visual parte da estética de um desenho técnico/cianotipo (blueprint): fundo azul profundo com grid de papel milimetrado, bloco de título no canto (como em plantas de engenharia), cantos de registro nas "folhas", e ícones esquemáticos desenhados com animação de traço.

A escolha não é aleatória — conecta com o perfil do autor como técnico em Desenvolvimento de Sistemas, e literalmente com um dos projetos do portfólio (motor de otimização de corte 2D para marcenaria).

## Estrutura

Um único arquivo `portfolio.html`, com CSS e JavaScript embutidos. Seções:

| Seção | Conteúdo |
|---|---|
| **Hero** | Título de abertura em formato de prancha técnica, com bloco de título (projeto, escala, data, folha) |
| **Sobre** | Bio curta + tabela de stack técnica geral |
| **Foco Back-End** | Cartões detalhando competências back-end (linguagens, banco de dados, APIs, arquitetura/segurança) |
| **Projetos** | Grid de 6 projetos com ícone esquemático, descrição, tags de stack e link para o repositório |
| **Contato** | Chamada para ação com e-mail, GitHub e LinkedIn |

## Tecnologias

- HTML5 + CSS3 (custom properties, grid, flexbox)
- JavaScript vanilla (nenhum framework)
- Fontes: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (display/técnico) e [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) (corpo de texto)
- Ícones desenhados manualmente em SVG inline

## Como usar

Não há build nem dependências — basta abrir o arquivo no navegador:

```bash
# clonar o repositório
git clone <url-do-repositorio>

# abrir diretamente
open portfolio.html   # macOS
xdg-open portfolio.html   # Linux
start portfolio.html   # Windows
```

Ou publicar direto via **GitHub Pages**, **Netlify** ou **Vercel** — é um HTML estático.

## Personalização

- **Cores**: variáveis CSS no `:root` (`--blueprint`, `--safety`, `--line`, etc.)
- **Projetos**: cada cartão está na seção `<div class="projects">` — duplique um bloco `.proj` para adicionar um novo
- **Contato**: atualize os links em `#contato` (e-mail, GitHub, LinkedIn)

## Pendências

- [ ] Confirmar nomes reais dos repositórios do GitHub e atualizar os links de cada projeto
- [ ] Substituir e-mail e LinkedIn de placeholder pelos dados reais

## Autor

**Pedro Luiz Januário**
Técnico em Desenvolvimento de Sistemas — ETEC Juscelino Kubitschek
[GitHub](https://github.com/pedroluizjanuario-alt)
