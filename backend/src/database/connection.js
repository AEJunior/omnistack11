const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);
//A conexão de development está sendo escolhida
module.exports = connection;