export interface LoadUserAccount {
  loadUser: (params: LoadUserAccount.Input) => Promise<LoadUserAccount.Output>
}

export namespace LoadUserAccount {
  export type Input = {
    token: string
  }

  export type Output = {
    id: string
    name: string
    email: string
  }
}
