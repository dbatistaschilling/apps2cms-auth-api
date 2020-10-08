import { Express } from 'express'
import { bodyParser, cors, corsConfig, cookie, helmet, i18n, compression, favicon } from '@wymaze/apps2cms-common'
import path from 'path'

export default (app: Express): void => {
  app.set('trust proxy', true)
  app.disable('x-powered-by')
  app.use(bodyParser)
  app.use(cookie)
  app.use(helmet)
  i18n.configure({
    locales: ['it','en'],
    directory: path.join('../../../locales'),
    defaultLocale: 'it'
  })
  app.use(i18n.init)
  app.use(compression())
  app.use(cors())
  app.use(corsConfig)
  app.use(favicon(path.join('public', 'favicon.ico')))
}
