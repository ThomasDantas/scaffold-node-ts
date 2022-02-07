import { makeUserDataController } from '@/main/composers'
import { adaptExpressRoute as adapt } from '@/main/adapters'
import { auth } from '@/main/middlewares'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/user', auth, adapt(makeUserDataController()))
}
