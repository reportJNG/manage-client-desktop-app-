import { contextBridge } from 'electron'

const api = {}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  ;(window as Window & typeof globalThis & { api: unknown }).api = api
}
