import request from 'supertest'
import app from '../../main/config/app'

it('Returns a 400 if no name is provided', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      email: 'valid@email.com',
      password: 'password'
    })
    .expect(400)
})

it('Returns a 400 if no email is provided', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      name: 'name',
      password: 'password'
    })
    .expect(400)
})

it('Returns a 400 if no password is provided', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      name: 'name',
      email: 'valid@email.com'
    })
    .expect(400)
})

it('Returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      name: 'name',
      email: 'invalid_email',
      password: 'password'
    })
    .expect(400)
})

it('Returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      name: 'name',
      email: 'test@test.com',
      password: '123'
    })
    .expect(400)
})

it('Disallows duplicate email', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      name: 'name',
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201)

  await request(app)
    .post('/api/auth/signup')
    .send({
      name: 'other_name',
      email: 'test@test.com',
      password: 'other_password'
    })
    .expect(400)
})

it('Returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      name: 'name',
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201)
})

it('Sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/auth/signup')
    .send({
      name: 'name',
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201)

  expect(response.get('Set-Cookie')).toBeDefined()
})
