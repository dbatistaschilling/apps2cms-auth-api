import { IController, Encripter, FindOneAdapter, SaveAdapter, JwtAdapter } from '@wymaze/apps2cms-common'
import { SignUp } from '../../data'
import { SignUpCtrl } from '../../presentation'

export const makeSignUpFactory = (): IController => {
  const findOneAdapter = new FindOneAdapter()
  const saveAdapter = new SaveAdapter()
  const encrypter = new Encripter()
  const signUp = new SignUp(findOneAdapter, saveAdapter, encrypter)
  const jwt = new JwtAdapter()
  return new SignUpCtrl(signUp, jwt)
}
