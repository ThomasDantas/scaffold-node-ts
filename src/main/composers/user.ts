import { UserDataController } from '@/application/controllers'
import { setupUserData } from '@/domain/use-cases'
import { PgUserProfileRepository } from '@/infra/repos/postgres/repos'

export const makeUserDataController = (): UserDataController => {
  const pgUser = new PgUserProfileRepository()
  const setupUser = setupUserData(pgUser)
  return new UserDataController(setupUser)
}
