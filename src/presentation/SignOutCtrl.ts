import {
  IController,
  IHttpRequest,
  IHttpResponse,
  ServerError,
  successRes
} from '@wymaze/apps2cms-common'

export class SignOutCtrl implements IController {
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      return successRes({ message: 'SignOut with success', signOut: true })
    } catch (error) {
      throw new ServerError(error.stack)
    }
  }
}
