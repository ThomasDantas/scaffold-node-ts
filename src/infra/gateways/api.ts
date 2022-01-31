import { LoadUser } from '@/domain/contracts/gateways'
import { HttpGetClient } from '@/infra/gateways'

type UserInfo = {
  id: string
  name: string
  email: string
}

type Input = LoadUser.Input
type Output =LoadUser.Output

export class Api {
  private readonly baseUrl = 'https://api.com'

  constructor (
    private readonly httpClient: HttpGetClient
  ) {}

  async loadUser ({ token }: Input): Promise<Output> {
    const { id, name, email } = await this.getUserInfo(token)
    return { id, name, email }
  }

  private async getUserInfo (clientToken?: string): Promise<UserInfo> {
    return {
      id: '123123',
      name: '123123',
      email: '123123'
    }
  }
}
