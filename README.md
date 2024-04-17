# REST-API-NODEJS-MYSQL

Esta é uma aplicação de API RESTful em Node.js que utiliza Express e MySQL para gerenciar uma coleção de times e estatísticas da NBA.
Projeto banco de dados MySQL utilizando docker, para estudo em implantação proxmox e monitoramento com grafana e banco de dados relacional usando biblioteca mysql2.

## Teste a API com docker se preferir.

```plaintext
docker pull cintrab98/api-nba
docker network create net-api
docker run --network net-api -dp 127.0.0.1:3000:3000 cintrab98/api-nba:1.2
docker pull cintrab98/dbmysql
docker run --name db-api-nba --network net-api cintrab98/dbmysql:1.0
```
- **Mais informações em:** https://hub.docker.com/repository/docker/cintrab98/api-nba/general 


## Instalação

Clone o repositório:

```plaintext
git clone https://github.com/CintraB/REST-API-NODEJS-MYSQL
```
Instale as dependências:

```plaintext
npm install
```

## Configuração

Antes de executar o aplicativo, é necessário configurar as variáveis de ambiente no arquivo `.env`.

```plaintext
PORT=3000
CONNECTION_STRING=mysql://root:password@ip:port/database_name
```

## Execução

Execute o comando

```plaintext
npm run dev
```
O servidor estará acessível em http://localhost:3000.

### Endpoints

  - **Times**
    - GET /teams: Obtém todos os times.
    - GET /teams/:id: Obtém um time específico pelo ID.
    - GET /teams/search: Obtém times filtrados com base em parâmetros de busca.
    - POST /teams: Cria um novo time.
    - PUT /teams/:id: Atualiza um time existente pelo ID.
    - DELETE /teams/:id: Exclui um time pelo ID.
  - **Estatísticas**
    - GET /stats: Obtém todas as estatísticas.
    - GET /stats/:id: Obtém estatísticas específicas pelo ID do time.
    - GET /stats/search: Obtém estatísticas filtradas com base em parâmetros de busca.
    - PUT /stats/:id: Atualiza estatísticas existentes pelo ID do time.

**Tabela Times**

| VERBO | URL |
|----------|----------|
|GET| http://localhost:3000/teams/?limit=6&page=1 |
|GET| http://localhost:3000/teams/search?teamname=Boston%20Celtics&conference=Leste&coach=Joe%20Mazzulla |
|POST| http://localhost:3000/teams/ |
|PUT| http://localhost:3000/teams/30 |
|DELETE| http://localhost:3000/teams/33 |

Exemplo Json para cadastrar e alterar times.
```plaintext
{
    "team":"CHICAGO BULLS",
    "conference":"Leste",
    "wins":"37",
    "losses":"42",
    "value":"2.35",
    "coach":"Billy Donovan",
    "team_age":"26.4",
    "team_height":"200.70",
    "team_wingspan":"207.30"
}
```

**Tabela Estatísticas**

| VERBO | URL |
|----------|----------|
|GET| http://localhost:3000/stats/?limit=6&page=1 |
|GET| http://localhost:3000/stats/1 |
|PUT| http://localhost:3000/stats/35 |

Exemplo Json para alterar estatísticas de um time.
```plaintext
{
    "team_age": "22",
    "team_height": "80.43",
    "team_wingspan": "210.10"
}
```

- **Estrutura de Arquivos**
  - server.js: Arquivo de entrada da aplicação.
  - app.js: Configuração do aplicativo Express.
  - config/dbConnect.js: Conexão com o banco de dados MySQL.
  - routes/index.js: Arquivo de roteamento principal.
  - routes/teamRoutes.js: Rotas relacionadas aos times.
  - routes/statsRoutes.js: Rotas relacionadas às estatísticas.
  - controllers/teamsControllers.js: Controlador para operações relacionadas aos times.
  - controllers/statsControllers.js: Controlador para operações relacionadas às estatísticas.
  - middlewares/pagination.js: Middleware para paginação dos resultados.
  - middlewares/paginationStats.js: Middleware para paginação dos resultados de estatísticas.
  - middlewares/search.js: Middleware para construção de consultas de busca.
  - middlewares/searchStats.js: Middleware para construção de consultas de busca de estatísticas.
  - package.json: Arquivo de configuração do Node.js que lista as dependências do projeto.
  - .env: Arquivo de variáveis de ambiente.

- **Tecnologias Utilizadas**
  - Node.js
  - Express.js
  - MySQL
  - dotenv
  - nodemon
