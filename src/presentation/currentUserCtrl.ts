import {
  IController,
  IHttpRequest,
  IHttpResponse,
  ServerError,
  successRes
} from '@wymaze/apps2cms-common'

export class CurrentUserCtrl implements IController {
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      return successRes({ currentUser: true })
    } catch (error) {
      throw new ServerError(error.stack)
    }
  }
}
