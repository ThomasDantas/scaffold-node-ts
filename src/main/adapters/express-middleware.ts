import { Middleware } from '@/application/middlewares'

import { RequestHandler } from 'express'

type Adapter = (middleware: Middleware) => RequestHandler

export const adaptExpressMiddleware: Adapter = middleware => async (req, res, next) => {
  console.log(req.headers)
  const auth = req.headers.authorization
  if (auth !== undefined) req.headers.authorization = auth.split(' ')[1]
  const { statusCode, data } = await middleware.handle({ ...req.headers })
  if (statusCode === 200) {
    const entries = Object.entries(data).filter(entry => entry[1])
    req.locals = { ...req.locals, ...Object.fromEntries(entries) }
    next()
  } else {
    res.status(statusCode).json({ error: data.message })
  }
}
