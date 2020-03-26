const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
        //Retorna todos os dados da tabela
        return response.json(ongs);
    },

    async create(request, response){
        //or const data = request.body;
        const {name, email, whatsapp, city, uf} = request.body;
        
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        return response.json({id});
    }
};