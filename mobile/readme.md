# React Native

Versão do React para desenvolvimento Mobile.

O React permite manipular cada plataforma de forma diferente (Android de uma forma diferente do IOS por exemplo).

O React não produz uma interface híbrida. Ele converte em interface nativa.

Código do React Native não é transpilado.

A microsoft já tem + de 40 aplicações criadas no React Native

## Arquitetura

Javascript ➡️ Metro Bundler (similar ao webpack) ➡️ Bundle ➡️ Bridge ➡️ Android / IOS

## Sintaxe

A declaração de componentes é igual a web

Não usamos HTML e sim componentes próprios do React-native

Nenhum elemento tem estilo - precisamos incluir a tag "style"

## Expo

SDK conjunto de funcionalidades prontas para usar (câmera, vídeo , integrações)

Não é necessário configurar emulador para utilizar o expo pois ele já usa o aplicativo que é baixado no celular.

**Porque não vamos utiliza?**

Limitação sobre o controle do código nativo (java ou objective-c)]

Várias bibliotecas não tem suporte para Expo;

O expo liberou seu conjunto de ferramentas prontas para serem utilizadas com projetos que não utilizam Expo.

## Instalação das dependencias

[https://react-native.rocketseat.dev/](https://react-native.rocketseat.dev/)

[Instalação Linux do React Native](https://www.notion.so/Instala-o-Linux-do-React-Native-b80b7c8575094750b9d7a85403e9ad4d)

[Instalação Windows](https://www.notion.so/Instala-o-Windows-2ab785fbafa3454d899a442810d7bb9f)

[Instalação MacOs](https://www.notion.so/Instala-o-MacOs-f5a0218c1f94478e819032b6dd2e330c)

[Emulação via USB](https://www.notion.so/Emula-o-via-USB-936a1fb4577e474b978794c05315e20f)

## Iniciando um projeto

depois de instalar o sdk do android através dos comandos

```bash
npx react-native init nomedoprojeto
```

## Pastas Do projeto

nas pastas /android e /ios é possível ver o código nativo para conseguir construir a interface da aplicação.

/nodemodules - dependencias

## Executando o projeto

primeiro certifique-se que o Metro blunder esteja executando

Para executa-lo basta rodar no terminal dentro do projeto

```bash
npx react-native start
```

Para instalar o projeto no emulador basta rodar o comando

```bash
npx react-native run-android nomedodevice
npx react-native run-ios nomedodevice
```

## Elementos do React-Native

O React Native não utiliza elementos do HTML . Por isso ele possui alguns elementos próprios. Importante dizer que:

- Eles não tem valor semântico.
- Eles não tem estilização . Portanto né necessário aplicar CSS (para isso podemos usar o StyleSheet sem criar um arquivo css)

<View/> - Usado como div , footer header , main , aside , section do HTML.

<Text /> - Usado como p, span, strong , h1, h2 ,h3

## Aplicando estilos

Exemplo de utilização do Stylesheet.

Importante dizer que todos os elementos possuem display:flex por padrão . Por isso conseguimos usar o flex:1

Também é importante dizer que os componentes não herdam estilos como na web.

```jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello GoStack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
```

## StatusBar

```jsx
import { StatusBar } from "react-native";

<StatusBar barStyle="light-content" backgroundColor="#7159c1" />;
```

## Usando o [localhost](http://localhost) para consumir apis

- IOS com emulador : [localhost](http://localhost)
- IOS com celular físico: IP da máquina de desenvolvimento
- Android com Emulador : [localhost](http://localhost) (usando o adb reverse)
- Android com Emulador: 10.0.2.2 (Emulador Android Studio)
- Android com Emulador: 10.3.2 (GenyMotion)
- Android com celulári : IP da máquina de desenvolvimento

## ScrollView

Permite uma lista "escrollável" no app (ela não permite o alignCenter do css , nem o justify)

```jsx
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";

return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <ScrollView style={styles.container}>
        {projects.map((project) => (
          <Text style={styles.project} key={project.id}>
            {project.title}
          </Text>
        ))}
      </ScrollView>
    </>
  );
}
```

## FlatList

Bastante similar ao ScrollView mas automatiza a exibição do conteúdo contido em um array e é mais otimizado que a ScrollView para lista grandes pois ela só mostra os elementos em tela oque está visível. O que não está em tela ela não exibe.

```bash
import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
...

<FlatList
        style={styles.container}
        data={projects}
        keyExtractor={(project) => project.id}
        renderItem={({ item: project }) => (
          <Text style={styles.project} key={project.id}>
            {project.title}
          </Text>
        )}
      />
```

## SafeAreaView

Utilizado para evitar que componentes seja renderizados fora da tela. Usado em volta do conteúdo

```jsx
import {SafeAreaView} from 'react-native'

<StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project} key={project.id}>
              {project.title}
            </Text>
          )}
        />
      </SafeAreaView>
```

## Button

Unico componente que tem utilização própria de acordo com o sistema

## TouchableOpacity

Botão sem estilização que ao clica-lo diminui a opacidade

Obs : Botões no Mobile não possuem "onClick" apenas "onPress" (pressionar)

```jsx
<TouchableOpacity
  style={styles.button}
  activeOpacity={0.6}
  onPress={handleAddProject}
>
  <Text style={styles.buttonText}>Adicionar Projeto</Text>
</TouchableOpacity>
```
