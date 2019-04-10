# Projeto APP

A proposta deste projeto é criar um App utilizando React Native, realizando integrações com API's. Será utilizado como base para gerar a estrutura do projeto o módulo **expo.io**.

**Dependências do projeto:**
* [Expo](https://github.com/facebook/create-react-app) - Scafoolding para projetos React Native. Instalar com o comando abaixo:
`npm install expo-cli -g`
** Para iniciar o projeto basta executar o comando: `expo init [NOME DO PROJETO]`
* [React Navigation](https://reactnavigation.org) - Módulo utilizado para criação de acesso em múltiplas telas. Instalar com o comando abaixo:
`npm install react-navigation --save`

**Helper:**
* [Nativebase](https://nativebase.io/) - Possuí diversos componentes, todos prontos para iOS e Android. Instalar com o comando abaixo:
`npm install native-base –-save`

# Funcionalidades básicas

### Tela inicial

Será a página inicial do projeto. Acessando a URL `http://[domain]/` esta página deverá ser carregada.

**Recursos mínimos exigidos da página:**

- precisa possuir um campo de busca, para que seja possível digitar um texto aberto. Este valor precisa ser repassado para o endpoint API;
- precisa possuir uma listagem exibindo o resultado retornado a partir do valor utilizado no campo de busca;

### Segunda tela do projeto
- a página precisa possuir o máximo de informação que o usuário resolveu visualizar a partir da listagem que ele mesmo fez a busca:

* coloque outras informacões que julgar necessário. Sempre leve em consideração que os dados desta página precisam ser atrativos para **você**!

### Detalhes!
 
  - Montar uma interface com uma experiência para o usuário é um fator importantissímo na avaliação. Exemplo, quando realizar a requisção, mostrar algo que diz que está sendo feito algo, pode ser um "Aguarde...".
  - Pensar na organização do projeto. Perguntas que podem ser feitas:
    - "Os diretórios estão **organizados**?"
    - "Criei os **componentes** necessários para o projeto?"
    - "Estou seguindo um **padrão** de escrita de código?"
    - "Meu código está identado? **Qualquer** pessoa consegue compreender a escrita do código?"
    - "Escrevi um **Readme.md** e **qualquer** um consegue inicializar o meu projeto por este **Readme**?"

# APIs

Existem diversas APIs que podem ser utilizadas para a construção deste APP, alguns exemplos:

* [Superhero](http://superheroapi.com)
* [Formula 1](http://ergast.com/mrd/)
* [Youtube](https://developers.google.com/youtube/v3/)
* [Twitter](https://developer.twitter.com)