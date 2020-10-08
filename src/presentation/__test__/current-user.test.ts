import request from 'supertest'
import app from '../../main/config/app'

it('Responds with details about the current user', async () => {
  const cookie = await global.signup()

  const response = await request(app)
    .get('/api/auth/current-user')
    .set('Cookie', cookie)
    .send({})
    .expect(200)

  expect(response.body.currentUser.email).toEqual('test@test.com')
})
