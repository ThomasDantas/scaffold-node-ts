export interface LoadUser {
  loadUser: (input: LoadUser.Input) => Promise<LoadUser.Output>
}

export namespace LoadUser {
  export type Input = {
    token: string
  }

  export type Output = {
    id: string
    name: string
    email: string
  }
}
