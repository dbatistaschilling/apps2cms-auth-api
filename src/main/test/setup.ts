import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import app from '../config/app'
import request from 'supertest'
import {} from 'jasmine'

declare global {
  namespace NodeJS {
    interface Global {
      signup: () => Promise<string[]>
    }
    interface globalThis {
      signup: () => Promise<string[]>
    }
  }
}

let mongo: any

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
// jest.setTimeout(60000)

beforeAll(async () => {
  process.env.JWT_KEY = 'super_secret_key_for_test'

  mongo = new MongoMemoryServer()
  const mongoUri = await mongo.getUri()

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
})

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections()

  for (const collection of collections) {
    await collection.deleteMany({})
  }
})

afterAll(async () => {
  await mongoose.connection.close()
  await mongo.stop()
})

global.signup = async () => {
  const name = 'name'
  const email = 'test@test.com'
  const password = 'password'

  const response = await request(app)
    .post('/api/auth/signup')
    .send({
      name, email, password
    })
    .expect(201)

  return response.get('Set-Cookie')
}
