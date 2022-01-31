import { adaptExpressMiddleware } from '@/main/adapters'
import { makeAuthenticationMiddleware } from '@/main/composers'

export const auth = adaptExpressMiddleware(makeAuthenticationMiddleware())
