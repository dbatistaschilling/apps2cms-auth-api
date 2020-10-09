import request from 'supertest'
import app from '../../main/config/app'

it('Responds with 401 not authorized if user is not logged in', async () => {
  await request(app)
    .post('/api/auth/signout')
    .send({})
    .expect(401)
})

it('Clears the cookie after signout', async () => {
  const cookie = await global.signup()

  const response = await request(app)
    .post('/api/auth/signout')
    .set('Cookie', cookie)
    .send({})
    .expect(200)

  expect(response.get('Set-Cookie')[0]).toEqual(
    'express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly'
  )
})
