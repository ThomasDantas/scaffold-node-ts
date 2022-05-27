import { app } from '@/main/config'
import { PgUser } from '@/infra/repos/postgres/entities'
import { makeFakeDb } from '@/tests/infra/repos/postgres/mocks'
// import { UnauthorizedError } from '@/application/errors'

import { IBackup } from 'pg-mem'
import request from 'supertest'
import { getConnection } from 'typeorm'

describe('Login Routes', () => {
  describe('POST /login', () => {
    let backup: IBackup
    const loadUserSpy = jest.fn()
    jest.mock('@/infra/gateways/api', () => ({
      Api: jest.fn().mockReturnValue({ loadUser: loadUserSpy })
    }))

    beforeAll(async () => {
      const db = await makeFakeDb([PgUser])
      backup = db.backup()
    })

    afterAll(async () => {
      await getConnection().close()
    })

    beforeEach(async () => {
      backup.restore()
    })

    it('should return 200 with AccessToken', async () => {
      loadUserSpy.mockResolvedValueOnce({ id: 1, name: 'any_name', email: 'any_email' })

      const { status, body } = await request(app)
        .post('/api/login')
        .send({ token: 'valid_token' })

      expect(status).toBe(200)
      expect(body.accessToken).toBeDefined()
    })

    // it('should return 401 with UnauthorizedError', async () => {
    //   const { status, body } = await request(app)
    //     .post('/api/login')
    //     .send({ token: 'invalid_token' })

    //   expect(status).toBe(401)
    //   expect(body).toEqual({ error: new UnauthorizedError().message })
    // })
  })
})
