import { bearerAuthSchema } from '@/main/docs/schemas/'
import {
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden
} from '@/main/docs/components/'

export default {
  securitySchemes: {
    JWT: bearerAuthSchema
  },
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden
}
