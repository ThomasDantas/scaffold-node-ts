import { makeLoginController } from '@/main/composers'
import { adaptExpressRoute as adapt } from '@/main/adapters'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/login', adapt(makeLoginController()))
}
