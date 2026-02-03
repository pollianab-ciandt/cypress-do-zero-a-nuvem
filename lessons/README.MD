# 🌲 Cypress, do Zero à Nuvem ☁️

👋 Projeto "Do Zero Á Nuvem", por talking About Testing

## Pre-requisitos
- [git](https://git-scm.com/) (`2.42.1` no momento da redação deste artigo)
- [Node.js](https://nodejs.org/en/) (`v20.13.1` no momento da redação deste artigo)
- npm (`10.8.1` no momento da redação deste artigo)
- [Visual Studio Code](https://code.visualstudio.com/) (`v1.90.2` no momento da redação deste artigo) ou alguma outra IDE de sua preferência
1. Para verificar as versões do git, Node.js e npm instaladas no terminal do seu computador, execute o comando: 

```Terminal
git --version && node --version && npm --version
```
Obs: Ao instalar o Node.js, o npm é instalado junto. 🎉

**RECOMENDAÇÃO:** Usar as mesmas versões ou versões mais recentes de suporte de longo prazo (LTS) dos sistemas listados acima.

___

## Instalação e inicialização do [Cypress](https://cypress.io)  🌲
1. Na raiz do projeto, execute o comando `npm install cypress@13.12.0 --save-dev` (ou `npm i cypress@13.12.0 -D` para a versão curta).
2. Execute o comando `npx cypress open` para abrir o Cypress pela primeira vez e deixe-o guiá-lo na criação de uma suite de testes de ponta a ponta (E2E).
3. Por fim, com a _Cypress App_ aberta, crie um arquivo chamado `CAC-TAT.cy.js` e feche a _Cypress App_.

> **Obs. 2:** Quando iniciado pela primeira vez, o Cypress cria automaticamente o arquivo `cypress.config.js` e o diretório `cypress/`, com seus subdiretórios `e2e/`, `fixtures/` e `support/`, com seus respectivos arquivos.

4. Atualize o arquivo `cypress.config.js` da seguinte maneira.

```js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {},
})

```

> 👨‍🏫 Com a configuração abaixo, estamos "dizendo" ao Cypress que substituiremos as [dimensões de altura e largura padrão do Cypress](https://docs.cypress.io/api/commands/viewport#Defaults).

___
## Conhecendo a aplicação em teste 
A aplicação se chama Central de Atendimento ao Cliente TAT - [**CAC TAT**](https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html) - e foi desenvolvida usando HTML, CSS e JavaScript.

#### Funcionalidades da aplicação

A Aplicação CAC TAT simula o envio de mensagens para uma central de atendimento ao cliente.

#### Campos obrigatórios

Os seguintes campos são obrigatórios e **devem** ser preenchidos antes do envio do formulário:

- Nome (campo do tipo de texto)
- Sobrenome (campo do tipo de texto)
- E-mail (campo do tipo e-mail, **com validação**)
- Como podemos te ajudar? Algum elogio ou feedback para nós? (campo de área de texto)

#### Outros campos

Além dos campos obrigatórios, o “cliente” pode inserir:

- Telefone (campo do tipo número)
- Produto (campo suspenso com as opções: Blog, Cursos, Mentoria ou YouTube)
- Tipo de atendimento (campos do tipo radio com as opções: Ajuda, Elogio ou Feedback)
- Meio de contato preferencial (caixa de seleção com as opções: E-mail e/ou Telefone)
- Adicione um anexo (campo do tipo arquivo)

#### Regras dos meios de contato preferenciais

- Quando a caixa de seleção do telefone é marcada, o _input_ do número de telefone torna-se obrigatória
- Ao desmarcar a caixa de seleção do telefone, a inserção do número de telefone deixa de ser obrigatória

#### Política de Privacidade

Ao clicar no link [Política de Privacidade](https://cac-tat-v3.s3.eu-central-1.amazonaws.com/privacy.html) na parte inferior da página, ela abre em uma nova aba do navegador.

#### Mensagens

⚠️ Caso haja algum problema relacionado aos campos obrigatórios, a seguinte mensagem é exibida com fundo roxo: `Validar os campos obrigatórios!`

✅ Quando o formulário é enviado com sucesso, a seguinte mensagem é exibida com fundo cinza: `Mensagem enviada com sucesso.` Além disso, todos os campos voltam ao seu estado inicial.

> Ambas as mensagens são exibidas por apenas três segundos. Depois disso, elas desaparecem.
___

## Outros (Comandos úteis - Terminal)

1. Para abrir o index do html pelo terminal do vs code executar comando abaixo: 
```Terminal
start src\index.html
```
2. Rodar projeto no desktop:
```Terminal
npm run test
```
3. Rodar projeto mobile:
```Terminal
npm run cy:open:mobile
``` 
#### Rodar no cypress
1. Abrir cypress
```Terminal
npx cypress open
```
2. Rodar projeto:
```Terminal
npm run cy:open
``` 

3. Teste de video:
OBS: Alterar, configurações da pasta `cypress.config.js`

```js
const { defineConfig } = require('cypress')


module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {},
  video: true
})
```
Comando:
```Terminal
npm run test:mobile 
``` 
Note que será criado uma pasta video e ficará e terá videos dos 2 testes e2e `CAC-TAT.cy.js` e `privacyPolicy.cy.js`, depois pode tirar a linha video, ela só foi em um dos testes.

___
Este é um curso da **Escola Talking About Testing**, por [Walmyr](https://github.com/wlsf82).
