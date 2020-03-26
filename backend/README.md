## Reconhecendo entidades e funcionalidades do modelo

### Entidades
- ONG
- Caso (incident)

### Funcionalidades
- Login de ONG
- Logout de ONG
- Cadastro de ONG
- Cadastrar novos casos
- Deletar casos específicos de uma ONG
- Listar todos os casos
- Entrar em contato com a ONG

### KNEX possui "migrations"

http://knexjs.org/#Installation-migrations
```json
{
    "development": {
        "migrations": {
            "directory": "./src/database/migrations"
        }
    }
}
```
- npx knex migrate:make create_ongs

Caso mostre um erro:
```json
{
    "development": {
        "useNullAsDefault": true
    }
}
```

- npx knex migrate:latest