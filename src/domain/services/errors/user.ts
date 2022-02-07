export class DataUserError extends Error {
  constructor () {
    super('Data User failed')
    this.name = 'DataUserError'
  }
}
