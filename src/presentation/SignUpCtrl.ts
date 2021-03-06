import {
  IController,
  IHttpRequest,
  IHttpResponse,
  newDataRes,
  ServerError,
  IToken
} from '@wymaze/apps2cms-common'
import { ISignUp } from '@/domain'

export class SignUpCtrl implements IController {
  constructor (
    private readonly signup: ISignUp,
    private readonly jwt: IToken
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const signUpResult = await this.signup.execute(httpRequest.body)
      if (signUpResult.error) {
        return signUpResult.body
      }

      const { id, email } = signUpResult.body
      const secretKey: string = process.env.JWT_KEY ?? ''

      const jwt = this.jwt.sign({ id, email, secretKey })

      return newDataRes({ message: 'SignUp with success', user: signUpResult.body, jwt })
    } catch (error) {
      throw new ServerError(error.stack)
    }
  }
}
