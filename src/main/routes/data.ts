import { makeDataController } from '@/main/composers'
import { adaptExpressRoute as adapt } from '@/main/adapters'
import { auth } from '@/main/middlewares'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/data-create', adapt(makeDataController()))
  router.get('/data-auth', auth, adapt(makeDataController()))
}