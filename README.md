# scaffold-node-ts
Projeto base para NodeJs com TypeScript

# Arquitetura

- src = Todo estrutura e aplicação;
  - application = Contém as regras de negócio;
    - controllers = Regra de negócio (ex: login);
    - errors = Erros comuns;
    - helpers = Funções comuns para controllers;
    - middlewares = Autenticação (jwt);
  - domain = Contém toda lógica, camada mais interna da aplicação;
    - contracts = Interfaces, contratos ;
    - gateways = Contratos com API’s;
    - repos = Contrato com repositório(DB);
    - services = Servicos de auxilio para lógica do domínio;
    - errors = Erros comuns;
  - use-cases = Caso de uso (ex: buscar dados do usuário e gerar token), lógica;
  - infra = Conexões externas, toda  infraestrutura da aplicação;
    - gateways = Conexões externas (API’s);
    - repos/postgres = Repositórios, orm, persistência de dados e entidades da aplicação;
    - entities = Entidades, ex: usuário;
    - helpers = Funções comuns;
    - repos = Persistência e métodos de determinada entidade;
  - main = Camada mais externa, entrada de dados;
    - adapters = Adaptador que faz meio campo com outros módulos, trata de entrada e saída de dados (ex: passar id do usuário por meio do req.locals);
    - composers = Pattern para compor todas dependências da rota (ex: makeLoginController)
    - config = Configuração inicial da aplicação/start (ex: envs, routes, swagger, app);
    - docs = Documentacao (swagger);
    - factories = Fábrica para soluções ou usos comuns no projeto (ex: criar token com a env);
    - middlewares = Autenticação (jwt);
    - routes = Rotas com inversão de dependência;
    - types = Novos tipos para reconhecimento TypeScript;
  - tests = Testes;
    - infra/repos/postgres/mocks = Mock conexão com o banco;
    - main/routes = Teste de integração com a rota;
