export {}
import type { Userojbect } from '../../../shared/usertypes'
type user = {
  name: string
  password: string
  age: number
}
type ApiResponse_nval = {
  success: boolean
  message: string
}
type ApiResponse_user = {
  success: boolean
  message: string
  value: Userojbect | undefined
}
declare global {
  interface Window {
    api: {
      user: {
        //new user
        create: (user: user) => Promise<ApiResponse_nval>
        login: (user: user) => Promise<ApiResponse_user>
      }
    }
  }
}
