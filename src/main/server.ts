import { mongoDbConnection } from '@wymaze/apps2cms-common'

if (!process.env.JWT_KEY) {
  throw new Error('JWT_KEY must be defined')
}

mongoDbConnection.connect('mongodb://apps2cms-auth-mongo-srv:27017/auth')
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(4000, () => console.log(`server running on port ${4000}`))
  })
  .catch(console.error)
