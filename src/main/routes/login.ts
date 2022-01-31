import { Router } from 'express'

export default (router: Router): void => {
  router.post('/index', (req, res, next) => {
    res.status(200).send({ data: 'sucesso' })
  })
}
