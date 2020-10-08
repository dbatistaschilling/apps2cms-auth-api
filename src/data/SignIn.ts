import { ISignIn, ISignInInput, ISignInOutput } from '@/domain'
import {
  IFindOne,
  IEncripter,
  BadRequestError
} from '@wymaze/apps2cms-common'

export class SignIn implements ISignIn {
  constructor (
    private readonly userFind: IFindOne,
    private readonly encripter: IEncripter
  ) {}

  async execute (signupInput: ISignInInput): Promise<ISignInOutput> {
    const { email, password } = signupInput
    const user = await this.userFind.findOne('User', { email })
    if (!user) {
      return {
        error: true,
        body: new BadRequestError('Invalid Credentials')
      }
    }
    const hashedPassword = await this.encripter.compare({
      storedPassword: user.password,
      suppliedPassword: password
    })

    if (!hashedPassword) {
      return {
        error: true,
        body: new BadRequestError('Invalid Credentials')
      }
    }

    return {
      error: false,
      body: user
    }
  }
}
