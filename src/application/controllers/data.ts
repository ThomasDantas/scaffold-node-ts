import { Data } from '@/domain/use-cases'
import { HttpResponse, ok, unauthorized } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { Controller } from '@/application/controllers'

type HttpRequest = { token: string, auth?: string }

type Model = Error | { accessToken: string} | { id: number, name: string, email: string }

export class DataController extends Controller {
  constructor (private readonly execute: Data) {
    super()
  }

  async perform ({ token, auth }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const accessToken = await this.execute({ token, auth })
      return ok(accessToken)
    } catch {
      return unauthorized()
    }
  }

  override buildValidators ({ token }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: token, fieldName: 'token' }).required().build()
    ]
  }
}
