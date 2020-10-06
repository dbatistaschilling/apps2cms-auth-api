import { Express } from 'express'
import { bodyParser, cors, contentType, cookie } from '@wymaze/apps2cms-common'

export default (app: Express): void => {
  app.set('trust proxy', true)
  app.use(bodyParser)
  app.use(cookie)
  app.use(cors)
  app.use(contentType)
}
