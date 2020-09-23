
import { IController, Encripter, FindOneAdapter, SaveAdapter } from '@wymaze/apps2cms-common'
// import { ValidatorAdapter } from '../../../infra/validations/validator-adapter'
import { SignUp } from '@/data/SignUp'
import { SignUpCtrl } from '@/presentation/SignUpCtrl'
// import { EncrypterAdapter } from '../../../infra/encryption/encrypter-adapter'
// import { FindOneAdapter, SaveAdapter } from '@/infra/mongodb/mongorepository'

export const makeSignUpFactory = (): IController => {
  const findOneAdapter = new FindOneAdapter()
  const saveAdapter = new SaveAdapter()
  const encrypter = new Encripter()
  const signUp = new SignUp(findOneAdapter, saveAdapter, encrypter)
  // const validator = new ValidatorAdapter()
  return new SignUpCtrl(signUp)
}
