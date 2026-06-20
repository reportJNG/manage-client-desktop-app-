import { contextBridge, ipcRenderer } from 'electron'

//types
import type { usertype } from '../shared/usertypes'

//all api calls
const api = {
  user: {
    create: (user: usertype) => {
      return ipcRenderer.invoke('user:create', user)
    },
    login: (user: usertype) => {
      return ipcRenderer.invoke('user:login', user)
    },
    getallprofiles: () => {
      return ipcRenderer.invoke('user:getall')
    },
    updatepassword: () => {
      return ipcRenderer.invoke('user:passupdate')
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
