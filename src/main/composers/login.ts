import { LoginController } from '@/application/controllers'
import { setupLogin } from '@/domain/use-cases'
import { Api } from '@/infra/gateways'
import { PgUserProfileRepository } from '@/infra/repos/postgres/repos'
import { makeJwtTokenHandler, makeAxiosHttpClient } from '@/main/factories'

export const makeLoginController = (): LoginController => {
  const jwtTokenHandler = makeJwtTokenHandler()
  const axiosHttpClient = makeAxiosHttpClient()
  const dataApi = new Api(axiosHttpClient)
  const pgUser = new PgUserProfileRepository()
  const setupLoginAuth = setupLogin(dataApi, pgUser, jwtTokenHandler)
  return new LoginController(setupLoginAuth)
}
