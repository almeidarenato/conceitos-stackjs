# NodeJS - Conceitos

Para Iniciar o projeto basta digitar na sua linha de comando o código a seguir. Este comando irá criar um arquivo package.json com vários parâmetros preenchidos (por isso o -y pois automaticamente preenche todas as perguntas da criação do package.json com o valor "yes" ou "sim")

```bash
yarn init -y
```

## Estrutura do Projeto

/backend

- /src
  - index.js
- package.json

Iremos incluir a dependência Express em nosso projeto para permitir a utilização de requisições / resposta de forma simples.

```bash
yarn add express
```

Exemplo de utilização do express para receber uma rota e enviar uma informação estruturada

```jsx
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.json({ message: "Hello World" });
});

app.listen(3333);
```

Execução do servidor node no terminal

```bash
node src/index.js
```

Após executar o comando acima basta acessar no navegador o endereço [http://localhost:3333/](http://localhost:3333/)

Para receber um JSON com a mensagem : "Hello World"

Para cancelar o servidor basta apertar "**Command+C**" no mac ou "**CTRL+C"** no windows .
