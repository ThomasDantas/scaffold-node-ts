export const loginParamsSchema = {
  type: 'object',
  properties: {
    token: {
      type: 'string'
    }
  },
  required: ['token']
}
