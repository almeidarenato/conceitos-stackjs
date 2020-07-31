# Typescript

## Oque é

É uma linguagem totalmente baseada em javascript adicionando tipagem e permite utilizar no node/navegador as ultimas funcionalidades do javascript.
Ele funciona muito similar ao babel , para converter o código para javascript.

## Porque usar?

IntelliSense - ele passa a conseguir estipular as variáveis de um projeto por exemplo, além de saber os tipos. Com isso você ganha muito a produtividade permitindo desenvolver com mais segurança.

## iniciando um projeto typescript

```jsx
yarn init -y
yarn add typescript -D
```

A dependencia typescript deve ser utilizada apenas em desenvolvimento

para iniciar a configuração do typescript faça o comando

```jsx
yarn tsc --init
```

e para converter os arquivos para js basta executar

```jsx
yarn tsc
```

## Pasta Services

Geralmente guarda funções responsáveis por rodar alguma regra de negócio

## Definindo tipos no editor

function createUser(name = '')

Define o tipo string para a variável name , tornando ela opcional (pois recebe um valor nulo logo ao entrar na variável

function createUser(name='', email:string ou email:object ou email:number )

Define diversos tipos para a variável email.

## usando objeto com tipos

Basta utilizar uma interface para definir os tipos de cada variável

tipos possíveis:

[//string](//string) , number ,boolean , object

// ?: ← significa que o valor é opcional

Sempre que precisamos definir um formato de um objeto precisamos de uma Interface nova

```jsx
interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}
export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };
  return user;
}
```

uma forma mais facil de definir um array de um determinado tipo seria

```jsx
tech : string[]; //array de strings
```
