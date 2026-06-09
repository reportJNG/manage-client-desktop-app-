export {}
type user = {
  name: string
  password: string
  age: number
}
type ApiResponse = {
  success: boolean
  message: string
}
declare global {
  interface Window {
    api: {
      user: {
        //new user
        create: (user: user) => Promise<ApiResponse>
      }
    }
  }
}
