import './config/main-alias'

import 'reflect-metadata'

import { app, env } from '@/main/config'
import { createConnection } from 'typeorm'

createConnection()
  .then(() => {
    app.listen(env.port, () => {
      console.log(`Server Running at http://localhost:${env.port}`)
    })
  }).catch((err) => console.error(err))
