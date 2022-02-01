import { AuthenticationMiddleware } from '@/application/middlewares'
import { JwtTokenHandler } from '@/infra/gateways'
import { env } from '@/main/config'

export const makeAuthenticationMiddleware = (): AuthenticationMiddleware => {
  const jwt = new JwtTokenHandler(env.jwtSecret)
  return new AuthenticationMiddleware(jwt.validate.bind(jwt))
}
