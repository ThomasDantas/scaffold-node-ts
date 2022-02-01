import { LoadUser, TokenGenerator } from '@/domain/contracts/gateways'
import { DataError } from '@/domain/services/errors'
import { SaveUserAccount, LoadUserAccount } from '@/domain/contracts/repos'
import { UserAccount } from '@/domain/services'
import { AccessToken } from '@/domain/services/access-token'

type Setup = (
  userAccountRepo: LoadUser,
  pgUserRepo: SaveUserAccount & LoadUserAccount,
  token: TokenGenerator) => Data

type Input = { token: string, auth?: string }
type Output = { accessToken: string, name?: string, token?: string } | { id: number, name: string, email: string, accessToken: string }
export type Data = (params: Input) => Promise<Output>

export const setupData: Setup = (userAccountRepo, pgUserRepo, token) => async params => {
  const accountData = await userAccountRepo.loadUser(params)
  accountData.id = 2131212
  accountData.name = 'thomas'
  if (params.auth === undefined) {
    const pgUser = await pgUserRepo.saveUser({ ...accountData, token: params.token })
    const accessToken = await token.generate({ key: pgUser.id.toString(), expirationInMs: AccessToken.expirationInMs })
    return { ...pgUser, accessToken }
  } else if (accountData !== undefined) {
    const userAccount = new UserAccount(accountData)
    const accessToken = await token.generate({ key: userAccount.id.toString(), expirationInMs: AccessToken.expirationInMs })
    const userPg = await pgUserRepo.loadUser({ id: '3' })
    return { ...userPg, accessToken }
  } else {
    throw new DataError()
  }
}
