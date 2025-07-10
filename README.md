# Portfólio Pessoal de Rafael Lacerda

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)

Este repositório contém o código-fonte do meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos e minha jornada como desenvolvedor front-end. O projeto foi construído do zero utilizando tecnologias modernas, com um forte foco em design, performance e experiência do usuário (UI/UX).

## 🚀 Acesso ao Vivo

Você pode acessar a versão final do site hospedada na Vercel:

**[Clique aqui para ver o site no ar!](https://portifolio-lacerda.vercel.app/)**  

## ✨ Visão Geral

![Demonstração do Portfólio](URL_DO_SEU_GIF_AQUI.gif)  
*(Dica: Grave um GIF da sua tela navegando no site para mostrar as animações e substitua este link! Você pode usar ferramentas como o [ScreenToGif](https://www.screentogif.com/) para isso.)*

## 🌟 Principais Funcionalidades

-   **Design Responsivo:** Totalmente adaptado para uma experiência perfeita em desktops, tablets e celulares.
-   **Tema Claro e Escuro:** Um seletor de tema que respeita a preferência do sistema do usuário e salva a escolha localmente.
-   **Animações Ricas:** Animações fluidas e intencionais em toda a aplicação, utilizando `Framer Motion` para criar uma navegação mais agradável.
-   **Fundo Cósmico Animado:** Um fundo com estrelas e meteoros que adiciona uma identidade visual única ao portfólio.
-   **SplashScreen de Carregamento:** Uma tela de boas-vindas profissional que melhora a primeira impressão do usuário.
-   **Seções Dinâmicas:**
    -   **Hero Section:** Apresentação com um efeito de digitação (`typewriter`) contínuo.
    -   **About Section:** Layout moderno com foto de perfil e cards informativos.
    -   **Skills Section:** Cards de habilidades com filtros de categoria animados e barras de progresso que animam ao entrar na tela.
    -   **Projects Section:** Galeria de projetos com um overlay interativo no hover para acesso rápido aos links.
    -   **Contact Section:** Formulário de contato funcional com feedback visual e notificações (`toast`).

## 💻 Tecnologias Utilizadas

Este projeto foi construído com um ecossistema de ferramentas modernas e focadas em performance:

-   **Front-end:**
    -   **React 19:** Biblioteca principal para a construção da interface.
    -   **Vite:** Build tool de alta performance para um desenvolvimento rápido.
    -   **Tailwind CSS 4:** Framework CSS utilitário para estilização rápida e consistente.
-   **Animação:**
    -   **Framer Motion:** Para animações complexas, transições de página e micro-interações.
-   **Componentes e Utilitários:**
    -   **Lucide React:** Para ícones SVG leves e consistentes.
    -   **Radix UI (Toast):** Para notificações acessíveis e não intrusivas.
    -   **React Router DOM:** Para gerenciamento de rotas.
    -   `clsx` & `tailwind-merge`: Para gerenciamento inteligente de classes CSS.
-   **Ferramentas de Desenvolvimento:**
    -   **ESLint:** Para garantir a qualidade e a padronização do código.

## 🛠️ Como Executar o Projeto Localmente

Para rodar este projeto no seu ambiente de desenvolvimento, siga os passos abaixo.

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
-   `npm` ou `yarn`

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Taff4/seu-repositorio.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd seu-repositorio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

O site estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

## 📂 Estrutura de Pastas

O projeto segue uma estrutura organizada para facilitar a manutenção, reutilização de componentes e escalabilidade da aplicação:

- **/src**: Diretório principal da aplicação.
  - **/assets**: Contém imagens, fontes e outros arquivos estáticos usados no projeto.
  - **/components**: Componentes reutilizáveis do React como Navbar, Footer, etc.
    - **/ui**: Componentes de interface genéricos, como Toast, Modal, etc.
  - **/hooks**: Hooks personalizados utilizados em diferentes partes da aplicação (ex: `use-toast`).
  - **/lib**: Funções utilitárias, como `cn` para manipulação de classes CSS.
  - **/pages**: Componentes que representam as páginas do site (ex: Home, NotFound).
  - **App.jsx**: Componente principal que controla as rotas da aplicação.
  - **index.css**: Estilo global utilizando Tailwind CSS, incluindo variáveis e resets.
  - **main.jsx**: Ponto de entrada da aplicação React. Renderiza o `App.jsx` dentro do DOM.




## 📫 Contato

Feito com ❤️ por Rafael Lacerda.

-   **LinkedIn:** [linkedin.com/in/rafael-lacerd](https://www.linkedin.com/in/rafael-lacerd)
-   **Email:** Lacerda_contato@outlook.com
