import { ISignUp, ISignUpInput, ISignUpOutput } from '@/domain/ISignUp'
import { IFindOne, ISave, BadRequestError, IEncripter } from '@wymaze/apps2cms-common'

export class SignUp implements ISignUp {
  constructor (
    private readonly userFind: IFindOne,
    private readonly userSave: ISave,
    private readonly encripter: IEncripter
  ) {}

  async execute (signupInput: ISignUpInput): Promise<ISignUpOutput> {
    const { name, email, password } = signupInput
    const user = await this.userFind.findOne('User', { email })
    if (user) {
      return {
        error: true,
        body: new BadRequestError('Email in use')
      }
    }
    const hashedPassword = await this.encripter.toHash(password)
    const newUser = await this.userSave.save('User', { name, email, password: hashedPassword })
    return {
      error: false,
      body: newUser
    }
  }
}
