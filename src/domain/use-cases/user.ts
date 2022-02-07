import { LoadUserAccount } from '@/domain/contracts/repos/'
import { DataUserError } from '@/domain/services/errors'

type Setup = (pgUserRepo: LoadUserAccount) => DataUser

type Input = { userId: string }
type Output = { id: number, name: string, email: string }
export type DataUser = (params: Input) => Promise<Output>

export const setupUserData: Setup = (pgUserRepo) => async params => {
  const userPg = await pgUserRepo.loadUser({ id: params.userId })
  if (userPg !== undefined) {
    return { ...userPg }
  }
  throw new DataUserError()
}
