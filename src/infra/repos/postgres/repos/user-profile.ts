import { PgUser } from '@/infra/repos/postgres/entities'

import { getRepository, Repository } from 'typeorm'

type InputSave = { name: string, email: string, token: string }
type OutputSave = { id: number, name: string, email: string }

type InputLoad = { id: string }
type OutputLoad = { name: string, token: string } | undefined

export class PgUserProfileRepository extends PgUser {
  private repo (): Repository<PgUser> {
    return getRepository(PgUser)
  }

  async saveUser ({ name, email, token }: InputSave): Promise<OutputSave> {
    console.log(name, email, token)
    const pgUserRepo = this.repo()
    const user = await pgUserRepo.save({ name, email, token })
    const { id } = user
    return { id, name, email }
  }

  async loadUser ({ id }: InputLoad): Promise<OutputLoad> {
    const pgUserRepo = this.repo()
    const pgUser = await pgUserRepo.findOne({ id: parseInt(id) })
    if (pgUser !== undefined) return { name: pgUser.name, token: pgUser.token }
  }
}
