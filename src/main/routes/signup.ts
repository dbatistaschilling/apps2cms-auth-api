import { adaptRoute, validateRequest } from '@wymaze/apps2cms-common'
import { Router } from 'express'
import { makeSignUpFactory } from '../factories/_controllers/signup-factory'
import { signupValidation } from '../../validations'

export default (router: Router): void => {
  router.post('/signup', signupValidation, validateRequest, adaptRoute(makeSignUpFactory()))
}
