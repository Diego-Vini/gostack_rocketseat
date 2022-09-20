NPM e YARN 

São ferramenta qe permitem baixar bibliotecas usadas no código

------------------------------------------------------------------------------
Iniciando projeto no node com Yarn

yarn init -y

------------------------------------------------------------------------------

Instalando express

permite uso de rotas

gerencia os middleware

yarn add express

configuração dentro do index.js

const { response } = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(3333);

executando o servidor: node .\src\index.js

------------------------------------------------------------------------------
Instalando o nodemon

Biblioteca que fica ohando as alterações no código e rcarregando o serviço

yarn add nodemon -D

executando: yarn nodemon .\src\index.js

ou

no arquivo package.json adiconar um script

{
  "name": "backend",
  "version": "1.0.0",
  "main": "src/index.js",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon"
  },


------------------------------------------------------------------------------

Métodos HTTP

GET: Busca informações do backend

Post: Criar informação no backend

PUT/Patch: Altera informação no backend

DELET: Exclui informação no backend

------------------------------------------------------------------------------

Tipos de Parametros

Query params (request.query): Filtros e paginação

Route params (request.params): Identificar recursos (atualizar(put)/deletar(delete))

*Route params tambem pode utilizar (Request.body)

Request body (Request.body): Conteudo na hora de criar ou editar um recurso (json)

* Para que o body funcione é necessario utilizar o use conforme abaixo:

app.use(express.json());


------------------------------------------------------------------------------
UUID para gerar ids de forma automatica

instalando: yarn add uuidv4

configurando: const { uuid } = require('uuidv4')

Usando: id: uuid()

------------------------------------------------------------------------------







