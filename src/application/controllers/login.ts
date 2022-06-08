import { Login } from '@/domain/use-cases'
import { badRequest, HttpResponse, ok, unauthorized } from '@/application/helpers'
import { Required } from '@/application/validation'
import { Controller } from '@/application/controllers'

type HttpRequest = { token: string }

type Model = Error | { accessToken: string }

export class LoginController extends Controller {
  constructor (private readonly auth: Login) {
    super()
  }

  async perform ({ token }: HttpRequest): Promise<HttpResponse<Model>> {
    const error = this.validadeToken(token)
    if (error !== undefined) {
      return badRequest(error)
    }
    try {
      const accessToken = await this.auth({ token })
      return ok(accessToken)
    } catch {
      return unauthorized()
    }
  }

  private validadeToken (token: string): Error | undefined {
    return new Required(token, 'token').validate()
  }
}
