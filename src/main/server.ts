import { mongoDbConnection } from '@wymaze/apps2cms-common'

if (!process.env.JWT_KEY) {
  throw new Error('JWT_KEY must be defined')
}

if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI must be defined')
}

mongoDbConnection.connect(process.env.MONGO_URI)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(4000, () => console.log(`server running on port ${4000}`))
  })
  .catch(console.error)
