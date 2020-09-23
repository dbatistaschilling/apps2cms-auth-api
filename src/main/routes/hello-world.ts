import { adaptRoute } from '@wymaze/apps2cms-common'
import { Router } from 'express'
import { makeSignUpFactory } from '../factories/_controllers/signup-factory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpFactory()))
}
