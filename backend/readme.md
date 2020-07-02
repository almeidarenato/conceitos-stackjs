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

## Nodemon

Dependencia para "reiniciar" automaticamente o node para cada alteração o node

```bash
yarn add nodemon -D
```

o -D indica que é uma dependencia apenas de desenvolvimento.

para que ele passe a rodar basta usar o comando nodemon src/index.js

Mas você também pode rodar um script em nosso package.json adicionando a linha:

```json
"scripts": {
    "dev": "nodemon src/index.js"
  }
```

se indicarmos no parametro "main" o local correto do nosso arquivo src nem precisamos adiciona-lo em nosso script bastanto colocar "nodemon" .

Dessa forma:

```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "src/index.js",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.4"
  },
  "scripts": {
    "dev": "nodemon"
  }
}
```

## App.listen()

Nosso app.listen pode receber dois parametros sendo que o segundo é uma função.
Essa função é disparada logo que o servidor sobe. Podemos adicionar uma mensagem avisando que o backend está online Assim:

```json
app.listen(3333, () => {
  console.log("[Starting] Starting backend 🚀");
});
```

O console também aceita emojis

## Métodos HTTP

- Método GET

  Utilizado para buscar informação(oes) do backend. Quando o intuito da rota é retornar informações.

- Método POST

  Quando queremos criar uma informação no backend.

- Método PUT/PATCH

  PUT - Quando queremos atualizar uma informação no backend. Geralmente todos os campos serão atualizados neste caso.

  PATCH - Quando queremos atualizar apenas um campo.

- Método DELETE

  Quando queremos remover uma informação do backend.

  ## Tipos de Parâmetros

  - Query Params

    Usados principalmente para filtros e paginação

    [http://localhost:3333/](http://localhost:3333/)projects?title=RocketSeat

    Para obte-lo no código:

    console.log(request.query.title) //RocketSeat

  - Route Params

    Usado para identificar recursos em uma rota put/patch/delete

    ```json
    app.put("/projects/:id",(request,response)⇒{})
    ```

    Utilizando o route param com id: [http://localhost:3333/](http://localhost:3333/)projects/1 → onde id no caso é igual a 1

    Para obter esse id no código:

    console.log(request.params.id)

  - Request Body

    Para todas as outras necessidades

    Ex.: Preencher campos de formulário e salva-los

    Ex: Json enviado

    ```json
    {
      "titulo": "App React",
      "owner": "Renato Almeida"
    }
    ```

    Para receber api no formato json é necessário incluir

    app.use(express.json()) antes da rota.

    console.log(request.body)

  ## Criação das rotas

  Usamos a sintaxe abaixo para criar uma rota

  app.método('recurso',(request,response)=>{
  algumaação();
  })

  Abaixo criamos o método get para o recurso /**projects** que retorna um json com os valores "Projeto 1" e "Projeto 2" em uma array.

```jsx
app.get("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto 2"]);
});
```

podemos usar diferentes métodos para o mesmo recurso. Por isso vamos fazer um post usando o mesmo recurso /**projects**

```jsx
app.post("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});
```

## Insomnia

Aplicação feita em electron para simular as requisições que criamos no backend

[https://insomnia.rest/](https://insomnia.rest/)

## UUIDV4

Biblioteca que permite a criaçao de um id unico universal

```json
yarn add uuidv4
```

utilização

const {uuid} = require('uuidv4');

console.log(uuid) // retorna um id unico universal

Você também pode importar o isUuid para utilizar como **validador de uuid**

const {uuid,isUuid} = require('uuidv4');

console.log(isUuid(id)) // retorna false caso não seja um uuid valido

## Adicionando status no retorno

Basta adicionar status no retorno

return response.status(404).json({error: "not found})

status = 404

quando não retornamos mensagem é recomendavel utilizar o status 203 (no content)

## Middleware

Ele funciona como um interceptador de requisições que pode interromper a requisição ou alterar dados da mesma.

Usamos quando um trecho de código que queremos disparar para uma ou mais rotas.

exemplo:

```jsx
function logRequest(request, response, next) {
  const { method, url } = request;
  console.log(`[${method.toUpperCase()}]${url}`);
  next();
}
```

aplicando o middleware em todas as rotas:

```jsx
app.use(logRequest);
//ou apenas rotas iguais ao do parametro
app.use("/projects/:id", validateProjectId);
```

aplicando em uma rota especifica:

```jsx
app.get("/projects",logRequest, (request, response) => { .... }
```

Você pode ter quantos middlewares precisar , basta adicionar virgula para indicar.

## Medindo tempo da sua requisição

Você consegue medir o tempo de sua requisição através de um middleware bem simples

```jsx
function MedirTempo(request,response,next){
console.time("Medir Tempo")
next();
console.timeEnd("Medir Tempo");
}

app.use(MedirTempo)
a cada execução ele irá medir o tempo de cada request
```
