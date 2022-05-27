import { LoadUser, TokenGenerator } from '@/domain/contracts/gateways'
import { LoginError } from '@/domain/services/errors'
import { SaveUserAccount } from '@/domain/contracts/repos'
import { UserAccount, AccessToken } from '@/domain/services'

type Setup = (
  api: LoadUser,
  pgUserRepo: SaveUserAccount,
  token: TokenGenerator) => Login

type Input = { token: string }
type Output = { accessToken: string }
export type Login = (params: Input) => Promise<Output>

export const setupLogin: Setup = (api, pgUserRepo, token) => async params => {
  const accountData = await api.loadUser(params)
  if (accountData !== undefined) {
    const pgUser = await pgUserRepo.saveUser({ ...accountData, token: params.token })
    const userAccount = new UserAccount(pgUser)
    const accessToken = await token.generate({ key: userAccount.id.toString(), expirationInMs: AccessToken.expirationInMs })
    return { accessToken }
  }
  throw new LoginError()
}
