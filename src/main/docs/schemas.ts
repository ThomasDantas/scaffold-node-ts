import {
  userSchema,
  loginParamsSchema,
  loginSchema,
  bearerAuthSchema,
  errorSchema

} from '@/main/docs/schemas/'

export default {
  userData: userSchema,
  loginParams: loginParamsSchema,
  login: loginSchema,
  securitySchemes: {
    JWT: bearerAuthSchema
  },
  error: errorSchema
}
