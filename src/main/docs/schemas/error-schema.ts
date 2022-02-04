export const errorSchema = {
  type: 'object',
  properties: {
    statusCode: {
      type: 'number'
    },
    data: {
      type: 'string'
    }
  },
  required: ['error']
}
