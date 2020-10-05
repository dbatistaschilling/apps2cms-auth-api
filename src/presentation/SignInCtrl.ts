import {
  IController,
  IHttpRequest,
  IHttpResponse,
  ServerError,
  IToken, successRes
} from '@wymaze/apps2cms-common'
import { ISignIn } from '@/domain'

export class SignInCtrl implements IController {
  constructor (
    private readonly signin: ISignIn,
    private readonly jwt: IToken
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const signUpResult = await this.signin.execute(httpRequest.body)
      if (signUpResult.error) {
        return signUpResult.body
      }

      const { id, email } = signUpResult.body
      const secretKey: string = process.env.JWT_KEY ?? ''

      const jwt = this.jwt.sign({ id, email, secretKey })

      return successRes({ message: 'SignIn with success', user: signUpResult.body, jwt })
    } catch (error) {
      throw new ServerError(error.stack)
    }
  }
}
