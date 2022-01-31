import { PgUser } from '@/infra/repos/postgres/entities'

import { getRepository } from 'typeorm'

type Input = { id: string }
type Output = { name: string } | undefined

export class PgUserProfileRepository {
  async load ({ id }: Input): Promise<Output> {
    const pgUserRepo = getRepository(PgUser)
    const pgUser = await pgUserRepo.findOne({ id: parseInt(id) })
    if (pgUser !== undefined) return { name: pgUser.name }
  }
}
