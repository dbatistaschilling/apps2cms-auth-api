import { IController, IHttpRequest, IHttpResponse, newDataRes, ServerError } from '@wymaze/apps2cms-common'
import { ISignUp } from '@/domain/ISignUp'

export class SignUpCtrl implements IController {
  constructor (
    private readonly signup: ISignUp
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const signUpResult = await this.signup.execute(httpRequest.body)
      if (signUpResult.error) {
        throw signUpResult.body
      }
      return newDataRes({ message: 'SignUp with success', user: signUpResult.body })
    } catch (error) {
      throw new ServerError(error.stack)
    }
  }
}
