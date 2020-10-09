import { adaptRoute, validateRequest } from '@wymaze/apps2cms-common'
import { Router } from 'express'
import { makeSignInFactory } from '../factories'
import { signinValidation } from '../../validations'

export default (router: Router): void => {
  router.post('/signin',
    signinValidation,
    validateRequest,
    adaptRoute(makeSignInFactory()))
}
