export {}
import type { updatepss, Userojbect } from '../../../shared/usertypes'
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
type Apireponse_notxt = {
  success: boolean
  value: Userojbect[]
}
declare global {
  interface Window {
    api: {
      user: {
        //new user
        create: (user: user) => Promise<ApiResponse_nval>
        login: (user: user) => Promise<ApiResponse_user>
        getallprofiles: () => Promise<Apireponse_notxt>
        updateuserpassw: ({ password, id }: updatepss) => Promise<ApiResponse_nval>
      }
    }
  }
}
