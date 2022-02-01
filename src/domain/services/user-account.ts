type AccountData = {
  id: number
  name: string
}

export class UserAccount {
  id: number
  name: string

  constructor (accountData: AccountData) {
    this.id = accountData.id
    this.name = accountData.name
  }
}
