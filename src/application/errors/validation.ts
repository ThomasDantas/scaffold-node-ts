export class RequiredFieldError extends Error {
  constructor (fieldName?: string) {
    const message = fieldName === undefined
      ? 'Field Required'
      : `The field ${fieldName} is required`
    super(message)
    this.name = 'RequiredFieldError'
  }
}
