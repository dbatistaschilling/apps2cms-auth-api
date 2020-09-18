import DatabaseConnectionAdapter from '../infra/mongodb/database-connection-adapter'

DatabaseConnectionAdapter.connect('mongodb://apps2cms-auth-mongo-srv:27017/auth')
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(4000, () => console.log(`server running on port ${4000}`))
  })
  .catch(console.error)
