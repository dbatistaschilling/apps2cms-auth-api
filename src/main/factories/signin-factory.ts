import { IController, Encripter, FindOneAdapter, JwtAdapter } from '@wymaze/apps2cms-common'
import { SignIn } from '../../data'
import { SignInCtrl } from '../../presentation'

export const makeSignInFactory = (): IController => {
  const findOneAdapter = new FindOneAdapter()
  const encrypter = new Encripter()
  const signIn = new SignIn(findOneAdapter, encrypter)
  const jwt = new JwtAdapter()
  return new SignInCtrl(signIn, jwt)
}
