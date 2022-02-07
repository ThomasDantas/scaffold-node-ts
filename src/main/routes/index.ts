import { Router } from 'express'

export default (router: Router): void => {
  router.get('/index', (req, res, next) => {
    res.json({ data: 'API Rest 4show' })
  })
}
