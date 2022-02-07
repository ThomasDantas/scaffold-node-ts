export const UserPath = {
  get: {
    tags: ['User'],
    summary: 'API para retornar os dados do usuário',
    description: 'Essa rota pode ser executada por **qualquer usuário** com um token valido',
    security: [{
      $ref: '#/schemas/securitySchemes'
    }],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/userData'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      403: {
        $ref: '#/components/forbidden'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
