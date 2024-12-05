# GANHEI 🎲

GANHEI é um projeto de sorteios interativos criado com **Svelte 5**. Este projeto permite criar sorteios onde os participantes podem aumentar suas chances de ganhar usando **Pontos de Sorte**, tornando cada sorteio mais emocionante e dinâmico.

## ✨ Funcionalidades

- Adicionar participantes com um número personalizado de Pontos de Sorte.
- Gerar tickets de forma proporcional aos pontos de cada participante.
- Realizar sorteios de maneira justa e aleatória.
- Limpar dados para iniciar novos sorteios rapidamente.
- Testes automatizados para garantir o funcionamento correto do sistema.

---

## 🛠️ Tecnologias Utilizadas

- **Svelte 5**: Framework para construção da interface do usuário.
- **Svelte Runes**: Nova abordagem para lidar com reatividade no Svelte.
- **TypeScript**: Para tipagem estática e maior confiabilidade no código.
- **Vitest**: Para testes unitários.
- **Padrão MVC**: Separação das responsabilidades em Model, View e Controller.

---

## 🚀 Estrutura do Projeto

```plaintext
src/
├── lib/
│   ├── app.model.ts                # Lógica principal do sorteio (Model)
│   ├── app.controller.svelte.ts    # Controlador que conecta o Model com a View
├── routes/
│   ├── +page.svelte                # Única página do projeto (View)
│   ├── app.spec.ts                 # Testes automatizados para validação
```

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16+)
- [PNPM](https://pnpm.io/) ou [npm](https://www.npmjs.com/) instalado globalmente.

### Passo a Passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/Bielframos/ganhei.git
   cd ganhei
   ```

2. Instale as dependências:

   ```bash
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   pnpm dev
   ```

4. Acesse o projeto no navegador:
   ```
   http://localhost:5173
   ```

---

## 🧪 Rodando os Testes

Para garantir que o sistema funcione conforme o esperado, execute os testes automatizados:

```bash
pnpm test
```

---

Sinta-se à vontade para contribuir ou enviar sugestões! 🎉

---

## 📜 Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

Aqui está a versão em inglês do README.md:

---

# GANHEI 🎲 - En

**GANHEI** is an interactive raffle project built with **Svelte 5** and **Svelte Runes**. This project allows users to create raffles where participants can increase their chances of winning using **Luck Points**, making every draw more engaging and dynamic.

## ✨ Features

- Add participants with a custom number of Luck Points.
- Generate tickets proportional to each participant's points.
- Conduct fair and random draws.
- Clear data to start new raffles quickly.
- Automated tests to ensure the system functions correctly.

---

## 🛠️ Technologies Used

- **Svelte 5**: Framework for building the user interface.
- **Svelte Runes**: A new approach to handling reactivity in Svelte.
- **TypeScript**: For static typing and improved code reliability.
- **Vitest**: For unit testing.
- **MVC Pattern**: Separation of concerns into Model, View, and Controller.

---

## ⚙️ How to Run the Project

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16+)
- [PNPM](https://pnpm.io/) or [npm](https://www.npmjs.com/) installed globally.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ganhei.git
   cd ganhei
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open the project in your browser:
   ```
   http://localhost:5173
   ```

---

## 🧪 Running Tests

To ensure the system works as expected, run the automated tests:

```bash
pnpm test
```

---

Feel free to contribute or submit suggestions! 🎉

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
