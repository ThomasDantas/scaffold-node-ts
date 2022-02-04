export const accountSchema = {
  type: 'object',
  properties: {
    accessToken: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    token: {
      type: 'string'
    }
  },
  required: ['accessToken', 'name', 'token']
}
