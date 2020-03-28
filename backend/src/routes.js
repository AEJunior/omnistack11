const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

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
/**
     * Query
     * Route
     * Body
     */
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })

}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
     }).unknown(),
}), ProfileController.index);

//Criar um incidente e inserir no banco de dados
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id:  Joi.number().required(),
    })
}),IncidentController.delete);

//Criando módulo das rotas disponíveis para que o 'index.js' possa acessá-las
module.exports = routes;
