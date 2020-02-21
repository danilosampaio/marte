# Marte
Aplicativo construído com React-native com funcionalidades comuns à maioria das aplicações reais: login com facebook, menu principal, formulários, notificações, etc.

## Overview

O objetivo desse projeto é fornecer um template básico com funcionalidades que geralmente são necessárias em projetos mobile (login com facebook, formulários, notificações, etc.) mas que dão bastatente trabalho para funcionar de primeira, seja devido à configurações de módulos nativos, ou peculiaridades de versões do SDK, etc. Além de servir como base para criação de outras aplicações, esse projeto também explica o passo à passo de configuração, instalação, e execução desses recursos.

## Features

1. Login com Facebook

2. Formulários

3. Notificações

## Frameworks/libs
> Os itens abaixo ainda podem ser revisados, tendo em vista que o projeto está em fase de gestação.

1. React-native
  > framework para desenvolvimento de aplicativo mobile cross-platform.

2. React-native-elements
  > biblioteca de componentes para construção de interfaces: botões, inputs, etc.

3. Facebook SDK
  > Biblioteca para autenticação utilizando conta do facebook

4. Firebase
  > plataforma/infra-estrutura utilizada na implementação das notificações push. 

5. React-navigation
  > Biblioteca que facilita a implementação da navegação entre telas.

## Install and run

> Antes de instalar/executar o projeto, veja se seu ambiente de desenvolvimento e execução está pronto, confome itens __1__ e __2__ da seção __Setup do projeto__

```sh
git clone git@github.com:danilosampaio/marte.git
```

```sh
npm install
```

```sh
npm start
```

```sh
npx react-native run-android
```

## Passo à passo de construção do projeto
> Essa seção descreve como todas as funcionalidades foram configuradas e construídas, permitindo um entendimento para construir outras aplicações à partir desse template.

### Setup do projeto

  1. Ambiente de desenvolvimento
    
  Antes de qualquer coisa, precisamos configurar o ambiente de desenvolvimento, e instalar as ferramentas necessárias. A própria [documentação](https://facebook.github.io/react-native/docs/getting-started) no react-native descreve bem cada opção (linux, windows, android, iOS) e um guia para cada um, por isso é desnecessário duplicar as informações aqui. Considerando que o ambiente Android (JDK, Android SDK, Android Studio) está ok, vamos preparar o ambiente de execução.

  2. Ambiente de execução

  - Para executar o aplicativo em um dispositivo físico, siga o guia [Running On Device](https://facebook.github.io/react-native/docs/running-on-device)

  - Para executar o aplicativo em um dispositivo virtual, siga o guia [Criar e gerenciar dispositivos virtuais](https://developer.android.com/studio/run/managing-avds.html)

  3. Criando o projeto utlizando o `react-native-cli`

  ```sh
  npx react-native init marte --template react-native-template-typescript
  ```

  4. Executar aplicativo

  ```sh
  npx react-native run-android
  ```
  > o comando `run-android` instala o aplicativo no no dispositivo, mas para que as alterações no código fonte sejam publicadas automaticamente (hot reload) é necessário configurar o `adb reverse` conforme o [guia](https://facebook.github.io/react-native/docs/running-on-device#connecting-to-the-development-server-1), bem como executar o Metro server:

  ```sh
  npm start
  ```

  5. Pronto, temos o setup inicial para adicionar novas funcionalidades.

### Kit UI react-native-elements
> Iremos utilizar a biblioteca de componentes `react-native-elements` na construção das interfaces.

```sh
npm i react-native-elements --save
```

```sh
npm i --save react-native-vector-icons
```

Para funcionar corretamente no android, é necessário fazer a seguinte configuração:

  - Adicione a seguinte linha no arquivo `android/app/build.gradle` ( NÃO `android/build.gradle` ):

  ```sh
  apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
  ```

## Facebook login
> Para permitir que seu aplicativo autentique os usuários utilizando a conta do facebook, é necessário cadastrar o aplicativo na plataforma do facebook. O [guia oficial](https://developers.facebook.com/docs/facebook-login/android) descreve o passo à passo para criar e configurar seu aplicativo. O único detalhe que o guia não deixa claro é referente a geração do Hash de chave do ambiente de desenvolvimento. O seguinte o comando deve ser executado para gerar um hash:

```sh
keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64
```

O ponto importante aqui é: o path do arquivo `~/.android/debug.keystore` na verdade deve ser o arquivo gerado pelo react-native-cli, que ficam em `./android/app/debug.keystore`, considerando que você está na raiz do projeto.
Outro detalhe é que a partir do passo `8. Adicione o botão login do Facebook`, não é relevante para o nosso projeto, pois não estamos utilizando a API Java para codificar.

A autenticação do usuário e a recuperação de informações como nome, email, foto, está implementada no component [FBLoginButton](template/components/FBLoginButton.tsx).

## Contributing

Todos são bem vindos à contribuir com o projeto, seja com o codificação, documentação, ou sugestões. Algumas premissas importantes:

  - Qualquer funcionalidade implementada deve ser documentada e descrita o passo à passo (se necessário) para que qualquer desenvolvedor ou contribuidor do projeto posso testá-la.
  
  - Ser cordial com todos que estão contribuindo com o projeto, afinal todos aqui estão aprendendo.
  
  - As alterações devem ser feitas em um branch específico da sua alteração, e após revisão ser `merged`ao branch master.
  
  - Antes de um pull request, discuta com os demais membros contribuintes do projeto através issues, chat, etc., para evitar trabalho jogado fora.

## License

MIT License

Copyright (c) 2020 Danilo Sampaio
