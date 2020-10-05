export interface ISignInInput {
  email: string
  password: string
}

export interface ISignInOutput {
  error?: boolean
  body?: any
}

export interface ISignIn {
  execute: (signinData: ISignInInput) => Promise<ISignInOutput>
}
