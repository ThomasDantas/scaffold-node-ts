export class DataError extends Error {
  constructor () {
    super('Data failed')
    this.name = 'DataError'
  }
}
