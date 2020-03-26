const express = require('express');
//Importando express para a variável express.
const cors = require('cors');

const routes = require('./routes');
//Como não é um pacote, é preciso usar './' onde eu encontro os módulos importados;
//Para voltar pasta é preciso '../'
const app = express();
//Antes de todas as requisições, ir no corpo, e converter em JSON
//Aula 2: POST => http://localhost:3333/users
app.use(cors())
app.use(express.json());
app.use(routes);
//Usando as rotas;
/**
 *    Rota / Recurso
 */
/**
 * Métodos HTTP:
 * GET: Buscar/listar uma informação do back-end;
 * POST: Criar uma informação no back-end;
 * PUT: Alterar uma informação no back-end;
 * DELETE: Deletar uma informação no back-end;
 * 
 * https://insomnia.rest/ -> Não suporta sistemas 32 bits
 * Criando requisições (Funciona como se fosse acessos do browser, de todos os métodos).
 * Usa-se para testar as rotas.
 * INICIANDO UMA REQUISIÇÃO
 * >New request
 * >    GET    >   http://localhost:3333/users
 * https://postman.com/
 */

/**
 * Tipos de parâmetros:
 * EX.: http://localhost:3333/users/?page=1&nome=Colorful&idade=25
 * Query Params: Parâmetros nomeados enviados na rota após o símbolo de "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 *      EX: app.get('users/:id'), ... <- Tudo o que vier depois da rota, vai ser nomeada ID
 *          http://localhost:3333/users/1 
 *          Retorna um único usuário, com o ID: '1'
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 


app.get('/', (request, response) => {
    //A '/', significa que é o diretório raiz, ou seja, a rota 'main'. Ou a declaração da rota.
    //Recurso, no caso, seria o "/'users'"
    response.send('Hello world!');
    //Resposta é 'hello world' para a rota
});

app.post('/user', (request, response) => {
    return response.json(
        {
            evento: 'Semana OmniStack 11.0',
            aluno: 'Colorful',
            hello: "world!"
        }
    );
});
 */
//Aula dia 2
//Query Params
/*
URL = http://localhost:3333/users?aluno=Colorful
app.get('/users', (request, response) => {
    const params = request.query;

    console.log(params)

    return response.json(
        {
            evento: 'Semana OmniStack 11.0',
            aluno: 'Colorful',
            hello: "world!"
        }
    );
});
*/
//Aula dia 2
//Route Params: Não podemos enviar parametros a mais do que está sendo esperado
/*
http://localhost:3333/users/1
app.get('/users/:id', (request, response) => {
    const id = request.params;

    console.log(id)

    return response.json(
        {
            evento: 'Semana OmniStack 11.0',
            aluno: 'Colorful',
            hello: "world!"
        }
    );
});
*/
//Method POST   =>  URL: "http://localhost:3333/users/"
//URL =>
/*
Foi movido para 'routes.js', pois vamos criar um único arquivo para rotas
app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json(
        {
            evento: 'Semana OmniStack 11.0',
            aluno: 'Color',
            hello: "world!"
        }
    );
});
*/
//npm install nodemon <= Instalar para evitar de reexecutar;
//Enviar parâmetro 'npm install nodemon "-D"' <= Só para uso durante o Dev
//Alterar no 'package.json' => 
//  "scripts": {
//          "start": "nodemon index.js"}

/**
 * Tipos de banco de dados:
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server;
 * NoSQL: MongoDB, CouchDB, FirebaseDB...
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*') 
 */

/**
 * Para fazer a conexão utilizamos o 'knex'
 * http://knexjs.org/#Installation-node
 * npm install knex
 * 
 * e o banco de dados: SQLite
 * npm install sqlite3 
 * 
 * Após instalar
 * npx knex init
 * É nele quem fica os dados para iniciação da comunicação
 * Ambiente de desenvolvimento: 
 *      development <= na máquina que estamos desenvolvendo
 *              staging <= que simula a produção, para que o time de desenvolvimento possa testar o production
 * Produção: 
 *      production <= para quando for jogado online
 * 
 * No knexfile.js:
 * development => connection => filename: './dev.sqlite3' <= 'dev' é o nome do arquivo para armazenar os dados
 * EX: './src/database/db.sqlite3'
 */

 /**
  * Criando diretórios para arquivos de desenvolvimento:
  * mkdir src
  * move index.js to src
  * alterar no 'package.json' o start para 'nodemon src/index.js'
  */

//Criando a rota principal
app.listen(3333)
//Quando acessar 'localhost:3333', ele irá exibir a aplicação.
