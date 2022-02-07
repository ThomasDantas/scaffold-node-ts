import { DataUser } from '@/domain/use-cases'
import { HttpResponse, ok, unauthorized } from '@/application/helpers'
import { Controller } from '@/application/controllers'

type HttpRequest = { userId: string }

type Model = Error | { id: number, name: string, email: string }

export class UserDataController extends Controller {
  constructor (private readonly data: DataUser) {
    super()
  }

  async perform ({ userId }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const dataUser = await this.data({ userId })
      return ok(dataUser)
    } catch {
      return unauthorized()
    }
  }
}
