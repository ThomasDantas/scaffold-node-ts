export const loginSchema = {
  type: 'object',
  properties: {
    acessToken: {
      type: 'string'
    }
  },
  required: ['acessToken']
}
