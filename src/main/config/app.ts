import express from 'express'
import setupMiddlewares from './middlewares'
import 'express-async-errors'
import { errorHandler, NotFoundError } from '@wymaze/apps2cms-common'
import setupRoutes from './routes'

const app = express()

setupMiddlewares(app)

setupRoutes(app)

app.all('*', async (req, res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

export default app
