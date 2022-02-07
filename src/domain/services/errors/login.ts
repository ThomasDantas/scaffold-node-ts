export class LoginError extends Error {
  constructor () {
    super('Login failed')
    this.name = 'LoginError'
  }
}
