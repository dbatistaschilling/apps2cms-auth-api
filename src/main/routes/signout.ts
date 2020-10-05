import { SignOutCtrl } from '../../presentation'
import { adaptRoute, hasAccess } from '@wymaze/apps2cms-common'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/signout',
    hasAccess(),
    adaptRoute(new SignOutCtrl()))
}
