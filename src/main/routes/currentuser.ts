import { CurrentUserCtrl } from '../../presentation'
import { adaptRoute, hasAccess } from '@wymaze/apps2cms-common'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/current-user',
    hasAccess(),
    adaptRoute(new CurrentUserCtrl()))
}
