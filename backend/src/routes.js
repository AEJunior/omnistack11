const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Desacoplamento o método de 'Rotas' do express em uma variável
const routes = express.Router();
/*
outes.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json(
        {
            evento: 'Semana OmniStack 11.0',
            aluno: 'Color',
            hello: "world!"
        }
    );
});*/

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
//Enviar dados ao DB
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

//Criar um incidente e inserir no banco de dados
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

//Criando módulo das rotas disponíveis para que o 'index.js' possa acessá-las
module.exports = routes;
