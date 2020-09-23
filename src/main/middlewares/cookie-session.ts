import cookieSession from 'cookie-session'

export const cookie = cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== 'test'
})
