export interface SaveUserAccount {
  saveUser: (params: SaveUserAccount.Input) => Promise<SaveUserAccount.Output>
}

export namespace SaveUserAccount {
  export type Input = { name: string, email: string, token: string }

  export type Output = {
    id: number
    name: string
    email: string
  }
}

export interface LoadUserAccount {
  loadUser: (params: LoadUserAccount.Input) => Promise<LoadUserAccount.Output>
}

export namespace LoadUserAccount {
  export type Input = { id: string }

  export type Output = undefined | {
    id: number
    name: string
    email: string
  }
}
