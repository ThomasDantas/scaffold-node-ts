import { Login } from '@/domain/use-cases'
import { HttpResponse, ok, unauthorized } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { Controller } from '@/application/controllers'

type HttpRequest = { token: string }

type Model = Error | { accessToken: string }

export class LoginController extends Controller {
  constructor (private readonly auth: Login) {
    super()
  }

  async perform ({ token }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const accessToken = await this.auth({ token })
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
