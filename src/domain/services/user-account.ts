type AccountData = {
  id: string
  name: string
}

export class UserAccount {
  id: string
  name: string

  constructor (accountData: AccountData) {
    this.id = accountData.id
    this.name = accountData.name
  }
}
