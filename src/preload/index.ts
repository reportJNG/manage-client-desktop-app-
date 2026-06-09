import { contextBridge, ipcRenderer } from 'electron'

//types
import type { usertype } from '../main/usertypes'

//all api calls
const api = {
  user: {
    create: (user: usertype) => {
      return ipcRenderer.invoke('user:create', user)
    }
  }
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  ;(window as Window & typeof globalThis & { api: unknown }).api = api
}
