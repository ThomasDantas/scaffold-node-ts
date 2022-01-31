import { TokenGenerator } from '@/domain/contracts/gateways'
import { DataError } from '@/domain/services/errors'
import { LoadUserAccount } from '@/domain/contracts/repos'
import { UserAccount } from '@/domain/services'
import { AccessToken } from '@/domain/services/access-token'

type Setup = (
  userAccountRepo: LoadUserAccount,
  token: TokenGenerator) => Data

type Input = { token: string }
type Output = { accessToken: string }
export type Data = (params: Input) => Promise<Output>

export const setupData: Setup = (userAccountRepo, token) => async params => {
  const accountData = await userAccountRepo.loadUser(params)
  accountData.id = '2131212s12'
  accountData.name = 'thomas'
  if (accountData !== undefined) {
    const userAccount = new UserAccount(accountData)
    const accessToken = await token.generate({ key: userAccount.id, expirationInMs: AccessToken.expirationInMs })
    return { accessToken }
  }
  throw new DataError()
}
