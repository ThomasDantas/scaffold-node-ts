# Autenticacao

> ## Dados:
* Receber Token de Acesso

> ## Fluxo primario
1. ✅ Obter dados (id, nome, email) da API.
2. ✅ Consultar se existe um usuario.
3. ✅ Criar uma conta para o usuario com os dados recebidos.
4. ✅ Criar um token de acesso, a partir do ID do usuario, com expiracao de 30 minutos
5. ✅ Retornar o token de acesso gerado

> ## Fluxo de excecao: Token invalido ou expirado
1. ✅ Retornar um erro de autenticacao
