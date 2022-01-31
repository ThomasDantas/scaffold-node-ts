import { DataController } from '@/application/controllers'
import { setupData } from '@/domain/use-cases'
import { Api } from '@/infra/gateways'
import { makeJwtTokenHandler, makeAxiosHttpClient } from '@/main/factories'

export const makeDataController = (): DataController => {
  const jwtTokenHandler = makeJwtTokenHandler()
  const axiosHttpClient = makeAxiosHttpClient()
  const dataApi = new Api(axiosHttpClient)
  const setupDataAuth = setupData(dataApi, jwtTokenHandler)
  return new DataController(setupDataAuth)
}
