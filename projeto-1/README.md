# Projeto 1

A proposta deste projeto é criar um website realizando integrações com API's. Será utilizado como base para gerar a estrutura do projeto o módulo **create-react-app**.

**Dependências do projeto:**
* [Create React App](https://github.com/facebook/create-react-app) - Scafoolding para projetos React.
* **react-router-dom**: precisa ser instalado o módulo abaixo, comando:
`npm install react-router-dom --save`
* [Axios](https://github.com/axios/axios) - Módulo utilizado para realizar as requisições na API.
* **redux**: precisa ser instalado os dois módulos abaixo, comandos:
`npm install redux --save`
`npm install react-redux --save`

**Helper:**
* [Material Design Lite](https://getmdl.io): criação de interfaces.

# Funcionalidades básicas

### Página inicial

Será a página inicial do projeto. Acessando a URL `http://[domain]/` esta página deverá ser carregada.

**Recursos mínimos exigidos da página:**

- precisa possuir um campo de busca, para que seja possível digitar um texto aberto. Este valor precisa ser repassado para o endpoint API;
- precisa possuir uma listagem exibindo o resultado retornado a partir do valor utilizado no campo de busca;
- o endpoint que será utilizado nesta página é:  `https://api.mercadolibre.com/sites/MLB/search?q={VALOR_DIGITADO}`;

### Página de detalhe do Anúncio
- a página precisa possuir no mínimo os seguintes dados: id, title, thumnail, preço formatado (o campo da API é **price**), seller_address (mostrar as informações que julgar necessárias);
- o endpoint que será utilizado nesta página é: 
`https://api.mercadolibre.com/items/{ID_DO_ANUNCIO}`

* coloque outras informacões que julgar necessário. Sempre leve em consideração que os dados desta página precisam ser atrativos para **você**, e que te convença a realizar a compra.

### Detalhes!
 
  - Montar uma interface com uma experiência para o usuário é um fator importantissímo na avaliação. Exemplo, quando realizar a requisção, mostrar algo que diz que está sendo feito algo, pode ser um "Aguarde...".
  - Pensar na organização do projeto. Perguntas que podem ser feitas:
  -- "Os diretórios estão **organizados**?"
  -- "Criei os **componentes** necessários para o projeto?"
  -- "Estou seguindo um **padrão** de escrita de código?"
  -- "Meu código está identado? **Qualquer** pessoa consegue compreender a escrita do código?"
  -- "Escrevi um **Readme.md** e **qualquer **consegue iniciar meu projeto por este **Readme**?"

# Premiação! 

Os **dois** melhores projetos serão premiados com um Gift Card do Mercado Livre!

# Exemplos
* [Versão inicial que fizemos durante a aula](https://drive.google.com/open?id=1gCyOmrE4NVIDU85pUJ-6Ct5MmPLTyhnR)
* [Exemplo com componentes gerais](https://drive.google.com/open?id=133ChPIjSoDo3no0p6rAstTNHf6Yh56T9)
* [Exemplo com componentes e criando serviços genéricos para o projeto](https://drive.google.com/open?id=1bO3M0KCZOZaq2P780adwJUDoMhS2YiQE)
* [Exemplo com componentes, criando serviços genéricos, e aplicando o Redux](https://drive.google.com/open?id=1zOBwXXuJDWepYU_Uq2T2fcTcFTfphFf1)