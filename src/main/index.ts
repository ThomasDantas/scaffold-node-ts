import './config/main-alias'

import 'reflect-metadata'

import { app, env } from '@/main/config'

app.listen(env.port, () => console.log(`Server Running at http://localhost:${env.port}`))
