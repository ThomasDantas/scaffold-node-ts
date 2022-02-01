import { DataController } from '@/application/controllers'
import { setupData } from '@/domain/use-cases'
import { Api } from '@/infra/gateways'
import { PgUserProfileRepository } from '@/infra/repos/postgres/repos'
import { makeJwtTokenHandler, makeAxiosHttpClient } from '@/main/factories'

export const makeDataController = (): DataController => {
  const jwtTokenHandler = makeJwtTokenHandler()
  const axiosHttpClient = makeAxiosHttpClient()
  const dataApi = new Api(axiosHttpClient)
  const pgUser = new PgUserProfileRepository()
  const setupDataAuth = setupData(dataApi, pgUser, jwtTokenHandler)
  return new DataController(setupDataAuth)
}
