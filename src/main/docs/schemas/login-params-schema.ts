export const loginParamsSchema = {
  type: 'object',
  properties: {
    token: {
      type: 'string'
    },
    auth: {
      type: 'string'
    }
  },
  required: ['token']
}
